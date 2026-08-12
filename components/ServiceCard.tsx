import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import AudienceLabel from "./AudienceLabel";
import { cn } from "@/lib/utils";

const toneBg: Record<string, string> = {
  navy: "bg-navy text-white",
  pink: "bg-pink text-white",
  purple: "bg-purple text-white",
  orange: "bg-orange text-ink",
};

export default function ServiceCard({
  audience,
  title,
  description,
  cta,
  href,
  icon,
  tone,
}: {
  audience: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: IconName;
  tone: "navy" | "pink" | "purple" | "orange";
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl2 border border-line bg-surface p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft focus-visible:-translate-y-1 sm:p-8"
    >
      <div>
        <div
          className={cn(
            "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl",
            toneBg[tone]
          )}
        >
          <Icon name={icon} className="h-7 w-7" />
        </div>
        <AudienceLabel tone={tone} className="mb-4">
          {audience}
        </AudienceLabel>
        <h3 className="font-display text-2xl text-ink">{title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          {description}
        </p>
      </div>
      <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy-dark">
        {cta}
        <Icon
          name="arrowRight"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
