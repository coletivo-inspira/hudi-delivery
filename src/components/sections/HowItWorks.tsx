"use client";

import { ArrowRight, CheckCircle2, Rocket, SlidersHorizontal } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { HudiMark } from "@/components/ui/HudiMark";

const steps = [
  { icon: SlidersHorizontal, number: "01", title: "Configure", text: "Cadastre seu negócio, horários e cardápio com um fluxo guiado." },
  { icon: Rocket, number: "02", title: "Publique", text: "Compartilhe seu link e conecte o atendimento do WhatsApp." },
  { icon: CheckCircle2, number: "03", title: "Evolua", text: "Acompanhe a operação e use dados reais para vender melhor." },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => setActiveStep((current) => (current + 1) % steps.length), 2400);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section id="como-funciona" className="section-space overflow-hidden bg-hudi-deep text-white">
      <div className="container-site">
        <Reveal className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <HudiMark className="h-9" />
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-6xl">Começar não precisa virar um projeto.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-blue-100 lg:justify-self-end">Em três movimentos, sua operação ganha um canal próprio e uma base preparada para crescer.</p>
        </Reveal>

        <div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-blue-200" aria-label={`Etapa atual: ${steps[activeStep].title}`}>
          <span className="size-2 rounded-full bg-hudi-light" /> Etapa {steps[activeStep].number}: {steps[activeStep].title}
        </div>
        <div className="mt-4 h-px overflow-hidden bg-white/15"><motion.div className="h-full bg-hudi-light" animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }} transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }} /></div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map(({ icon: Icon, number, title, text }, index) => {
            const active = activeStep === index;
            return (
              <Reveal key={number} delay={index * 0.08}>
                <motion.article
                  className="group min-h-64 rounded-xl border p-6"
                  animate={reduceMotion ? undefined : { y: active ? -6 : 0, backgroundColor: active ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.06)", borderColor: active ? "rgba(96, 165, 250, 0.7)" : "rgba(255, 255, 255, 0.14)" }}
                  transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center justify-between">
                    <motion.span className="grid size-11 place-items-center rounded-lg bg-white/10" animate={reduceMotion ? undefined : { scale: active ? 1.08 : 1 }} transition={{ duration: 0.35 }}><Icon className="size-5 text-hudi-light" aria-hidden="true" /></motion.span>
                    <span className="text-xs font-bold tracking-[0.16em] text-blue-300">{number}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-bold text-white">{title}</h3><p className="mt-3 leading-7 text-blue-100">{text}</p>
                  {index < steps.length - 1 && <ArrowRight className="mt-6 hidden size-5 text-hudi-light lg:block" aria-hidden="true" />}
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
