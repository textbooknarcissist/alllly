export const BRAND = {
  name: "Vaultline",
  tagline: "Digital Banking",
  fullName: "Vaultline Digital",
};

export const NAV_ITEMS = [
  { label: "Personal Banking", href: "#products" },
  { label: "Business Banking", href: "#business" },
  { label: "Loans", href: "#loans" },
  { label: "Investments", href: "#investments" },
  { label: "Resources", href: "#resources" },
] as const;

export const TRUST_STATS = [
  { value: 1, suffix: "M+", label: "Customers", prefix: "" },
  { value: 99.99, suffix: "%", label: "Service Availability", prefix: "", decimals: 2 },
  { value: 5, suffix: "B+", label: "Assets Managed", prefix: "$" },
  { value: 150, suffix: "+", label: "Financial Partners", prefix: "" },
] as const;

export const HERO_BADGES = [
  "24/7 Support",
  "Instant Transfers",
  "Secure Banking",
  "Smart Insights",
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    position: "Chief Financial Officer",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&auto=format&fit=crop&q=80",
    review:
      "Vaultline transformed how our team manages corporate finances. The platform's clarity and security give us complete confidence in every transaction.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    position: "Entrepreneur & Founder",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&auto=format&fit=crop&q=80",
    review:
      "From payroll to merchant services, everything works seamlessly. I switched my entire business banking here and haven't looked back.",
    rating: 5,
  },
  {
    name: "Elena Vasquez",
    position: "Investment Analyst",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&auto=format&fit=crop&q=80",
    review:
      "The investment tools are genuinely institutional-grade. Portfolio tracking and diversification insights rival platforms costing ten times more.",
    rating: 5,
  },
] as const;

export const FOOTER_SECTIONS = {
  products: ["Checking", "Savings", "Business Banking", "Investments", "Loans"],
  company: ["About Us", "Careers", "Press", "Partners", "Contact"],
  support: ["Help Center", "Live Chat", "Branch Locator", "Account Recovery", "FAQs"],
  resources: ["Blog", "Financial Guides", "Webinars", "Market Insights", "Calculators"],
  legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Regulatory", "Accessibility"],
} as const;
