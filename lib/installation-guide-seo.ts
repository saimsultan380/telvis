import type { LucideIcon } from "lucide-react";
import {
  Apple,
  Box,
  Cast,
  Gamepad2,
  Laptop,
  Monitor,
  Router,
  Smartphone,
  TabletSmartphone,
  Tv,
  TvMinimal,
} from "lucide-react";

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
  "android-box": Box,
  samsung: Monitor,
  lg: Monitor,
  sony: Monitor,
  philips: Monitor,
  hisense: Monitor,
  tcl: Monitor,
  roku: TvMinimal,
  "nvidia-shield": Tv,
  ios: Smartphone,
  ipad: TabletSmartphone,
  "apple-tv": Apple,
  windows: Laptop,
  mac: Laptop,
  xbox: Gamepad2,
  playstation: Gamepad2,
  "mag-portal": Router,
  enigma2: Router,
  chromecast: Cast,
};

export const devicePageSeo: Record<string, DevicePageSeo> = {
  firestick: {
    title: "How to Install IPTV on Firestick UK | Telvis",
    description:
      "Install IPTV on Amazon Firestick or Fire TV with a compatible player, Xtream Codes or M3U login, and EPG tips.",
    keywords: ["IPTV on Firestick", "Firestick IPTV setup"],
    h1Lead: "Install IPTV on",
    h1Accent: "Firestick and Fire TV",
  },
  "android-tv": {
    title: "How to Install IPTV on Android TV | Telvis",
    description:
      "Set up IPTV on Android TV or Google TV via Google Play Store using TiviMate, IPTV Smarters Pro or another compatible player.",
    keywords: ["IPTV Android TV", "Google TV IPTV setup"],
    h1Lead: "Install IPTV on",
    h1Accent: "Android TV and Google TV",
  },
  "android-box": {
    title: "How to Install IPTV on Android Box | Telvis",
    description:
      "Connect an Android box, install a compatible IPTV player from Google Play Store, and add Xtream Codes or M3U details.",
    keywords: ["IPTV Android Box", "Android box IPTV setup"],
    h1Lead: "Install IPTV on",
    h1Accent: "Android Box",
  },
  samsung: {
    title: "How to Install IPTV on Samsung Smart TV | Telvis",
    description:
      "Use a Tizen-compatible IPTV player from Samsung Apps. Do not install Android-only apps such as TiviMate directly on Samsung TVs.",
    keywords: ["IPTV Samsung TV", "Samsung IPTV setup"],
    h1Lead: "Install IPTV on",
    h1Accent: "Samsung Smart TV",
  },
  lg: {
    title: "How to Install IPTV on LG Smart TV | Telvis",
    description:
      "Install a webOS-compatible IPTV player from the LG Content Store and add Xtream Codes or M3U activation details.",
    keywords: ["IPTV LG TV", "LG IPTV setup"],
    h1Lead: "Install IPTV on",
    h1Accent: "LG Smart TV",
  },
  sony: {
    title: "How to Install IPTV on Sony Smart TV | Telvis",
    description:
      "Many Sony TVs use Google TV or Android TV. Install a compatible player from Google Play Store and add your Telvis login.",
    keywords: ["IPTV Sony TV", "Sony IPTV setup"],
    h1Lead: "Install IPTV on",
    h1Accent: "Sony Smart TV",
  },
  philips: {
    title: "How to Install IPTV on Philips Smart TV | Telvis",
    description:
      "Philips IPTV setup depends on Android TV, Google TV or another platform. Install a supported player and add your playlist or login.",
    keywords: ["IPTV Philips TV"],
    h1Lead: "Install IPTV on",
    h1Accent: "Philips Smart TV",
  },
  hisense: {
    title: "How to Install IPTV on Hisense Smart TV | Telvis",
    description:
      "Hisense setup depends on Google TV, Android TV, VIDAA or another OS. Check the TV app store for a compatible IPTV player.",
    keywords: ["IPTV Hisense TV"],
    h1Lead: "Install IPTV on",
    h1Accent: "Hisense Smart TV",
  },
  tcl: {
    title: "How to Install IPTV on TCL Smart TV | Telvis",
    description:
      "TCL models may use Google TV, Android TV or Roku OS. Choose the matching player path for your operating system.",
    keywords: ["IPTV TCL TV"],
    h1Lead: "Install IPTV on",
    h1Accent: "TCL Smart TV",
  },
  roku: {
    title: "How to Install IPTV on Roku | Telvis",
    description:
      "Roku IPTV options are limited. Check the Channel Store carefully, or use Firestick/Android TV on the same television for Xtream Codes setups.",
    keywords: ["IPTV Roku"],
    h1Lead: "Install IPTV on",
    h1Accent: "Roku and Roku TV",
  },
  "nvidia-shield": {
    title: "How to Install IPTV on NVIDIA Shield | Telvis",
    description:
      "NVIDIA Shield runs Android TV. Install TiviMate or IPTV Smarters Pro where available and add your Telvis login or M3U playlist.",
    keywords: ["IPTV NVIDIA Shield"],
    h1Lead: "Install IPTV on",
    h1Accent: "NVIDIA Shield TV",
  },
  ios: {
    title: "How to Install IPTV on iPhone | Telvis",
    description:
      "Install a compatible App Store IPTV player on iPhone, then add Xtream Codes or M3U playlist details from your Telvis account.",
    keywords: ["IPTV iPhone", "iOS IPTV setup"],
    h1Lead: "Install IPTV on",
    h1Accent: "iPhone",
  },
  ipad: {
    title: "How to Install IPTV on iPad | Telvis",
    description:
      "Set up IPTV on iPad with a compatible App Store player and your Telvis Xtream Codes or M3U details.",
    keywords: ["IPTV iPad"],
    h1Lead: "Install IPTV on",
    h1Accent: "iPad",
  },
  "apple-tv": {
    title: "How to Install IPTV on Apple TV | Telvis",
    description:
      "Use a compatible tvOS IPTV player on Apple TV. Check platform compatibility before installing an iPhone-only app.",
    keywords: ["IPTV Apple TV"],
    h1Lead: "Install IPTV on",
    h1Accent: "Apple TV",
  },
  windows: {
    title: "How to Install IPTV on Windows | Telvis",
    description:
      "Install a compatible Windows IPTV player or VLC, then add your M3U playlist or supported login details.",
    keywords: ["IPTV Windows"],
    h1Lead: "Install IPTV on",
    h1Accent: "Windows PC or Laptop",
  },
  mac: {
    title: "How to Install IPTV on Mac | Telvis",
    description:
      "Use a compatible macOS IPTV player from the Mac App Store or official website, then add your playlist or login details.",
    keywords: ["IPTV Mac"],
    h1Lead: "Install IPTV on",
    h1Accent: "Mac and MacBook",
  },
  xbox: {
    title: "How to Install IPTV on Xbox | Telvis",
    description:
      "Check Microsoft Store options such as MyIPTV Player or Kodi, then add an M3U playlist and optional EPG URL.",
    keywords: ["IPTV Xbox"],
    h1Lead: "Install IPTV on",
    h1Accent: "Xbox",
  },
  playstation: {
    title: "IPTV on PS5 | Telvis",
    description:
      "PS5 does not offer a general IPTV playlist player. Use Firestick, Android TV or another supported device on the same TV.",
    keywords: ["IPTV PS5"],
    h1Lead: "IPTV options for",
    h1Accent: "PlayStation 5",
  },
  "mag-portal": {
    title: "How to Install IPTV on MAG Box | Telvis",
    description:
      "Configure MAG devices with the portal URL supplied for your account, then restart and load available content.",
    keywords: ["IPTV MAG Box"],
    h1Lead: "Install IPTV on",
    h1Accent: "MAG Box",
  },
  enigma2: {
    title: "How to Set Up IPTV on Enigma2 | Telvis",
    description:
      "Enigma2 setup depends on receiver model and plugins. Add authorised playlist details and avoid unknown configuration files.",
    keywords: ["IPTV Enigma2"],
    h1Lead: "Set up IPTV on",
    h1Accent: "Enigma2",
  },
  chromecast: {
    title: "How to Install IPTV on Chromecast | Telvis",
    description:
      "Chromecast with Google TV uses Android TV-compatible IPTV players. Add Xtream Codes or M3U details after install.",
    keywords: ["IPTV Chromecast"],
    h1Lead: "Install IPTV on",
    h1Accent: "Chromecast with Google TV",
  },
};

export function getDevicePageSeo(deviceId: string) {
  return devicePageSeo[deviceId];
}
