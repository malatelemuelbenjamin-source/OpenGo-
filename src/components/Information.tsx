import { Icon, type IconName } from "./Icon";

const steps: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "building",
    title: "Government office updates",
    text: "Authorized office personnel submit schedule and availability information for their own office.",
  },
  {
    icon: "shield",
    title: "Information is verified",
    text: "Authorized administrators review and verify submitted information when verification is required.",
  },
  {
    icon: "globe",
    title: "OpenNow publishes information",
    text: "Approved public information becomes accessible through the OpenNow platform, with an update time.",
  },
  {
    icon: "phone",
    title: "Citizens check before traveling",
    text: "Citizens view available schedules, office statuses, and service announcements before leaving home.",
  },
];

export function InformationFlow() {
  return (
    <section className="section flow" id="how-it-works">
      <div className="container">
        <div className="section-head section-head-center" data-reveal>
          <p className="eyebrow">How OpenNow works</p>
          <h2 className="section-title">From the office counter to your phone.</h2>
          <p className="section-lead">
            A short chain of custody for every schedule and status. Nothing is published without an
            office behind it, and every step leaves a timestamp.
          </p>
        </div>

        <ol className="flow-steps">
          {steps.map((step, index) => (
            <li className="flow-step" key={step.title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
              <span className="flow-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flow-icon">
                <Icon name={step.icon} size={22} />
              </span>
              <p className="flow-step-label">Step {index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="flow-note" data-reveal>
          <Icon name="shield" size={15} />
          Verification steps may be handled by the participating office or by OpenNow administrators,
          depending on the agreement with each office.
        </p>
      </div>
    </section>
  );
}

const trustItems: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "userCheck",
    title: "Authorized updates only",
    text: "Public availability should come from authorized office representatives — not from hearsay, screenshots, or scraping.",
  },
  {
    icon: "clock",
    title: "Last updated timestamps",
    text: "Every entry is designed to show when it was last touched, so stale information is visible as stale.",
  },
  {
    icon: "shield",
    title: "Verified office profiles",
    text: "An office profile is created with the office's participation, not invented from public directories.",
  },
  {
    icon: "alert",
    title: "Outdated information is marked",
    text: "Entries past their expected refresh window should be visibly flagged instead of quietly looking current.",
  },
  {
    icon: "return",
    title: "Estimates are not guarantees",
    text: "An expected return is only an estimate. It can change without notice when an official is called away.",
  },
  {
    icon: "calendar",
    title: "Confirmed schedules, separated",
    text: "Confirmed consultation windows and appointments are labelled differently from estimated returns.",
  },
  {
    icon: "mail",
    title: "Report incorrect information",
    text: "Citizens can report an outdated or wrong entry. The responsible office reviews it before anything changes.",
  },
  {
    icon: "clipboard",
    title: "Historical schedule records",
    text: "When an office provides it, previous schedules and announcements can remain viewable for context.",
  },
];

export function Trust() {
  return (
    <section className="section trust" id="trust">
      <div className="container">
        <div className="trust-layout">
          <div className="trust-copy" data-reveal>
            <p className="eyebrow">Trust &amp; transparency</p>
            <h2 className="section-title">Information You Can Understand and Trust.</h2>
            <p className="section-lead">
              Availability updates should come from authorized representatives, carry a visible update
              time, and make clear what is an estimate and what is confirmed.
            </p>

            <div className="trust-banner">
              <Icon name="alert" size={18} />
              <p>
                <strong>Sample information is always labelled.</strong> Every demonstration board on
                this site carries a visible marker. Nothing here is presented as actual government data.
              </p>
            </div>
          </div>

          <ul className="trust-grid">
            {trustItems.map((item, index) => (
              <li key={item.title} data-reveal style={{ transitionDelay: `${index * 50}ms` }}>
                <span className="trust-icon">
                  <Icon name={item.icon} size={19} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
