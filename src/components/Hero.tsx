"use client";

import Link from "next/link";
import { BackgroundCarousel } from "@/components/BackgroundCarousel";
import { Logo } from "@/components/Logo";

type HeroImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type HeroProps = {
  brand?: boolean;
  title: string;
  subtitle: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  compact?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  images?: readonly HeroImage[];
};

export function Hero({
  brand = false,
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  compact = false,
  imageSrc = "/images/hero-drone-field.jpg",
  imageAlt = "Drone agrícola sobre lavoura",
  images,
}: HeroProps) {
  const backgrounds =
    images && images.length > 0
      ? images
      : [{ src: imageSrc, alt: imageAlt }];

  return (
    <section
      className={`relative overflow-hidden text-white ${
        compact ? "min-h-[64vh]" : "min-h-[100svh]"
      }`}
    >
      <div className="absolute inset-0">
        <BackgroundCarousel images={backgrounds} kenburns priority />
        <div className="hero-scrim absolute inset-0" />
      </div>

      <div
        className={`relative mx-auto flex max-w-6xl flex-col justify-end px-5 md:px-8 ${
          compact ? "pb-16 pt-32 md:pb-20" : "pb-20 pt-36 md:pb-28 md:pt-44"
        }`}
      >
        {brand ? (
          <div className="animate-fade-up animate-float mb-8 w-fit">
            <Logo className="h-14 w-auto drop-shadow-lg md:h-16" />
          </div>
        ) : null}

        <div className="accent-line delay-1 mb-5 h-0.5 w-16 bg-sky" />

        <h1
          className={`animate-fade-up font-display font-semibold tracking-tight text-white ${
            brand
              ? "delay-1 max-w-3xl text-4xl leading-[1.08] md:text-6xl"
              : "delay-1 max-w-3xl text-4xl leading-[1.1] md:text-5xl"
          }`}
        >
          {title}
        </h1>
        <p className="animate-fade-up delay-2 mt-5 max-w-xl text-base leading-relaxed text-silver md:text-lg">
          {subtitle}
        </p>

        {(primaryHref || secondaryHref) && (
          <div className="animate-fade-up delay-3 mt-9 flex flex-wrap gap-3">
            {primaryHref && primaryLabel ? (
              <Link
                href={primaryHref}
                className="btn-primary animate-pulse-glow rounded-md px-6 py-3 font-display text-sm font-semibold text-navy-deep"
              >
                {primaryLabel}
              </Link>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="btn-ghost rounded-md border border-white/35 bg-white/8 px-6 py-3 font-display text-sm font-semibold text-white backdrop-blur-sm hover:border-white/55 hover:bg-white/14"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
