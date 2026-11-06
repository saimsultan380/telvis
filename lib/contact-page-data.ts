import type { FaqItem } from "@/lib/faq-data";
import { routes } from "@/lib/site";

export type ContactTopic = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  list: string[];
  closing?: string;
  cta?: { href: string; label: string };
  prices?: boolean;
};

export const contactHelpTopics = [
  {
    title: "IPTV Subscription and Plan Information",
    body: "Have questions about an IPTV UK subscription, available durations, pricing or the activation process? Contact us for information before choosing your plan.",
  },
  {
    title: "Device Compatibility and Setup",
    body: "Need help with Firestick IPTV, Smart TV, Android, iPhone or another device? Tell us your device model so we can direct you to the correct setup instructions.",
  },
  {
    title: "Installation and IPTV Player Support",
    body: "Having difficulty installing an IPTV player or completing your setup? Share the app name and the step where you are experiencing trouble.",
  },
  {
    title: "Account and Login Assistance",
    body: "If your IPTV login is not working or you cannot access your account, contact us with your order reference and a description of the problem.",
  },
  {
    title: "Buffering and Streaming Problems",
    body: "Experiencing IPTV buffering, missing listings, loading errors or EPG problems? Tell us what is happening and which device you are using.",
  },
  {
    title: "Billing and Refund Enquiries",
    body: "Have a question about a payment, subscription renewal or refund eligibility? Email our support team with your order information.",
  },
] as const;

export const contactTrialChecks = [
  {
    title: "Device Compatibility",
    body: "Confirm that the app installs and your account works on your preferred device.",
  },
  {
    title: "Available Content",
    body: "Explore the live TV, movie and series categories available during your trial.",
  },
  {
    title: "Streaming Performance",
    body: "Test playback using your normal home internet connection, especially at the times you usually watch.",
  },
  {
    title: "EPG and Catch-Up",
    body: "Check the electronic programme guide and selected Catch-Up listings where available.",
  },
] as const;

export const contactTrialPrepare = [
  "Which device you want to use, such as Firestick, Smart TV, Android or iPhone.",
  "Your device model, if available.",
  "The country where you plan to use the service.",
  "Whether you prefer the dedicated app or a compatible Xtream Codes player.",
  "How many screens you would like to test.",
] as const;

export const contactInstallDevices = [
  {
    title: "Amazon Firestick and Fire TV",
    body: "Get guidance for installing the Telvis app and entering your account details on compatible Fire TV devices.",
  },
  {
    title: "Android TV and Android Box",
    body: "Find setup information for Android TV, Google TV and supported Android boxes.",
  },
  {
    title: "Samsung and LG Smart TVs",
    body: "Learn how to use a compatible Smart TV IPTV player and add your account through the supported login method.",
  },
  {
    title: "iPhone, iPad and Apple TV",
    body: "Get help choosing an available iOS player and entering your IPTV account information.",
  },
  {
    title: "Windows and Mac",
    body: "Ask about compatible IPTV players and setup options for your computer.",
  },
  {
    title: "Other Supported Devices",
    body: "Contact us about your Roku, MAG Box, Enigma2 or another device before attempting installation.",
  },
] as const;

export const contactTroubleshooting = [
  {
    title: "IPTV Buffering or Freezing",
    body: "Check your internet connection, restart your device and IPTV player, and try again. If possible, test using a wired connection.",
  },
  {
    title: "Channels or Categories Not Loading",
    body: "Refresh the playlist or restart the app. Check whether the issue affects one listing or the entire service.",
  },
  {
    title: "IPTV Login Not Working",
    body: "Check your username, password and server address. Make sure there are no typing mistakes or unnecessary spaces.",
  },
  {
    title: "EPG or TV Guide Not Updating",
    body: "Refresh the EPG data through your IPTV player, if the option is available.",
  },
  {
    title: "IPTV App Crashing",
    body: "Restart the application and check whether an update is available. Make sure your device has enough free storage.",
  },
  {
    title: "Missing Content or Listings",
    body: "Send us the exact listing name and the time you checked so we can look into the issue.",
  },
] as const;

export const contactIncludeInfo = [
  {
    title: "For Installation Support",
    items: [
      "Device brand and model",
      "IPTV app or player name",
      "Installation step where you got stuck",
      "Exact error message",
    ],
  },
  {
    title: "For Account or Billing Support",
    items: [
      "Order reference",
      "Purchase date",
      "Subscription duration",
      "Brief explanation of your enquiry",
    ],
  },
] as const;

export const contactFaqs: FaqItem[] = [
  {
    question: "How can I contact Telvis IPTV support?",
    answer:
      "You can contact Telvis through WhatsApp at +44 7482 794475 or email support@telvis.uk. Use WhatsApp for quick questions and setup assistance, or email us for billing, refund and detailed account enquiries.",
  },
  {
    question: "Is Telvis IPTV customer support available 24/7?",
    answer:
      "Yes. Telvis support is available 24 hours a day through WhatsApp and email. However, response times can vary depending on the number of enquiries and the type of issue being investigated.",
  },
  {
    question: "Can I contact Telvis before purchasing an IPTV subscription?",
    answer:
      "Yes. You can contact our team before buying an IPTV UK subscription. Ask about available plans, device compatibility, installation requirements, the free trial or any other service-related questions.",
  },
  {
    question: "How can I request a free IPTV trial from Telvis?",
    answer:
      "You can request a free 24-hour IPTV trial through the Telvis free trial page or by contacting our team on WhatsApp. Provide your device type, country and preferred app so we can guide you through the process.",
  },
  {
    question: "Can Telvis help me choose the right IPTV subscription?",
    answer:
      "Yes. If you are unsure which subscription duration to select, contact us with your requirements. We can provide information about the available one, three, six and twelve-month plans so you can compare them before ordering.",
  },
  {
    question: "Can I ask about IPTV device compatibility before subscribing?",
    answer:
      "Yes. Send us your device brand and model, such as Amazon Firestick, Samsung Smart TV, LG TV, Android Box, iPhone, iPad or Windows PC. We can direct you to the relevant compatibility and installation information.",
  },
  {
    question: "Can Telvis help me install IPTV on Firestick or Smart TV?",
    answer:
      "Yes. You can follow the Telvis IPTV Installation Guide for device-specific instructions. If you experience a problem, contact our support team and mention your device model, IPTV player and the step where the installation stopped.",
  },
  {
    question: "What should I do if my Telvis IPTV login details are not working?",
    answer:
      "First, check that you have entered the correct username, password and server address. Make sure there are no extra spaces or typing mistakes. If the problem continues, contact support with your order reference and the error message. Avoid sharing your password in public messages.",
  },
  {
    question: "Why is my IPTV buffering or freezing?",
    answer:
      "IPTV buffering can be caused by an unstable internet connection, Wi-Fi interference, device limitations, player problems or temporary issues with an individual source. Restart your router and IPTV player, check your connection and contact support if the problem continues.",
  },
  {
    question: "Can I contact Telvis about missing channels or unavailable content?",
    answer:
      "Yes. Send us the exact channel or listing name, its category and the approximate time you checked it. Availability can change, so providing these details helps us understand which listing you are asking about.",
  },
  {
    question: "How can I contact Telvis about payment or refund questions?",
    answer:
      "For payment and refund enquiries, email support@telvis.uk or message us on WhatsApp. Include the order reference, purchase date and reason for your enquiry. Eligible paid purchases have a seven-day refund guarantee subject to the published Refund Policy.",
  },
  {
    question: "What should I do if I cannot find my Telvis order reference?",
    answer:
      "Check the confirmation message or email you received after placing your order. If you cannot find it, contact support using the same email address or WhatsApp number you used during the purchase.",
  },
  {
    question: "Can I contact Telvis about EPG or Catch-Up problems?",
    answer:
      "Yes. If your electronic programme guide is not updating or a selected Catch-Up listing is unavailable, tell us which device and IPTV player you use. Include the category or listing name and any error message displayed.",
  },
  {
    question: "Can I get help with an IPTV player such as TiviMate or IPTV Smarters Pro?",
    answer:
      "You can contact us for guidance about using a compatible IPTV player with your Telvis account. Let us know the app name and device model. Available features and login methods can differ between players.",
  },
  {
    question: "How quickly will Telvis respond to my message?",
    answer:
      "Support is available 24 hours a day, but the time needed to respond can vary with enquiry volume and issue complexity. Providing your device details, order reference where relevant and a clear description can help us understand your question more quickly.",
  },
  {
    question: "Is it safe to share my account details with IPTV support?",
    answer:
      "Only provide the information needed to identify your account or troubleshoot your issue. Never send payment card numbers, security codes or your full password through a public post or group chat. Keep your login details private.",
  },
];

/** Kept for any remaining imports; prefer contact-page-data sections. */
export const contactTopics: ContactTopic[] = [
  {
    id: "trial",
    eyebrow: "Free trial",
    title: "Request a Free 24-Hour Trial",
    paragraphs: [
      "Not ready to purchase an IPTV subscription yet? Start with the free 24-hour Telvis trial and test the service on your own device and internet connection.",
    ],
    list: [...contactTrialPrepare],
    closing:
      "Once you receive your trial access and installation guidance, follow the setup instructions and check the features that matter to you.",
    cta: { href: routes.trial, label: "Request Your Free 24-Hour IPTV Trial" },
  },
];
