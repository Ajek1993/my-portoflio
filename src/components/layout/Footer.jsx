import { footer, socialLinks } from "@/content/pl";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <p className="text-sm text-subtle">{footer.rights(year)}</p>
        <ul className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
              >
                <Icon name={link.id} className="size-5" title={link.label} />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="ml-2 inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
            >
              <Icon name="arrowUp" className="size-4" />
              {footer.backToTop}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
