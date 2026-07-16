import { ArrowRight, CheckCircle2, Rocket, SlidersHorizontal } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { icon: SlidersHorizontal, number: "01", title: "Configure", text: "Cadastre seu negócio, horários e cardápio com um fluxo guiado." },
  { icon: Rocket, number: "02", title: "Publique", text: "Compartilhe seu link e conecte o atendimento do WhatsApp." },
  { icon: CheckCircle2, number: "03", title: "Evolua", text: "Acompanhe a operação e use dados reais para vender melhor." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-space bg-hudi-deep text-white">
      <div className="container-site">
        <Reveal className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><span className="eyebrow !text-blue-200">Da ideia ao primeiro pedido</span><h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-6xl">Começar não precisa virar um projeto.</h2></div>
          <p className="max-w-xl text-lg leading-8 text-blue-100 lg:justify-self-end">Em três movimentos, sua operação ganha um canal próprio e uma base preparada para crescer.</p>
        </Reveal>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {steps.map(({ icon: Icon, number, title, text }, index) => (
            <Reveal key={number} delay={index * 0.08}>
              <article className="group min-h-64 rounded-xl border border-white/14 bg-white/[0.06] p-6 transition-colors duration-200 hover:bg-white/[0.1]">
                <div className="flex items-center justify-between"><span className="grid size-11 place-items-center rounded-lg bg-white/10"><Icon className="size-5 text-hudi-light" aria-hidden="true" /></span><span className="text-xs font-bold tracking-[0.16em] text-blue-300">{number}</span></div>
                <h3 className="mt-10 text-2xl font-bold text-white">{title}</h3><p className="mt-3 leading-7 text-blue-100">{text}</p>
                {index < steps.length - 1 && <ArrowRight className="mt-6 hidden size-5 text-hudi-light lg:block" aria-hidden="true" />}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
