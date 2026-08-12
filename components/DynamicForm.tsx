"use client";

import { useState } from "react";
import type { FormConfig } from "@/data/formTypes";
import FormField from "./FormField";
import Icon from "./Icon";
import { submitFormDemo } from "@/lib/submitForm";

type Values = Record<string, string | boolean>;

export default function DynamicForm({
  config,
  sourcePage,
}: {
  config: FormConfig;
  sourcePage: string;
}) {
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  // Campo honeypot per una protezione antispam di base: deve restare vuoto.
  const [honeypot, setHoneypot] = useState("");

  function updateValue(name: string, value: string | boolean) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function validate(): boolean {
    const nextErrors: Record<string, string> = {};
    for (const field of config.fields) {
      if (!field.required) continue;
      const value = values[field.name];
      if (field.type === "checkbox") {
        if (!value) nextErrors[field.name] = "Questo campo è obbligatorio.";
      } else if (!value || (typeof value === "string" && value.trim() === "")) {
        nextErrors[field.name] = "Questo campo è obbligatorio.";
      }
      if (
        field.type === "email" &&
        typeof value === "string" &&
        value &&
        !/^\S+@\S+\.\S+$/.test(value)
      ) {
        nextErrors[field.name] = "Inserisci un indirizzo email valido.";
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return; // probabile bot: interrompe silenziosamente l'invio
    if (!validate()) return;

    setStatus("submitting");
    await submitFormDemo({
      meta: {
        formId: config.id,
        sourcePage,
        submittedAt: new Date().toISOString(),
        requestType: config.title,
      },
      data: values,
    });
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-xl2 border border-forest-light bg-forest-light/40 px-8 py-14 text-center"
      >
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white">
          <Icon name="check" className="h-7 w-7" />
        </div>
        <h3 className="font-display text-2xl text-ink">Richiesta inviata</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
          Grazie! Abbiamo ricevuto la tua richiesta (modalità dimostrativa: nessun
          dato è stato realmente trasmesso). Il team ECOS ti risponderà al più
          presto ai recapiti indicati.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {config.minorNotice && (
        <p className="rounded-xl bg-sun-light px-4 py-3 text-sm leading-relaxed text-ink">
          {config.minorNotice}
        </p>
      )}

      {/* Honeypot: campo nascosto agli utenti reali, utile contro invii automatizzati */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Non compilare questo campo</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {config.fields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            value={values[field.name] ?? (field.type === "checkbox" ? false : "")}
            error={errors[field.name]}
            onChange={(value) => updateValue(field.name, value)}
          />
        ))}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-coral-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Invio in corso…" : config.submitLabel}
        <Icon name="arrowRight" className="h-4 w-4" />
      </button>
    </form>
  );
}
