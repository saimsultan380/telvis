import { FaqList } from "@/components/faq/FaqList";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { contactFaqs } from "@/lib/contact-page-data";

export function ContactFaq() {
  return (
    <section
      id="contact-faq"
      className="telvis-section telvis-section-faq"
      aria-labelledby="contact-faq-heading"
    >
      <div className="telvis-section-inner telvis-faq-layout">
        <div className="telvis-faq-intro">
          <SectionHeader
            id="contact-faq-heading"
            eyebrow="FAQ"
            title={
              <>
                Frequently Asked Questions About{" "}
                <TitleAccent>Telvis IPTV Support</TitleAccent>
              </>
            }
          />
        </div>
        <FaqList items={contactFaqs} />
      </div>
    </section>
  );
}
