import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { site, whatsappUrl } from "@/lib/site";
import { pageContent } from "@/lib/content";

const content = pageContent.contato;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function ContatoPage() {
  return (
    <>
      <Hero
        compact
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        images={pageContent.shared.fieldImages}
      />

      <section className="bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
              {content.channelsHeading}
            </h2>
            <ul className="mt-8 space-y-5 text-muted">
              <li>
                <p className="text-sm tracking-wide text-field uppercase">
                  {content.emailLabel}
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-lg text-ink transition-colors hover:text-sky"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-sm tracking-wide text-field uppercase">
                  {content.whatsappLabel}
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-lg text-ink transition-colors hover:text-sky"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <p className="text-sm tracking-wide text-field uppercase">
                  {content.regionLabel}
                </p>
                <p className="mt-1 text-lg text-ink">{site.city}</p>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-display text-xl font-semibold text-ink">
              {content.formHeading}
            </h2>
            <p className="mt-2 text-sm text-muted">{content.formIntro}</p>
            <div className="mt-6">
              <Suspense
                fallback={
                  <p className="text-sm text-muted">{content.formLoadingLabel}</p>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
