import type { HTMLAttributes } from "react";

export function GlassCard({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`border border-white/20 bg-white/10 shadow-sm backdrop-blur-lg ${className}`}
      {...props}
    />
  );
}
