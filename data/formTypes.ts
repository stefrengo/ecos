export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "textarea"
  | "select"
  | "checkbox"
  | "file"
  | "radio";

export type FormFieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  helpText?: string;
  options?: string[];
  fullWidth?: boolean;
};

export type FormConfig = {
  /** Identificativo interno del form, salvato in ogni invio */
  id: string;
  title: string;
  description: string;
  submitLabel: string;
  minorNotice?: string;
  fields: FormFieldConfig[];
};
