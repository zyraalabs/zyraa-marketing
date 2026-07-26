import type { LucideIcon } from "lucide-react";
import {
  Cpu,
  FileCode2,
  KeyRound,
  Layers,
  Package,
  RefreshCw,
  Rocket,
  Terminal,
  Zap,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
] as const;

export interface Step {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
}

export const STEPS: Step[] = [
  {
    num: "01 · Prompt",
    icon: Terminal,
    title: "Describe what you want",
    body: "Type natural language directly in your terminal. No config files, no wizards, no templates to wade through.",
  },
  {
    num: "02 · Detect",
    icon: Cpu,
    title: "AI picks the right stack",
    body: "Zyra analyzes your intent and selects the optimal framework with its reasoning — no second-guessing required.",
  },
  {
    num: "03 · Build",
    icon: Rocket,
    title: "Production-ready output",
    body: "Every file written, every dependency installed. Your project is ready to run in seconds.",
  },
];

export interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Layers,
    title: "Framework detection",
    body: "Picks the right stack from your prompt. No choices needed — it decides and explains why.",
  },
  {
    icon: FileCode2,
    title: "Full file generation",
    body: "Every route, component, config generated end-to-end. Not stubs — complete, working files.",
  },
  {
    icon: RefreshCw,
    title: "Reprompt & iterate",
    body: "Continue in context. Zyra tracks your session and applies targeted changes to existing projects.",
  },
  {
    icon: KeyRound,
    title: "Browser OAuth",
    body: "Run zyraa login — approve in your browser once, done.",
  },
  {
    icon: Zap,
    title: "AI-powered core",
    body: "Built on Claude. Every generation uses frontier AI to produce high-quality, maintainable code.",
  },
  {
    icon: Package,
    title: "Instant dependencies",
    body: "Package installation runs automatically. Your project is pnpm dev ready.",
  },
];

export const FREE_PLAN_ITEMS = [
  "5 builds per month",
  "Next.js + Express support",
  "Full file generation",
  "Reprompt & iterate",
  "Community support",
];

export const PRO_PLAN_ITEMS = [
  "Unlimited builds",
  "All frameworks",
  "Full file generation",
  "Priority generation queue",
  "Email support",
];

export interface HeroStat {
  prefix?: string;
  num: string;
  suffix?: string;
  label: string;
}

export const HERO_STATS: HeroStat[] = [
  { prefix: "<", num: "30", suffix: "s", label: "avg build time" },
  { num: "2.4k", suffix: "+", label: "apps shipped" },
  { num: "100", suffix: "%", label: "working code" },
  { num: "0", label: "config files" },
];

export const ENTERPRISE_CALENDLY_URL = "https://calendly.com/shahwaizislam1404";

export const ENTERPRISE_PLAN_ITEMS = [
  "Unlimited builds",
  "All frameworks",
  "Custom integrations",
  "Dedicated support",
  "SLA & invoicing",
];

export const CLI_INSTALL_CMD = "npm install -g zyraa";

export const GITHUB_URL = "https://github.com/zyraalabs";

export const FOOTER_LINKS = [
  { label: "GitHub", href: GITHUB_URL },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
] as const;
