export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "About us", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export type Hashtag = {
  label: string;
  left: string;
  top: string;
  rotate: number;
  tone: "plain" | "violet" | "pink" | "yellow";
};

export const HASHTAGS: Hashtag[] = [
  { label: "#Nature", left: "30%", top: "7%", rotate: -4, tone: "plain" },
  { label: "#Cooking", left: "2%", top: "25%", rotate: -7, tone: "plain" },
  { label: "#Fun", left: "34%", top: "29%", rotate: 3, tone: "violet" },
  { label: "#Travel", left: "3%", top: "53%", rotate: 6, tone: "plain" },
  { label: "#Safe", left: "11%", top: "72%", rotate: -9, tone: "plain" },
  { label: "#Foodie", left: "38%", top: "68%", rotate: 4, tone: "pink" },
  { label: "#AI", left: "55%", top: "30%", rotate: 7, tone: "plain" },
  { label: "#Photography", left: "61%", top: "17%", rotate: -6, tone: "plain" },
  { label: "#Fitness", left: "70%", top: "62%", rotate: 8, tone: "plain" },
  { label: "#Movie", left: "48%", top: "86%", rotate: -3, tone: "yellow" },
];

export const AUDIENCE = [
  { label: "Pet Owners", value: 71 },
  { label: "Travelers", value: 54 },
  { label: "Parents", value: 35 },
  { label: "Foodies", value: 27 },
  { label: "Fitness Enthusiasts", value: 20 },
  { label: "Fashionistas", value: 18 },
];

export const PROCESS_CARDS = [
  {
    number: "01",
    kicker: "Partnership Engaging",
    title: "Amplify Your Social Media Reach",
    tone: "orange",
    art: "ribbon",
  },
  {
    number: "02",
    kicker: "Content Scheduling",
    title: "Connect, Manage, and Analyze",
    tone: "pink",
    art: "heart",
  },
  {
    number: "03",
    kicker: "Messages Management",
    title: "Centralize and Streamline Communication",
    tone: "violet",
    art: "plane",
  },
] as const;

export const METRICS = [
  {
    value: "+270K",
    badge: "New followers",
    badgeTone: "pink",
    copy: "Wollo's intelligent algorithms analyze social media data in real time, offering actionable insights and recommendations.",
    art: "sphere",
    tone: "violet",
  },
  {
    value: "6X",
    badge: "Increase in reach",
    badgeTone: "violet",
    copy: "See which stories travel furthest. Wollo shows the formats, hooks, and hours that put your brand in front of new people.",
    art: "heart",
    tone: "pink",
  },
  {
    value: "8X",
    badge: "Increase in traffic",
    badgeTone: "pink",
    copy: "Track and analyze the impact of your campaigns in real time, pinpointing which strategies drive the most traffic so you can refine your approach.",
    art: "ribbon",
    tone: "blue",
  },
  {
    value: "+4.0h",
    badge: "Time saved weekly",
    badgeTone: "violet",
    copy: "Effortlessly save time with automated scheduling and content management tools, ensuring consistent posting and engagement.",
    art: "spark",
    tone: "orange",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Wollo has transformed our social media team's efficiency. With streamlined scheduling our week is calmer and our publishing is finally consistent.",
    name: "Maya Chen",
    role: "Social Lead, Northwind",
  },
  {
    quote:
      "Initially skeptical, I'm thrilled with this SMM management tool. The time-saving scheduling features have boosted our social media presence. The responsive support team is a bonus.",
    name: "Rafael Ortiz",
    role: "Founder, Studio Sol",
  },
  {
    quote:
      "This affordable SMM management tool has revolutionized my small business. I can see what works, schedule a month ahead, and answer every message in one place.",
    name: "Amara Okafor",
    role: "Owner, Field Notes",
  },
];

export const FAQS = [
  {
    question: "How does Wollo handle social media advertising integration?",
    answer:
      "Connect your Meta, LinkedIn, X, and TikTok ad accounts in one workspace. Wollo pulls spend, reach, and conversions into the same report as your organic posts, so you can pause a weak campaign or boost a strong post without switching tabs.",
  },
  {
    question:
      "Can I manage multiple social media accounts from a single dashboard with Wollo?",
    answer:
      "Yes. A standard workspace holds up to twelve accounts, grouped by brand or client. Each teammate gets a role and per-account permissions, so a freelancer can draft for one brand without seeing another.",
  },
  {
    question:
      "Is there a mobile app available for managing social media on the go with Wollo?",
    answer:
      "Wollo is built responsive first, so scheduling, approvals, and the unified inbox all work on a phone browser. Native iOS and Android apps are on the roadmap; the mobile web app is the supported path today.",
  },
  {
    question:
      "How does Wollo ensure data security and privacy for user accounts?",
    answer:
      "Traffic is encrypted in transit and data is encrypted at rest. We support two-factor authentication, scoped access tokens, and per-workspace roles. Your content is never sold, and you can export or delete your account data at any time.",
  },
];

export const INTEGRATIONS = [
  "Instagram",
  "TikTok",
  "YouTube",
  "LinkedIn",
  "X",
  "Pinterest",
] as const;
