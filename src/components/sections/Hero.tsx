import Link from "next/link";
import { ArrowRight, Check, Clock3, MessageCircle, ShoppingBag, Sparkles, Utensils } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { icon: MessageCircle, label: "WhatsApp", state: "Novo pedido" },
  { icon: ShoppingBag, label: "Pedido #184", state: "Confirmado" },
  { icon: Utensils, label: "Cozinha", state: "Em preparo" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_78%_12%,rgba(96,165,250,0.22),transparent_34%),radial-gradient(circle_at_10%_42%,rgba(59,130,246,0.10),transparent_28%)]" />
      <div className="container-site grid items-center gap-14 lg:grid-cols-[1.03fr_.97fr] lg:gap-10">
        <Reveal>
          <div className="max-w-3xl">
            <div className="eyebrow mb-6"><span className="size-2 rounded-full bg-hudi-primary" /> Tecnologia que trabalha com você</div>
            <h1 className="text-[clamp(2.75rem,7vw,5.75rem)] font-bold leading-[0.98] tracking-[-0.055em]">
              Complexidade fora. <span className="text-hudi-primary">Resultado dentro.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-hudi-slate sm:text-xl">
              Transformamos a complexidade do seu delivery em uma operação simples: pedidos, atendimento e clientes conectados em um só lugar.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#planos" className={buttonClasses("primary", "group px-6")}>Testar por 15 dias <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" /></Link>
              <Link href="#solucoes" className={buttonClasses("outline", "px-6")}>Conhecer a plataforma</Link>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-hudi-slate" aria-label="Benefícios do teste">
              {["Sem cartão", "Sem comissão", "Cancele quando quiser"].map((item) => <li key={item} className="flex items-center gap-2"><span className="grid size-5 place-items-center rounded-full bg-hudi-primary/10 text-hudi-deep"><Check className="size-3" strokeWidth={3} aria-hidden="true" /></span>{item}</li>)}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-hudi-primary/12 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-hudi-deep p-3 shadow-float">
            <div className="rounded-xl bg-[#f3f7ff] p-4 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-hudi-slate">Operação ao vivo</p><p className="mt-1 font-bold text-hudi-deep">Pedidos de hoje</p></div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800"><span className="size-1.5 rounded-full bg-emerald-600" /> Online</span>
              </div>
              <div className="grid gap-3">
                {steps.map(({ icon: Icon, label, state }, index) => (
                  <div key={label} className="relative flex items-center gap-3 rounded-xl border border-hudi-line bg-white p-3.5 shadow-sm">
                    <span className="grid size-10 place-items-center rounded-lg bg-hudi-primary/10 text-hudi-deep"><Icon className="size-5" aria-hidden="true" /></span>
                    <div className="min-w-0 flex-1"><p className="truncate text-sm font-bold text-hudi-deep">{label}</p><p className="text-xs text-hudi-slate">{state}</p></div>
                    <span className="text-xs font-semibold text-hudi-deep">0{index + 1}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-hudi-line bg-white p-4"><Clock3 className="mb-3 size-5 text-hudi-primary" aria-hidden="true" /><p className="text-2xl font-bold tracking-tight text-hudi-deep">18 min</p><p className="text-xs text-hudi-slate">tempo médio</p></div>
                <div className="rounded-xl border border-hudi-line bg-white p-4"><Sparkles className="mb-3 size-5 text-hudi-primary" aria-hidden="true" /><p className="text-2xl font-bold tracking-tight text-hudi-deep">+24%</p><p className="text-xs text-hudi-slate">pedidos diretos</p></div>
              </div>
            </div>
          </div>
          <GlassCard className="absolute -bottom-6 -left-3 hidden max-w-48 rounded-xl bg-hudi-deep/90 p-4 text-white shadow-soft backdrop-blur-xl sm:block">
            <p className="text-xs font-semibold text-blue-200">A Hudi avisa</p><p className="mt-1 text-sm font-semibold">Cliente pronto para pedir de novo.</p>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
