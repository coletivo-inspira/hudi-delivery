"use client";

import { ArrowRight, Check, ChevronDown, Clock3, LayoutDashboard, MessageCircle, UtensilsCrossed } from "lucide-react";
import type { FormEvent } from "react";
import { useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { HudiLabsLogo } from "@/components/ui/HudiMark";

const areas = ["Restaurante", "Lanchonete", "Pizzaria", "Hamburgueria", "Cafeteria", "Outro"];
const sources = ["Instagram", "Indicação", "Google", "Evento ou parceria", "Outro"];
const interests = [
  { id: "cardapio", label: "Cardápio digital", description: "Venda pelo seu canal próprio", icon: UtensilsCrossed },
  { id: "conversa", label: "Conversa no WhatsApp", description: "Atenda e converta com contexto", icon: MessageCircle },
  { id: "gestao", label: "Gestão da operação", description: "Acompanhe pedidos e resultados", icon: LayoutDashboard },
];

const controlClasses = "min-h-12 w-full rounded-lg border border-white/15 bg-hudi-deep/35 px-4 text-sm font-medium text-white outline-none transition-colors placeholder:text-blue-200/60 hover:border-white/25 focus:border-hudi-light focus:ring-2 focus:ring-hudi-light/25";

export function FinalCta() {
  const [sent, setSent] = useState(false);
  const [selectedInterestIds, setSelectedInterestIds] = useState<string[]>([]);
  const [interestError, setInterestError] = useState(false);
  const interestsRef = useRef<HTMLFieldSetElement>(null);

  function toggleInterest(id: string) {
    setSelectedInterestIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
    setInterestError(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (selectedInterestIds.length === 0) {
      setInterestError(true);
      interestsRef.current?.focus();
      return;
    }

    const data = new FormData(event.currentTarget);
    const selectedInterests = interests.filter((interest) => selectedInterestIds.includes(interest.id));
    const message = [
      "Olá, Hudi! Quero conhecer a plataforma.",
      "",
      "*Sobre meu negócio*",
      `• Nome: ${data.get("name")}`,
      `• Negócio: ${data.get("business")}`,
      `• Área: ${data.get("area")}`,
      `• Conheci a Hudi por: ${data.get("source")}`,
      "",
      "*Soluções que quero conhecer*",
      ...selectedInterests.map((interest) => `• ${interest.label}`),
    ].join("\n");

    setSent(true);
    window.open(`https://wa.me/553131890669?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    window.setTimeout(() => setSent(false), 1500);
  }

  return (
    <section id="contato" className="section-space bg-white">
      <Reveal className="container-site">
        <div className="relative isolate overflow-hidden rounded-2xl bg-hudi-deep px-6 py-12 shadow-float sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute -right-24 -top-36 -z-10 size-96 rounded-full bg-hudi-primary/35 blur-3xl" />
          <div className="absolute -bottom-44 -left-20 -z-10 size-96 rounded-full bg-hudi-light/15 blur-3xl" />
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
            <div className="max-w-xl">
              <HudiLabsLogo className="h-12" />
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.14em] text-blue-200">Fale com a Hudi</p>
              <h2 className="mt-4 text-[clamp(2.25rem,4vw,4rem)] font-bold leading-[1.02] tracking-[-0.05em] text-white">Seu delivery pode ser mais simples a partir de agora.</h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">Leva menos de um minuto. Conte um pouco da sua operação e nossa equipe continua a conversa pelo WhatsApp.</p>
              <div className="mt-8 grid gap-3 text-sm text-blue-100">
                {['Sem compromisso', 'Resposta direta pelo WhatsApp', 'Feito para a realidade do seu negócio'].map((item) => (
                  <p key={item} className="flex items-center gap-3"><span className="grid size-5 place-items-center rounded-full bg-white/12"><Check className="size-3 text-hudi-light" strokeWidth={3} aria-hidden="true" /></span>{item}</p>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/16 bg-white/10 p-5 text-left backdrop-blur-lg sm:p-7">
              <div className="mb-6 flex flex-col gap-3 border-b border-white/12 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-lg font-bold text-white">Conte um pouco sobre seu negócio</p>
                  <p className="mt-1 text-sm leading-6 text-blue-200">A Hudi continua a conversa com o contexto certo.</p>
                </div>
                <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-xs font-semibold text-blue-100">
                  <Clock3 className="size-3.5 text-hudi-light" aria-hidden="true" /> Menos de 1 minuto
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="contact-name" className="grid gap-2 text-sm font-semibold text-white">Seu nome
                  <input id="contact-name" required name="name" autoComplete="name" placeholder="Como podemos te chamar?" className={controlClasses} />
                </label>
                <label htmlFor="business-name" className="grid gap-2 text-sm font-semibold text-white">Nome do negócio
                  <input id="business-name" required name="business" autoComplete="organization" placeholder="Ex.: Pizzaria do bairro" className={controlClasses} />
                </label>
                <label htmlFor="business-area" className="grid gap-2 text-sm font-semibold text-white">Qual é sua área?
                  <span className="relative">
                    <select id="business-area" required name="area" defaultValue="" className={`${controlClasses} appearance-none pr-11`}>
                      <option value="" disabled>Selecione uma opção</option>
                      {areas.map((area) => <option key={area} value={area}>{area}</option>)}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-blue-200" aria-hidden="true" />
                  </span>
                </label>
                <label htmlFor="contact-source" className="grid gap-2 text-sm font-semibold text-white">Como conheceu a Hudi?
                  <span className="relative">
                    <select id="contact-source" required name="source" defaultValue="" className={`${controlClasses} appearance-none pr-11`}>
                      <option value="" disabled>Selecione uma opção</option>
                      {sources.map((source) => <option key={source} value={source}>{source}</option>)}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-blue-200" aria-hidden="true" />
                  </span>
                </label>
              </div>

              <fieldset ref={interestsRef} tabIndex={-1} aria-describedby="interest-help interest-error" aria-invalid={interestError} className="mt-7 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-hudi-light/60">
                <legend className="text-sm font-semibold text-white">Quais soluções fazem sentido para você?</legend>
                <p id="interest-help" className="mt-1 text-xs leading-5 text-blue-200">Selecione uma ou mais opções para direcionarmos a conversa.</p>
                <div id="interest-options" className="mt-4 grid gap-3 sm:grid-cols-3">
                  {interests.map(({ id, label, description, icon: Icon }) => {
                    const selected = selectedInterestIds.includes(id);
                    return (
                      <label key={id} className={`group relative min-h-32 cursor-pointer rounded-xl border p-4 transition-all duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-hudi-light ${selected ? "border-hudi-light bg-white/18 shadow-sm" : "border-white/12 bg-hudi-deep/25 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"}`}>
                        <input
                          name="interest"
                          value={label}
                          type="checkbox"
                          checked={selected}
                          onChange={() => toggleInterest(id)}
                          className="sr-only"
                        />
                        <span className={`grid size-9 place-items-center rounded-lg ${selected ? "bg-hudi-light text-hudi-deep" : "bg-white/8 text-blue-100"}`}>
                          <Icon className="size-4.5" aria-hidden="true" />
                        </span>
                        <span className={`absolute right-4 top-4 grid size-5 place-items-center rounded-full border ${selected ? "border-hudi-light bg-hudi-light text-hudi-deep" : "border-white/25 text-transparent"}`}>
                          <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span className="mt-4 block text-sm font-bold leading-5 text-white">{label}</span>
                        <span className="mt-1 block text-xs leading-5 text-blue-200">{description}</span>
                      </label>
                    );
                  })}
                </div>
                <p id="interest-error" aria-live="polite" className={`mt-3 text-sm font-semibold ${interestError ? "text-blue-100" : "sr-only"}`}>
                  Selecione pelo menos uma solução para continuar.
                </p>
              </fieldset>

              <button type="submit" className="group mt-7 inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-lg bg-white px-5 py-3.5 text-sm font-bold text-hudi-deep shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-md disabled:pointer-events-none disabled:opacity-70" disabled={sent}>
                <MessageCircle className="size-4.5 text-hudi-primary" aria-hidden="true" />
                <span>{sent ? "Abrindo conversa..." : "Continuar no WhatsApp"}</span>
                {selectedInterestIds.length > 0 && !sent && <span className="rounded-full bg-hudi-deep/8 px-2 py-0.5 text-[0.7rem]">{selectedInterestIds.length} {selectedInterestIds.length === 1 ? "selecionada" : "selecionadas"}</span>}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <p className="mt-3 text-center text-xs leading-5 text-blue-200">Seus dados serão usados somente para iniciar esta conversa no WhatsApp.</p>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
