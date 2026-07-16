import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HudiLabsLogo } from "@/components/ui/HudiMark";

const groups = [
  { title: "Ecossistema", links: [["Cardápio", "/#solucoes"], ["Conversa", "/#solucoes"], ["Painel", "/#solucoes"]] },
  { title: "Tecnologia", links: [["Plataforma", "/plataforma"], ["Como funciona", "/#como-funciona"], ["Planos", "/#planos"]] },
  { title: "Marca", links: [["Manifesto", "/#manifesto"], ["Brand Book", "/#manifesto"], ["Contato", "/#contato"]] },
];

export function SiteFooter() {
  return (
    <footer className="bg-hudi-deep text-white">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.25fr_2fr]">
        <div>
          <div className="mb-5"><HudiLabsLogo className="h-11" /></div>
          <p className="max-w-sm leading-7 text-blue-100">Tecnologia prática para restaurantes venderem mais e operarem melhor, sem transformar o simples em complicado.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-blue-200">{group.title}</h3>
              <ul className="grid gap-3">
                {group.links.map(([label, href]) => (
                  <li key={label}><Link href={href} className="text-sm text-white/78 transition-colors duration-200 hover:text-white">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/12">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-blue-200 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hudi Delivery. Feito para negócios reais.</p>
          <a href="mailto:contato@hudi.delivery" className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-white">contato@hudi.delivery <ArrowUpRight className="size-3.5" aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
