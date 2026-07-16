import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FinalCta } from "@/components/sections/FinalCta";
import { PricingTable } from "@/components/sections/PricingTable";

export const metadata: Metadata = { title: "Planos | Hudi Delivery", description: "Planos da Hudi Delivery para restaurantes de todos os tamanhos." };

export default function PlanosPage() {
  return <><SiteHeader /><main id="main-content" tabIndex={-1}><PricingTable standalone /><FinalCta /></main><SiteFooter /></>;
}
