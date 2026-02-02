export default function About() {
  return (
    <section id="about" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start">
        <div className="rounded-xl border border-border bg-muted p-8">
          <div className="aspect-[4/3] w-full rounded-lg bg-background" />
          <p className="mt-4 text-sm text-foreground/70">
            Content image + png background will be added here.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-tight">About me</h2>
          <p className="mt-4 text-foreground/80">
            I’m a Fullstack developer. I enjoy turning complex problems into
            simple, beautiful, and intuitive experiences.
          </p>
          <p className="mt-3 text-foreground/80">
            This section will include your real bio, key achievements, and what
            you’re looking for.
          </p>
        </div>
      </div>
    </section>
  );
}
