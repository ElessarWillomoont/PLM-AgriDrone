"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="absolute top-4 left-4">
      <Image src="/logo.svg" alt="Logo" width={80} height={80} className="opacity-90" />
    </div>
  );
}
