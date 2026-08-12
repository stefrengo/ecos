import { cn } from "@/lib/utils";

const toneClasses: Record<string, string> = {
  navy: "bg-navy-light text-navy-dark",
  pink: "bg-pink-light text-pink-dark",
  purple: "bg-purple-light text-purple",
  orange: "bg-orange-light text-ink",
};

export default function AudienceLabel({
  children,
  tone = "navy",
  className,
}: {
  children: React.ReactNode;
  tone?: "navy" | "pink" | "purple" | "orange";
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
