import Link from "next/link";
import Container from "./Container";
import Icon from "./Icon";
import { cn } from "@/lib/utils";

export default function CTASection({
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  tone = "navy",
  external = false,
}: {
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  tone?: "navy" | "ink" | "pink";
  external?: boolean;
}) {
  const toneClasses: Record<string, string> = {
    navy: "bg-navy text-white",
    ink: "bg-ink text-white",
    pink: "bg-pink text-white",
  };

  return (
    <section className="py-4">
      <Container>
        <div
          className={cn(
            "flex flex-col items-start justify-between gap-6 rounded-xl2 px-8 py-10 sm:flex-row sm:items-center sm:px-12 sm:py-12",
            toneClasses[tone]
          )}
        >
          <div className="max-w-xl">
            <h3 className="font-display text-2xl sm:text-[1.75rem]">{title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/85">
              {text}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={primaryHref}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {primaryLabel}
              <Icon
                name={external ? "external" : "arrowRight"}
                className="h-4 w-4"
              />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/40 px-6 py-3.5 text-[15px] font-semibold text-white hover:border-white"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
