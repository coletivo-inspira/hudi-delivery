import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Manifesto } from "@/components/sections/Manifesto";
import { PricingTable } from "@/components/sections/PricingTable";
import { ProductShowcase } from "@/components/sections/ProductShowcase";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Manifesto />
        <ProductShowcase />
        <HowItWorks />
        <PricingTable />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
