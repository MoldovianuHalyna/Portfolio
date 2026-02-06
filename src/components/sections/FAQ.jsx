import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/constants/faq";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="border-y border-border bg-muted/40 px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollAnimate>
          <h2 className="text-3xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
        </ScrollAnimate>

        <ScrollAnimate delay={0.1}>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="mt-10 space-y-3"
          >
            {FAQ_ITEMS.map((item, idx) => (
              <AccordionItem
                key={item.q}
                value={`item-${idx}`}
                className="rounded-xl border border-border bg-background px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-medium">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimate>
      </div>
    </section>
  );
}
