import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hudi Delivery | Tecnologia simples para vender mais",
  description:
    "Cardápio digital, atendimento com IA no WhatsApp e gestão de pedidos em uma plataforma feita para restaurantes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
      <body>
        <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-hudi-deep px-4 py-3 font-semibold text-white shadow-lg transition-transform focus:translate-y-0">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
