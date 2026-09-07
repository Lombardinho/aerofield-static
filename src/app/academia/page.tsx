import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Academia",
  description:
    "Academia AeroField — formação em drones agrícolas. Em breve: cursos de operação, legislação, aplicação e manutenção.",
};

export default function AcademiaPage() {
  return (
    <>
      <Hero
        compact
        title="Academia AeroField — formação que sobe com você"
        subtitle="Em breve: uma plataforma de aulas online para quem opera, gerencia ou quer entrar no agro com drones."
        primaryHref="/contato?servico=academia"
        primaryLabel="Quero ser avisado"
        secondaryHref="/servicos"
        secondaryLabel="Ver serviços"
        imageSrc="/images/academia-hero.jpg"
        imageAlt="Formação AeroField com drones agrícolas"
      />

      <section className="section-mesh bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="font-display text-sm font-semibold tracking-widest text-sky uppercase">
              O que vem por aí
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Conteúdo prático, pensado para o campo.
            </h2>
            <p className="mt-4 max-w-2xl text-muted leading-relaxed">
              A Academia será o braço de formação da AeroField: trilhas claras,
              linguagem de quem vive a operação e foco em segurança, eficiência e
              conformidade.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {site.academyModules.map((module, index) => (
              <Reveal key={module.title} delay={index * 90}>
                <article className="h-full rounded-xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7">
                  <p className="font-display text-xs font-semibold tracking-widest text-sky uppercase">
                    Módulo em breve
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-navy">
                    {module.title}
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">{module.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 text-white md:px-8 md:py-28">
        <Image
          src={asset("/images/academia-hero.jpg")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-navy/85" />
        <Reveal>
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Quer entrar na lista de espera?
            </h2>
            <p className="mt-4 text-silver leading-relaxed">
              Avise-nos e você será um dos primeiros a saber quando as aulas
              online da Academia AeroField forem liberadas.
            </p>
            <Link
              href="/contato?servico=academia"
              className="btn-primary animate-pulse-glow mt-8 inline-flex rounded-md px-7 py-3.5 font-display text-sm font-semibold text-navy-deep"
            >
              Quero ser avisado
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
