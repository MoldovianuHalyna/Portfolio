export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <a href="#hero" className="text-lg font-semibold tracking-tight">
          Halyna.
        </a>

        <ul className="flex flex-wrap gap-4" aria-label="Footer social links">
          <li>
            <a
              className="text-sm underline-offset-4 hover:underline"
              href="https://www.linkedin.com/school/goit-start-your-career-in-it"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="text-sm underline-offset-4 hover:underline"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
