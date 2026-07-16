"use client";

import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/site-content";
import { buttonClasses } from "@/components/ui/Button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hudi-line bg-hudi-offwhite/88 backdrop-blur-xl">
      <div className="container-site flex h-20 items-center justify-between">
        <Link href="/" className="rounded-lg" aria-label="Hudi Delivery — página inicial" onClick={() => setOpen(false)}>
          <motion.span
            className="block origin-left"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={prefersReducedMotion ? undefined : { y: -1, scale: 1.015 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={`${basePath}/hudi-delivery-lockup.svg`} alt="Hudi Delivery" width={460} height={100} priority className="h-10 w-auto sm:h-11" />
          </motion.span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-sm text-sm font-medium text-hudi-slate transition-colors duration-200 hover:text-hudi-deep">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/#contato" className={buttonClasses("primary", "px-4 py-2.5")}>Começar agora</Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="grid size-11 place-items-center rounded-lg text-hudi-deep transition-colors duration-200 hover:bg-hudi-deep/6 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div id="menu-mobile" className={`${open ? "grid" : "hidden"} border-t border-hudi-line bg-hudi-offwhite px-4 py-5 shadow-soft lg:hidden`}>
        <nav className="grid gap-1" aria-label="Navegação mobile">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 font-medium text-hudi-deep transition-colors duration-200 hover:bg-white">
              {item.label}
            </Link>
          ))}
          <Link href="/#contato" onClick={() => setOpen(false)} className={buttonClasses("primary", "mt-3 w-full")}>Começar agora</Link>
        </nav>
      </div>
    </header>
  );
}
