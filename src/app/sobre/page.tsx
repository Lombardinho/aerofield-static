import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { pageContent } from "@/lib/content";
import { asset } from "@/lib/asset";

const content = pageContent.sobre;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function SobrePage() {
  return (
    <>
      <Hero
        compact
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        imageSrc="/images/service-mapeamento.jpg"
        imageAlt="Vista aérea de lavoura"
      />

      <section className="section-mesh bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={asset("/images/service-manutencao.jpg")}
                alt="Equipe técnica AeroField"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-display text-sm font-semibold tracking-widest text-field uppercase">
              {content.introEyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {content.introHeading}
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>{content.introParagraph1}</p>
              <p>
                {content.introParagraph2Prefix}
                <strong className="font-semibold text-ink">
                  {content.introParagraph2Highlight}
                </strong>
                {content.introParagraph2Suffix}
              </p>
            </div>
            <p className="mt-8 border-l-2 border-sky pl-4 font-display text-lg font-semibold text-navy">
              {site.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {content.pillarsHeading}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {site.pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 90}>
                <div className="border-t border-white/15 pt-5">
                  <span className="font-display text-sm text-sky">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-silver leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-16 text-center md:px-8 md:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            {content.ctaHeading}
          </h2>
          <Link
            href="/contato"
            className="btn-primary mt-6 inline-flex rounded-md px-6 py-3 font-display text-sm font-semibold text-navy-deep"
          >
            {content.ctaButtonLabel}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
