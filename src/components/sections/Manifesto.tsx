import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Manifesto() {
  return (
    <section id="manifesto" className="section-space">
      <Reveal className="container-site">
        <div className="grid gap-10 border-y border-hudi-line py-12 lg:grid-cols-[.7fr_1.3fr] lg:py-16">
          <div><span className="eyebrow"><ArrowDownRight className="size-4" aria-hidden="true" /> Nosso manifesto</span></div>
          <div>
            <blockquote className="text-[clamp(2rem,4.5vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-hudi-deep">
              “Problemas reais não precisam de ferramentas genéricas.”
            </blockquote>
            <p className="mt-7 max-w-2xl text-lg leading-8">A Hudi nasce do chão da operação. Tiramos etapas, conectamos decisões e usamos tecnologia para devolver clareza a quem faz o negócio acontecer.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
