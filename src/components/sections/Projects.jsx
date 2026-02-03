import { PROJECTS } from "@/constants/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight">My projects</h2>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <li key={p.title} className="list-none">
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-xl border border-border bg-background transition-transform duration-200 hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <img
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  loading="lazy"
                  className="aspect-[16/10] w-full bg-muted object-cover"
                />
                <div className="p-6">
                  <p className="text-xs font-medium text-foreground/60">
                    {p.stack}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                  <span className="mt-4 inline-flex text-sm underline-offset-4 group-hover:underline">
                    Open
                  </span>
                </div>
              </a>
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
            Load more logic (+3 items per click, hide when exhausted) will be
            added.
          </p>
        </div>
      </div>
    </section>
  );
}
