import { ChevronDown } from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import type { FaqItem } from "@/lib/faq-data";
import { staggerDelay } from "@/lib/motion";

type FaqListProps = {
  items: readonly FaqItem[];
  className?: string;
};

export function FaqList({ items, className }: FaqListProps) {
  return (
    <div className={`telvis-faq-list${className ? ` ${className}` : ""}`}>
      {items.map((faq, index) => (
        <CardReveal
          key={faq.question}
          as="details"
          delay={staggerDelay(index, 0.05)}
          className="telvis-glass telvis-faq-item"
        >
          <CardRevealPart as="summary" variant="content">
            <span>{faq.question}</span>
            <ChevronDown
              className="telvis-faq-chevron"
              size={18}
              strokeWidth={2}
              aria-hidden="true"
            />
          </CardRevealPart>
          <CardRevealPart as="p" variant="content">
            {faq.answer}
          </CardRevealPart>
        </CardReveal>
      ))}
    </div>
  );
}
