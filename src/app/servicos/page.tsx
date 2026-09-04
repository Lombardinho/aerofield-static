import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { pageContent } from "@/lib/content";

const content = pageContent.servicos;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function ServicosPage() {
  return (
    <>
      <Hero
        compact
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        primaryHref="/contato"
        primaryLabel={content.heroButtonLabel}
        imageSrc="/images/service-aplicacao.jpg"
        imageAlt="Aplicação com drone agrícola"
      />

      <section className="section-mesh bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl space-y-24">
          {site.services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28"
            >
              <div
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-14`}
              >
                <Reveal className={index % 2 === 1 ? "md:order-2" : undefined}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="img-zoom object-cover"
                    />
                  </div>
                </Reveal>

                <Reveal
                  delay={120}
                  className={index % 2 === 1 ? "md:order-1" : undefined}
                >
                  <span className="font-display text-sm text-sky">
                    0{index + 1}
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-muted leading-relaxed">
                    {service.summary}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex gap-3 border-l-2 border-field pl-4 text-ink/90"
                      >
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contato?servico=${service.slug}`}
                    className="btn-primary mt-8 inline-flex rounded-md px-5 py-3 font-display text-sm font-semibold text-navy-deep"
                  >
                    {content.serviceButtonLabel}
                  </Link>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
