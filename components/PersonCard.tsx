import Icon from "./Icon";

export default function PersonCard({
  name,
  role,
  bio,
  expertise,
  linkedin,
}: {
  name: string;
  role: string;
  bio: string;
  expertise?: string;
  linkedin?: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-xl2 border border-line bg-surface p-6 shadow-card">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-navy-light text-sm font-semibold text-navy-dark">
        {/* [SEGNAPOSTO FOTO] sostituire con fotografia reale della persona */}
        {name
          .split(" ")
          .map((n) => n[0])
          .slice(0, 2)
          .join("")}
      </div>
      <h3 className="font-display text-lg text-ink">{name}</h3>
      <p className="text-sm font-medium text-navy-dark">{role}</p>
      {expertise && (
        <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft">
          {expertise}
        </p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{bio}</p>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-dark"
        >
          Profilo LinkedIn
          <Icon name="external" className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}
