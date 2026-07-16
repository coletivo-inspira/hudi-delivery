import { Check, MessageSquareText, TrendingUp, Users } from "lucide-react";
import { features } from "@/data/site-content";
import { Reveal } from "@/components/ui/Reveal";
import { HudiMark } from "@/components/ui/HudiMark";

function FeatureVisual({ index, dark }: { index: number; dark: boolean }) {
  if (index === 2) {
    return (
      <div className="relative min-h-80 overflow-hidden rounded-xl border border-hudi-line bg-white p-5 sm:p-7">
        <div className="absolute -right-20 -top-24 size-72 rounded-full bg-hudi-light/20 blur-3xl" />
        <div className="relative mx-auto max-w-lg rounded-xl border border-hudi-line bg-hudi-offwhite p-4 shadow-soft sm:p-5">
          <div className="flex items-center justify-between">
            <div><p className="text-xs font-bold uppercase tracking-[0.12em] text-hudi-slate">Hudi Painel</p><p className="mt-1 font-bold text-hudi-deep">Visão geral de hoje</p></div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800"><span className="size-1.5 rounded-full bg-emerald-600" /> Ao vivo</span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[['128', 'pedidos'], ['R$ 8.420', 'em vendas'], ['R$ 65,78', 'ticket médio']].map(([value, label], itemIndex) => (
              <div key={label} className={`rounded-lg border border-hudi-line bg-white p-3 ${itemIndex === 2 ? 'col-span-2 sm:col-span-1' : ''}`}>
                <p className="text-xl font-bold tracking-[-0.03em] text-hudi-deep">{value}</p><p className="mt-1 text-xs text-hudi-slate">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-hudi-line bg-white p-4">
            <div className="flex items-center justify-between text-xs"><span className="font-semibold text-hudi-deep">Pedidos por horário</span><span className="text-emerald-700">+18% hoje</span></div>
            <div className="mt-5 flex h-20 items-end gap-2" aria-label="Gráfico de pedidos por horário">
              {[28, 46, 38, 70, 58, 88, 74, 96].map((height, barIndex) => <span key={barIndex} className="flex-1 rounded-t bg-hudi-primary/75" style={{ height: `${height}%` }} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const metrics = [
    { icon: TrendingUp, value: "R$ 8.420", label: "vendas diretas" },
    { icon: MessageSquareText, value: "86%", label: "resolvido pela IA" },
    { icon: Users, value: "1.284", label: "clientes ativos" },
  ];
  const metric = metrics[index];
  const Icon = metric.icon;
  return (
    <div className={`relative min-h-80 overflow-hidden rounded-xl border p-6 sm:p-8 ${dark ? "border-white/14 bg-hudi-deep" : "border-hudi-line bg-white"}`}>
      <div className={`absolute -right-20 -top-24 size-72 rounded-full blur-3xl ${dark ? "bg-hudi-primary/35" : "bg-hudi-light/20"}`} />
      <div className={`relative mx-auto max-w-sm rounded-xl border p-5 shadow-soft ${dark ? "border-white/16 bg-white/10 backdrop-blur-lg" : "border-hudi-line bg-hudi-offwhite"}`}>
        <div className="flex items-center justify-between"><span className={`text-xs font-bold uppercase tracking-[0.12em] ${dark ? "text-blue-200" : "text-hudi-slate"}`}>Visão da semana</span><span className={`size-2 rounded-full ${dark ? "bg-hudi-light" : "bg-hudi-primary"}`} /></div>
        <Icon className={`mt-10 size-7 ${dark ? "text-hudi-light" : "text-hudi-primary"}`} aria-hidden="true" />
        <p className={`mt-4 text-4xl font-bold tracking-[-0.04em] ${dark ? "text-white" : "text-hudi-deep"}`}>{metric.value}</p>
        <p className={`mt-1 text-sm ${dark ? "text-blue-200" : "text-hudi-slate"}`}>{metric.label}</p>
        <div className={`mt-6 h-1.5 overflow-hidden rounded-full ${dark ? "bg-white/10" : "bg-hudi-deep/8"}`}><div className="h-full w-3/4 rounded-full bg-hudi-primary" /></div>
      </div>
    </div>
  );
}

export function ProductShowcase() {
  return (
    <section id="solucoes" className="section-space bg-white">
      <div className="container-site">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <span className="eyebrow">Um ecossistema, uma operação</span>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.05em]">Cada ferramenta resolve. Juntas, elas transformam.</h2>
        </Reveal>
        <div className="grid gap-20 lg:gap-28">
          {features.map((feature, index) => {
            return (
              <Reveal key={feature.title}>
                <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                  <div className={index % 2 ? "lg:order-2" : ""}>
                    <span className="eyebrow"><HudiMark className="h-6" /> {feature.eyebrow}</span>
                    <h3 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl">{feature.title}</h3>
                    <p className="mt-5 max-w-xl text-lg leading-8">{feature.description}</p>
                    <ul className="mt-7 grid gap-3">
                      {feature.highlights.map((highlight) => <li key={highlight} className="flex items-center gap-3 font-medium text-hudi-deep"><span className="grid size-6 place-items-center rounded-md bg-hudi-primary/10"><Check className="size-3.5 text-hudi-deep" strokeWidth={3} aria-hidden="true" /></span>{highlight}</li>)}
                    </ul>
                  </div>
                  <div className={index % 2 ? "lg:order-1" : ""}><FeatureVisual index={index} dark={feature.tone === "deep"} /></div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
