import { Icon } from "./Icon";

const policies = [
  {
    id: "privacy",
    icon: "shield" as const,
    title: "Privacy Policy",
    paragraphs: [
      "This introduction website does not require an account and does not ask for names, email addresses, or phone numbers through any live form.",
      "The Before You Go checklist runs entirely inside your browser tab. Its state is not written to storage and is discarded when you leave or reload the page.",
      "The citizen feedback form on this page is a demonstration. What you type is validated in your browser and is not transmitted to OpenNow, BetterGo Marinduque, or any government office.",
      "Typography is loaded from Google Fonts, which receives standard request information such as your IP address. No advertising, tracking pixels, or third-party analytics are installed on this page. If analytics are introduced later, this policy will be updated before they are enabled.",
    ],
  },
  {
    id: "terms",
    icon: "clipboard" as const,
    title: "Terms of Use",
    paragraphs: [
      "OpenNow Government is an informational introduction website. It does not process applications, accept payments, issue certifications, or serve as an official channel for any government office.",
      "Content is provided for planning purposes only and may change without notice. Sample boards and demonstration cards are illustrative and must not be treated as official records.",
      "You agree not to present information from this site as an official government issuance, and not to use the site to misrepresent a government office, official, or service.",
      "Links to external websites, including BetterGo Marinduque, are provided for convenience. Their content and availability are outside the control of this project.",
    ],
  },
  {
    id: "disclaimer",
    icon: "alert" as const,
    title: "Information Disclaimer",
    paragraphs: [
      "All office statuses, schedules, announcements, and service boards on this introduction website are sample data, clearly labelled as such. They do not describe the real status of any office.",
      "In the intended platform, published information depends on participating offices and authorized updates. Availability information is self-reported; it is not live tracking.",
      "Expected return times are estimates, not guarantees. Confirmed schedules are labelled separately where an office provides them.",
      "OPENNOW Government does not claim official government ownership, endorsement, or partnership unless formally authorized. Always confirm critical transactions directly with the concerned office before travelling.",
    ],
  },
];

export function Legal() {
  return (
    <section className="section legal" id="policies">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Policies</p>
          <h2 className="section-title">What this site does — and what it does not.</h2>
          <p className="section-lead">
            Plain-language policies for an informational introduction website. They describe this site as
            it actually behaves today, not a future platform.
          </p>
        </div>

        <div className="legal-grid">
          {policies.map((policy, index) => (
            <article
              className="legal-card"
              id={policy.id}
              key={policy.id}
              data-reveal
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="legal-head">
                <span className="legal-icon">
                  <Icon name={policy.icon} size={20} />
                </span>
                <h3>{policy.title}</h3>
              </div>
              {policy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="legal-updated">Last reviewed: November 2026</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
