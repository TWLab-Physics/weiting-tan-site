"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/notes", label: "Notes" },
  { href: "/cv", label: "CV" },
];

export default function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="w-full border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="text-base font-semibold font-[family-name:var(--font-heading)] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors shrink-0"
          >
            Weiting Tan
          </Link>

          <div className="hidden sm:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setTheme(theme === "academic" ? "engineering" : "academic")
              }
              className="theme-toggle !static !top-auto !right-auto"
              title={`Switch to ${theme === "academic" ? "Engineering" : "Academic"} mode`}
            >
              {theme === "academic" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="sm:hidden border-t border-[var(--color-border)] overflow-x-auto">
        <div className="flex gap-1 px-4 py-1.5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                pathname === link.href
                  ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}