import { cn } from "@/lib/utils";

const toneClasses: Record<string, string> = {
  forest: "bg-forest-light text-forest-dark",
  coral: "bg-coral-light text-coral-dark",
  sky: "bg-sky-light text-sky",
  sun: "bg-sun-light text-ink",
};

export default function AudienceLabel({
  children,
  tone = "forest",
  className,
}: {
  children: React.ReactNode;
  tone?: "forest" | "coral" | "sky" | "sun";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
