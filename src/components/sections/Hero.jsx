import { BubbleBackground } from "../animate-ui/components/backgrounds/bubble";

export default function Hero() {
  return (
    <section id="hero" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Hello. I'm Fullstack developer
          </h1>
          <p className="mt-4 max-w-prose text-foreground/80">
            I build modern web applications with a focus on clean UI,
            accessibility, and performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Order the project
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              View projects
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-4" aria-label="Social links">
            <li>
              <a
                className="text-sm underline-offset-4 hover:underline"
                href="https://www.instagram.com/goitclub/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="text-sm underline-offset-4 hover:underline"
                href="https://www.facebook.com/goITclub/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="group rounded-xl border border-border bg-muted p-8 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01]">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
            <BubbleBackground className="rounded-lg from-muted to-background" />
          </div>
        </div>
      </div>
    </section>
  );
}
