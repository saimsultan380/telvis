import { routes } from "@/lib/site";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | {
      type: "cta";
      title: string;
      body: string;
      primaryLabel: string;
      primaryHref: string;
      secondaryLabel?: string;
      secondaryHref?: string;
    };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  keywords: string[];
  category: string;
  readMinutes: number;
  datePublished: string;
  dateModified: string;
  excerpt: string;
  blocks: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "iptv-uk-free-trial-what-to-test-24-hours",
    title: "IPTV UK Free Trial: What to Test in 24 Hours Before You Pay",
    seoTitle: "IPTV UK Free Trial Guide | What to Test in 24 Hours | Telvis",
    description:
      "Use a 24-hour IPTV UK free trial properly: device setup, live categories, sport, movies, EPG and home Wi-Fi. Telvis checklist before you choose a plan.",
    keywords: [
      "IPTV UK free trial",
      "24 hour IPTV trial",
      "IPTV trial UK",
      "try IPTV before buying",
    ],
    category: "Getting started",
    readMinutes: 9,
    datePublished: "2026-09-20",
    dateModified: "2026-09-26",
    excerpt:
      "A free trial only helps if you test the right things on the right device. This checklist shows UK buyers what to verify in 24 hours before paying for IPTV.",
    blocks: [
      {
        type: "p",
        text: "An IPTV UK free trial should answer one question: will this service work on my screen, on my broadband, at the time I actually watch? Many UK buyers activate a trial, scroll for five minutes, and then blame the subscription when something fails on match day. A structured 24-hour test avoids that.",
      },
      {
        type: "p",
        text: "Telvis offers a free 24-hour trial so you can check compatibility before choosing a paid plan. This guide explains what to test, in what order, and when to contact support — whether you trial Telvis or any other provider that offers a short test window.",
      },
      {
        type: "h2",
        text: "Why a 24-hour IPTV trial is worth doing properly",
      },
      {
        type: "p",
        text: "IPTV delivers live and on-demand listings through an internet connection and a compatible app or player. Picture quality, category load times and EPG behaviour all depend on your device, player and home network — not only on the subscription itself. A trial on the wrong device, or on mobile data instead of home Wi-Fi, tells you very little.",
      },
      {
        type: "ul",
        items: [
          "Confirm the app installs and your login works on your main TV or Firestick",
          "Check that live, movie and series categories load without constant errors",
          "Test at the time you normally watch — especially for evening sport or peak hours",
          "Verify sound, remote navigation and EPG where available",
          "Ask support to confirm how many screens can play at once on your chosen plan",
        ],
      },
      {
        type: "cta",
        title: "Start a Telvis 24-hour trial",
        body: "Request trial access on your own Firestick, Smart TV or phone. No card required — test first, then compare plans from £9.99.",
        primaryLabel: "Request Free Trial",
        primaryHref: routes.trial,
        secondaryLabel: "Telvis IPTV UK overview",
        secondaryHref: routes.iptvUk,
      },
      {
        type: "h2",
        text: "Before the clock starts: prepare your device",
      },
      {
        type: "p",
        text: "Do not start the trial until you know which app and setup method you need. Firestick users often install via Downloader; Samsung or LG Smart TVs typically use a compatible player from the official app store with Xtream Codes details. If you are unsure, read the device guide first so you do not burn trial time on the wrong steps.",
      },
      {
        type: "ol",
        items: [
          "Decide your primary device — the one you will use most after paying",
          "Connect it to the same Wi-Fi you use for everyday streaming",
          "Free storage space for app updates if you sideload on Firestick",
          "Have your trial login, server address and setup notes ready in one place",
          "Close other heavy downloads on the home network during the first load",
        ],
      },
      {
        type: "h2",
        text: "Hour-by-hour checklist for a useful IPTV UK trial",
      },
      {
        type: "h3",
        text: "First 30 minutes: login and first load",
      },
      {
        type: "p",
        text: "Install or open the recommended player, enter username, password and complete server URL exactly as supplied. Typos in the server field are the most common trial failure. Allow the first catalogue update to finish before you judge speed — initial loads can take several minutes.",
      },
      {
        type: "h3",
        text: "Next 2–3 hours: categories that matter to you",
      },
      {
        type: "p",
        text: "Open the live categories you care about — UK entertainment, news, kids, or sport categories you plan to watch. You are not trying to watch everything; you are checking that the listings you need appear and play on your connection. If a category is empty, note whether it populates after a refresh or app restart.",
      },
      {
        type: "h3",
        text: "Evening block: peak-time test",
      },
      {
        type: "p",
        text: "If possible, stream during the same evening window when your household usually watches TV. Wi-Fi congestion and busy ISP routes show up then. Buffering once might be a one-off listing; buffering on every channel points to network or setup issues support can help with.",
      },
      {
        type: "h3",
        text: "Before the trial ends: movies, series and EPG",
      },
      {
        type: "p",
        text: "Browse a few on-demand titles if your plan includes them. Open the EPG on a live channel where guide data is available. Catch-Up, if offered, works only on selected listings — do not assume every channel supports it.",
      },
      {
        type: "h2",
        text: "What to write down if something fails",
      },
      {
        type: "p",
        text: "Good support fixes problems faster when you send clear facts. Include your device model, app name, whether the issue affects one channel or all channels, and a photo of any error message. Never post your full password in public chats.",
      },
      {
        type: "ul",
        items: [
          "Device: e.g. Firestick 4K, Samsung TV model, Android phone",
          "App: dedicated Telvis app or third-party player name",
          "Issue: login error, black screen, buffering, missing EPG",
          "Time: when it happened and whether other apps stream fine on the same Wi-Fi",
        ],
      },
      {
        type: "h2",
        text: "After a successful trial: choosing a plan",
      },
      {
        type: "p",
        text: "If the trial meets your needs, compare plan length against how long you want to commit. Telvis plans start at £9.99 for one month, with lower average monthly cost on three, six and twelve-month options. Confirm screen allowance and refund terms before payment. Eligible paid orders include a seven-day refund guarantee under the published Refund Policy.",
      },
      {
        type: "cta",
        title: "Trial worked? Compare Telvis plans",
        body: "Every plan includes the same listed catalogue and support. Pick the term that fits your budget after a successful 24-hour test.",
        primaryLabel: "View Plans from £9.99",
        primaryHref: routes.plans,
        secondaryLabel: "Read customer reviews",
        secondaryHref: routes.reviews,
      },
      {
        type: "h2",
        text: "Common trial mistakes to avoid",
      },
      {
        type: "ul",
        items: [
          "Testing on a phone only, then expecting the same on a Smart TV without checking",
          "Using guest Wi-Fi or mobile data instead of your home broadband",
          "Installing two different players at once and mixing login details between them",
          "Expecting every listing to be 4K or available in Catch-Up",
          "Skipping support when a simple EPG refresh or server typo fix would solve the issue",
        ],
      },
      {
        type: "p",
        text: "IPTV is a technology, not a guarantee of identical performance on every channel. A careful trial turns an IPTV UK free trial into a buying decision you can trust — and that is what protects you more than any marketing claim on a competitor homepage.",
      },
    ],
  },
  {
    slug: "install-iptv-on-firestick-uk-guide",
    title: "How to Install IPTV on Firestick UK (2026 Setup Guide)",
    seoTitle: "Install IPTV on Firestick UK (2026) | Telvis Step-by-Step",
    description:
      "Install IPTV on Amazon Firestick or Fire TV in the UK: Downloader, app install, login and EPG tips. Full Telvis Firestick guide plus trial link.",
    keywords: [
      "IPTV Firestick UK",
      "install IPTV on Firestick",
      "IPTV on Fire TV UK",
      "Firestick IPTV setup",
    ],
    category: "Installation",
    readMinutes: 11,
    datePublished: "2026-09-22",
    dateModified: "2026-09-26",
    excerpt:
      "Firestick is the most common UK device for IPTV. Follow this 2026 setup path — Downloader, verified app install, login and troubleshooting — before you pay for a plan.",
    blocks: [
      {
        type: "p",
        text: "Fire TV Stick and Fire TV Cube remain the most popular way UK households try IPTV. The setup is straightforward once you use one method at a time: install a trusted app, enter your account details exactly as supplied, and allow the first catalogue load to complete. This guide walks through a typical Telvis Firestick path and points to the full device page for screenshots-level detail.",
      },
      {
        type: "h2",
        text: "What you need before installing IPTV on Firestick",
      },
      {
        type: "ul",
        items: [
          "Amazon Firestick, Fire TV Stick 4K or Fire TV Cube on the same Amazon account",
          "Active trial or subscription login from your provider",
          "Stable home Wi-Fi — Ethernet adapter optional but helpful for 4K listings",
          "Downloader app from the Amazon Appstore for sideloading the dedicated app when required",
          "Permission to install apps from unknown sources for Downloader, if your Fire OS version asks for it",
        ],
      },
      {
        type: "cta",
        title: "New to Telvis?",
        body: "Start with a 24-hour trial on the same Firestick you plan to keep. If login and picture look good, choose a plan from £9.99.",
        primaryLabel: "Free Firestick Trial",
        primaryHref: routes.trial,
        secondaryLabel: "Full Firestick guide",
        secondaryHref: "/installation-guide/firestick",
      },
      {
        type: "h2",
        text: "Step 1: Install Downloader on Firestick",
      },
      {
        type: "p",
        text: "From the Fire TV home screen, search for Downloader and install the recognised orange Downloader application. If you cannot find it in your region, check Amazon’s help pages for your Fire OS version or contact Telvis support for the current recommended approach.",
      },
      {
        type: "h2",
        text: "Step 2: Allow app installation",
      },
      {
        type: "p",
        text: "Open Settings, then My Fire TV, then Developer Options (or Install Unknown Apps on newer Fire OS). Enable installation for Downloader when prompted. This is a standard step for sideloading the dedicated player — not a hack, but a normal Fire TV configuration.",
      },
      {
        type: "h2",
        text: "Step 3: Download the Telvis app with your code",
      },
      {
        type: "p",
        text: "Open Downloader, enter the verified downloader code supplied by Telvis (shown in your welcome message and on the official Firestick installation page), and confirm the download belongs to Telvis before installing. Delete the APK after install if you want to free storage.",
      },
      {
        type: "h2",
        text: "Step 4: Sign in and wait for the first load",
      },
      {
        type: "p",
        text: "Open the app and enter username, password and complete server address from your trial or paid welcome email. Do not truncate http:// or port numbers. Keep the app open until live, movie, series and EPG categories finish their first sync.",
      },
      {
        type: "h2",
        text: "Alternative: Xtream Codes on a third-party player",
      },
      {
        type: "p",
        text: "Some users prefer IPTV Smarters, IBO Player or similar apps from the store or sideload. Telvis supports Xtream Codes login on many compatible players. Third-party apps may charge their own activation fee — that is separate from your Telvis subscription unless checkout clearly states otherwise.",
      },
      {
        type: "h2",
        text: "Firestick IPTV troubleshooting (UK)",
      },
      {
        type: "h3",
        text: "Buffering on every channel",
      },
      {
        type: "p",
        text: "Move the Firestick closer to the router, restart the router, close background apps, or try a lower-quality option if the player offers it. Test another streaming app on the same Firestick to see if the issue is network-wide.",
      },
      {
        type: "h3",
        text: "Login failed or categories empty",
      },
      {
        type: "p",
        text: "Re-check server URL, username and password. Refresh the EPG from the player menu if available. Contact support with your device model and a screenshot of the error — not your password.",
      },
      {
        type: "h3",
        text: "App not installed",
      },
      {
        type: "p",
        text: "Free storage on the Firestick, remove an old version of the same app, reboot the device and try the download again.",
      },
      {
        type: "h2",
        text: "Why Firestick setup matters for SEO buyers — and for you",
      },
      {
        type: "p",
        text: "Searches for IPTV Firestick UK are high intent: the user already owns the device and wants a working login today. Providers that publish clear Firestick guides earn trust and reduce refund requests. Telvis keeps a dedicated Firestick URL, structured steps and WhatsApp support so you are not stuck on a generic homepage tab.",
      },
      {
        type: "cta",
        title: "Install done? Test on your connection",
        body: "Use the trial to check sport and entertainment categories on your Firestick before you pick a one, three, six or twelve-month plan.",
        primaryLabel: "Start 24-Hour Trial",
        primaryHref: routes.trial,
        secondaryLabel: "WhatsApp install help",
        secondaryHref: "https://wa.me/447482794475",
      },
      {
        type: "p",
        text: "Listed channels and quality vary by listing and time of day. IPTV technology is legal; customers must use content they are entitled to access. For the canonical step list maintained with your account details, use the Telvis Firestick installation page linked from the main Installation Guide.",
      },
    ],
  },
  {
    slug: "iptv-uk-vs-pay-tv-costs-uk-households",
    title: "IPTV UK vs Cable and Satellite: What UK Households Pay in 2026",
    seoTitle: "IPTV UK vs Pay TV Costs (2026) | Telvis Plans from £9.99",
    description:
      "Compare IPTV UK subscription costs with typical UK cable and satellite bundles in 2026. See trial-first buying, contracts, devices and when Telvis plans make sense.",
    keywords: [
      "IPTV UK subscription",
      "IPTV UK cost",
      "best IPTV UK",
      "IPTV UK plans",
      "cheap IPTV UK",
    ],
    category: "Pricing & value",
    readMinutes: 10,
    datePublished: "2026-09-24",
    dateModified: "2026-09-26",
    excerpt:
      "UK pay TV bundles often exceed £80 a month. See how an IPTV UK subscription compares on price, contracts, devices and trials — without ignoring the fine print.",
    blocks: [
      {
        type: "p",
        text: "UK households comparing IPTV UK against cable or satellite are really comparing three things: monthly cost, contract lock-in, and whether the service works on the devices they already own. Marketing pages that only shout channel counts miss the question most buyers ask — what will I pay, and can I leave if it does not work?",
      },
      {
        type: "h2",
        text: "Typical UK pay TV costs in 2026",
      },
      {
        type: "p",
        text: "Bundled pay TV from major UK providers often lands between roughly £80 and £110 or more per month once sport, cinema or multi-room extras are included. Contracts frequently run 12 to 18 months. Installation may require engineer visits or proprietary boxes tied to the main television.",
      },
      {
        type: "p",
        text: "Those packages can suit viewers who want a single bill and regulated broadcast products. They are less flexible for households that already stream on Firestick, Smart TV apps and mobile devices across the home.",
      },
      {
        type: "h2",
        text: "How Telvis IPTV UK pricing compares",
      },
      {
        type: "p",
        text: "Telvis publishes plan prices on the Plans page: £9.99 for one month, £24.99 for three months, £39.99 for six months and £49.99 for twelve months. The twelve-month option averages about £4.17 per month — far below a typical pay TV bundle, with no engineer visit and setup via published guides.",
      },
      {
        type: "ul",
        items: [
          "Free 24-hour trial before you pay for a longer term",
          "Seven-day refund guarantee on eligible paid orders (see Refund Policy)",
          "Same listed catalogue features across plan lengths — you choose commitment, not content tier",
          "Firestick, Smart TV, mobile and PC setup paths documented on separate guide pages",
          "WhatsApp and email support 24 hours a day",
        ],
      },
      {
        type: "cta",
        title: "Compare Telvis plans side by side",
        body: "See one, three, six and twelve-month totals and start with a trial if you are still comparing IPTV UK providers.",
        primaryLabel: "View IPTV UK Plans",
        primaryHref: routes.plans,
        secondaryLabel: "Telvis IPTV UK hub",
        secondaryHref: routes.iptvUk,
      },
      {
        type: "h2",
        text: "What IPTV UK buyers should compare (not just price)",
      },
      {
        type: "h3",
        text: "Trial and refund terms",
      },
      {
        type: "p",
        text: "Many IPTV sites claim instant activation but hide refund rules. Telvis leads with a trial-first path and a published seven-day refund policy for eligible orders. If a provider offers no trial, you are paying before you know if your Firestick or Samsung TV setup works.",
      },
      {
        type: "h3",
        text: "Device support",
      },
      {
        type: "p",
        text: "Pay TV boxes often lock you to one TV. IPTV UK subscriptions typically work on multiple device types, but simultaneous screens depend on your plan. Confirm screen allowance before checkout.",
      },
      {
        type: "h3",
        text: "Catalogue honesty",
      },
      {
        type: "p",
        text: "Telvis lists 20,000+ live channels and 80,000+ movies and series as catalogue totals that can change. Picture quality, Catch-Up, EPG and individual listings vary. Use the trial to verify categories you care about rather than trusting the largest number on a competitor homepage.",
      },
      {
        type: "h2",
        text: "Simple cost table: pay TV bundle vs Telvis (illustrative)",
      },
      {
        type: "p",
        text: "Figures below are illustrative comparisons for budgeting — not quotes from a specific Sky, Virgin or BT package. Your household should use current provider bills for exact maths.",
      },
      {
        type: "ul",
        items: [
          "Typical bundled pay TV: often £960–£1,320+ per year before add-ons",
          "Telvis 12-month plan: £49.99 one payment (about £4.17 per month average)",
          "Telvis 1-month plan: £9.99 for flexibility while you test long-term fit",
          "Setup cost: pay TV may include install fees; Telvis uses self-setup guides",
        ],
      },
      {
        type: "h2",
        text: "When IPTV UK is a good fit",
      },
      {
        type: "p",
        text: "IPTV UK suits viewers who already use streaming apps, want multi-device flexibility, and prefer to test on their own connection before committing. It is a poor fit if you require a single regulated broadcast bundle with no setup involvement — in that case traditional pay TV or licensed streaming apps may be simpler mentally, even at higher cost.",
      },
      {
        type: "h2",
        text: "When to choose Telvis over generic IPTV providers",
      },
      {
        type: "p",
        text: "Search results for best IPTV UK include dozens of brands with similar claims. Practical differences are support response, setup documentation, trial access and published refund terms. Telvis invests in device-specific guides, a dedicated IPTV UK landing page and UK support channels so you can become a customer without guessing.",
      },
      {
        type: "cta",
        title: "Ready to run the numbers on your home?",
        body: "Start the free trial on your main TV or Firestick. If it passes your checklist, pick the plan length that matches your budget.",
        primaryLabel: "Start Free Trial",
        primaryHref: routes.trial,
        secondaryLabel: "Contact sales & support",
        secondaryHref: routes.contact,
      },
      {
        type: "h2",
        text: "Legal and licensing reminder",
      },
      {
        type: "p",
        text: "IPTV is a delivery technology. Legality depends on content rights. Customers must follow applicable UK law and access only content they are entitled to view. Telvis is intended for personal, lawful use. This article compares costs and buying experience — it is not legal advice.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}

export function getBlogPostPaths() {
  return blogPosts.map((post) => `/blog/${post.slug}`);
}
