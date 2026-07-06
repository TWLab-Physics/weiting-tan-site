import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-surface)] mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[var(--color-text-secondary)]">
            <span className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-text)]">
              {profile.name}
            </span>{" "}
            — {profile.affiliationShort}
          </div>
          <div className="flex items-center gap-4 text-xs text-[var(--color-muted)]">
            <a
              href={`https://${profile.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              GitHub
            </a>
            <a
              href={`https://${profile.contact.scholar}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Google Scholar
            </a>
            <span>·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}