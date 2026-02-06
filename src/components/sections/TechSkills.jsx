import { motion } from "motion/react";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

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
    <section
      id="skills"
      className="border-y border-border bg-muted/40 px-4 py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="sr-only">Tech Skills</h2>

        <ScrollAnimate>
          <div className="overflow-hidden rounded-xl border border-border bg-background px-6 py-8">
            <p className="text-sm font-medium text-foreground/70">Tech stack</p>

            <motion.div
              className="mt-6 flex flex-wrap gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {SKILLS.map((skill) => (
                <motion.span
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  className="rounded-full border border-border px-3 py-1 text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <p className="mt-6 text-sm text-foreground/70">
              Running line / marquee animation will be implemented here.
            </p>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
