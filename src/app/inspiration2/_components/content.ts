export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#solution" },
  { label: "Our Features", href: "#dashboard" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
] as const;

export type FeatureIcon = "wallet" | "users" | "briefcase" | "calendar";

export const FEATURE_TABS: { label: string; icon: FeatureIcon; tone: string }[] = [
  { label: "Financial", icon: "wallet", tone: "blue" },
  { label: "Employee", icon: "users", tone: "green" },
  { label: "Hiring", icon: "briefcase", tone: "coral" },
  { label: "Schedule", icon: "calendar", tone: "violet" },
];

export type SidebarIcon = "grid" | "users" | "wallet" | "briefcase" | "folder";

export const SIDEBAR_ITEMS: {
  label: string;
  icon: SidebarIcon;
  active?: boolean;
}[] = [
  { label: "Dashboard", icon: "grid", active: true },
  { label: "Employee", icon: "users" },
  { label: "Payroll", icon: "wallet" },
  { label: "Hire", icon: "briefcase" },
  { label: "Files", icon: "folder" },
];

export const EMPLOYEE_SEGMENTS = [
  { label: "Operational", value: 72, color: "#f26b4e" },
  { label: "Lead Division", value: 18, color: "#44b8d6" },
  { label: "Managerial", value: 10, color: "#6f87fa" },
];

export const APPLICANTS = {
  total: 678,
  segments: [
    { label: "Application reviewed", value: 328, color: "#3bb273" },
    { label: "Application sent", value: 159, color: "#2f6bff" },
    { label: "Application rejected", value: 170, color: "#f26b4e" },
  ],
};

export const FINANCIAL_MONTHS = [
  { month: "Jan", income: 46, expense: 28 },
  { month: "Feb", income: 58, expense: 34 },
  { month: "Mar", income: 52, expense: 40 },
  { month: "Apr", income: 70, expense: 45 },
  { month: "May", income: 62, expense: 38 },
  { month: "Jun", income: 82, expense: 52 },
  { month: "Jul", income: 74, expense: 48 },
  { month: "Aug", income: 90, expense: 58 },
];

export const TESTIMONIAL = {
  quote:
    "Compsups replaced four tools for our operations team. Hiring, payroll, and planning finally live in the same place, and month-end closes in half the time.",
  name: "Mara Ellison",
  role: "COO, Northline",
};

export const FOOTER_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#dashboard" },
      { label: "Solution", href: "#solution" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#solution" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help centre", href: "#contact" },
      { label: "Privacy", href: "#contact" },
      { label: "Terms", href: "#contact" },
    ],
  },
] as const;

export const DASHBOARD_AVATARS = ["VL", "AM", "JR"] as const;
