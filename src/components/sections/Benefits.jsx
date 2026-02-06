import { motion } from "motion/react";
import { BENEFITS } from "@/constants/benefits";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

export default function Benefits() {
  return (
    <section id="benefits" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollAnimate>
          <h2 className="text-3xl font-semibold tracking-tight">
            Benefits of working with me
          </h2>
        </ScrollAnimate>

        <motion.ul
          className="mt-10 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {BENEFITS.map((b) => (
            <motion.li
              key={b.title}
              className="rounded-xl border border-border bg-background p-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">{b.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
