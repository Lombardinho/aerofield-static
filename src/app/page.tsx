import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { pageContent } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero
        brand
        title="Produtividade e sustentabilidade no campo"
        subtitle="Soluções com drones para aplicação agrícola, controle biológico, mapeamento e manutenção — tecnologia e precisão a serviço do campo."
        primaryHref="/contato"
        primaryLabel="Solicitar orçamento"
        secondaryHref="/servicos"
        secondaryLabel="Conhecer serviços"
        images={pageContent.home.heroImages}
      />

      <section className="section-mesh bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="font-display text-sm font-semibold tracking-widest text-field uppercase">
              O que fazemos
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Nossas frentes. Um objetivo: resultado por hectare.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {site.services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 120} className="h-full">
                <Link
                  href={`/servicos#${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="img-zoom object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 to-transparent" />
                    <span className="absolute bottom-4 left-4 font-display text-sm text-sky-bright">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-semibold text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.summary}
                    </p>
                    <span className="mt-auto inline-block pt-5 font-display text-sm font-semibold text-sky transition-transform duration-300 group-hover:translate-x-1">
                      Saiba mais →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 text-white md:px-8 md:py-32">
        <Image
          src="/images/hero-drone-field.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-navy-deep/78" />
        <div className="relative mx-auto max-w-6xl md:grid md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16">
          <Reveal>
            <p className="font-display text-sm font-semibold tracking-widest text-field-bright uppercase">
              Produtividade e sustentabilidade
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Menos impacto no solo. Mais eficiência na safra.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-silver md:mt-0">
              Com operações aéreas de precisão, a AeroField reduz o tráfego
              sobre a lavoura, otimiza recursos e transforma dados em
              informações para decisões mais eficientes no campo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
              <Image
                src="/images/academia-hero.jpg"
                alt="Academia AeroField"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <p className="font-display text-sm font-semibold tracking-widest text-sky uppercase">
              Em breve
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Academia AeroField
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Capacitação prática em operação, segurança, legislação,
              aplicação agrícola e manutenção de drones para quem busca
              atuação profissional no setor.
            </p>
            <Link
              href="/academia"
              className="btn-primary mt-8 inline-flex rounded-md px-6 py-3 font-display text-sm font-semibold text-navy-deep"
            >
              Conhecer a Academia
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-deep px-5 py-24 text-center text-white md:px-8 md:py-28">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-sky/20 blur-3xl"
          aria-hidden
        />
        <Reveal>
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Vamos planejar sua próxima operação?
            </h2>
            <p className="mt-4 text-silver">
              Fale com nossa equipe e encontre a solução mais adequada para a
              sua operação agrícola.
            </p>
            <Link
              href="/contato"
              className="btn-primary animate-pulse-glow mt-8 inline-flex rounded-md px-7 py-3.5 font-display text-sm font-semibold text-navy-deep"
            >
              Entrar em contato
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
