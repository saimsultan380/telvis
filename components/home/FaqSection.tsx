import { FaqList } from "@/components/faq/FaqList";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { homepageFaqs } from "@/lib/faq-data";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="telvis-section telvis-section-faq"
      aria-labelledby="faq-heading"
    >
      <div className="telvis-section-inner telvis-faq-layout">
        <div className="telvis-faq-intro">
          <SectionHeader
            id="faq-heading"
            eyebrow="FAQ"
            title={
              <>
                Frequently Asked Questions About{" "}
                <TitleAccent>Telvis IPTV UK</TitleAccent>
              </>
            }
          />
        </div>

        <FaqList items={homepageFaqs} />
      </div>
    </section>
  );
}
