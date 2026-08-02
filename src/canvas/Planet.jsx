"use client";

import React, { Suspense, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Bounds } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";

const MODEL_URL = "/world_earth_planet/scene.gltf";

const PlanetModel = memo(function PlanetModel() {
  const { scene } = useGLTF(MODEL_URL);
  return (
    // modest scale; we'll rely on Bounds to fit without clipping
    <primitive object={scene} scale={[4.2, 4.2, 4.2]} position={[0, 0, 0]} />
  );
});
useGLTF.preload(MODEL_URL);

export default function Planet({ className }) {
  return (
    // make the drawing area a square to avoid circular object being cut
    <div className={className ?? "w-full max-w-[560px] aspect-square"}>
      <Canvas
        shadows
        frameloop="always"
        dpr={[1, 2]}
        gl={{ antialias: true, preserveDrawingBuffer: true }}
        // normal perspective so it doesn’t distort or overfill
        camera={{ fov: 45, near: 0.1, far: 1000, position: [-4, 3, 6] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Lights */}
          <hemisphereLight intensity={1} groundColor="#222" />
          <ambientLight intensity={25} />
          <directionalLight position={[5, 10, 5]} intensity={4} castShadow />

          {/* Controls */}
          <OrbitControls
            makeDefault
            enableZoom={false}
            enablePan={true}
            enableDamping
            dampingFactor={0.08}
            autoRotate
            autoRotateSpeed={2}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />

          {/* Fit without cropping; margin ~1 keeps a small buffer */}
          <Bounds fit margin={1.0}>
            <PlanetModel />
          </Bounds>

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
