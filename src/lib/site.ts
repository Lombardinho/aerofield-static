import { pageContent } from "./content";

export const site = {
  name: "AeroField",
  legalName: "AeroField Solutions",
  tagline: "Drones agrícolas | Aplicação, mapeamento e manutenção",
  description:
    "Produtividade e sustentabilidade no campo com drones agrícolas: aplicação, mapeamento e manutenção.",
  city: "Brasil",
  email: "contato@aerofield.com.br",
  phone: "(00) 00000-0000",
  phoneDigits: "5500000000000",
  whatsappMessage: "Olá! Gostaria de solicitar um orçamento da AeroField.",
  instagram: "https://instagram.com/",
  nav: [
    { href: "/", label: "Home" },
    { href: "/servicos", label: "Serviços" },
    { href: "/sobre", label: "Sobre" },
    { href: "/academia", label: "Academia" },
    { href: "/contato", label: "Contato" },
  ],
  services: pageContent.servicos.items,
  pillars: [
    {
      title: "Precisão",
      text: "Cada voo entrega aplicação e dados com acurácia para decisões melhores na lavoura.",
    },
    {
      title: "Campo",
      text: "Estamos onde o resultado acontece — próximos da operação, do produtor e da safra.",
    },
    {
      title: "Parceria",
      text: "Não somos só fornecedores: planejamos junto e acompanhamos antes, durante e depois.",
    },
    {
      title: "Sustentabilidade",
      text: "Menos desperdício, menos impacto no solo e mais eficiência por hectare.",
    },
  ],
  academyModules: [
    {
      title: "Operação de drones agrícolas",
      text: "Fundamentos de voo, segurança e rotinas de campo.",
    },
    {
      title: "Legislação e conformidade",
      text: "ANAC, DECEA e boas práticas para operar com tranquilidade.",
    },
    {
      title: "Aplicação de precisão",
      text: "Calibragem, taxa de aplicação e manejo responsável.",
    },
    {
      title: "Manutenção e frota",
      text: "Cuidados técnicos para disponibilidade e longevidade dos equipamentos.",
    },
  ],
} as const;

export function whatsappUrl(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(message)}`;
}
