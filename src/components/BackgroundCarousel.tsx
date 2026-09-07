"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

export type BackgroundCarouselImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type BackgroundCarouselProps = {
  images: readonly BackgroundCarouselImage[];
  intervalMs?: number;
  kenburns?: boolean;
  priority?: boolean;
};

export function BackgroundCarousel({
  images,
  intervalMs = 5000,
  kenburns = false,
  priority = false,
}: BackgroundCarouselProps) {
  const rotating = images.length > 1;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!rotating) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [rotating, images.length, intervalMs]);

  return (
    <>
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={asset(image.src)}
          alt={image.alt}
          fill
          priority={priority && (rotating || i === 0)}
          sizes="100vw"
          style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
          className={`object-cover ${
            rotating
              ? `transition-opacity duration-1000 ease-in-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`
              : kenburns
                ? "animate-kenburns"
                : ""
          }`}
        />
      ))}
    </>
  );
}
