"use client";

/**
 * Gestione demo dell'invio dei form.
 *
 * MODALITÀ DIMOSTRATIVA: nessun dato viene inviato a un servizio reale.
 * Simula una latenza di rete e restituisce sempre esito positivo, per
 * mostrare il flusso completo di conferma all'utente.
 *
 * INTEGRAZIONE FUTURA — sostituire il corpo della funzione con una chiamata reale, ad es.:
 *   await fetch("/api/forms/submit", { method: "POST", body: JSON.stringify(payload) })
 * Punti da collegare in futuro:
 *   - endpoint API dedicato per la validazione lato server;
 *   - integrazione con il CRM di ECOS (creazione contatto/lead);
 *   - notifica email al team competente;
 *   - sistema antispam (honeypot già presente nel form, valutare anche captcha/verifica);
 *   - caricamento reale dei file allegati (storage sicuro);
 *   - registrazione del consenso privacy con timestamp e versione informativa.
 */
export type FormSubmissionMeta = {
  formId: string;
  sourcePage: string;
  submittedAt: string;
  requestType: string;
};

export type FormSubmissionPayload = {
  meta: FormSubmissionMeta;
  data: Record<string, unknown>;
};

export async function submitFormDemo(
  payload: FormSubmissionPayload
): Promise<{ success: true }> {
  // eslint-disable-next-line no-console
  console.info("[ECOS demo] Invio simulato del form:", payload);
  await new Promise((resolve) => setTimeout(resolve, 700));
  return { success: true };
}
