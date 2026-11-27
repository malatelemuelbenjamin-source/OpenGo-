import { faqs } from "./content/faqs";
import { guides } from "./content/guides";

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  group: "Section" | "Guide" | "FAQ" | "Status";
  keywords?: string;
};

/**
 * Search runs entirely over this introduction website's own content.
 * It never queries live office records or government databases.
 */
const sections: SearchEntry[] = [
  {
    title: "Home — Know before you go",
    description: "Why OpenNow exists and what a citizen can check before visiting an office.",
    href: "#top",
    group: "Section",
    keywords: "home opennow start overview bukas",
  },
  {
    title: "Don't waste another trip",
    description: "The situations OpenNow is built to prevent.",
    href: "#problem",
    group: "Section",
    keywords: "problem wasted trip sayang biyahe",
  },
  {
    title: "A story you have probably lived",
    description: "Before OpenNow, the problem, and with OpenNow.",
    href: "#story",
    group: "Section",
    keywords: "story scenario wasted trip",
  },
  {
    title: "Introducing OpenNow Government",
    description: "The public launch announcement and the purpose behind the initiative.",
    href: "#launch",
    group: "Section",
    keywords: "launch introducing new announcement bettergo marinduque",
  },
  {
    title: "Platform features",
    description: "Office status, availability, service status, schedules, and update times.",
    href: "#features",
    group: "Section",
    keywords: "features capabilities",
  },
  {
    title: "Office availability preview",
    description: "A closer look at a single municipal hall entry.",
    href: "#offices",
    group: "Section",
    keywords: "preview sample dashboard",
  },
  {
    title: "Citizen information center",
    description: "Eight categories of information to check before a government visit.",
    href: "#info-center",
    group: "Section",
    keywords: "guide information center preparation",
  },
  {
    title: "Before-you-go checklist",
    description: "Seven checks you can tick off before leaving home.",
    href: "#checklist",
    group: "Section",
    keywords: "checklist before you go requirements",
  },
  {
    title: "Demo office status board",
    description: "Filter sample office statuses. Demonstration data only.",
    href: "#office-status",
    group: "Section",
    keywords: "open closed available demo status board",
  },
  {
    title: "What each status means",
    description: "Office status, official availability, and service status explained.",
    href: "#availability",
    group: "Section",
    keywords: "status meaning available out of office open closed meeting leave suspended limited",
  },
  {
    title: "Service availability",
    description: "Why an open office can still have an unavailable service.",
    href: "#services",
    group: "Section",
    keywords: "service permit tax registry releasing",
  },
  {
    title: "Estimated return vs confirmed schedule",
    description: "The difference between an estimate and a confirmed availability.",
    href: "#return-guide",
    group: "Section",
    keywords: "expected return estimated confirmed next available appointment",
  },
  {
    title: "Real-life situations",
    description: "Four illustrative scenarios OpenNow is designed to help with.",
    href: "#scenarios",
    group: "Section",
    keywords: "mayor civil registry closure holiday scenario",
  },
  {
    title: "Transaction preparation guides",
    description: "General preparation guidance for eight common government transactions.",
    href: "#guides",
    group: "Section",
    keywords: "business permit birth certificate tax assistance releasing engineering documents",
  },
  {
    title: "Visit planner",
    description: "Build a preparation summary for a planned office visit.",
    href: "#planner",
    group: "Section",
    keywords: "plan visit planner schedule date time",
  },
  {
    title: "Why it matters",
    description: "The cost of a wasted trip in fares, time, and effort.",
    href: "#benefits",
    group: "Section",
    keywords: "why matters time money",
  },
  {
    title: "Government coverage",
    description: "The intended directory structure, office by office.",
    href: "#coverage",
    group: "Section",
    keywords: "coverage provincial municipal barangay offices",
  },
  {
    title: "Announcements",
    description: "Closures, revised hours, holidays, and service updates.",
    href: "#announcements",
    group: "Section",
    keywords: "announcements advisory closure hours",
  },
  {
    title: "Holiday and special schedules",
    description: "Regular holidays, special days, and revised schedules.",
    href: "#holiday-preview",
    group: "Section",
    keywords: "holiday special non-working working schedule",
  },
  {
    title: "Temporary closure advisory",
    description: "How a closure notice would be structured.",
    href: "#closure-advisory",
    group: "Section",
    keywords: "closure closed temporary advisory reopening",
  },
  {
    title: "How information works",
    description: "From office update to citizen check.",
    href: "#how-it-works",
    group: "Section",
    keywords: "how it works information flow verification",
  },
  {
    title: "Trust and transparency",
    description: "Authorized updates, timestamps, estimates, and corrections.",
    href: "#trust",
    group: "Section",
    keywords: "trust accuracy outdated correction",
  },
  {
    title: "Mobile experience",
    description: "How the public interface is designed for phones.",
    href: "#mobile",
    group: "Section",
    keywords: "mobile phone responsive",
  },
  {
    title: "Government participation",
    description: "How authorized offices can take part.",
    href: "#participation",
    group: "Section",
    keywords: "participation office join partner",
  },
  {
    title: "One simple habit",
    description: "Check, verify, review, prepare.",
    href: "#habit",
    group: "Section",
    keywords: "habit check verify review prepare",
  },
  {
    title: "Frequently asked questions",
    description: "Accuracy, accounts, appointments, and participation.",
    href: "#faq",
    group: "Section",
    keywords: "faq questions answers",
  },
  {
    title: "Citizen feedback",
    description: "Report outdated information or suggest improvements.",
    href: "#feedback",
    group: "Section",
    keywords: "feedback correction report outdated suggest",
  },
  {
    title: "Contact",
    description: "Inquiries, suggestions, and office participation.",
    href: "#contact",
    group: "Section",
    keywords: "contact email participation",
  },
  {
    title: "Privacy policy",
    description: "What this introduction website does and does not collect.",
    href: "#privacy",
    group: "Section",
    keywords: "privacy data",
  },
  {
    title: "Terms of use",
    description: "The basis for using this informational site.",
    href: "#terms",
    group: "Section",
    keywords: "terms conditions",
  },
  {
    title: "Information disclaimer",
    description: "Sample data, participation, and confirmation limits.",
    href: "#disclaimer",
    group: "Section",
    keywords: "disclaimer sample demo not official",
  },
];

const guideEntries: SearchEntry[] = guides.map((guide) => ({
  title: guide.title,
  description: guide.description,
  href: "#guides",
  group: "Guide",
  keywords: `${guide.verify.join(" ")} preparation`,
}));

const faqEntries: SearchEntry[] = faqs.map((faq, index) => ({
  title: faq.question,
  description: faq.answer,
  href: `#faq-q-${index}`,
  group: "FAQ",
  keywords: "question answer",
}));

const statusEntries: SearchEntry[] = [
  {
    title: "Office status: Open",
    description: "The office is accepting regular transactions within its published hours.",
    href: "#availability",
    group: "Status",
    keywords: "open bukas accepting",
  },
  {
    title: "Office status: Closed",
    description: "Outside published hours or on a non-working day.",
    href: "#availability",
    group: "Status",
    keywords: "closed sarado",
  },
  {
    title: "Office status: Opening soon",
    description: "Expected to open shortly according to the published schedule.",
    href: "#availability",
    group: "Status",
    keywords: "opening soon",
  },
  {
    title: "Office status: Closing soon",
    description: "Near closing time; new transactions may no longer be accepted.",
    href: "#availability",
    group: "Status",
    keywords: "closing soon cut off",
  },
  {
    title: "Office status: Temporarily closed",
    description: "Closed during normal hours because of an advisory.",
    href: "#availability",
    group: "Status",
    keywords: "temporarily closed suspension",
  },
  {
    title: "Official status: Available",
    description: "The official can attend to inquiries, subject to office rules.",
    href: "#availability",
    group: "Status",
    keywords: "available official",
  },
  {
    title: "Official status: Out of office",
    description: "The official is not in the office; an expected return may be published.",
    href: "#return-guide",
    group: "Status",
    keywords: "out of office wala",
  },
  {
    title: "Official status: In a meeting",
    description: "Present but engaged; walk-in inquiries may wait.",
    href: "#availability",
    group: "Status",
    keywords: "meeting",
  },
  {
    title: "Official status: On official business",
    description: "Attending official duties or fieldwork elsewhere.",
    href: "#availability",
    group: "Status",
    keywords: "official business fieldwork",
  },
  {
    title: "Official status: On leave",
    description: "On approved leave; an officer-in-charge may handle concerns.",
    href: "#availability",
    group: "Status",
    keywords: "leave vacation",
  },
  {
    title: "Official status: Next available schedule",
    description: "A published consultation window, subject to change.",
    href: "#return-guide",
    group: "Status",
    keywords: "next available schedule consultation",
  },
  {
    title: "Service status: Limited service",
    description: "Only part of the service is operating.",
    href: "#services",
    group: "Status",
    keywords: "limited service partial",
  },
  {
    title: "Service status: Suspended",
    description: "Transactions are stopped, possibly beyond today.",
    href: "#services",
    group: "Status",
    keywords: "suspended stopped service",
  },
  {
    title: "Service status: Schedule not available",
    description: "The office has not published a service schedule yet.",
    href: "#availability",
    group: "Status",
    keywords: "not available unknown",
  },
];

export const searchIndex: SearchEntry[] = [
  ...sections,
  ...guideEntries,
  ...faqEntries,
  ...statusEntries,
];

export function searchEntries(query: string, limit = 10): SearchEntry[] {
  const tokens = query
    .toLowerCase()
    .split(/\s+/)
    .map((token) => token.trim())
    .filter(Boolean);

  if (!tokens.length) return [];

  return searchIndex
    .map((entry) => {
      const haystack = `${entry.title} ${entry.description} ${entry.keywords ?? ""}`.toLowerCase();
      const matches = tokens.every((token) => haystack.includes(token));
      if (!matches) return null;
      const titleHit = tokens.every((token) => entry.title.toLowerCase().includes(token));
      return { entry, score: titleHit ? 2 : 1 };
    })
    .filter((item): item is { entry: SearchEntry; score: number } => item !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.entry);
}
