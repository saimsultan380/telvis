import {
  CircleHelp,
  MonitorCheck,
  Receipt,
  ShieldCheck,
  TvMinimalPlay,
  Wrench,
} from "lucide-react";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";

const questions = [
  { text: "Check the available content you actually watch", icon: TvMinimalPlay },
  { text: "Test streaming quality during a trial", icon: ShieldCheck },
  { text: "Confirm device and player compatibility", icon: MonitorCheck },
  { text: "Understand the full subscription cost", icon: CircleHelp },
  { text: "Look for proper customer support", icon: Wrench },
  { text: "Read the terms before paying", icon: Receipt },
] as const;

export function ViewersWantSection() {
  return (
    <section
      id="viewers"
      className="telvis-section telvis-section-viewers"
      aria-labelledby="viewers-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="viewers-heading"
          eyebrow="Before you buy"
          title={
            <>
              What Makes a Good <TitleAccent>IPTV UK</TitleAccent> Service?
            </>
          }
          lead="There are many IPTV services available online, and choosing between them can be confusing. A large channel list or a low subscription price does not automatically mean a service will meet your requirements. Before choosing a UK IPTV provider, consider the following points."
          align="center"
        />

        <ul className="telvis-question-cloud">
          {questions.map((question, index) => {
            const Icon = question.icon;
            return (
              <CardReveal
                key={question.text}
                as="li"
                delay={staggerDelay(index, 0.06)}
                className="telvis-glass telvis-question-chip"
              >
                <CardRevealPart variant="icon" as="span">
                  <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
                </CardRevealPart>
                <CardRevealPart variant="content" as="span">
                  {question.text}
                </CardRevealPart>
              </CardReveal>
            );
          })}
        </ul>

        <ScrollReveal delay={0.1} variant="text">
          <p className="telvis-section-lead is-center">
            These checks help you compare IPTV services in the UK more carefully
            and avoid choosing a subscription based on advertising claims alone.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
