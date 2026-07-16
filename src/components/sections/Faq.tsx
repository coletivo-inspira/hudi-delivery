import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/data/site-content";

export function Faq() {
  return (
    <section id="faq" className="section-space bg-white">
      <div className="container-site grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <Reveal><span className="eyebrow">Direto no que importa</span><h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Dúvidas comuns, respostas humanas.</h2><p className="mt-5 max-w-md text-lg leading-8">Se faltar alguma resposta, a gente conversa sem roteiro e sem complicação.</p></Reveal>
        <Reveal delay={0.08}><Accordion items={faqs} /></Reveal>
      </div>
    </section>
  );
}
