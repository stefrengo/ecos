"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PublicationCard from "./PublicationCard";
import FilterBar from "./FilterBar";
import SearchInput from "./SearchInput";
import EmptyState from "./EmptyState";
import {
  publications,
  publicationYears,
  publicationLanguages,
} from "@/data/publications";

export default function PublicationsArchive() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");

  const filtered = useMemo(() => {
    return publications.filter((pub) => {
      const matchesQuery =
        query.trim() === "" ||
        `${pub.title} ${pub.summary}`.toLowerCase().includes(query.toLowerCase());
      const matchesYear = !year || String(pub.year) === year;
      const matchesLanguage = !language || pub.language === language;
      return matchesQuery && matchesYear && matchesLanguage;
    });
  }, [query, year, language]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchInput
          value={query}
          onChange={setQuery}
          label="Cerca una pubblicazione"
          placeholder="Cerca per titolo o parola chiave"
        />
        <FilterBar
          groups={[
            {
              id: "year",
              label: "Anno",
              options: publicationYears.map(String),
              value: year,
              onChange: setYear,
            },
            {
              id: "language",
              label: "Lingua",
              options: publicationLanguages,
              value: language,
              onChange: setLanguage,
            },
          ]}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            title="Nessuna pubblicazione trovata"
            text="Prova a modificare la ricerca o rimuovere alcuni filtri."
          />
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pub) => (
            <Link key={pub.slug} href={`/pubblicazioni/${pub.slug}`}>
              <PublicationCard publication={pub} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
