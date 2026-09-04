"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";
import { site, whatsappUrl } from "@/lib/site";
import { pageContent } from "@/lib/content";

const content = pageContent.contato;
const { form, whatsappTemplate } = content;

const serviceOptions = [
  { value: "", label: form.servicoDefaultOptionLabel },
  ...site.services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "academia", label: form.servicoAcademiaOptionLabel },
  { value: "outro", label: form.servicoOutroOptionLabel },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("servico") ?? "";
  const [servico, setServico] = useState(initialService);
  const [sent, setSent] = useState(false);

  const defaultMessage = useMemo(() => {
    if (servico === "academia") {
      return whatsappTemplate.academiaMessage;
    }
    const found = site.services.find((s) => s.slug === servico);
    if (found) {
      return `${whatsappTemplate.servicePrefix}${found.title.toLowerCase()}.`;
    }
    return site.whatsappMessage;
  }, [servico]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nome = String(formData.get("nome") || "").trim();
    const telefone = String(formData.get("telefone") || "").trim();
    const mensagem = String(formData.get("mensagem") || "").trim();
    const servicoLabel =
      serviceOptions.find((o) => o.value === servico)?.label ||
      form.servicoNaoInformado;

    const text = [
      whatsappTemplate.intro,
      `${whatsappTemplate.nomeLine}: ${nome}`,
      `${whatsappTemplate.telefoneLine}: ${telefone}`,
      `${whatsappTemplate.interesseLine}: ${servicoLabel}`,
      `${whatsappTemplate.mensagemLine}: ${mensagem}`,
    ].join("\n");

    setSent(true);
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-ink">
          {form.nomeLabel}
        </label>
        <input
          id="nome"
          name="nome"
          required
          className="w-full rounded-md border border-navy/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
          placeholder={form.nomePlaceholder}
        />
      </div>

      <div>
        <label
          htmlFor="telefone"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          {form.telefoneLabel}
        </label>
        <input
          id="telefone"
          name="telefone"
          required
          className="w-full rounded-md border border-navy/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
          placeholder={form.telefonePlaceholder}
        />
      </div>

      <div>
        <label
          htmlFor="servico"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          {form.servicoLabel}
        </label>
        <select
          id="servico"
          name="servico"
          value={servico}
          onChange={(e) => setServico(e.target.value)}
          className="w-full rounded-md border border-navy/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
        >
          {serviceOptions.map((option) => (
            <option key={option.value || "empty"} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="mensagem"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          {form.mensagemLabel}
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={4}
          defaultValue={defaultMessage}
          key={defaultMessage}
          className="w-full resize-y rounded-md border border-navy/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-sky"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-sky px-6 py-3.5 font-display text-sm font-semibold text-navy-deep transition-colors hover:bg-sky-bright md:w-auto"
      >
        {form.submitLabel}
      </button>

      {sent ? <p className="text-sm text-field">{form.sentMessage}</p> : null}
    </form>
  );
}
