import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <Logo className="h-11 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-silver">
            {site.description}
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold tracking-wide text-sky">
            Navegação
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold tracking-wide text-sky">
            Contato
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                className="hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: {site.phone}
              </a>
            </li>
            <li>{site.city}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Todos os direitos
            reservados.
          </p>
          <p>Produtividade e sustentabilidade no campo.</p>
        </div>
      </div>
    </footer>
  );
}
