"use client";

export type FilterGroup = {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function FilterBar({ groups }: { groups: FilterGroup[] }) {
  return (
    <div className="flex flex-wrap gap-3" role="group" aria-label="Filtra i risultati">
      {groups.map((group) => (
        <div key={group.id}>
          <label htmlFor={group.id} className="sr-only">
            {group.label}
          </label>
          <select
            id={group.id}
            value={group.value}
            onChange={(e) => group.onChange(e.target.value)}
            className="rounded-full border border-line bg-surface px-4 py-2.5 text-sm text-ink focus-visible:border-navy"
          >
            <option value="">{group.label}</option>
            {group.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
