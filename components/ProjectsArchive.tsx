"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import FilterBar from "./FilterBar";
import SearchInput from "./SearchInput";
import EmptyState from "./EmptyState";
import { projects, programmes, countriesList, years } from "@/data/projects";

export default function ProjectsArchive() {
  const [query, setQuery] = useState("");
  const [programme, setProgramme] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");
  const [year, setYear] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesQuery =
        query.trim() === "" ||
        `${project.title} ${project.acronym} ${project.summary}`
          .toLowerCase()
          .includes(query.toLowerCase());
      const matchesProgramme = !programme || project.programme === programme;
      const matchesCountry = !country || project.countries.includes(country);
      const matchesStatus = !status || project.status === status;
      const matchesYear = !year || String(project.year) === year;
      return (
        matchesQuery &&
        matchesProgramme &&
        matchesCountry &&
        matchesStatus &&
        matchesYear
      );
    });
  }, [query, programme, country, status, year]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchInput
          value={query}
          onChange={setQuery}
          label="Cerca un progetto"
          placeholder="Cerca per titolo, acronimo o parola chiave"
        />
        <FilterBar
          groups={[
            {
              id: "programme",
              label: "Programma",
              options: programmes,
              value: programme,
              onChange: setProgramme,
            },
            {
              id: "country",
              label: "Paese",
              options: countriesList,
              value: country,
              onChange: setCountry,
            },
            {
              id: "status",
              label: "Stato",
              options: ["in corso", "concluso"],
              value: status,
              onChange: setStatus,
            },
            {
              id: "year",
              label: "Anno",
              options: years.map(String),
              value: year,
              onChange: setYear,
            },
          ]}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            title="Nessun progetto trovato"
            text="Prova a modificare la ricerca o rimuovere alcuni filtri."
          />
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
