"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function ThreeViewer() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [3, 3, 3] }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* 3D Model - Placeholder Cube */}
        <Suspense fallback={null}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </Suspense>

        {/* Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}
