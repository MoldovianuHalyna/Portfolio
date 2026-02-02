const PROJECTS = [
  {
    title: "Project One",
    stack: "React, Node.js",
    imageAlt: "Project preview",
    href: "https://github.com/",
  },
  {
    title: "Project Two",
    stack: "React, Tailwind",
    imageAlt: "Project preview",
    href: "https://github.com/",
  },
  {
    title: "Project Three",
    stack: "React, API",
    imageAlt: "Project preview",
    href: "https://github.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight">My projects</h2>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <li key={p.title} className="rounded-xl border border-border bg-background">
              <div className="aspect-[16/10] w-full rounded-t-xl bg-muted" />
              <div className="p-6">
                <p className="text-xs font-medium text-foreground/60">{p.stack}</p>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <a
                  className="mt-4 inline-flex text-sm underline-offset-4 hover:underline"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open on GitHub
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <button
            type="button"
            className="rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            Load more
          </button>
          <p className="mt-3 text-sm text-foreground/70">
            Load more logic (+3 items per click, hide when exhausted) will be added.
          </p>
        </div>
      </div>
    </section>
  );
}
