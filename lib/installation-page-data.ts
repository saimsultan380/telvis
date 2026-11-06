import type { FaqItem } from "@/lib/faq-data";

export const installationPlatforms = [
  { device: "Amazon Firestick / Fire TV", method: "Compatible IPTV player" },
  { device: "Android TV / Google TV", method: "Google Play Store" },
  { device: "Android Box / NVIDIA Shield", method: "Compatible Android IPTV player" },
  { device: "Samsung Smart TV", method: "Samsung Apps store" },
  { device: "LG Smart TV", method: "LG Content Store" },
  { device: "Sony Smart TV", method: "Google Play Store on supported models" },
  { device: "Philips Smart TV", method: "Depends on the TV operating system" },
  { device: "Hisense Smart TV", method: "Depends on the TV operating system" },
  {
    device: "TCL Smart TV",
    method: "Google TV, Android TV or Roku OS, depending on model",
  },
  { device: "Roku / Roku TV", method: "Limited native IPTV player options" },
  { device: "iPhone / iPad / iOS", method: "Compatible App Store player" },
  { device: "Apple TV", method: "Compatible tvOS player" },
  { device: "Windows PC / laptop", method: "Compatible Windows IPTV player" },
  { device: "Mac / MacBook", method: "Compatible macOS player" },
  {
    device: "Xbox One / Series X / Series S",
    method: "Compatible Microsoft Store media player",
  },
  {
    device: "PlayStation 5",
    method:
      "No general-purpose IPTV playlist player; use another supported device",
  },
  { device: "MAG Box", method: "Portal URL configuration" },
  {
    device: "Enigma2 receiver",
    method: "Compatible receiver software and playlist configuration",
  },
  {
    device: "Chromecast with Google TV",
    method: "Android TV-compatible IPTV player",
  },
] as const;

export const installationPlayers = [
  { app: "IPTV Smarters Pro", platforms: "Android, iOS and selected Smart TV platforms" },
  { app: "TiviMate IPTV", platforms: "Android TV and compatible Android TV boxes" },
  { app: "MyIPTV Player", platforms: "Windows and supported Xbox devices" },
  { app: "Smart IPTV", platforms: "Selected Samsung and LG Smart TVs" },
  { app: "SET IPTV", platforms: "Selected Smart TVs" },
  { app: "GSE Smart IPTV", platforms: "Supported Apple and mobile devices" },
  { app: "VLC Media Player", platforms: "Windows, macOS and other supported platforms" },
  { app: "Kodi", platforms: "Supported computers, Android devices and Xbox" },
  { app: "iPlayTV", platforms: "Apple TV" },
  { app: "IPTV Extreme", platforms: "Compatible Android devices" },
  { app: "Duplex IPTV", platforms: "Selected Smart TV platforms" },
  { app: "NET IPTV", platforms: "Selected Smart TVs" },
  { app: "Smart STB", platforms: "Compatible Smart TVs and supported set-top boxes" },
] as const;

export const installationProblems = [
  { problem: "IPTV buffering", check: "Check Wi-Fi strength, internet speed and other network activity." },
  { problem: "IPTV not loading", check: "Restart the app and refresh the playlist." },
  { problem: "IPTV login error", check: "Re-enter the username, password and server URL carefully." },
  { problem: "Channels missing", check: "Refresh the playlist and check whether the channel is currently listed." },
  { problem: "EPG not working", check: "Update the EPG source and check its URL." },
  { problem: "App keeps crashing", check: "Update the app or restart your device." },
  { problem: "Connection error", check: "Check your internet and verify the server details." },
  { problem: "M3U playlist not working", check: "Confirm that the full playlist URL is correct and active." },
] as const;

export const installationTips = [
  {
    title: "Use a Stable Internet Connection",
    body: "Connect through reliable broadband. Ethernet can be useful for televisions, Android boxes and other devices that support a wired connection.",
  },
  {
    title: "Choose a Compatible IPTV Player",
    body: "Use an IPTV player that supports your device's operating system and the login format provided with your subscription.",
  },
  {
    title: "Keep Your Device Updated",
    body: "Install relevant system and application updates to maintain compatibility and reduce avoidable software problems.",
  },
  {
    title: "Refresh Your IPTV Playlist",
    body: "If channels or programme details are missing, refresh the playlist or EPG where the player provides those options.",
  },
  {
    title: "Check Your Device Storage",
    body: "Remove unused applications and temporary files if your device is running low on storage.",
  },
  {
    title: "Avoid Untrusted Downloads",
    body: "Install IPTV apps from official stores or the developer's verified website. Avoid unknown APK files and unofficial configuration tools.",
  },
] as const;

export const installationFaqs: FaqItem[] = [
  {
    question: "How do I install IPTV on my device?",
    answer:
      "To install IPTV, choose a compatible IPTV player for your device, download it from an available app store or trusted source, and open the app. Enter your IPTV login details using Xtream Codes or an M3U playlist, depending on the options supported by your player.",
  },
  {
    question: "How do I install IPTV on Firestick?",
    answer:
      "For IPTV on Firestick, install a compatible IPTV player from the Amazon Appstore if available. Open the player, select your preferred login method, and enter your account details. Follow the app's instructions to load your channels and TV guide.",
  },
  {
    question: "Can I use IPTV on a Samsung or LG Smart TV?",
    answer:
      "Yes, you can use IPTV on compatible Samsung and LG Smart TVs. Search for an IPTV player in your television's app store, install it, and follow its setup instructions. App availability depends on your TV model, operating system and region.",
  },
  {
    question: "What is the best IPTV app for Smart TVs?",
    answer:
      "The best IPTV app depends on your television's operating system and available applications. Smart IPTV, SET IPTV and other compatible players may be available on selected Samsung and LG models. Check app compatibility before installing.",
  },
  {
    question: "Can I use TiviMate IPTV on Firestick and Android TV?",
    answer:
      "Yes. TiviMate is designed for Android TV-based devices and is commonly used on compatible Fire TV devices. It is an IPTV player, not a subscription service, so you need your own supported playlist or login details.",
  },
  {
    question: "How do I set up IPTV on an Android phone?",
    answer:
      "Download a compatible IPTV player from the Google Play Store, open it and choose the available login method. Enter your Xtream Codes details or add your M3U playlist to load the available channels and content.",
  },
  {
    question: "Can I install IPTV on an iPhone or iPad?",
    answer:
      "Yes, you can use IPTV on an iPhone or iPad through a compatible application available on the Apple App Store. Install the player, add your IPTV account details or playlist, and complete the setup within the app.",
  },
  {
    question: "What is the difference between an M3U playlist and Xtream Codes?",
    answer:
      "An M3U playlist is a file or URL containing links to IPTV streams. Xtream Codes is a login method that generally uses a server URL, username and password. Both methods can be used to access IPTV content when supported by your player and service.",
  },
  {
    question: "Why is my IPTV playlist not loading?",
    answer:
      "An IPTV playlist may fail to load because of an incorrect M3U URL, expired account, internet connection problems or an incompatible player. Check your login details, restart the application and confirm that your IPTV account is active.",
  },
  {
    question: "Do I need a VPN for IPTV?",
    answer:
      "A VPN is not always required for IPTV. Some users choose a VPN for additional online privacy, but it cannot guarantee better streaming quality or make unauthorised content lawful. Check the service's terms and local laws before using IPTV.",
  },
  {
    question: "Can I use IPTV on Roku, Xbox or PS5?",
    answer:
      "IPTV support varies across these devices. Roku has limited support for IPTV playlist applications, while Xbox may offer compatible media player options. PS5 does not provide the same general IPTV player support as Android-based devices. Check available applications before choosing a setup method.",
  },
  {
    question: "Why is my IPTV buffering or freezing?",
    answer:
      "Buffering can result from a slow or unstable internet connection, Wi-Fi interference, device limitations or temporary server issues. Try restarting your router and IPTV player, using a wired connection where possible, and closing unnecessary background applications.",
  },
];
