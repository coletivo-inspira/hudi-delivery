import Link from "next/link";
import { Check } from "lucide-react";
import { plans } from "@/data/site-content";
import { buttonClasses } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function PricingTable({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";

  return (
    <section id="planos" className={`${standalone ? "pb-24 pt-36" : "section-space"} bg-hudi-offwhite`}>
      <div className="container-site">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <span className="eyebrow">Planos claros, sem letras miúdas</span>
          <Heading className="mt-5 text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.05em]">Comece simples. Cresça no seu ritmo.</Heading>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8">Sem comissão por pedido e sem fidelidade obrigatória. Escolha o nível de tecnologia que sua operação precisa agora.</p>
        </Reveal>

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.07} className="h-full">
              <article className={`relative flex h-full flex-col rounded-xl border bg-white p-6 sm:p-8 ${plan.featured ? "border-hudi-primary shadow-soft ring-1 ring-hudi-primary/20" : "border-hudi-line"}`}>
                {plan.featured && <span className="absolute -top-3 left-6 rounded-full bg-hudi-deep px-3 py-1 text-xs font-bold text-white shadow-sm">Mais popular</span>}
                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6">{plan.description}</p>
                  <div className="mt-7 flex items-end gap-1"><span className={`${plan.price.length > 10 ? "text-3xl" : "text-4xl"} font-bold tracking-[-0.04em] text-hudi-deep`}>{plan.price}</span>{plan.cadence && <span className="mb-1 text-sm">{plan.cadence}</span>}</div>
                </div>
                <ul className="my-8 grid flex-1 content-start gap-3 border-t border-hudi-line pt-7">
                  {plan.features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-hudi-deep"><Check className="mt-1 size-4 shrink-0 text-hudi-primary" strokeWidth={3} aria-hidden="true" />{feature}</li>)}
                </ul>
                <Link href="#contato" className={buttonClasses(plan.featured ? "primary" : "outline", "w-full")}>{plan.cta}</Link>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-hudi-slate">Valores de referência. Condições finais são confirmadas no atendimento comercial.</p>
      </div>
    </section>
  );
}
