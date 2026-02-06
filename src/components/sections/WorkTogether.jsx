import { useState } from "react";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

const EMAIL_PATTERN = "^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$";

export default function WorkTogether() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      id="work"
      className="border-t border-border px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <ScrollAnimate>
          <h2 className="text-3xl font-semibold tracking-tight">
            Let's work together
          </h2>

          <p className="mt-4 text-foreground/80">
            Tell me about your project. I'll get back to you as soon as
            possible.
          </p>

          <div className="mt-8 space-y-2 text-sm">
            <a
              className="block underline-offset-4 hover:underline"
              href="tel:+380000000000"
            >
              +33 (782) 47-62-25
            </a>
            <a
              className="block underline-offset-4 hover:underline"
              href="mailto:your@email.com"
            >
              moldovianuhalyna@gmail.com
            </a>
          </div>
        </ScrollAnimate>

        <ScrollAnimate delay={0.15}>
          <form
            className="rounded-xl border border-border bg-background p-6"
            onSubmit={onSubmit}
          >
            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                type="email"
                name="email"
                required
                pattern={EMAIL_PATTERN}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
              />
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-medium">Message</span>
              <textarea
                className="mt-2 min-h-32 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your idea..."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send message
            </button>

            <p className="mt-3 text-sm text-foreground/70">
              On submit we will POST to the backend, show modal on success,
              toast on error.
            </p>
          </form>
        </ScrollAnimate>
      </div>
    </section>
  );
}
