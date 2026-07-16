import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TypewriterLine } from "@/components/ui/TypewriterLine";
import { LiveOrderPreview } from "@/components/ui/LiveOrderPreview";

const trialMessage = encodeURIComponent("Olá, Hudi! Quero começar meu teste gratuito de 100 dias e conhecer a plataforma.");
const trialUrl = `https://wa.me/553131890669?text=${trialMessage}`;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-36 sm:pt-44 lg:pb-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[48rem] bg-[radial-gradient(circle_at_78%_12%,rgba(96,165,250,0.22),transparent_34%),radial-gradient(circle_at_10%_42%,rgba(59,130,246,0.10),transparent_28%)]" />
      <div className="container-site grid items-center gap-14 lg:grid-cols-[1.03fr_.97fr] lg:gap-10">
        <Reveal>
          <div className="max-w-3xl">
            <div className="eyebrow mb-6"><span className="size-2 rounded-full bg-hudi-primary" /> Tecnologia que trabalha com você</div>
            <h1 className="text-[clamp(2.75rem,7vw,5.75rem)] font-bold leading-[0.98] tracking-[-0.055em]">
              Complexidade fora. <span className="text-hudi-primary">Resultado dentro.</span>
            </h1>
            <TypewriterLine />
            <p className="mt-5 max-w-2xl text-lg leading-8 text-hudi-slate sm:text-xl">
              Transformamos a complexidade do seu delivery em uma operação simples: pedidos, atendimento e clientes conectados em um só lugar.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={trialUrl} target="_blank" rel="noreferrer" className={buttonClasses("primary", "group px-6")}>Testar grátis por 100 dias <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" /></a>
              <Link href="/plataforma" className={buttonClasses("outline", "px-6")}>Conhecer a plataforma</Link>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-hudi-slate" aria-label="Benefícios do teste">
              {["Sem cartão", "Sem comissão", "Cancele quando quiser"].map((item) => <li key={item} className="flex items-center gap-2"><span className="grid size-5 place-items-center rounded-full bg-hudi-primary/10 text-hudi-deep"><Check className="size-3" strokeWidth={3} aria-hidden="true" /></span>{item}</li>)}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.12}><LiveOrderPreview /></Reveal>
      </div>
    </section>
  );
}
