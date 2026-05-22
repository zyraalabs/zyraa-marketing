// ── Client-side (NEXT_PUBLIC_) ────────────────────────────────────────────────
export const AUTH_URL =
  process.env.NEXT_PUBLIC_AUTH_URL ?? "http://localhost:3001";

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3002";

export const HOME_URL =
  process.env.NEXT_PUBLIC_HOME_URL ?? "http://localhost:3000";

export const COOKIE_DOMAIN = process.env.NEXT_PUBLIC_COOKIE_DOMAIN ?? "";

// ── Server-side ──────────────────────────────────────────────────────────────
export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET ?? "";

export const IS_PRODUCTION = process.env.NODE_ENV === "production";
