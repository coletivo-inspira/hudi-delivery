import Image from "next/image";

type HudiMarkProps = {
  className?: string;
  decorative?: boolean;
};

export function HudiMark({ className = "", decorative = true }: HudiMarkProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <Image
      src={`${basePath}/hudi-mark.svg`}
      alt={decorative ? "" : "Hudi Delivery"}
      aria-hidden={decorative || undefined}
      width={48}
      height={70}
      className={`w-auto ${className}`}
    />
  );
}
