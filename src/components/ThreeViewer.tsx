"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useCursor } from "@react-three/drei";
import { Suspense, useState } from "react";
import Logo from "@/components/Logo"; // Import Logo

// Custom component to load and handle interactions with the drone model
function DroneModel({ setHovered }: { setHovered: (value: boolean) => void }) {
  const { scene } = useGLTF("/drone.glb");
  const [hovered, setLocalHovered] = useState(false);

  useCursor(hovered);

  return (
    <primitive
      object={scene}
      scale={1.5}
      onPointerOver={() => {
        setLocalHovered(true);
        setHovered(true);
      }}
      onPointerOut={() => {
        setLocalHovered(false);
        setHovered(false);
      }}
      onClick={() => window.open("https://drive.google.com/drive/folders/1SJfOBPv96GL7QAuEzpiZPbGO7QRL3rxO?usp=drive_link", "_blank")}
    />
  );
}

export default function ThreeViewer() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Logo positioned in the top-left */}
      <Logo />

      {/* Hover message */}
      {hovered && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white px-4 py-2 rounded-lg">
          Click to open file folder
        </div>
      )}

      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <DroneModel setHovered={setHovered} />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

// Preload model
useGLTF.preload("/drone.glb");
