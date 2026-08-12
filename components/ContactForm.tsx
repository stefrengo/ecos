import DynamicForm from "./DynamicForm";
import Icon from "./Icon";
import { generalContact } from "@/data/forms";
import { contact } from "@/data/contact";

export default function ContactForm() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr,1.3fr]">
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-2xl text-ink">Parla con il team ECOS</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            {contact.intro}
          </p>
        </div>
        <ul className="space-y-4 text-sm text-ink-soft">
          <li className="flex items-start gap-3">
            <Icon name="mail" className="mt-0.5 h-5 w-5 text-forest-dark" />
            <a href={`mailto:${contact.email}`} className="hover:text-forest-dark">
              {contact.email}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Icon name="phone" className="mt-0.5 h-5 w-5 text-forest-dark" />
            <span>{contact.phone}</span>
          </li>
          <li className="flex items-start gap-3">
            <Icon name="pin" className="mt-0.5 h-5 w-5 text-forest-dark" />
            <span>
              {contact.address.line1}, {contact.address.postalCode}{" "}
              {contact.address.city}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Icon name="clock" className="mt-0.5 h-5 w-5 text-forest-dark" />
            <span>{contact.hours}</span>
          </li>
        </ul>

        <div className="overflow-hidden rounded-xl2 border border-line">
          <div className="flex aspect-[4/3] items-center justify-center bg-mist text-sm font-medium text-ink-soft">
            {/* [SEGNAPOSTO MAPPA] integrare la mappa reale con le coordinate della sede */}
            Mappa della sede — da attivare con le coordinate ufficiali
          </div>
        </div>
      </div>

      <div className="rounded-xl2 border border-line bg-surface p-6 shadow-card sm:p-8">
        <DynamicForm config={generalContact} sourcePage="/contatti" />
      </div>
    </div>
  );
}
