import type { NetworkPartner } from "@/data/networks";

export default function PartnerLogoGrid({ partners }: { partners: NetworkPartner[] }) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {partners.map((partner) => (
        <li
          key={partner.name}
          className="flex h-28 items-center justify-center rounded-2xl border border-line bg-surface px-4 text-center"
        >
          {/* [SEGNAPOSTO LOGO] sostituire con il logo reale del partner */}
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            {partner.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
