import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types/site";

export function Accordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-hudi-line border-y border-hudi-line">
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-md px-1 py-5 text-left text-base font-semibold text-hudi-deep transition-colors duration-200 hover:text-[#172f74] [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown className="size-5 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="max-w-3xl px-1 pb-6 pr-10 leading-7 text-hudi-slate">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
