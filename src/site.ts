/**
 * Central configuration for the OPENNOW GOVERNMENT introduction website.
 *
 * Everything an operator is likely to change (brand details, contact channels,
 * the BetterGo Marinduque link) lives here rather than inside components.
 */

export const site = {
  name: "OPENNOW GOVERNMENT",
  shortName: "OpenNow",
  tagline: "KNOW BEFORE YOU GO.",
  initiative: "A BetterGo Marinduque Initiative",
  url: "https://opennow.bettergomarinduque.com",

  /**
   * BetterGo Marinduque — the main initiative website. This is the only place
   * the link is defined; update this value once the domain is live (it is not
   * resolving at the time of writing) so every BetterGo link points somewhere
   * real. Used in the header menu, About section, Contact and footer.
   */
  betterGo: {
    name: "BetterGo Marinduque",
    url: "https://bettergomarinduque.com",
  },

  /**
   * Contact channels are intentionally left unset. OPENNOW Government does not
   * invent or publish unverified contact details. Set the fields below once the
   * official channels are confirmed and they will render automatically.
   */
  contact: {
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
    participationEmail: null as string | null,
    facebook: null as string | null,
  },

  /**
   * Target of the "Express Interest in Participation" call to action. Points at
   * the contact section of this site; change it to a form or inbox URL later.
   */
  participationHref: "#contact",

  /** Header call to action. */
  headerCta: { label: "Check Office Status", href: "#office-status" },
} as const;

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Government Offices", href: "#coverage" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerLinks = [
  { label: "Home", href: "#top" },
  { label: "About OpenNow", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Citizen Information Center", href: "#info-center" },
  { label: "Transaction Guides", href: "#guides" },
  { label: "Visit Planner", href: "#planner" },
  { label: "Government Offices", href: "#coverage" },
  { label: "Office Status Demo", href: "#office-status" },
  { label: "Trust & Transparency", href: "#trust" },
  { label: "Announcements", href: "#announcements" },
  { label: "FAQs", href: "#faq" },
  { label: "Citizen Feedback", href: "#feedback" },
  { label: "Contact", href: "#contact" },
] as const;

export const policyLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Use", href: "#terms" },
  { label: "Information Disclaimer", href: "#disclaimer" },
] as const;
