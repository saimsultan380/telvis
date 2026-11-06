import type { FaqItem } from "@/lib/faq-data";

export const resellerHeroHighlights = [
  {
    title: "IPTV Reseller Panel",
    body: "Centralised dashboard",
  },
  {
    title: "Customer Management",
    body: "Organised customer accounts",
  },
  {
    title: "Credit Management",
    body: "Credit tracking",
  },
  {
    title: "Reseller Assistance",
    body: "Setup and account guidance",
  },
] as const;

export const resellerPanelManageItems = [
  {
    title: "Customer accounts",
    body: "Organise the subscriptions you create for your customers.",
  },
  {
    title: "Subscription activation",
    body: "Manage eligible customer activations through your reseller access.",
  },
  {
    title: "Reseller credits",
    body: "Monitor your available balance and understand credit usage.",
  },
  {
    title: "Subscription renewals",
    body: "Keep track of customer expiry dates and eligible renewals.",
  },
  {
    title: "Account information",
    body: "Review relevant subscription details through the available dashboard.",
  },
  {
    title: "Reseller assistance",
    body: "Contact the Telvis team when you need help with panel access or reseller-related questions.",
  },
] as const;

export const resellerPackages = [
  {
    id: "starter",
    name: "Starter IPTV Reseller Package",
    tagline: "A practical starting point for new resellers",
    description:
      "The Starter package is intended for individuals and small businesses looking to enter the IPTV reseller market with a manageable starting arrangement.",
    idealFor: [
      "First-time IPTV resellers",
      "Freelancers and independent entrepreneurs",
      "Small online businesses",
      "Digital service providers exploring a new offering",
      "Individuals building an initial customer base",
      "People testing the reseller business model",
    ],
    cta: "Get Starter Reseller Information",
    suitedFor: "Individuals and small businesses",
    stage: "Getting started",
  },
  {
    id: "professional",
    name: "Professional IPTV Reseller Package",
    tagline: "More flexibility for an expanding customer base",
    description:
      "The Professional package is aimed at resellers who have started acquiring customers and want a more organised approach to subscription management.",
    idealFor: [
      "Growing IPTV reseller businesses",
      "Established online sellers",
      "Digital marketing agencies",
      "Freelancers managing multiple customers",
      "Entrepreneurs expanding their service offerings",
      "Resellers handling regular subscription renewals",
    ],
    cta: "Get Professional Reseller Information",
    suitedFor: "Growing resellers and online sellers",
    stage: "Building a customer base",
  },
  {
    id: "enterprise",
    name: "Enterprise IPTV Reseller Package",
    tagline: "For larger reseller operations and business expansion",
    description:
      "The Enterprise package is intended for established operators who need to discuss higher-volume reseller requirements and a more extensive customer management arrangement.",
    idealFor: [
      "Established reseller businesses",
      "High-volume customer operations",
      "Digital service companies",
      "IPTV distributors with authorised access",
      "Agencies managing larger customer bases",
      "Businesses planning to expand their operations",
    ],
    cta: "Get Enterprise Reseller Information",
    suitedFor: "Established operators and larger businesses",
    stage: "Higher-volume operations",
  },
] as const;

export const resellerFeatures = [
  {
    title: "Customer Account Management",
    body: "Keep your customer subscriptions organised through the reseller dashboard. Review the relevant account information and manage eligible customer accounts without relying entirely on manual records.",
  },
  {
    title: "IPTV Credit Management",
    body: "Monitor your available reseller credits and understand how they are used for customer activations and renewals. A clear credit balance helps you plan your next reseller purchase.",
  },
  {
    title: "Subscription Activation",
    body: "Use the available panel tools to create eligible customer subscriptions. Follow the applicable activation process and check the subscription details before sharing account information with your customer.",
  },
  {
    title: "Subscription Expiry and Renewals",
    body: "Keep track of subscription periods and upcoming expiry dates. Where renewal functionality is available, manage eligible renewals using the applicable reseller credits.",
  },
  {
    title: "Centralised Reseller Dashboard",
    body: "Access your main reseller management functions through one dashboard. Having customer and subscription information organised in one place can make routine tasks easier to follow.",
  },
  {
    title: "Reseller Support and Account Assistance",
    body: "Get in touch with the Telvis team for questions about reseller access, package information, panel usage and account-related issues.",
  },
] as const;

export const resellerHowItWorks = [
  {
    step: "01",
    title: "Enquire About Reseller Access",
    body: "Contact Telvis and ask about becoming an authorised IPTV reseller.",
  },
  {
    step: "02",
    title: "Choose a Reseller Package",
    body: "Discuss your expected customer volume, available packages, credit requirements and account terms.",
  },
  {
    step: "03",
    title: "Complete the Onboarding Process",
    body: "Follow the instructions provided by the Telvis team and complete the required account arrangements.",
  },
  {
    step: "04",
    title: "Receive Your Reseller Panel Access",
    body: "After approval and confirmation, receive the relevant reseller login information and access instructions.",
  },
  {
    step: "05",
    title: "Manage Customer Subscriptions",
    body: "Use the available dashboard features to manage eligible customer activations and subscription information.",
  },
  {
    step: "06",
    title: "Monitor Credits and Renewals",
    body: "Keep track of your credit balance and manage eligible subscription renewals according to your reseller terms.",
  },
] as const;

export const resellerCreditSteps = [
  {
    step: "01",
    title: "Add Reseller Credits",
    body: "Purchase or add credits according to the available Telvis reseller package and payment terms.",
  },
  {
    step: "02",
    title: "Activate Customer Subscriptions",
    body: "Use your available credits to create eligible customer accounts through the reseller panel.",
  },
  {
    step: "03",
    title: "Manage Subscription Renewals",
    body: "Where renewal functionality is included, use the applicable credits to renew customer subscriptions before expiry.",
  },
  {
    step: "04",
    title: "Monitor Your Remaining Balance",
    body: "Review your available credits and track usage so you can plan future activations and reseller purchases.",
  },
] as const;

export const resellerCreditWhy = [
  "Helps organise customer activation costs.",
  "Makes subscription usage easier to monitor.",
  "Supports planning for upcoming renewals.",
  "Helps resellers understand their remaining balance.",
  "Reduces reliance on disconnected manual records.",
] as const;

export const resellerWhyItems = [
  {
    title: "Centralised Customer Management",
    body: "Manage relevant customer and subscription information through a central dashboard instead of depending entirely on separate records.",
  },
  {
    title: "Structured Subscription Management",
    body: "Keep track of eligible activations, subscription durations and renewal requirements through the available reseller tools.",
  },
  {
    title: "Credit-Based Operations",
    body: "Understand your available credits and how they are used for eligible customer subscriptions.",
  },
  {
    title: "Flexible Reseller Options",
    body: "Explore Starter, Professional and Enterprise package options according to your expected customer volume and business requirements.",
  },
  {
    title: "Easier Daily Organisation",
    body: "Keep important reseller activities in one place, making it easier to review customer information and follow subscription expiry dates.",
  },
  {
    title: "Reseller Assistance",
    body: "Get in touch with the Telvis team if you need clarification about package options, onboarding, panel access or reseller account management.",
  },
] as const;

export const resellerAudience = [
  {
    title: "New IPTV Resellers",
    body: "Individuals interested in starting an authorised subscription-based business with an organised management process.",
  },
  {
    title: "Freelancers and Entrepreneurs",
    body: "Independent professionals exploring additional digital services and recurring customer relationships.",
  },
  {
    title: "Existing Online Businesses",
    body: "Businesses looking to add an authorised IPTV offering to their existing services.",
  },
  {
    title: "Digital Agencies and Service Providers",
    body: "Agencies that already manage customer relationships and want to explore a suitable reseller arrangement.",
  },
  {
    title: "Established IPTV Operators",
    body: "Existing operators looking for an authorised reseller programme with suitable account management arrangements.",
  },
  {
    title: "Customer-Focused Businesses",
    body: "Businesses that can provide clear product information, responsive support and responsible subscription management.",
  },
] as const;

export const resellerVsSubscription = [
  {
    subscription: "Intended for personal viewing",
    reseller: "Intended for authorised reseller operations",
  },
  {
    subscription: "Provides access to a customer subscription",
    reseller: "Provides reseller management access",
  },
  {
    subscription: "Used by an individual or household",
    reseller: "Used to manage eligible customer accounts",
  },
  {
    subscription: "Individual subscription period",
    reseller: "Manage multiple customer subscription periods",
  },
  {
    subscription: "Personal account login",
    reseller: "Reseller dashboard access",
  },
  {
    subscription: "Renew your own subscription",
    reseller: "Manage eligible customer renewals",
  },
  {
    subscription: "No reseller credit management",
    reseller: "Credit tracking where included",
  },
] as const;

export const resellerGrowthTips = [
  {
    title: "Identify Your Target Customers",
    body: "Decide which audience you want to serve. This could include existing digital-service customers, local customers or people interested in authorised subscription services. Understand their requirements before promoting your offering.",
  },
  {
    title: "Explain Your Service Clearly",
    body: "Provide accurate information about subscription options, compatible devices, supported features, pricing and renewal conditions. Avoid promising specific channels, events or streaming quality unless these are confirmed.",
  },
  {
    title: "Build Customer Trust",
    body: "Use transparent pricing and clear terms. Explain how subscriptions work, what customers receive and how they can contact you if they need assistance.",
  },
  {
    title: "Provide Helpful Setup Guidance",
    body: "Customers may need help installing a compatible IPTV player, entering login information or understanding basic device requirements. Clear instructions can make the onboarding experience easier.",
  },
  {
    title: "Keep Track of Subscription Renewals",
    body: "Maintain an organised record of customer subscription periods and expiry dates. Follow up appropriately and explain renewal costs before a customer decides to continue.",
  },
  {
    title: "Monitor Your Business Costs",
    body: "Consider reseller credit costs, payment processing, marketing expenses, customer support and any applicable business taxes. Calculate your costs before setting retail prices.",
  },
  {
    title: "Expand According to Actual Demand",
    body: "As your customer base develops, review your subscription volume and operational requirements. Consider a larger reseller package only when it makes sense for your business.",
  },
] as const;

export const resellerChecklist = [
  {
    item: "Distribution Authorisation",
    why: "Confirm that the provider has the necessary rights and permissions for the content being distributed.",
  },
  {
    item: "Reseller Panel Access",
    why: "Understand how you receive access and which dashboard functions are included.",
  },
  {
    item: "Credit Structure",
    why: "Check the cost of credits and how many are required for different subscription options.",
  },
  {
    item: "Credit Expiry",
    why: "Confirm whether unused credits expire and what conditions apply.",
  },
  {
    item: "Customer Limits",
    why: "Ask how many customer accounts and simultaneous connections your package supports.",
  },
  {
    item: "Renewal Process",
    why: "Understand how subscription renewals are managed and charged.",
  },
  {
    item: "Support Arrangements",
    why: "Check how to contact the provider when you experience panel or account problems.",
  },
  {
    item: "Refund and Cancellation Terms",
    why: "Review the conditions for reseller purchases, unused credits and account cancellation.",
  },
  {
    item: "Service Availability",
    why: "Understand the provider's maintenance, interruption and account access policies.",
  },
] as const;

export const resellerFaqs: FaqItem[] = [
  {
    question: "What Is an IPTV Reseller Panel?",
    answer:
      "An IPTV reseller panel is a management dashboard designed to help authorised resellers manage customer subscriptions and related account activities. Depending on the programme, it may include customer management, subscription activation, credit tracking and renewal tools.",
  },
  {
    question: "How Can I Become an IPTV Reseller in the UK?",
    answer:
      "To become an IPTV reseller in the UK, contact Telvis and enquire about the available reseller programme. Discuss the package options, credit system, distribution authorisation and onboarding requirements. Once your application and access arrangements are approved, you can begin managing eligible customer subscriptions through your reseller panel.",
  },
  {
    question: "Do I Need a Business to Become an IPTV Reseller?",
    answer:
      "The requirements depend on the reseller programme. Individuals, freelancers and established businesses may be able to enquire about available options. You should confirm the eligibility requirements, legal responsibilities and any registration or documentation needed before joining.",
  },
  {
    question: "How Does an IPTV Reseller Panel Work?",
    answer:
      "An IPTV reseller panel gives authorised resellers access to account management tools. After receiving panel credentials, you can use the available functions to manage eligible customer activations, review subscription information, monitor credits and handle renewals according to your account terms.",
  },
  {
    question: "What Is an IPTV Reseller Credit System?",
    answer:
      "An IPTV reseller credit system is a way of managing the balance used for eligible customer subscription activities. Resellers purchase or receive credits under their package terms and use them for account activations or renewals. The credit requirements depend on the subscription duration and reseller programme.",
  },
  {
    question: "Do IPTV Reseller Credits Expire?",
    answer:
      "Credit expiry policies vary between providers. Some programmes may offer credits without an expiry date, while others apply specific validity periods or account conditions. Contact Telvis to confirm the current credit expiry policy before purchasing a package.",
  },
  {
    question: "Can I Manage Multiple Customers Through One IPTV Reseller Panel?",
    answer:
      "Yes. Managing multiple customer subscriptions is one of the main purposes of an IPTV reseller panel. However, the number of accounts you can create or manage may depend on your package, available credits and account permissions.",
  },
  {
    question: "Can I Renew Customer Subscriptions Through the Reseller Panel?",
    answer:
      "Where renewal functionality is included, authorised resellers can manage eligible customer renewals through the panel. The required credits, renewal costs and subscription conditions depend on the applicable reseller arrangement.",
  },
  {
    question: "Which IPTV Reseller Package Should I Choose?",
    answer:
      "The right package depends on your expected customer volume and business requirements. Starter is intended for new resellers, Professional for growing operations and Enterprise for larger businesses. Contact Telvis to compare the actual credit quantities, prices and features before choosing.",
  },
  {
    question: "Can I Start an IPTV Reseller Business Without Technical Experience?",
    answer:
      "You do not necessarily need advanced technical experience to manage a reseller business. However, it helps to understand basic IPTV concepts, customer account management, subscription periods, compatible devices and common installation questions. You should also be prepared to provide accurate information and appropriate customer support.",
  },
  {
    question: "How Much Can I Earn as an IPTV Reseller?",
    answer:
      "There is no guaranteed income from an IPTV reseller business. Your results depend on your authorised retail pricing, credit costs, customer demand, marketing expenses, payment fees and operating costs. Calculate your expected expenses and potential margins before purchasing a reseller package.",
  },
  {
    question: "Can I Set My Own IPTV Reseller Prices?",
    answer:
      "Pricing arrangements depend on the reseller programme and its commercial terms. Before advertising subscriptions, confirm whether you can set your own retail prices, what restrictions apply and which costs must be included in your calculations.",
  },
  {
    question: "Can I Upgrade My IPTV Reseller Package Later?",
    answer:
      "Package upgrades depend on the available Telvis reseller options. If your customer base grows, contact our team to ask about larger credit packages, additional account permissions and any applicable upgrade conditions.",
  },
  {
    question: "What Happens If My IPTV Reseller Panel Stops Working?",
    answer:
      "First, check your internet connection and try accessing the panel again. If the problem continues, contact Telvis with your reseller account reference, the time the issue started and any error message displayed. Avoid sharing your password or panel credentials publicly.",
  },
  {
    question: "Can I Become a Sub-Reseller Through Telvis?",
    answer:
      "Sub-reseller arrangements depend on whether the programme permits further authorised distribution. Contact Telvis to confirm whether sub-reseller access is available, what approval is required and which distribution rights and responsibilities apply.",
  },
  {
    question: "Is an IPTV Reseller Business Legal in the UK?",
    answer:
      "IPTV technology itself is a method of delivering television over the internet. The legality of a reseller business depends on whether the provider and reseller have the necessary rights to distribute the content and comply with applicable copyright, broadcasting, consumer protection and business laws. Always verify distribution authorisation before selling subscriptions.",
  },
  {
    question: "Does Telvis Provide Support for IPTV Resellers?",
    answer:
      "You can contact the Telvis team to enquire about reseller onboarding, package information, panel access and account-related questions. Ask about the support arrangements included with your reseller package before joining.",
  },
  {
    question: "What Should I Consider Before Buying an IPTV Reseller Panel?",
    answer:
      "Review the provider's distribution authorisation, credit pricing, panel features, customer limits, renewal process, credit expiry rules, support arrangements and refund terms. Make sure you understand the complete commercial arrangement before making a payment.",
  },
];
