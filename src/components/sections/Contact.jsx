import { contact, contactSection, mailtoHref, socialLinks } from "@/content/pl";
import Button from "@/components/ui/Button";
import CopyButton from "@/components/ui/CopyButton";
import Icon from "@/components/ui/Icon";

export default function Contact() {
  return (
    <section
      id={contactSection.id}
      aria-labelledby="contact-title"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        className="absolute -bottom-48 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">
          {contactSection.eyebrow}
        </p>
        <h2
          id="contact-title"
          className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl"
        >
          {contactSection.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
          {contactSection.lead}
        </p>

        <div className="mt-10 flex justify-center">
          <Button href={mailtoHref} size="lg" icon="mail" iconPosition="start">
            {contactSection.writeCta}
          </Button>
        </div>

        <div className="mx-auto mt-6 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-border bg-surface/80 p-3 sm:flex-row sm:justify-between sm:pl-5">
          <span className="font-mono text-sm break-all text-fg select-all sm:text-base">
            {contact.email}
          </span>
          <CopyButton
            value={contact.email}
            label={contactSection.copyLabel}
            copyText={contactSection.copy}
            copiedText={contactSection.copied}
            failedText={contactSection.copyFailed}
          />
        </div>

        <p className="mt-10 text-sm text-subtle">{contactSection.elsewhere}</p>
        <ul className="mt-4 flex justify-center gap-3">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border-strong px-4 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
              >
                <Icon name={link.id} className="size-4" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
