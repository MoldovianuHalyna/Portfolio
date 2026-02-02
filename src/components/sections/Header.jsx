import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#about", label: "About me" },
  { href: "#skills", label: "Tech skills" },
  { href: "#projects", label: "My projects" },
  { href: "#benefits", label: "Benefits" },
  { href: "#faq", label: "FAQ" },
  { href: "#reviews", label: "Reviews" },
  { href: "#work", label: "Work together" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const onNavClick = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#hero" className="text-lg font-semibold tracking-tight">
          Galina
        </a>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-background"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="mx-auto flex h-full max-w-6xl flex-col px-4 py-4 md:px-6">
            <div className="flex items-center justify-between">
              <a
                href="#hero"
                className="text-lg font-semibold tracking-tight"
                onClick={onNavClick}
              >
                Halyna.
              </a>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-10" aria-label="Mobile primary">
              <ul className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      className="text-xl font-medium"
                      href={item.href}
                      onClick={onNavClick}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
