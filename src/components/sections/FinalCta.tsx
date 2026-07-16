import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { buttonClasses } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section id="contato" className="section-space bg-white">
      <Reveal className="container-site">
        <div className="relative isolate overflow-hidden rounded-2xl bg-hudi-deep px-6 py-14 text-center shadow-float sm:px-12 sm:py-20">
          <div className="absolute -right-24 -top-36 -z-10 size-96 rounded-full bg-hudi-primary/35 blur-3xl" />
          <div className="absolute -bottom-44 -left-20 -z-10 size-96 rounded-full bg-hudi-light/15 blur-3xl" />
          <GlassCard className="mx-auto mb-7 grid size-13 place-items-center rounded-xl"><Mail className="size-5 text-white" aria-hidden="true" /></GlassCard>
          <h2 className="mx-auto max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.05em] text-white">Seu delivery pode ser mais simples a partir de agora.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">Conte como sua operação funciona. A gente mostra, sem pressão, onde a Hudi pode gerar resultado.</p>
          <a href="mailto:contato@hudi.delivery?subject=Quero conhecer a Hudi" className={buttonClasses("glass", "group mt-9 px-7")}>Falar com a Hudi <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" /></a>
        </div>
      </Reveal>
    </section>
  );
}
