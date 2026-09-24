import type { LucideIcon } from "lucide-react";
import {
  Box,
  Cast,
  Gamepad2,
  Laptop,
  Monitor,
  PlayCircle,
  Router,
  Smartphone,
  TabletSmartphone,
  Tv,
  TvMinimal,
} from "lucide-react";
import {
  formatGuideText,
  installationDeviceTabs,
  type GuideBlock,
  type GuideSectionData,
} from "@/lib/installation-guide-data";
import { routes } from "@/lib/site";

export type DevicePageSeo = {
  title: string;
  description: string;
  keywords: string[];
  h1Lead: string;
  h1Accent: string;
};

export const guideDeviceIcons: Record<string, LucideIcon> = {
  firestick: Tv,
  "android-tv": Tv,
  "android-mobile": Smartphone,
  ios: TabletSmartphone,
  "smart-tv": Monitor,
  windows: Laptop,
  mac: Laptop,
  roku: TvMinimal,
  chromecast: Cast,
  xbox: Gamepad2,
  "tv-box": Box,
  "mag-portal": Router,
  kodi: PlayCircle,
};

export const devicePageSeo: Record<string, DevicePageSeo> = {
  firestick: {
    title: "How to Install IPTV on Firestick UK | Telvis",
    description:
      "Install Telvis IPTV on Amazon Firestick or Fire TV with Downloader, the TELVIS code, and your login. Follow the steps, then test the 24-hour trial.",
    keywords: [
      "IPTV on Firestick UK",
      "install IPTV Firestick",
      "Telvis Firestick setup",
    ],
    h1Lead: "Install Telvis IPTV on",
    h1Accent: "Firestick and Fire TV",
  },
  "android-tv": {
    title: "IPTV on Android TV and Google TV | Telvis",
    description:
      "Set up Telvis IPTV on Android TV, Google TV or an Android box. Install the dedicated app or a compatible player, then sign in with your account details.",
    keywords: [
      "IPTV Android TV",
      "IPTV Google TV setup",
      "Telvis Android TV",
    ],
    h1Lead: "Set Up Telvis IPTV on",
    h1Accent: "Android TV and Google TV",
  },
  "smart-tv": {
    title: "IPTV on Samsung and LG Smart TV UK | Telvis",
    description:
      "Add Telvis IPTV to a Samsung, LG or other Smart TV using a compatible player from the official app store and your Xtream Codes login.",
    keywords: [
      "IPTV Samsung Smart TV",
      "IPTV LG Smart TV",
      "Smart TV IPTV UK",
    ],
    h1Lead: "Set Up Telvis IPTV on",
    h1Accent: "Samsung, LG and Smart TVs",
  },
  ios: {
    title: "IPTV on iPhone, iPad and Apple TV | Telvis",
    description:
      "Install a compatible App Store player on iPhone, iPad or Apple TV, then add your Telvis username, password and server address.",
    keywords: ["IPTV iPhone", "IPTV Apple TV", "IPTV iPad setup"],
    h1Lead: "Set Up Telvis IPTV on",
    h1Accent: "iPhone, iPad and Apple TV",
  },
  "android-mobile": {
    title: "IPTV on Android Phone and Tablet | Telvis",
    description:
      "Use the Telvis dedicated app or a Google Play player on an Android phone or tablet. Sign in and wait for the first catalogue update.",
    keywords: ["IPTV Android phone", "IPTV Android tablet", "Telvis mobile app"],
    h1Lead: "Set Up Telvis IPTV on",
    h1Accent: "Android Phones and Tablets",
  },
  windows: {
    title: "IPTV on Windows PC Setup | Telvis",
    description:
      "Install a verified Windows IPTV player, add your Telvis Xtream Codes details, and wait for the EPG and catalogue to load.",
    keywords: ["IPTV Windows", "IPTV PC setup", "Telvis Windows"],
    h1Lead: "Set Up Telvis IPTV on",
    h1Accent: "Windows",
  },
  mac: {
    title: "IPTV on Mac Setup | Telvis",
    description:
      "Install a compatible Mac player from a verified source, add your Telvis login, and avoid unofficial modified apps.",
    keywords: ["IPTV Mac", "IPTV macOS setup", "Telvis Mac"],
    h1Lead: "Set Up Telvis IPTV on",
    h1Accent: "Mac",
  },
  roku: {
    title: "IPTV on Roku Setup | Telvis",
    description:
      "Check whether a compatible Roku player is available for your country and model, then add only the Telvis details from your welcome message.",
    keywords: ["IPTV Roku", "Roku IPTV setup", "Telvis Roku"],
    h1Lead: "Set Up Telvis IPTV on",
    h1Accent: "Roku",
  },
  chromecast: {
    title: "IPTV on Chromecast Setup | Telvis",
    description:
      "Use Chromecast with Google TV like Android TV, or cast from a supported phone player to a classic Chromecast.",
    keywords: ["IPTV Chromecast", "Chromecast Google TV IPTV", "Telvis Chromecast"],
    h1Lead: "Set Up Telvis IPTV on",
    h1Accent: "Chromecast",
  },
  xbox: {
    title: "IPTV on Xbox Setup | Telvis",
    description:
      "Install a compatible Xbox media player from the Microsoft Store if one is available, or connect a supported streaming stick instead.",
    keywords: ["IPTV Xbox", "Xbox IPTV setup", "Telvis Xbox"],
    h1Lead: "Set Up Telvis IPTV on",
    h1Accent: "Xbox",
  },
  "tv-box": {
    title: "IPTV on TV Box and Set-Top Box | Telvis",
    description:
      "Most Android TV boxes follow the Android TV method. MAG and portal decoders use a separate portal setup.",
    keywords: ["IPTV TV box", "IPTV set top box", "Telvis Android box"],
    h1Lead: "Set Up Telvis IPTV on",
    h1Accent: "TV Boxes and Set-Top Boxes",
  },
  "mag-portal": {
    title: "IPTV MAG Portal Setup | Telvis",
    description:
      "Add the Telvis portal name and the portal address supplied for your MAG or portal-based decoder. Confirm the MAC address privately with support.",
    keywords: ["IPTV MAG", "MAG portal setup", "Telvis MAG"],
    h1Lead: "Set Up Telvis IPTV on",
    h1Accent: "MAG and Portal Decoders",
  },
  kodi: {
    title: "IPTV on Kodi Setup | Telvis",
    description:
      "Add the M3U playlist and EPG address supplied for your Telvis account in PVR Simple Client. Ask support first if your account is Xtream Codes only.",
    keywords: ["IPTV Kodi", "Kodi PVR Simple Client", "Telvis Kodi"],
    h1Lead: "Set Up Telvis IPTV on",
    h1Accent: "Kodi",
  },
};

export function deviceGuidePath(deviceId: string) {
  return `${routes.installation}/${deviceId}`;
}

export function getInstallationDevice(deviceId: string) {
  return installationDeviceTabs.find((section) => section.id === deviceId);
}

export function getDevicePageSeo(deviceId: string) {
  return devicePageSeo[deviceId];
}

export function getIndexableGuideRoutes() {
  return installationDeviceTabs.map((section) => deviceGuidePath(section.id));
}

export function guideHowToSteps(section: GuideSectionData) {
  const headingSteps: { name: string; text: string }[] = [];

  for (let index = 0; index < section.blocks.length; index += 1) {
    const block = section.blocks[index];

    if (block.type === "h3" && block.text.startsWith("Step ")) {
      const next = section.blocks[index + 1];
      headingSteps.push({
        name: block.text.replace(/^Step \d+:\s*/, ""),
        text:
          next?.type === "p" ? formatGuideText(next.text) : formatGuideText(block.text),
      });
    }
  }

  if (headingSteps.length > 0) {
    return headingSteps;
  }

  const ordered = section.blocks.find(
    (block): block is Extract<GuideBlock, { type: "ol" }> => block.type === "ol",
  );

  if (!ordered) {
    return [];
  }

  return ordered.items.map((item, index) => ({
    name: `Step ${index + 1}`,
    text: formatGuideText(item),
  }));
}
