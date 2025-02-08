"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useState } from "react";
import { useCursor } from "@react-three/drei";

// Custom component to load and handle interactions with the drone model
function DroneModel() {
  const { scene } = useGLTF("/drone.glb"); // Loads from public/
  const [hovered, setHovered] = useState(false);
  
  useCursor(hovered); // Changes cursor when hovering

  return (
    <primitive
      object={scene}
      scale={1.5}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => window.open("https://drive.google.com/drive/folders/1SJfOBPv96GL7QAuEzpiZPbGO7QRL3rxO?usp=drive_link", "_blank")}
    />
  );
}

export default function ThreeViewer() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Display message when hovering */}
      {hovered && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white px-4 py-2 rounded-lg">
          Click to open file folder
        </div>
      )}

      <Canvas camera={{ position: [5, 5, 5] }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* 3D Model with Hover Effect */}
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
