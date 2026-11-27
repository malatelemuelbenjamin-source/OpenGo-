import { Icon } from "./Icon";

const scenarios: {
  number: string;
  title: string;
  text: string;
  pills: { label: string; className: string }[];
  link: { label: string; href: string };
}[] = [
  {
    number: "01",
    title: "Visiting the Mayor",
    text: "A citizen wants to speak with the Mayor. The Municipal Hall is open, but the Mayor is out of office. The citizen can check the next published availability before travelling.",
    pills: [
      { label: "Office open", className: "status-open" },
      { label: "Mayor out of office", className: "status-away" },
    ],
    link: { label: "Check availability statuses", href: "#return-guide" },
  },
  {
    number: "02",
    title: "Civil Registry Transaction",
    text: "A citizen needs a civil registry service. The office is open, but the specific service is temporarily unavailable. The citizen can review the service notice before visiting.",
    pills: [
      { label: "Office open", className: "status-open" },
      { label: "Service unavailable", className: "status-unavailable" },
    ],
    link: { label: "Understand service status", href: "#services" },
  },
  {
    number: "03",
    title: "Temporary Office Closure",
    text: "A citizen plans to visit an office, but a special announcement indicates a temporary closure. The citizen can adjust the visit instead of discovering it at the gate.",
    pills: [
      { label: "Temporary closure", className: "status-unavailable" },
      { label: "Advisory published", className: "status-away" },
    ],
    link: { label: "See announcement formats", href: "#announcements" },
  },
  {
    number: "04",
    title: "Schedule Changes",
    text: "A citizen wants to visit during a holiday or special operating schedule. The citizen can check the latest published advisory and choose a better day.",
    pills: [
      { label: "Special schedule", className: "status-available" },
      { label: "Advisory published", className: "status-away" },
    ],
    link: { label: "Check holiday examples", href: "#holiday-preview" },
  },
];

export function Scenarios() {
  return (
    <section className="section scenarios" id="scenarios">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Real-life situations</p>
          <h2 className="section-title">Real-Life Situations OpenNow Can Help With.</h2>
          <p className="section-lead">
            Four familiar situations, and the check that changes the outcome. These are illustrative
            examples — not claims about any actual government office.
          </p>
        </div>

        <div className="scenario-grid">
          {scenarios.map((scenario, index) => (
            <article
              className="scenario-card"
              key={scenario.number}
              data-reveal
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="scenario-top">
                <span className="scenario-number">{scenario.number}</span>
                <span className="sample-pill">Illustrative</span>
              </div>
              <h3>{scenario.title}</h3>
              <p>{scenario.text}</p>
              <div className="scenario-pills">
                {scenario.pills.map((pill) => (
                  <span className={`status ${pill.className}`} key={pill.label}>
                    {pill.label}
                  </span>
                ))}
              </div>
              <a className="scenario-link" href={scenario.link.href}>
                {scenario.link.label}
                <Icon name="arrowRight" size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
