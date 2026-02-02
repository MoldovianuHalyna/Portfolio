const PROJECTS = [
  {
    title: "Book Shop",
    stack: "React,tailwind, Shadcn UI",
    imageAlt: "Project preview",
    href: "https://book-shop-uilr.vercel.app/",
  },
  {
    title: "Car Rental",
    stack: "React, Tailwind",
    imageAlt: "Project preview",
    href: "https://rental-car-ruby.vercel.app/",
  },
  {
    title: "Egg Timer",
    stack: "React, Tailwind",
    imageAlt: "Project preview",
    href: "https://egg-timer-phi.vercel.app/",
  },
  {
    title: "T-shop",
    stack: "React, Tailwind",
    imageAlt: "Project preview",
    href: "https://t-shop-jet.vercel.app/",
  },
  {
    title: "Movie Search Service",
    stack: "React, Tailwind",
    imageAlt: "Project preview",
    href: "https://goit-react-hw-05-eight-puce-31.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight">My projects</h2>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <li
              key={p.title}
              className="rounded-xl border border-border bg-background"
            >
              <div className="aspect-[16/10] w-full rounded-t-xl bg-muted" />
              <div className="p-6">
                <p className="text-xs font-medium text-foreground/60">
                  {p.stack}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <a
                  className="mt-4 inline-flex text-sm underline-offset-4 hover:underline"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open
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
            Load more logic (+3 items per click, hide when exhausted) will be
            added.
          </p>
        </div>
      </div>
    </section>
  );
}
