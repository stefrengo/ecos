"use client";

import type { FormFieldConfig } from "@/data/formTypes";

export default function FormField({
  field,
  value,
  error,
  onChange,
}: {
  field: FormFieldConfig;
  value: string | boolean;
  error?: string;
  onChange: (value: string | boolean) => void;
}) {
  const inputId = `field-${field.name}`;
  const errorId = `${inputId}-error`;
  const helpId = `${inputId}-help`;
  const describedBy = [field.helpText ? helpId : null, error ? errorId : null]
    .filter(Boolean)
    .join(" ") || undefined;

  const baseInputClasses =
    "w-full rounded-xl border border-line bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-ink-soft/70 focus-visible:border-forest";

  return (
    <div className={field.fullWidth ? "sm:col-span-2" : undefined}>
      {field.type !== "checkbox" && (
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-semibold text-ink">
          {field.label}
          {field.required && (
            <span aria-hidden="true" className="ml-0.5 text-coral">
              *
            </span>
          )}
          {field.required && <span className="sr-only"> (obbligatorio)</span>}
        </label>
      )}

      {field.type === "textarea" && (
        <textarea
          id={inputId}
          name={field.name}
          rows={4}
          required={field.required}
          aria-required={field.required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          value={typeof value === "string" ? value : ""}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClasses}
        />
      )}

      {field.type === "select" && (
        <select
          id={inputId}
          name={field.name}
          required={field.required}
          aria-required={field.required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClasses}
        >
          <option value="">Seleziona un&rsquo;opzione</option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {field.type === "radio" && (
        <div
          role="radiogroup"
          aria-required={field.required}
          aria-describedby={describedBy}
          className="flex flex-col gap-2"
        >
          {field.options?.map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 text-sm text-ink">
              <input
                type="radio"
                name={field.name}
                value={opt}
                checked={value === opt}
                onChange={() => onChange(opt)}
                className="h-4 w-4 accent-forest"
              />
              {opt}
            </label>
          ))}
        </div>
      )}

      {field.type === "checkbox" && (
        <label htmlFor={inputId} className="flex items-start gap-3 text-sm text-ink">
          <input
            id={inputId}
            type="checkbox"
            name={field.name}
            required={field.required}
            aria-required={field.required}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-forest"
          />
          <span>
            {field.label}
            {field.required && <span aria-hidden="true" className="ml-0.5 text-coral">*</span>}
          </span>
        </label>
      )}

      {field.type === "file" && (
        <input
          id={inputId}
          type="file"
          name={field.name}
          required={field.required}
          aria-required={field.required}
          aria-describedby={describedBy}
          onChange={(e) => onChange(e.target.files?.[0]?.name ?? "")}
          className="block w-full text-sm text-ink-soft file:mr-4 file:rounded-full file:border-0 file:bg-forest-light file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-forest-dark"
        />
      )}

      {(field.type === "text" ||
        field.type === "email" ||
        field.type === "tel" ||
        field.type === "number") && (
        <input
          id={inputId}
          type={field.type}
          name={field.name}
          required={field.required}
          aria-required={field.required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          value={typeof value === "string" ? value : ""}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClasses}
        />
      )}

      {field.helpText && (
        <p id={helpId} className="mt-1.5 text-xs text-ink-soft">
          {field.helpText}
        </p>
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs font-medium text-coral-dark" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
