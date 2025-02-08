"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

// Custom component to load the GLTF model
function DroneModel() {
  const { scene } = useGLTF("/drone.glb"); // Loads from public/
  return <primitive object={scene} scale={1.5} />;
}

export default function ThreeViewer() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [5, 5, 5] }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* 3D Model - Load Drone GLB */}
        <Suspense fallback={<span className="text-white">Loading...</span>}>
          <DroneModel />
        </Suspense>

        {/* Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

// Required for `useGLTF`
useGLTF.preload("/drone.glb");
