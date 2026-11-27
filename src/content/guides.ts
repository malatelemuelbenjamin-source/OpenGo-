import type { IconName } from "../components/Icon";

export type Guide = {
  slug: string;
  title: string;
  icon: IconName;
  description: string;
  verify: string[];
};

/**
 * General preparation guidance only. No documentary requirements, fees,
 * processing times, or policies are stated — those are set by each office.
 */
export const guides: Guide[] = [
  {
    slug: "business-permit",
    title: "Business Permit Transactions",
    icon: "clipboard",
    description:
      "Planning to start, renew, or amend a business permit? The permit desk may follow a different window or process from the rest of the hall.",
    verify: [
      "Whether the business permit desk is accepting transactions today",
      "The office's current published requirements checklist",
      "Any announcement affecting the application or renewal window",
    ],
  },
  {
    slug: "birth-certificate",
    title: "Birth Certificate Requests",
    icon: "file",
    description:
      "Civil record requests are handled by the civil registry office. Confirm which office holds the record and whether requests are being processed.",
    verify: [
      "Which civil registry office handles your record",
      "Whether document requests are being accepted today",
      "The office's published list of requirements and authorized requesters",
    ],
  },
  {
    slug: "civil-registry",
    title: "Civil Registry Inquiries",
    icon: "landmark",
    description:
      "Marriage, death, correction, and other civil registry concerns may use a different counter or process from simple record requests.",
    verify: [
      "The correct service window or unit for your concern",
      "Whether the service is limited or temporarily suspended",
      "The office's published contact channel for clarifications",
    ],
  },
  {
    slug: "tax-payments",
    title: "Tax and Payment Transactions",
    icon: "wallet",
    description:
      "Real property tax, business tax, and other collections are handled by the treasurer's office, often with a cut-off earlier than closing time.",
    verify: [
      "The payment cut-off on the day you plan to visit",
      "Whether the collection system is operational",
      "The payment methods the office currently accepts",
    ],
  },
  {
    slug: "financial-assistance",
    title: "Financial Assistance Inquiries",
    icon: "users",
    description:
      "Assistance programs may depend on available funds, published schedules, and verification of eligibility by the implementing office.",
    verify: [
      "Whether the program is currently accepting inquiries",
      "The office's published process and schedule",
      "Any announcement changing requirements or availability",
    ],
  },
  {
    slug: "document-releasing",
    title: "Document Releasing",
    icon: "mail",
    description:
      "If you are claiming a document, confirm it is ready before travelling. Releasing windows are often shorter than regular office hours.",
    verify: [
      "Whether your document is ready for release",
      "The releasing window and daily cut-off",
      "The office's published claiming process and authorized representatives",
    ],
  },
  {
    slug: "building-engineering",
    title: "Building and Engineering Inquiries",
    icon: "building",
    description:
      "Permits, inspections, and engineering concerns are handled by the municipal or provincial engineering office, often by appointment or field schedule.",
    verify: [
      "Whether the engineering desk is staffed on your planned day",
      "The office's published checklist for your type of inquiry",
      "Inspection or coordination schedules that may take staff out of office",
    ],
  },
  {
    slug: "general-inquiries",
    title: "Municipal Hall General Inquiries",
    icon: "search",
    description:
      "Not sure which office handles your concern? Start with the general information or receiving desk before queueing at a specific window.",
    verify: [
      "Which office or department handles your concern",
      "That office's schedule and current availability",
      "Any announcement affecting today's operations",
    ],
  },
];

export const guideReminder =
  "Requirements, fees, and processing times are set by the office concerned. Confirm the official checklist directly with that office before travelling — this page does not list them.";
