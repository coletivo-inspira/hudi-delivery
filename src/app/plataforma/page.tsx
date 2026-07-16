import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Check, CircleGauge, LayoutDashboard, QrCode, ShieldCheck } from "lucide-react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { buttonClasses } from "@/components/ui/Button";
import { HudiMark } from "@/components/ui/HudiMark";

export const metadata: Metadata = {
  title: "Plataforma | Hudi Delivery",
  description: "Conheça os módulos, o fluxo e os recursos da plataforma Hudi Delivery.",
};

const modules = [
  { icon: QrCode, name: "Hudi Cardápio", summary: "Seu canal próprio de vendas.", details: ["Cardápio responsivo", "Link e QR Code próprios", "Adicionais e observações", "Pedidos sem comissão"] },
  { icon: Bot, name: "Hudi Conversa", summary: "Atendimento que entende e conduz.", details: ["Atendimento pelo WhatsApp", "Respostas com contexto", "Disponibilidade 24 horas", "Transferência para a equipe"] },
  { icon: LayoutDashboard, name: "Hudi Painel", summary: "Informação para decidir com clareza.", details: ["Pedidos e cozinha ao vivo", "Vendas e ticket médio", "CRM de clientes", "Indicadores acionáveis"] },
];

const navItems = [
  ["Visão geral", "#visao-geral"],
  ["Módulos", "#modulos"],
  ["Fluxo da operação", "#fluxo"],
  ["Segurança", "#seguranca"],
  ["Implantação", "#implantacao"],
];

const whatsappUrl = `https://wa.me/553131890669?text=${encodeURIComponent("Olá, Hudi! Li a documentação da plataforma e quero conversar sobre a implantação.")}`;

export default function PlataformaPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="bg-hudi-offwhite pb-24 pt-32 sm:pt-40">
        <section className="container-site">
          <div className="max-w-4xl">
            <HudiMark className="h-10" />
            <p className="eyebrow mt-7">Guia da plataforma</p>
            <h1 className="mt-5 text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-[.98] tracking-[-0.055em]">Uma visão clara de tudo o que a Hudi conecta.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 sm:text-xl">Este guia apresenta os módulos da Hudi Delivery, como eles trabalham juntos e o que muda na rotina da sua operação.</p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={buttonClasses("primary", "group px-6")}>Conversar sobre a plataforma <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" /></a>
            <Link href="/#solucoes" className={buttonClasses("outline", "px-6")}>Voltar para o site</Link>
          </div>
        </section>

        <div className="container-site mt-20 grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:items-start">
          <aside className="hidden lg:sticky lg:top-28 lg:block" aria-label="Nesta página">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-hudi-deep">Nesta página</p>
            <nav className="mt-4 grid border-l border-hudi-line">
              {navItems.map(([label, href]) => <a key={href} href={href} className="border-l-2 border-transparent px-4 py-2 text-sm font-medium text-hudi-slate transition-colors duration-200 hover:border-hudi-primary hover:text-hudi-deep">{label}</a>)}
            </nav>
          </aside>

          <div className="grid gap-16">
            <section id="visao-geral" className="scroll-mt-28">
              <p className="eyebrow">Visão geral</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-5xl">Um ecossistema, uma operação.</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8">A Hudi acompanha o pedido desde a escolha do cliente até a leitura dos resultados. Cada módulo resolve uma parte do processo e compartilha as informações necessárias com os demais.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[['01', 'Cliente escolhe'], ['02', 'A operação executa'], ['03', 'O painel orienta']].map(([number, label]) => <div key={number} className="rounded-xl border border-hudi-line bg-white p-5"><span className="text-xs font-bold tracking-[0.14em] text-hudi-primary">{number}</span><p className="mt-8 font-bold text-hudi-deep">{label}</p></div>)}
              </div>
            </section>

            <section id="modulos" className="scroll-mt-28">
              <p className="eyebrow">Módulos</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-5xl">As três frentes da plataforma.</h2>
              <div className="mt-8 grid gap-5">
                {modules.map(({ icon: Icon, name, summary, details }) => (
                  <article key={name} className="grid gap-6 rounded-xl border border-hudi-line bg-white p-6 sm:grid-cols-[auto_1fr_1fr] sm:p-8">
                    <span className="grid size-12 place-items-center rounded-lg bg-hudi-primary/10 text-hudi-deep"><Icon className="size-6" aria-hidden="true" /></span>
                    <div><h3 className="text-2xl font-bold">{name}</h3><p className="mt-2 leading-7">{summary}</p></div>
                    <ul className="grid gap-2 text-sm font-medium text-hudi-deep">{details.map((detail) => <li key={detail} className="flex items-center gap-2"><Check className="size-4 text-hudi-primary" strokeWidth={3} aria-hidden="true" />{detail}</li>)}</ul>
                  </article>
                ))}
              </div>
            </section>

            <section id="fluxo" className="scroll-mt-28 rounded-2xl bg-hudi-deep p-6 text-white sm:p-10">
              <p className="eyebrow !text-blue-200">Fluxo da operação</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-[-0.035em] text-white sm:text-5xl">Do primeiro clique à próxima decisão.</h2>
              <div className="mt-9 grid gap-px overflow-hidden rounded-xl bg-white/15 sm:grid-cols-2">
                {[['01', 'Pedido recebido', 'O cliente escolhe e envia pelo canal próprio.'], ['02', 'Atendimento organizado', 'A conversa mantém contexto e encaminha o pedido.'], ['03', 'Produção acompanhada', 'Equipe e cozinha visualizam o mesmo andamento.'], ['04', 'Resultado analisado', 'O Painel reúne vendas, clientes e oportunidades.']].map(([number, title, text]) => <div key={number} className="bg-hudi-deep p-5 sm:p-6"><span className="text-xs font-bold tracking-[0.14em] text-hudi-light">{number}</span><h3 className="mt-6 text-xl font-bold text-white">{title}</h3><p className="mt-2 leading-7 text-blue-100">{text}</p></div>)}
              </div>
            </section>

            <section id="seguranca" className="scroll-mt-28">
              <div className="flex size-12 items-center justify-center rounded-lg bg-hudi-primary/10 text-hudi-deep"><ShieldCheck className="size-6" aria-hidden="true" /></div>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.035em] sm:text-5xl">Segurança no fluxo inteiro.</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8">Acesso por perfil, comunicação protegida e uma estrutura pensada para preservar os dados da operação e dos clientes.</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-3">{['Permissões por equipe', 'Dados centralizados', 'Acompanhamento de atividade'].map((item) => <p key={item} className="flex items-center gap-3 rounded-lg border border-hudi-line bg-white p-4 font-medium text-hudi-deep"><Check className="size-4 text-hudi-primary" strokeWidth={3} aria-hidden="true" />{item}</p>)}</div>
            </section>

            <section id="implantacao" className="scroll-mt-28 rounded-2xl border border-hudi-line bg-white p-6 sm:p-10">
              <CircleGauge className="size-7 text-hudi-primary" aria-hidden="true" />
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.035em] sm:text-5xl">Implantação acompanhada.</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8">Nossa equipe entende seu processo, configura os módulos e acompanha os primeiros pedidos. Você começa com uma base organizada e evolui com dados reais.</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className={buttonClasses("primary", "group mt-8")}>Planejar minha implantação <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" /></a>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
