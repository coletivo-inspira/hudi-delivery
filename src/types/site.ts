import type { LucideIcon } from "lucide-react";

export type Feature = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  tone: "light" | "deep";
};

export type Plan = {
  name: string;
  description: string;
  price: string;
  cadence?: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
