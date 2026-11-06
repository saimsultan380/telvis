import Link from "next/link";
import { FaqList } from "@/components/faq/FaqList";
import {
  CardReveal,
  CardRevealList,
  CardRevealListItem,
  CardRevealPart,
} from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import {
  installationFaqs,
  installationPlatforms,
  installationPlayers,
  installationProblems,
  installationTips,
} from "@/lib/installation-page-data";
import { routes } from "@/lib/site";

export function InstallationPlatformsSection() {
  return (
    <section className="telvis-section" aria-labelledby="guide-platforms-heading">
      <div className="telvis-section-inner">
        <SectionHeader
          id="guide-platforms-heading"
          eyebrow="Supported devices"
          title={
            <>
              IPTV Installation: Supported Devices and{" "}
              <TitleAccent>Platforms</TitleAccent>
            </>
          }
          lead="You can set up Telvis IPTV on a range of compatible streaming devices, televisions, phones, tablets and computers. The installation method depends on the operating system and the IPTV player available on your device."
        />

        <CardReveal className="telvis-glass telvis-table-wrap">
          <table className="telvis-table">
            <thead>
              <tr>
                <th scope="col">Device or platform</th>
                <th scope="col">Installation method</th>
              </tr>
            </thead>
            <CardRevealList as="tbody">
              {installationPlatforms.map((row) => (
                <CardRevealListItem as="tr" key={row.device}>
                  <th scope="row">{row.device}</th>
                  <td>{row.method}</td>
                </CardRevealListItem>
              ))}
            </CardRevealList>
          </table>
        </CardReveal>

        <ScrollReveal variant="text">
          <p className="telvis-section-note">
            Important: App availability can vary by device model, operating
            system, country and app-store listing. Samsung uses Tizen and LG uses
            webOS, so Android-only apps such as TiviMate cannot be installed
            directly on those TVs. Roku and PlayStation also have more limited
            options than Fire TV and Android TV.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function InstallationPlayersSection() {
  return (
    <section className="telvis-section" aria-labelledby="guide-players-heading">
      <div className="telvis-section-inner">
        <SectionHeader
          id="guide-players-heading"
          eyebrow="Players"
          title={
            <>
              Best IPTV App and IPTV Player <TitleAccent>Options</TitleAccent>
            </>
          }
          lead="An IPTV app is the media player used to load and play your subscription. It does not automatically include channels or a subscription. You need to add your own authorised playlist or account details."
        />

        <CardReveal className="telvis-glass telvis-table-wrap">
          <table className="telvis-table">
            <thead>
              <tr>
                <th scope="col">IPTV player or app</th>
                <th scope="col">Commonly used on</th>
              </tr>
            </thead>
            <CardRevealList as="tbody">
              {installationPlayers.map((row) => (
                <CardRevealListItem as="tr" key={row.app}>
                  <th scope="row">{row.app}</th>
                  <td>{row.platforms}</td>
                </CardRevealListItem>
              ))}
            </CardRevealList>
          </table>
        </CardReveal>
      </div>
    </section>
  );
}

export function InstallationVpnSection() {
  return (
    <section className="telvis-section" aria-labelledby="guide-vpn-heading">
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-panel">
          <CardRevealPart>
            <SectionHeader
              id="guide-vpn-heading"
              eyebrow="VPN"
              title={
                <>
                  VPN for IPTV: What Should You <TitleAccent>Know</TitleAccent>?
                </>
              }
              lead="A VPN for IPTV can encrypt internet traffic between your device and the VPN provider. Some users choose a VPN for additional network privacy, but it does not automatically improve streaming quality or fix buffering."
              animate={false}
            />
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            If you are comparing the best VPN for IPTV, consider a reputable
            provider with a clear privacy policy, suitable apps for your streaming
            device, stable connection performance, server locations that meet your
            needs, and clear information about data handling and logging.
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            Telvis lists VPN functionality as one of its service features. Check
            the supported setup instructions before using it. A VPN does not make
            unauthorised streams lawful or guarantee access to content that is
            restricted by a provider or rights holder.
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}

export function InstallationProblemsSection() {
  return (
    <section className="telvis-section" aria-labelledby="guide-problems-heading">
      <div className="telvis-section-inner">
        <SectionHeader
          id="guide-problems-heading"
          eyebrow="Troubleshooting"
          title={
            <>
              IPTV Problems and <TitleAccent>Quick Solutions</TitleAccent>
            </>
          }
          lead="Even after completing an IPTV installation, you may occasionally experience login, playlist or playback problems. Use these checks before reinstalling the application."
        />

        <CardReveal className="telvis-glass telvis-table-wrap">
          <table className="telvis-table">
            <thead>
              <tr>
                <th scope="col">Problem</th>
                <th scope="col">What to check</th>
              </tr>
            </thead>
            <CardRevealList as="tbody">
              {installationProblems.map((row) => (
                <CardRevealListItem as="tr" key={row.problem}>
                  <th scope="row">{row.problem}</th>
                  <td>{row.check}</td>
                </CardRevealListItem>
              ))}
            </CardRevealList>
          </table>
        </CardReveal>

        <ScrollReveal variant="text">
          <p className="telvis-section-note">
            If the problem continues, contact Telvis support with your device
            model, IPTV player name and a description of the error. Do not share
            your password publicly.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function InstallationTipsSection() {
  return (
    <section className="telvis-section" aria-labelledby="guide-tips-heading">
      <div className="telvis-section-inner">
        <SectionHeader
          id="guide-tips-heading"
          eyebrow="Better streaming"
          title={
            <>
              Tips for a Better IPTV Streaming{" "}
              <TitleAccent>Experience</TitleAccent>
            </>
          }
          lead="A suitable device and correctly configured IPTV player can help make everyday viewing easier. Follow these basic steps after completing your IPTV setup."
          align="center"
        />
        <div className="telvis-feature-grid">
          {installationTips.map((tip, index) => (
            <CardReveal
              key={tip.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart as="h3" className="telvis-info-title">
                {index + 1}. {tip.title}
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                {tip.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InstallationFaqSection() {
  return (
    <section
      id="installation-faq"
      className="telvis-section telvis-section-faq"
      aria-labelledby="guide-faq-heading"
    >
      <div className="telvis-section-inner telvis-faq-layout">
        <div className="telvis-faq-intro">
          <SectionHeader
            id="guide-faq-heading"
            eyebrow="FAQ"
            title={
              <>
                Frequently Asked Questions About{" "}
                <TitleAccent>IPTV Installation</TitleAccent>
              </>
            }
          />
        </div>
        <FaqList items={installationFaqs} />
      </div>
    </section>
  );
}

export function InstallationFinalCta() {
  return (
    <section
      className="telvis-section telvis-final-cta"
      aria-labelledby="guide-final-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-final-panel">
          <CardRevealPart>
            <SectionHeader
              id="guide-final-heading"
              eyebrow="Need help"
              title={
                <>
                  Get Help With Your{" "}
                  <TitleAccent>Telvis IPTV</TitleAccent> Installation
                </>
              }
              lead="Whether you need IPTV for Firestick, IPTV for Smart TV, Android TV, Samsung TV, LG TV, iPhone, iPad or another supported device, the correct setup method depends on your platform and player. Choose the relevant guide, install a compatible IPTV player and enter the login details supplied with your Telvis account. If you need help with your IPTV login, M3U playlist, Xtream Codes or EPG setup, contact the Telvis support team through WhatsApp or email."
              align="center"
              animate={false}
            />
          </CardRevealPart>
          <CardRevealPart>
            <div className="telvis-actions telvis-final-actions">
              <Link href={routes.plans} className="telvis-cta-primary">
                Explore Telvis IPTV Plans
              </Link>
              <Link href={routes.trial} className="telvis-cta-secondary">
                Get Your Free 24-Hour Trial
              </Link>
            </div>
          </CardRevealPart>
          <CardRevealPart>
            <div className="telvis-inline-actions telvis-final-support-link">
              <Link href={routes.contact} className="telvis-cta-outline">
                Contact Support
              </Link>
            </div>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
