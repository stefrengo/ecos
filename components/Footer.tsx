import Link from "next/link";
import Container from "./Container";
import Icon from "./Icon";
import { footerLinks } from "@/data/navigation";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      {/* Banda "Parliamo." — presente in fondo a ogni pagina nei mockup PDF. */}
      <div className="bg-orange">
        <Container className="grid gap-8 py-14 sm:grid-cols-2 sm:items-center">
          <h2 className="font-display text-4xl text-navy-dark sm:text-5xl">
            Parliamo.
          </h2>
          <div className="space-y-6">
            <div>
              <p className="max-w-sm text-[15px] leading-relaxed text-navy-dark/90">
                Compila il form per avere informazioni, segnalare un ragazzo,
                proporre una collaborazione, una mobilità, un progetto
                europeo o una partnership aziendale.
              </p>
              <Link
                href="/contatti"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-navy-dark"
              >
                Compila il form
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <p className="text-[15px] font-semibold text-navy-dark">
                Vuoi lavorare con noi?
              </p>
              <p className="mt-1 max-w-sm text-[15px] leading-relaxed text-navy-dark/90">
                Invia una candidatura spontanea e raccontaci le tue
                competenze e la tua esperienza.
              </p>
              <Link
                href="/lavora-con-noi"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-navy-dark/40 px-6 py-3.5 text-[15px] font-semibold text-navy-dark hover:border-navy-dark"
              >
                Candidatura spontanea
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-navy-dark text-white">
        <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl font-semibold text-white">
              {site.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {site.description}
            </p>
            <div className="mt-6 flex gap-3">
              {Object.entries(site.social).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 hover:border-white hover:text-white"
                  aria-label={`ECOS su ${key}`}
                >
                  <span className="text-xs font-semibold uppercase">
                    {key.slice(0, 2)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Le nostre aree">
            <h2 className="mb-4 text-sm font-semibold text-white">Cosa facciamo</h2>
            <ul className="space-y-2.5">
              {footerLinks.aree.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="ECOS">
            <h2 className="mb-4 text-sm font-semibold text-white">ECOS</h2>
            <ul className="space-y-2.5">
              {footerLinks.istituzionale.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-white">Contatti</h2>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{site.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {site.address.line1}, {site.address.city}
                </span>
              </li>
            </ul>
          </div>
        </Container>

        <div className="border-t border-white/10 py-6">
          <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/60 sm:flex-row">
            <p>
              © {year} {site.legalName}. Tutti i diritti riservati.
            </p>
            <div className="flex gap-5">
              {footerLinks.legale.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
