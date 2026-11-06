import Link from "next/link";
import {
  CardReveal,
  CardRevealPart,
} from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import {
  contactHelpTopics,
  contactIncludeInfo,
  contactInstallDevices,
  contactTrialChecks,
  contactTrialPrepare,
  contactTroubleshooting,
} from "@/lib/contact-page-data";
import { staggerDelay } from "@/lib/motion";
import { routes, supportConfig } from "@/lib/site";

export function ContactHelpTopicsSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="contact-help-topics-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="contact-help-topics-heading"
          eyebrow="How we help"
          title={
            <>
              How Can the Telvis IPTV Support Team{" "}
              <TitleAccent>Help You</TitleAccent>?
            </>
          }
          lead="Not sure who to contact or what information to provide? Here are some of the common reasons customers get in touch with Telvis."
          align="center"
        />
        <div className="telvis-feature-grid">
          {contactHelpTopics.map((topic, index) => (
            <CardReveal
              key={topic.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart as="h3" className="telvis-info-title">
                {topic.title}
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                {topic.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactTrialSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="contact-trial-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="contact-trial-heading"
          eyebrow="Free trial"
          title={
            <>
              Want to Try Telvis First? Request Your Free{" "}
              <TitleAccent>24-Hour IPTV Trial</TitleAccent>
            </>
          }
          lead="Not ready to purchase an IPTV subscription yet? Start with the free 24-hour Telvis trial and test the service on your own device and internet connection. A trial gives you an opportunity to check the installation process, explore the available live TV, movie and series categories, and see how the service performs under your normal viewing conditions."
        />

        <CardReveal className="telvis-glass telvis-panel">
          <CardRevealPart as="h3" className="telvis-info-title">
            Before requesting your IPTV free trial, tell our team:
          </CardRevealPart>
          <CardRevealPart>
            <ul className="telvis-contact-check-list">
              {contactTrialPrepare.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            Once you receive your trial access and installation guidance, follow
            the setup instructions and check the features that matter to you.
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}

export function ContactTrialChecksSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="contact-trial-checks-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="contact-trial-checks-heading"
          eyebrow="During your trial"
          title={
            <>
              What Should You Check During Your{" "}
              <TitleAccent>IPTV Trial</TitleAccent>?
            </>
          }
        />

        <div className="telvis-feature-grid is-two">
          {contactTrialChecks.map((item, index) => (
            <CardReveal
              key={item.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart as="h3" className="telvis-info-title">
                {item.title}
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                {item.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal variant="text">
          <p className="telvis-section-note">
            Use the trial to make an informed decision before selecting a longer
            IPTV UK subscription.
          </p>
        </ScrollReveal>

        <div className="telvis-actions">
          <Link href={routes.trial} className="telvis-cta-primary">
            Request Your Free 24-Hour IPTV Trial
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ContactInstallHelpSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="contact-install-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="contact-install-heading"
          eyebrow="Installation"
          title={
            <>
              Need Help Installing IPTV on Your{" "}
              <TitleAccent>Device</TitleAccent>?
            </>
          }
          lead="Telvis supports different device categories through the dedicated app or compatible IPTV players. However, the installation method depends on your device's operating system and the applications available for it. If you are unsure how to install IPTV, visit our installation guide or contact support with your device model."
          align="center"
        />

        <div className="telvis-feature-grid">
          {contactInstallDevices.map((device, index) => (
            <CardReveal
              key={device.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart as="h3" className="telvis-info-title">
                {device.title}
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                {device.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <div className="telvis-actions">
          <Link href={routes.installation} className="telvis-cta-secondary">
            View the Telvis IPTV Installation Guide
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ContactTroubleshootingSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="contact-troubleshoot-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="contact-troubleshoot-heading"
          eyebrow="Quick checks"
          title={
            <>
              Quick IPTV Troubleshooting <TitleAccent>Help</TitleAccent>
            </>
          }
          lead="Some IPTV problems can be related to an incorrect login, an outdated player, an unstable internet connection or incomplete playlist information. Before contacting support, try these basic checks."
          align="center"
        />

        <div className="telvis-feature-grid">
          {contactTroubleshooting.map((item, index) => (
            <CardReveal
              key={item.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart as="h3" className="telvis-info-title">
                {item.title}
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                {item.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal variant="text">
          <p className="telvis-section-note">
            If these steps do not solve the problem, contact Telvis support with
            your device model, IPTV player name and a brief explanation of what
            happened.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ContactIncludeInfoSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="contact-include-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="contact-include-heading"
          eyebrow="Prepare your message"
          title={
            <>
              What Information Should You Include When{" "}
              <TitleAccent>Contacting Us</TitleAccent>?
            </>
          }
          lead="A clear message helps us understand your enquiry and provide more relevant assistance. You do not need to write a long explanation. Just include the details that relate to your problem."
        />

        <div className="telvis-contact-grid">
          {contactIncludeInfo.map((group, index) => (
            <CardReveal
              key={group.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-contact-card"
            >
              <CardRevealPart as="h3" className="telvis-info-title">
                {group.title}
              </CardRevealPart>
              <CardRevealPart>
                <ul className="telvis-contact-check-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal variant="text">
          <p className="telvis-section-note">
            For playback problems, also mention whether you are using Wi-Fi or
            Ethernet, when the issue occurs and whether other apps work normally.
            You can attach a relevant screenshot if it helps explain the problem.
            Never send your full payment card details, passwords or security codes
            in a message.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ContactFeedbackSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="contact-feedback-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-panel">
          <CardRevealPart>
            <SectionHeader
              id="contact-feedback-heading"
              eyebrow="Feedback"
              title={
                <>
                  Have Feedback or Suggestions for{" "}
                  <TitleAccent>Telvis</TitleAccent>?
                </>
              }
              lead="We want our support information and installation guides to be useful and easy to follow. If you have found an issue with a setup guide, need clarification about a feature or have a suggestion for improving the customer experience, share it with our team."
              animate={false}
            />
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            Your feedback helps us understand which topics need clearer
            instructions and what information customers need before choosing an
            IPTV subscription.
          </CardRevealPart>
          <CardRevealPart>
            <a
              href={supportConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="telvis-cta-primary"
            >
              Contact Telvis Support
            </a>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
