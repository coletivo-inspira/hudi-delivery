import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "glass" | "ghost" | "outline";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-hudi-deep text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#172f74] hover:shadow-md",
  glass: "border border-white/25 bg-white/10 text-white backdrop-blur-lg hover:-translate-y-0.5 hover:bg-white/18",
  ghost: "text-hudi-deep hover:bg-hudi-deep/6",
  outline: "border border-hudi-deep/25 bg-transparent text-hudi-deep hover:-translate-y-0.5 hover:border-hudi-deep/45 hover:bg-white",
};

export function buttonClasses(variant: ButtonVariant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`.trim();
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant };

export function Button({ variant = "primary", className = "", type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, className)} {...props} />;
}
