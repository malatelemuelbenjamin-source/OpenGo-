import { guideReminder, guides } from "../content/guides";
import { Icon } from "./Icon";

export function Guides() {
  return (
    <section className="section guides" id="guides">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Transaction preparation</p>
          <h2 className="section-title">Prepare Before Your Government Transaction.</h2>
          <p className="section-lead">
            General guidance for the transactions citizens ask about most. Each card lists what to
            verify — not the requirements themselves, because those belong to the office.
          </p>
        </div>

        <div className="guide-note" role="note" data-reveal>
          <Icon name="alert" size={16} />
          <span>
            <strong>General guidance only.</strong> No document requirements, fees, processing times, or
            policies are listed here. Always confirm the official checklist with the office concerned.
          </span>
        </div>

        <div className="guide-grid">
          {guides.map((guide, index) => (
            <article className="guide-card" key={guide.slug} data-reveal style={{ transitionDelay: `${index * 40}ms` }}>
              <div className="guide-head">
                <span className="guide-icon">
                  <Icon name={guide.icon} size={20} />
                </span>
                <h3>{guide.title}</h3>
              </div>
              <p className="guide-description">{guide.description}</p>

              <p className="guide-verify-label">Verify before visiting</p>
              <ul className="guide-verify">
                {guide.verify.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={14} />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="guide-foot">
                <Icon name="shield" size={13} />
                Confirm requirements with this office.
              </p>
            </article>
          ))}
        </div>

        <p className="guide-reminder" data-reveal>
          <Icon name="alert" size={15} />
          {guideReminder}
        </p>

        <div className="guide-planner-link" data-reveal>
          <p>Ready to plan? Build a preparation summary for your visit.</p>
          <a className="btn btn-primary" href="#planner">
            Open the visit planner
            <Icon name="arrowRight" size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
