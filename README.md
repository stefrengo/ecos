# ECOS — nuovo sito istituzionale

Prima versione funzionante del sito ECOS, realizzata con Next.js 14 (App Router),
TypeScript e Tailwind CSS.

## Come avviare il progetto

```bash
npm install
npm run dev
```

Il sito sarà disponibile su http://localhost:3000

Altri comandi utili:

```bash
npm run lint    # controllo ESLint
npm run build   # build di produzione (verificata: 0 errori, 29 pagine generate)
npm run start   # avvia la build di produzione
```

Il progetto è stato verificato con: `tsc --noEmit` (0 errori), `next lint`
(0 warning/errori), `next build` (completata con successo, tutte le pagine
statiche generate correttamente).

## Struttura del progetto

- `app/` — pagine (App Router), una cartella per ogni route richiesta, incluse
  le route dinamiche `/laboratori/[slug]`, `/progetti/[slug]`, `/pubblicazioni/[slug]`
- `components/` — componenti riutilizzabili (Header, MobileMenu, Hero, ServiceCard,
  DynamicForm, ecc.)
- `data/` — tutti i contenuti testuali e le configurazioni dei form, centralizzati
  per facilitare aggiornamenti futuri e una futura integrazione con un CMS
- `lib/` — utility e gestione demo dell'invio dei form

## Modalità dimostrativa dei form

Tutti i form (8 configurazioni in `data/forms.ts`) usano il componente generico
`DynamicForm`, che valida i campi obbligatori lato client e simula l'invio
tramite `lib/submitForm.ts` (nessun dato viene realmente trasmesso). I punti in
cui collegare in futuro endpoint API, CRM, notifiche email, antispam avanzato e
caricamento file reale sono commentati direttamente nel codice.

## Contenuti da sostituire prima della pubblicazione

Nessun dato ufficiale di ECOS è stato inventato. Tutti i segnaposto sono
contrassegnati con `[SEGNAPOSTO]` nel codice e nei testi visibili. In sintesi,
prima del lancio occorre sostituire:

- **`data/site.ts`** — nome legale, email, telefono, indirizzo, orari, social,
  dominio ufficiale
- **`data/team.ts`** — missione, visione, storia, metodo di lavoro, membri del team
- **`data/scientificCommittee.ts`** — membri reali del Comitato scientifico
  (foto, ruolo, biografia)
- **`data/networks.ts`** — reti e partner reali (nomi e loghi)
- **`data/projects.ts`** — archivio progetti reale (titoli, partner, budget,
  risultati, finanziamenti, disclaimer obbligatori dei programmi europei)
- **`data/publications.ts`** — pubblicazioni reali (con file da collegare)
- **`data/jobs.ts`** — posizioni aperte, se presenti (l'elenco vuoto mostra già
  uno stato vuoto accogliente con invito alla candidatura spontanea)
- **Fotografie** — tutte le immagini sono attualmente segnaposto illustrativi
  (gradienti + icona), chiaramente commentati nel codice con `[SEGNAPOSTO IMMAGINE]`;
  vanno sostituiti con fotografie autentiche delle attività ECOS
- **`app/privacy/page.tsx`** e **`app/cookie-policy/page.tsx`** — testi legali
  definitivi, da redigere con un consulente privacy/legale
- **Denominazione ufficiale dei programmi europei** citata in `data/services.ts`
  e nella pagina `/progetti` (Erasmus+, CERV, Justice, Horizon Europe, FSE) — da
  verificare e uniformare
- **Font di produzione** — il sistema di design prevede "Fraunces" (titoli) e
  "Manrope" (testo); al momento vengono usati fallback di sistema perché
  l'ambiente di build non ha accesso a Google Fonts. Basta attivare
  `next/font/google` (o file self-hosted) non appena disponibile connettività
  di build verso fonts.googleapis.com/fonts.gstatic.com — i riferimenti sono già
  pronti in `tailwind.config.ts`
- **Cookie/analytics reali** — il banner cookie è dimostrativo e non installa
  alcuno strumento di tracciamento; punti di integrazione commentati in
  `components/CookieBanner.tsx`

## Pagine create

`/`, `/laboratori` (+ `/laboratori/[slug]`), `/erasmus`, `/progetti`
(+ `/progetti/[slug]`), `/partnership`, `/chi-siamo`, `/comitato-scientifico`,
`/network`, `/pubblicazioni` (+ `/pubblicazioni/[slug]`), `/lavora-con-noi`,
`/contatti`, `/privacy`, `/cookie-policy`, oltre a `sitemap.xml` e `robots.txt`
generati automaticamente.

## Accessibilità

Implementate: gerarchia dei titoli corretta, HTML semantico, navigazione da
tastiera con focus visibile ovunque, testi alternativi/etichette sui contenuti
non testuali, form con etichette sempre visibili e messaggi di errore
specifici, attributi ARIA su menu e dialoghi, rispetto di
`prefers-reduced-motion`, aree cliccabili di dimensione adeguata, nessuna
informazione affidata al solo colore (stato "in corso/concluso", errori dei
form, ecc. usano sempre anche testo o icona).
