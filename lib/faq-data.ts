export type FaqItem = {
  question: string;
  answer: string;
};

export const coreFaqs: FaqItem[] = [
  {
    question: "What is IPTV?",
    answer:
      "IPTV means television delivered through an internet connection instead of an aerial, cable or satellite feed. A compatible app organises the live and on-demand content supplied through your account.",
  },
  {
    question: "How much does Telvis IPTV UK cost?",
    answer:
      "Telvis plans cost £9.99 for one month, £24.99 for three months, £39.99 for six months and £49.99 for twelve months. The twelve-month plan works out at about £4.17 per month. Start with the free 24-hour trial before you pay.",
  },
  {
    question: "What do I receive after ordering?",
    answer:
      "You receive the username, password, server information and setup guidance needed for the dedicated app or a compatible Xtream Codes player.",
  },
  {
    question: "Which devices work with Telvis?",
    answer:
      "Supported options include many Firestick, Fire TV, Android TV, Google TV, Smart TV, Apple, Android mobile, Windows and Mac devices. Open the Installation Guide for your device or contact support if you are unsure.",
  },
  {
    question: "Is a player app included?",
    answer:
      "The dedicated Telvis app is available on supported Android-based devices. Some third-party players charge their own activation or licence fee, so check before installing one.",
  },
  {
    question: "Can I watch on more than one device at once?",
    answer:
      "You can install your account on compatible devices, but the number of screens playing at the same time depends on your plan. Confirm the screen allowance with support before you pay.",
  },
  {
    question: "Do I need a VPN for IPTV in the UK?",
    answer:
      "A VPN is not required to use Telvis. VPN functionality is included with active plans for customers who want extra privacy on their connection. Picture quality and access still depend on your device, player and home internet.",
  },
  {
    question: "Can I watch live sport during the trial?",
    answer:
      "The trial includes access to the same listed categories as a paid plan, but individual sports events and channels vary. Use the 24-hour trial on your own connection to check the categories that matter to you.",
  },
  {
    question: "How long does Firestick setup take?",
    answer:
      "Many customers finish Firestick setup in under 30 minutes using the dedicated Installation Guide. Support can help on WhatsApp if Downloader, the app install or login details need checking.",
  },
  {
    question: "Is every channel available in Catch-Up?",
    answer:
      "No. Catch-Up works only on selected listings and for a limited period. EPG information can also vary.",
  },
  {
    question: "Is 4K guaranteed?",
    answer:
      "No. Available quality depends on the listing, device, player, television and internet connection.",
  },
  {
    question: "What can cause buffering?",
    answer:
      "Common causes include weak Wi-Fi, busy home internet, low device storage, an outdated app or a temporary issue with one listing. Follow the Installation Guide before contacting support.",
  },
  {
    question: "How does the seven-day refund guarantee work?",
    answer:
      "Contact support within seven days and include your order details and reason. Eligibility depends on the conditions in the published Refund Policy.",
  },
  {
    question: "Is IPTV legal in the UK?",
    answer:
      "IPTV is a delivery technology. Legality depends on the rights and permissions held for the content. The service should offer only content it is authorised to distribute, and customers must follow applicable law.",
  },
  {
    question: "Why choose Telvis over other IPTV providers in the UK?",
    answer:
      "Telvis focuses on a clear trial-first path, published prices from £9.99, device-specific setup guides, WhatsApp and email support, and a seven-day refund on eligible paid orders. Compare plans and test on your own device before committing to a longer subscription.",
  },
];

export const homepageFaqs = coreFaqs.slice(0, 11);

export const iptvUkFaqs = coreFaqs;
