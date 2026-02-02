const FAQ_ITEMS = [
  {
    q: "How quickly can you start?",
    a: "I can usually start within 1-2 weeks depending on the project scope.",
  },
  {
    q: "Do you work with a design?",
    a: "Yes. I can implement an existing design system or help refine the UI.",
  },
  {
    q: "What tech stack do you prefer?",
    a: "React, Tailwind, Node.js, REST APIs. But I adapt to the project needs.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-y border-border bg-muted/40 px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight">Frequently asked question</h2>

        <ul className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, idx) => (
            <li key={item.q} className="rounded-xl border border-border bg-background p-6">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left"
                aria-expanded={idx === 0}
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-foreground/60">+</span>
              </button>
              {idx === 0 ? (
                <p className="mt-4 text-sm text-foreground/80">{item.a}</p>
              ) : null}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-foreground/70">
          This will be replaced with a proper Accordion (only one open, first open by default).
        </p>
      </div>
    </section>
  );
}
