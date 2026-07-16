import Link from "next/link";
import React from "react";

export function SiteHeader() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[1180px] z-50 bg-white/80 backdrop-blur-md border border-border-line rounded-full shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-coral text-white rounded-lg flex items-center justify-center font-bold text-xl group-hover:bg-coral-hover transition-colors">
            H
          </div>
          <span className="font-bold text-xl tracking-tight">hudi.</span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#funcionalidades"
            className="text-sm font-medium text-ink-70 hover:text-ink transition-colors"
          >
            Funcionalidades
          </Link>
          <Link
            href="#planos"
            className="text-sm font-medium text-ink-70 hover:text-ink transition-colors"
          >
            Planos
          </Link>
          <Link
            href="#clientes"
            className="text-sm font-medium text-ink-70 hover:text-ink transition-colors"
          >
            Clientes
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-ink-70 hover:text-ink transition-colors"
          >
            Dúvidas
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden md:block text-sm font-medium text-ink-70 hover:text-ink transition-colors"
          >
            Entrar
          </Link>
          <Link
            href="/cadastro"
            className="bg-coral hover:bg-coral-hover text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5"
          >
            Criar conta grátis
          </Link>
        </div>
      </div>
    </header>
  );
}
