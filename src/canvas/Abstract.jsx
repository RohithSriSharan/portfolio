"use client";

import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  Environment,
  useGLTF,
  Float,
  Stars,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import CanvasLoader from "../components/CanvasLoader";

/* ------------------- small hook: detect mobile ------------------- */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

/* ------------------- model ------------------- */
function AbstractModel() {
  const { scene } = useGLTF("/space_boi/scene.gltf");
  const isMobile = useIsMobile();

  // material cleanup / color space
  scene.traverse((o) => {
    if (o.isMesh && o.material) {
      const m = o.material;
      if (m.map) m.map.colorSpace = THREE.SRGBColorSpace;
      if (m.emissive !== undefined) {
        if (!m.emissive) m.emissive = new THREE.Color("#8b5cf6");
        m.emissiveIntensity = Math.max(m.emissiveIntensity || 0, 0.25);
      }
      if (m.roughness !== undefined) {
        if (m.metalness === undefined) m.metalness = 0.45;
        if (m.roughness === undefined) m.roughness = 0.25;
      }
      m.needsUpdate = true;
    }
  });

  // responsive position/scale
  const position = [0, isMobile ? -2 : -2.5, 0]; // 👈 tweak here
  const scale = isMobile ? 0.7 : 0.7;              // optional: smaller on mobile

  return <primitive object={scene} position={position} scale={scale} />;
}
useGLTF.preload("/space_boi/scene.gltf");

/* ------------------- canvas ------------------- */
export default function AbstractCanvas() {
  const isMobile = useIsMobile();

  return (
    <Canvas
      className="w-full h-full"
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{
        fov: isMobile ? 65 : 60,               // a bit wider FOV on mobile
        near: 0.1,
        far: 150,
        position: isMobile ? [0, 4, 9] : [-4, 6, 3], // tweak desktop/mobile framing
      }}
      onCreated={({ gl }) => {
        gl.outputColorSpace = THREE.SRGBColorSpace;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.2;
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* background stars across full canvas */}
        <Stars radius={200} depth={80} count={8000} factor={5} fade />

        {/* lighting & ibl */}
        <ambientLight intensity={2} />
        <hemisphereLight args={["#8be9fd", "#221133", 0.8]} />
        <directionalLight position={[3, 2, 5]} intensity={1.2} />
        <Environment preset="sunset" />

        {/* floating model (keeps your bob/rotation) */}
        <Float speed={1} rotationIntensity={2} floatIntensity={2}>
          <AbstractModel />
        </Float>

        {/* glow */}
        <EffectComposer>
          <Bloom intensity={1} luminanceThreshold={6} />
        </EffectComposer>

        {/* orbit controls (rotate only) */}
      <OrbitControls
  target={[0, -1.2, 0]}   // 👈 this keeps the focus point stable

  enablePan={false}
  enableZoom={false}

  // lock polar angle so camera can’t tilt up/down
  minPolarAngle={Math.PI / 2.3}   // tweak until it matches screenshot 1
  maxPolarAngle={Math.PI / 2.3}

  // keep auto rotation, but only around Y-axis
  autoRotate
  autoRotateSpeed={0.6}
/>

        <Preload all />
      </Suspense>
    </Canvas>
  );
}











