import type { FaqItem } from "@/lib/faq-data";

export const plansPageFaqs: FaqItem[] = [
  {
    question: "How much does an IPTV UK subscription cost?",
    answer:
      "Telvis plans start at £9.99 for one month. Other options include £24.99 for three months, £39.99 for six months and £49.99 for twelve months.",
  },
  {
    question: "Where can I buy IPTV UK subscriptions?",
    answer:
      "You can choose a Telvis plan through the subscription options on this page. If you are unsure, request the free 24-hour IPTV trial first.",
  },
  {
    question: "Is cheap IPTV UK suitable for regular viewing?",
    answer:
      "Price is only one factor. Check device compatibility, your preferred listings, connection allowance and playback quality during the trial before choosing a longer plan.",
  },
  {
    question: "Do you offer an IPTV free trial?",
    answer:
      "Yes. Telvis offers a free 24-hour trial so you can test the service on your own device and internet connection.",
  },
  {
    question: "Can I watch Sky Sports IPTV or BT Sport IPTV?",
    answer:
      "Check the current channel listings during your trial. Availability of specific channels, programmes and sporting events can change.",
  },
  {
    question: "Is there a 12 month IPTV subscription?",
    answer:
      "Yes. The 12-month Telvis plan costs £49.99, which works out at approximately £4.17 per month.",
  },
  {
    question: "Does Telvis offer a family IPTV package?",
    answer:
      "You can ask support about the number of simultaneous connections available. Confirm the screen allowance before ordering if several household members want to watch at once.",
  },
  {
    question: "How long does IPTV activation take?",
    answer:
      "Your account details and setup instructions are provided after order confirmation. The time needed to complete activation can depend on your device and installation method.",
  },
  {
    question: "Can I use my IPTV UK subscription on Firestick?",
    answer:
      "Yes, supported Firestick devices can use the dedicated app or a compatible IPTV player. Follow the relevant installation guide.",
  },
  {
    question: "Does Telvis include an annual IPTV subscription?",
    answer:
      "Yes. You can choose the 12-month plan for £49.99. Test the service first and check the plan details before purchasing.",
  },
];

export const plansTrialChecks = [
  "Whether your device and IPTV app work correctly",
  "Whether your preferred channel categories are listed",
  "How live TV, movies and series load",
  "Picture and sound quality on your connection",
  "EPG and selected Catch-Up availability",
  "Whether the service meets your household's screen requirements",
] as const;

export const plansIncludedItems = [
  {
    title: "Live TV and UK Entertainment IPTV",
    body: "Explore listed UK entertainment, lifestyle, music, documentary and general television categories. Availability can change, so check your preferred channels during the trial.",
  },
  {
    title: "Sports and Live Events",
    body: "Browse available sports categories, including football, cricket, rugby, motorsport and more. If you are looking for Sky Sports IPTV, BT Sport IPTV or Premier League IPTV listings, check the specific channels and events during your trial. Availability is not guaranteed for every event.",
  },
  {
    title: "Movie IPTV UK and Series IPTV UK",
    body: "Browse the listed movie and series library by available categories. Explore different genres, titles and episodes where the information is provided.",
  },
  {
    title: "Kids, News and International Channels",
    body: "Explore available kids channels IPTV categories, news channels IPTV listings and international IPTV options. Check the languages and channels you need before selecting a plan.",
  },
] as const;

export const plansWhyItems = [
  {
    title: "Clear Subscription Prices",
    body: "Compare four plans in GBP, starting from £9.99, before choosing your subscription.",
  },
  {
    title: "Free 24-Hour Trial",
    body: "Test the service on your own device and home internet before committing to a paid plan.",
  },
  {
    title: "Flexible Access Options",
    body: "Use the dedicated Telvis app on supported devices or a compatible player with Xtream Codes.",
  },
  {
    title: "Installation Guidance",
    body: "Follow the setup instructions for your device and contact support if you need help with login or installation.",
  },
  {
    title: "Support When You Need It",
    body: "Contact the Telvis team through WhatsApp or email for help with trials, subscriptions and common technical issues.",
  },
  {
    title: "Seven-Day Refund Guarantee",
    body: "Eligible paid orders include a seven-day refund guarantee, subject to the published Refund Policy.",
  },
] as const;

export const plansActivationSteps = [
  {
    number: "1",
    title: "Choose a Plan or Trial",
    body: "Start with the free IPTV trial or compare the available monthly and long-term plans.",
  },
  {
    number: "2",
    title: "Share Your Device Details",
    body: "Tell the support team whether you use a Firestick, Smart TV, Android device, phone, tablet or computer.",
  },
  {
    number: "3",
    title: "Receive Your Account Details",
    body: "After your order is confirmed, you will receive the login information and setup instructions for your supported app or player.",
  },
  {
    number: "4",
    title: "Complete IPTV Activation",
    body: "Install the recommended app, enter your account details, and allow the categories to load. Instant IPTV activation may depend on order confirmation and setup requirements.",
  },
] as const;

export const plansCompatibleDevices = [
  {
    title: "Firestick / Fire TV",
    body: "Amazon Firestick, Fire TV Stick 4K, Fire TV Cube",
  },
  {
    title: "Android Devices",
    body: "Samsung Galaxy, OnePlus, Xiaomi, Oppo, and Huawei",
  },
  {
    title: "Android Box",
    body: "Nvidia Shield, Xiaomi Mi Box, H96 Max, and X96 Mini",
  },
  {
    title: "Smart TV",
    body: "Samsung, LG, Sony, Hisense, Philips, and TCL",
  },
  {
    title: "Roku Devices",
    body: "Roku Express, Roku Streaming Stick, Roku Ultra, and Roku TV",
  },
  {
    title: "iPhone / iOS Devices",
    body: "iPhone, iPad, iPod Touch, Apple TV",
  },
  {
    title: "macOS / Windows",
    body: "MacBook, iMac, Windows 10, Windows 11, Surface Pro",
  },
  {
    title: "STB / MAG Box",
    body: "MAG 322, MAG 420, MAG 524, Formuler Z8, Formuler Z10",
  },
  {
    title: "Enigma2",
    body: "Dreambox, Vu+ Duo, Zgemma, Octagon, Gigablue",
  },
] as const;
