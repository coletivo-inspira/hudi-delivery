import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-[140px] pb-10 text-center flex flex-col items-center">
      {/* Container Principal */}
      <div className="container-custom flex flex-col items-center">
        {/* Chip Superior */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-bege border border-border-line rounded-full mb-8">
          <div className="w-1.5 h-1.5 bg-coral rounded-full" />
          <span className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-ink-70">
            A PLATAFORMA DO SEU RESTAURANTE
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="font-sans font-semibold text-[clamp(40px,7vw,92px)] leading-[1.04] tracking-[-0.035em] mb-7 max-w-[1000px]">
          Venda mais e organize seu{" "}
          <em className="font-serif italic font-medium text-coral tracking-[-0.025em]">
            delivery
          </em>{" "}
          em um só lugar.
        </h1>

        {/* Lead (Subtítulo) */}
        <p className="text-[clamp(16px,1.5vw,19px)] leading-[1.55] text-ink-70 max-w-[52ch] mb-9">
          Cardápio digital, atendimento automático no WhatsApp com IA e gestão completa de pedidos, 
          sem cobrar taxa por pedido.
        </p>

        {/* Ações (Input + Botão) */}
        <div className="flex flex-wrap justify-center gap-3 mb-7 w-full max-w-[500px]">
          <input 
            type="text" 
            placeholder="Nome do seu restaurante"
            className="flex-1 min-w-[200px] px-4 py-3.5 bg-bege border border-border-line rounded-full text-[15px] outline-none focus:border-coral/50 focus:ring-4 focus:ring-coral/10 transition-all placeholder:text-ink-55"
          />
          <button className="bg-coral hover:bg-coral-hover text-white text-[15px] font-medium px-6 py-3.5 rounded-full transition-all hover:-translate-y-0.5 whitespace-nowrap">
            Testar grátis
          </button>
        </div>

        {/* Benefícios Rápidos */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-border-line rounded-full">
            <div className="w-3.5 h-3.5 bg-coral text-white rounded-full flex items-center justify-center">
              <Check className="w-2.5 h-2.5" strokeWidth={3} />
            </div>
            <span className="font-mono text-[11px] font-medium tracking-[0.06em] uppercase text-ink-70">
              Teste por 15 dias
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-border-line rounded-full">
            <div className="w-3.5 h-3.5 bg-coral text-white rounded-full flex items-center justify-center">
              <Check className="w-2.5 h-2.5" strokeWidth={3} />
            </div>
            <span className="font-mono text-[11px] font-medium tracking-[0.06em] uppercase text-ink-70">
              Cancele quando quiser
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-border-line rounded-full">
            <div className="w-3.5 h-3.5 bg-coral text-white rounded-full flex items-center justify-center">
              <Check className="w-2.5 h-2.5" strokeWidth={3} />
            </div>
            <span className="font-mono text-[11px] font-medium tracking-[0.06em] uppercase text-ink-70">
              Setup em 5 minutos
            </span>
          </div>
        </div>

        {/* Mockup do Dashboard */}
        <div className="w-full max-w-[1100px] aspect-[16/9] bg-[#0f1115] rounded-[20px] p-3.5 shadow-2xl relative overflow-hidden ring-1 ring-white/10">
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#2a2d34] rounded-full" />
          <div className="w-full h-full bg-white rounded-lg flex items-center justify-center text-ink-55 overflow-hidden">
            <div className="w-full h-full bg-slate-50 border border-slate-100 flex items-center justify-center font-medium">
              [Dashboard Mockup Aqui]
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-3 bg-gradient-to-b from-[#1a1d24] to-[#0a0c10] rounded-b-[20px]" />
        </div>
      </div>
    </section>
  );
}
