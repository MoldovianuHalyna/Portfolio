const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Git",
];

export default function TechSkills() {
  return (
    <section id="skills" className="border-y border-border bg-muted/40 px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="sr-only">Tech Skills</h2>

        <div className="overflow-hidden rounded-xl border border-border bg-background px-6 py-8">
          <p className="text-sm font-medium text-foreground/70">Tech stack</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="mt-6 text-sm text-foreground/70">
            Running line / marquee animation will be implemented here.
          </p>
        </div>
      </div>
    </section>
  );
}
