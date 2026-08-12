import Link from "next/link";
import Container from "./Container";
import Icon from "./Icon";
import { footerLinks } from "@/data/navigation";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="font-display text-2xl font-semibold text-ink">
            {site.name}
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            {site.description}
          </p>
          <div className="mt-6 flex gap-3">
            {Object.entries(site.social).map(([key, href]) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft hover:border-forest hover:text-forest"
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
          <h2 className="mb-4 text-sm font-semibold text-ink">Cosa facciamo</h2>
          <ul className="space-y-2.5">
            {footerLinks.aree.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-soft hover:text-forest-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="ECOS">
          <h2 className="mb-4 text-sm font-semibold text-ink">ECOS</h2>
          <ul className="space-y-2.5">
            {footerLinks.istituzionale.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-soft hover:text-forest-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-ink">Contatti</h2>
          <ul className="space-y-3 text-sm text-ink-soft">
            <li className="flex items-start gap-2">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-forest-dark">
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

      <div className="border-t border-line py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-ink-soft sm:flex-row">
          <p>
            © {year} {site.legalName}. Tutti i diritti riservati.
          </p>
          <div className="flex gap-5">
            {footerLinks.legale.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-forest-dark">
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
