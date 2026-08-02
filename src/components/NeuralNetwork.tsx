"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

type Particle = {
  pos: THREE.Vector3;
  prev: THREE.Vector3;
  acc: THREE.Vector3;
  radius: number;
  invMass: number; // 0 for pinned/ghost
  mesh?: THREE.Mesh;
};

type Constraint = {
  a: number;   // index into particles
  b: number;   // index into particles
  rest: number;
  stiffness: number; // 0..1
};

export function NeuralNetwork() {
  const mountRef = useRef<HTMLDivElement>(null);
  const running = useRef(true);

  useEffect(() => {
    const mount = mountRef.current!;
    // ---------- Tunables ----------
    const DPR_CAP = 2;
    const BOUNDS = new THREE.Box3(
      new THREE.Vector3(-6, -3.5, -1.5),
      new THREE.Vector3(6, 3.5, 1.5)
    );
    const DAMPING = 0.985;            // velocity damping (Verlet)
    const GRAVITY = new THREE.Vector3(0, 0, 0); // no gravity for floaty feel
    const ITERATIONS = 5;             // constraint solver iterations
    const FIXED_DT = 1 / 60;          // fixed timestep
    const CLUSTER_ROWS = 2;
    const CLUSTER_COLS = 3;
    const CLUSTER_GAP = new THREE.Vector2(4, 3);
    const CLUSTER_SCALE = 1.25;       // overall cluster spread
    const BALL_RADIUS = 0.18;         // visual + collision size
    const BALLS_PER_CLUSTER = 10;     // ring particles
    const USE_LINES = false;          // set true to draw constraints

    // ---------- Renderer / Scene / Camera ----------
    const renderer = new THREE.WebGLRenderer({
      alpha: true, antialias: true, powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, DPR_CAP));
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 12, 24);

    const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 100);
    camera.position.set(0, 0, 10);

    mount.appendChild(renderer.domElement);

    const setSize = () => {
      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    const ro = new ResizeObserver(setSize);
    ro.observe(mount);
    setSize();

    // ---------- Lights ----------
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const key = new THREE.PointLight(0xa481ff, 0.9, 60, 2);
    key.position.set(6, 4, 8);
    scene.add(key);

    // ---------- Root group ----------
    const root = new THREE.Group();
    scene.add(root);

    // ---------- Materials / Geo ----------
    const ballGeo = new THREE.SphereGeometry(BALL_RADIUS, 24, 24);
    const ballMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#a481ff"),
      emissive: new THREE.Color("#6f3ccf").multiplyScalar(0.35),
      roughness: 0.4,
      metalness: 0.1,
    });

    // ---------- Physics state ----------
    const particles: Particle[] = [];
    const constraints: Constraint[] = [];

    // helper to add particle
    const addParticle = (p: THREE.Vector3, pinned = false) => {
      const part: Particle = {
        pos: p.clone(),
        prev: p.clone(),
        acc: new THREE.Vector3(),
        radius: BALL_RADIUS,
        invMass: pinned ? 0 : 1,
      };
      // visual mesh (skip for pinned/ghost center)
      if (!pinned) {
        const mesh = new THREE.Mesh(ballGeo, ballMat.clone());
        mesh.position.copy(p);
        mesh.castShadow = false;
        mesh.receiveShadow = false;
        part.mesh = mesh;
        root.add(mesh);
      }
      particles.push(part);
      return particles.length - 1;
    };

    const addConstraint = (aIdx: number, bIdx: number, rest: number, stiffness = 0.9) => {
      constraints.push({ a: aIdx, b: bIdx, rest, stiffness });
    };

    // Build clusters in a grid
    const clusterCenters: number[] = []; // indices of ghost center particles
    const clusterStartIndex: number[] = []; // for reference
    for (let r = 0; r < CLUSTER_ROWS; r++) {
      for (let c = 0; c < CLUSTER_COLS; c++) {
        const cx = (c - (CLUSTER_COLS - 1) / 2) * CLUSTER_GAP.x;
        const cy = (r - (CLUSTER_ROWS - 1) / 2) * CLUSTER_GAP.y;
        const centerIndex = addParticle(new THREE.Vector3(cx, cy, 0), true); // pinned ghost
        clusterCenters.push(centerIndex);

        clusterStartIndex.push(particles.length);

        // ring of balls around center
        const ringR = 0.9 * CLUSTER_SCALE + Math.random() * 0.3;
        const count = BALLS_PER_CLUSTER;
        const indices: number[] = [];

        for (let i = 0; i < count; i++) {
          const t = (i / count) * Math.PI * 2;
          const jitter = 0.25;
          const x = cx + Math.cos(t) * ringR + (Math.random() - 0.5) * jitter;
          const y = cy + Math.sin(t) * ringR + (Math.random() - 0.5) * jitter;
          const z = (Math.random() - 0.5) * 0.4;
          const idx = addParticle(new THREE.Vector3(x, y, z), false);
          indices.push(idx);
        }

        // constraints: to center (sticky), ring neighbors, and cross links
        for (let i = 0; i < count; i++) {
          const a = indices[i];
          const b = indices[(i + 1) % count];
          const pa = particles[a].pos, pb = particles[b].pos;
          addConstraint(a, b, pa.distanceTo(pb), 0.85); // ring
          addConstraint(a, centerIndex, particles[a].pos.distanceTo(particles[centerIndex].pos), 0.6); // sticky to center

          const c2 = indices[(i + 2) % count]; // cross link
          const pc2 = particles[c2].pos;
          addConstraint(a, c2, pa.distanceTo(pc2), 0.5);
        }
      }
    }

    // optional: draw constraint lines
    let lineMesh: THREE.LineSegments | null = null;
    if (USE_LINES) {
      const segGeo = new THREE.BufferGeometry();
      segGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(constraints.length * 2 * 3), 3));
      const segMat = new THREE.LineBasicMaterial({ color: 0x6f3ccf, transparent: true, opacity: 0.4 });
      lineMesh = new THREE.LineSegments(segGeo, segMat);
      root.add(lineMesh);
    }

    // ---------- Pointer (repulsion) ----------
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // z=0 plane
    const mouse = new THREE.Vector2();
    const pointerPos = new THREE.Vector3();
    const pointerRadius = 1.2;      // how far the push field reaches
    const pointerStrength = 1.2;    // how strong the push is

    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(plane, pointerPos);
      // keep inside bounds in case of weird aspect ratios
      pointerPos.clamp(BOUNDS.min, BOUNDS.max);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ---------- Core physics (Verlet + constraints) ----------
    let accTime = 0;
    const clock = new THREE.Clock();

    function integrate(dt: number) {
      // apply acceleration & integrate with Verlet
      for (const p of particles) {
        if (p.invMass === 0) continue; // pinned
        // acceleration = external forces
        p.acc.add(GRAVITY);
        // repulsion from pointer
        const toP = new THREE.Vector3().subVectors(p.pos, pointerPos);
        const dist = toP.length();
        if (dist < pointerRadius) {
          const s = (1 - dist / pointerRadius) * pointerStrength;
          toP.normalize().multiplyScalar(s);
          p.acc.add(toP);
        }
        // Verlet: newPos = pos + (pos - prev)*damping + acc*dt^2
        const vel = new THREE.Vector3().subVectors(p.pos, p.prev).multiplyScalar(DAMPING);
        const next = new THREE.Vector3().copy(p.pos).add(vel).addScaledVector(p.acc, dt * dt);
        p.prev.copy(p.pos);
        p.pos.copy(next);
        p.acc.set(0, 0, 0);

        // bounds
        for (const axis of ["x", "y", "z"] as const) {
          if (p.pos[axis] < BOUNDS.min[axis]) {
            p.pos[axis] = BOUNDS.min[axis];
            p.prev[axis] = p.pos[axis] + (p.prev[axis] - p.pos[axis]) * -0.4;
          } else if (p.pos[axis] > BOUNDS.max[axis]) {
            p.pos[axis] = BOUNDS.max[axis];
            p.prev[axis] = p.pos[axis] + (p.prev[axis] - p.pos[axis]) * -0.4;
          }
        }
      }

      // satisfy constraints (PBD)
      for (let it = 0; it < ITERATIONS; it++) {
        for (const cst of constraints) {
          const pa = particles[cst.a];
          const pb = particles[cst.b];
          const delta = new THREE.Vector3().subVectors(pb.pos, pa.pos);
          const d = delta.length() || 1e-6;
          const diff = (d - cst.rest) / d;
          const invA = pa.invMass, invB = pb.invMass;
          const invSum = invA + invB || 1e-6;
          const corr = delta.multiplyScalar(cst.stiffness * diff);

          if (invA > 0) pa.pos.addScaledVector(corr, invA / invSum);
          if (invB > 0) pb.pos.addScaledVector(corr, -invB / invSum);
        }
      }
    }

    function syncMeshes() {
      for (const p of particles) {
        if (p.mesh) p.mesh.position.copy(p.pos);
      }
      if (lineMesh) {
        const pos = (lineMesh.geometry.getAttribute("position") as THREE.BufferAttribute);
        let i = 0;
        for (const cst of constraints) {
          const a = particles[cst.a].pos;
          const b = particles[cst.b].pos;
          pos.setXYZ(i++, a.x, a.y, a.z);
          pos.setXYZ(i++, b.x, b.y, b.z);
        }
        pos.needsUpdate = true;
      }
    }

    // ---------- Animate ----------
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animate = () => {
      if (!running.current) return;

      const dt = clock.getDelta();
      accTime += dt;

      // fixed timestep for stability
      const steps = Math.min(5, Math.floor(accTime / FIXED_DT));
      if (steps > 0) accTime -= steps * FIXED_DT;

      if (!prefersReducedMotion) {
        for (let s = 0; s < steps; s++) integrate(FIXED_DT);
      }

      // gentle parallax with mouse (camera sway)
      camera.position.x += (pointerPos.x * 0.04 - camera.position.x * 0.04);
      camera.position.y += (pointerPos.y * 0.03 - camera.position.y * 0.03);
      camera.lookAt(0, 0, 0);

      syncMeshes();
      renderer.render(scene, camera);
      renderer.setAnimationLoop(animate);
    };
    renderer.setAnimationLoop(animate);

    // pause when hidden/out of view
    const onVisibility = () => {
      running.current = document.visibilityState === "visible";
      if (running.current) renderer.setAnimationLoop(animate);
      else renderer.setAnimationLoop(null);
    };
    document.addEventListener("visibilitychange", onVisibility);

    const io = new IntersectionObserver(
      (entries) => {
        const inView = entries.some((e) => e.isIntersecting);
        running.current = inView && document.visibilityState === "visible";
        if (running.current) renderer.setAnimationLoop(animate);
        else renderer.setAnimationLoop(null);
      },
      { threshold: 0.05 }
    );
    io.observe(mount);

    // ---------- Cleanup ----------
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      io.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      ro.disconnect();
      renderer.setAnimationLoop(null);

      // dispose meshes/materials/geometries
      root.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const m = obj as THREE.Mesh;
          (m.geometry as THREE.BufferGeometry)?.dispose?.();
          (m.material as THREE.Material)?.dispose?.();
        }
      });

      renderer.dispose();
      mount.contains(renderer.domElement) && mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0"
      aria-hidden="true"
      // keep pointer events on so mouse coords match container;
      // if it blocks clicks, add 'pointer-events-none' and keep window mousemove.
    />
  );
}
