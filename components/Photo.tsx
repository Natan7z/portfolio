"use client";

import { useState } from "react";

export default function Photo({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-ink-800 text-7xl font-semibold text-accent">
        {name.charAt(0)}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`Foto de ${name}`}
      className="h-full w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}
