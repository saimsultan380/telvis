import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { staggerDelay } from "@/lib/motion";
import { installationDeviceTabs } from "@/lib/installation-guide-data";
import {
  deviceGuidePath,
  getDevicePageSeo,
  guideDeviceIcons,
} from "@/lib/installation-guide-seo";
import { Monitor } from "lucide-react";

export function InstallationGuideTabs() {
  return (
    <div className="telvis-guide-device-grid">
      {installationDeviceTabs.map((section, index) => {
        const Icon = guideDeviceIcons[section.id] ?? Monitor;
        const seo = getDevicePageSeo(section.id);

        return (
          <CardReveal
            key={section.id}
            as="article"
            delay={staggerDelay(index, 0.04)}
            className="telvis-glass telvis-guide-device-card"
          >
            <CardRevealPart className="telvis-guide-device-card-inner">
              <span className="telvis-guide-tab-icon" aria-hidden="true">
                <Icon size={18} strokeWidth={1.9} />
              </span>
              <div className="telvis-guide-device-copy">
                <h3 className="telvis-guide-device-title">{section.label}</h3>
                <p className="telvis-guide-device-lead">
                  {seo?.description ?? section.title}
                </p>
              </div>
              <Link
                href={deviceGuidePath(section.id)}
                className="telvis-guide-device-link"
              >
                Open {section.label} guide
              </Link>
            </CardRevealPart>
          </CardReveal>
        );
      })}
    </div>
  );
}
