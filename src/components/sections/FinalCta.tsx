"use client";

import { ArrowRight, Check } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClasses } from "@/components/ui/Button";
import { HudiLabsLogo } from "@/components/ui/HudiMark";

const areas = ["Restaurante", "Lanchonete", "Pizzaria", "Hamburgueria", "Cafeteria", "Outro"];
const interests = ["Cardápio digital", "Conversa no WhatsApp", "Gestão da operação"];
const sources = ["Instagram", "Indicação", "Google", "Evento ou parceria", "Outro"];

export function FinalCta() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const selectedInterests = data.getAll("interest");
    const message = [
      "Olá, Hudi! Quero conhecer a plataforma.",
      `Nome: ${data.get("name")}`,
      `Negócio: ${data.get("business")}`,
      `Área: ${data.get("area")}`,
      `Tenho interesse em: ${selectedInterests.join(", ") || "Ainda estou avaliando"}`,
      `Como conheci a Hudi: ${data.get("source")}`,
    ].join("\n");

    setSent(true);
    window.open(`https://wa.me/553131890669?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
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

            <form onSubmit={handleSubmit} className="rounded-xl border border-white/16 bg-white/10 p-5 text-left backdrop-blur-lg sm:p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-white">Seu nome
                  <input required name="name" autoComplete="name" placeholder="Como podemos te chamar?" className="min-h-11 rounded-lg border border-white/20 bg-hudi-deep/30 px-3 text-white outline-none placeholder:text-blue-200/65 focus:border-hudi-light focus:ring-2 focus:ring-hudi-light/30" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-white">Nome do negócio
                  <input required name="business" placeholder="Ex.: Pizzaria do bairro" className="min-h-11 rounded-lg border border-white/20 bg-hudi-deep/30 px-3 text-white outline-none placeholder:text-blue-200/65 focus:border-hudi-light focus:ring-2 focus:ring-hudi-light/30" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-white">Qual é sua área?
                  <select required name="area" defaultValue="" className="min-h-11 rounded-lg border border-white/20 bg-hudi-deep/70 px-3 text-white outline-none focus:border-hudi-light focus:ring-2 focus:ring-hudi-light/30">
                    <option value="" disabled>Selecione</option>
                    {areas.map((area) => <option key={area} value={area}>{area}</option>)}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-medium text-white">Como conheceu a Hudi?
                  <select required name="source" defaultValue="" className="min-h-11 rounded-lg border border-white/20 bg-hudi-deep/70 px-3 text-white outline-none focus:border-hudi-light focus:ring-2 focus:ring-hudi-light/30">
                    <option value="" disabled>Selecione</option>
                    {sources.map((source) => <option key={source} value={source}>{source}</option>)}
                  </select>
                </label>
              </div>

              <fieldset className="mt-6">
                <legend className="text-sm font-medium text-white">Em qual solução você tem interesse?</legend>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {interests.map((interest) => (
                    <label key={interest} className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-3 py-2.5 text-sm text-blue-50 transition-colors duration-200 hover:bg-white/[0.12]">
                      <input name="interest" value={interest} type="checkbox" className="size-4 accent-hudi-light" />
                      {interest}
                    </label>
                  ))}
                </div>
              </fieldset>

              <button type="submit" className={buttonClasses("glass", "group mt-7 w-full bg-white/16 hover:bg-white/22")}>
                {sent ? "Abrindo WhatsApp..." : "Continuar no WhatsApp"}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <p className="mt-3 text-center text-xs leading-5 text-blue-200">Ao continuar, você abre uma conversa com a Hudi no WhatsApp.</p>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
