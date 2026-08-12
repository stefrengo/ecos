// Reti e partner — DATI SEGNAPOSTO. Sostituire con i loghi e i nomi reali.

export type NetworkPartner = {
  name: string;
  scope: "locale" | "nazionale" | "europeo";
  logoAlt: string;
};

export const networks: NetworkPartner[] = [
  { name: "[SEGNAPOSTO] Rete locale 1", scope: "locale", logoAlt: "Logo segnaposto rete locale 1" },
  { name: "[SEGNAPOSTO] Rete locale 2", scope: "locale", logoAlt: "Logo segnaposto rete locale 2" },
  { name: "[SEGNAPOSTO] Rete nazionale 1", scope: "nazionale", logoAlt: "Logo segnaposto rete nazionale 1" },
  { name: "[SEGNAPOSTO] Rete nazionale 2", scope: "nazionale", logoAlt: "Logo segnaposto rete nazionale 2" },
  { name: "[SEGNAPOSTO] Rete europea 1", scope: "europeo", logoAlt: "Logo segnaposto rete europea 1" },
  { name: "[SEGNAPOSTO] Rete europea 2", scope: "europeo", logoAlt: "Logo segnaposto rete europea 2" },
];
