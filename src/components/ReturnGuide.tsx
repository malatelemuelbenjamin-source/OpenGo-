import { Icon, type IconName } from "./Icon";

const definitions: {
  key: string;
  icon: IconName;
  tag: string;
  statusClass: string;
  example: string;
  meta: string;
  text: string;
}[] = [
  {
    key: "estimate",
    icon: "return",
    tag: "Estimated return",
    statusClass: "status-away",
    example: "4:00 PM",
    meta: "Office of the Mayor · sample update 8:10 AM",
    text: "An approximate time provided by an authorized office representative. It is not a guarantee, and it can move if the official is called away.",
  },
  {
    key: "confirmed",
    icon: "check",
    tag: "Confirmed schedule",
    statusClass: "status-open",
    example: "Thursday · 9:00 AM",
    meta: "Confirmed consultation window · sample office",
    text: "A schedule explicitly confirmed by the relevant authorized office for a specific window. It is still subject to the office's own changes.",
  },
  {
    key: "next",
    icon: "calendar",
    tag: "Next available schedule",
    statusClass: "status-available",
    example: "Monday · 8:00 AM – 12:00 PM",
    meta: "Next published availability · sample office",
    text: "The next published availability schedule. Treat it as the best current information, not as a reserved slot or an appointment.",
  },
];

export function ReturnGuide() {
  return (
    <section className="section return-guide" id="return-guide">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Estimated vs confirmed</p>
          <h2 className="section-title">Know the Difference: Estimated Return and Confirmed Availability.</h2>
          <p className="section-lead">
            &ldquo;Bababa siya mamaya&rdquo; is not the same as a confirmed schedule. OpenNow Government
            keeps the two visibly separate, so an estimate is never treated as an appointment.
          </p>
        </div>

        <div className="return-grid">
          {definitions.map((item, index) => (
            <article
              className={`return-card return-${item.key}`}
              key={item.key}
              data-reveal
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="return-head">
                <span className="return-icon">
                  <Icon name={item.icon} size={19} />
                </span>
                <span className={`status ${item.statusClass}`}>{item.tag}</span>
              </div>
              <p className="return-example">{item.example}</p>
              <p className="return-meta">{item.meta}</p>
              <p className="return-text">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="return-strip" data-reveal>
          <span className="return-strip-badge">DEMO DATA</span>
          <p>
            The examples above are illustrative. An estimated return time is never shown as a guaranteed
            appointment or a confirmed arrival, and a confirmed schedule is only as reliable as the
            office that published it.
          </p>
          <a className="text-link text-link-light" href="#office-status">
            See how statuses appear
            <Icon name="arrowRight" size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
