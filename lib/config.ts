/**
 * NICHE CONFIG — the single file to edit when personalising this template for a new site.
 * All niche-specific values live here. The rest of the codebase reads from this file.
 */

export const NICHE = {
  // ── Site identity ──────────────────────────────────────────────────────────
  name: "Beauty Buy FYI",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://beautybuy.fyi")
    .replace(/^https:\/\/www\./, "https://"),

  // ── Product niche ──────────────────────────────────────────────────────────
  subject: "luxury beauty product",                 // singular noun, lowercase
  subjectPlural: "luxury beauty products",          // plural noun, lowercase
  subjectLabel: "Luxury Beauty",                    // title-case label for headings, e.g. "Luxury Beauty Briefs"
  productDescription: "luxury cosmetics and high-end beauty products",

  // ── Contact ────────────────────────────────────────────────────────────────
  contactEmail: "hello@beautybuy.fyi",

  // ── Affiliate ──────────────────────────────────────────────────────────────
  affiliateTag: "beautybuyfyi-20",

  // ── Accent colors ──────────────────────────────────────────────────────────
  // These are injected as CSS variables at runtime and override globals.css.
  accent:      "#b07a8f",
  accentLight: "#f7edf1",
  accentHover: "#8f5f72",

  // ── Homepage hero ──────────────────────────────────────────────────────────
  heroLine1:      "Luxury Beauty intelligence,",
  heroLine2:      "before you buy.",
  heroSubtext:    "Informed Briefs on luxury cosmetics and high-end beauty products — structured, analytical, and free of hype. Compare side by side. Read the roundups. Buy with clarity.",
  heroCtaPrimary: "Compare Luxury Cosmetics →",

  // ── Footer ─────────────────────────────────────────────────────────────────
  footerTagline:           "Beauty Buy FYI provides structured luxury beauty product analysis based on publicly available data.",
  footerCrossPromoIntro:   "Looking beyond luxury cosmetics?",
  footerCrossPromoLink:    "For a wide range of product analysis, visit Smart Buy FYI",
  footerCrossPromoUrl:     "https://smartbuy.fyi",

  // ── AI Analyst persona ─────────────────────────────────────────────────────
  guru: {
    name:   "Buying Analyst",
    slug:   "buying-analyst",
    model:  process.env.MODEL_GURU_ARTICLE ?? "gpt-5.4-mini",
    systemPrompt: `You are the Buying Analyst, a luxury beauty and cosmetics specialist and product analyst with years of experience researching luxury beauty supplies in the high end price tier and use case.

Your approach is methodical and evidence-based. You study formulations, parse effectiveness claims, and translate hype and marketing details into clear purchasing intelligence. You are not impressed by marketing language. You care about what actually works, for whom, and under what conditions.

You write for buyers who want to understand what they are getting before they spend money — not to be sold something. Your voice is direct, organized, and precise. You surface weaknesses and uncertainties without hesitation. You do not hype.

Your focus: luxury skincare, high-end cosmetics, premium beauty tools, fragrance, and advanced beauty treatments; you understand formulations, active ingredients, skin types and concerns, application techniques, product performance, and the practical realities of building and maintaining an effective beauty routine. You are a trusted guide in the world of luxury beauty, helping buyers make informed decisions with confidence and clarity.`,
  },
} as const;
