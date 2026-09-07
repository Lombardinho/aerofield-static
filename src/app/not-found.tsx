import type { Metadata } from "next";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <Hero
      compact
      title="Página não encontrada"
      subtitle="O endereço que você tentou acessar não existe ou foi movido. Volte para a home ou fale com a nossa equipe."
      primaryHref="/"
      primaryLabel="Voltar para a home"
      secondaryHref="/contato"
      secondaryLabel="Falar com a AeroField"
      imageSrc="/images/service-mapeamento.jpg"
      imageAlt="Vista aérea de lavoura"
    />
  );
}
