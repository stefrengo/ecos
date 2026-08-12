import Link from "next/link";
import Container from "./Container";
import Blob from "./Blob";
import Icon from "./Icon";

type HeroAction = { label: string; href: string };

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  orientation,
  imageAlt,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  orientation?: string;
  imageAlt?: string;
  compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-mist">
      <Blob tone="forest" className="-left-24 -top-24 h-80 w-80 opacity-70" />
      <Blob tone="sun" className="-right-16 top-24 h-64 w-64 opacity-60" />
      <Container
        className={`relative grid items-center gap-12 ${
          compact ? "py-14 sm:py-20" : "py-16 sm:py-24"
        } lg:grid-cols-[1.1fr,0.9fr]`}
      >
        <div className="animate-rise">
          {eyebrow && (
            <p className="mb-4 inline-flex items-center rounded-full bg-forest-light px-4 py-1.5 text-sm font-semibold text-forest-dark">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {subtitle}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-coral-dark"
                >
                  {primaryAction.label}
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
              )}
              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink/30"
                >
                  {secondaryAction.label}
                </Link>
              )}
            </div>
          )}

          {orientation && (
            <p className="mt-8 max-w-xl border-l-2 border-forest/40 pl-4 text-sm leading-relaxed text-ink-soft">
              {orientation}
            </p>
          )}
        </div>

        {!compact && (
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl2 border border-line bg-gradient-to-br from-forest-light via-sun-light to-sky-light shadow-soft">
              {/* [SEGNAPOSTO IMMAGINE] Sostituire con una fotografia autentica che
                  rappresenti partecipazione, collaborazione e giovani in attività reali. */}
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
                <Icon name="handshake" className="h-10 w-10 text-forest-dark" />
                <p className="text-sm font-medium text-forest-dark">
                  {imageAlt ??
                    "Spazio riservato a una fotografia autentica delle attività ECOS"}
                </p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
