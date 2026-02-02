const BENEFITS = [
  {
    title: "Clear communication",
    text: "Regular updates and transparent progress.",
  },
  {
    title: "Attention to details",
    text: "Pixel-perfect UI and robust logic.",
  },
  {
    title: "Reliable delivery",
    text: "Focus on deadlines and quality.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight">
          Benefits of working with me
        </h2>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {BENEFITS.map((b) => (
            <li key={b.title} className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">{b.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
