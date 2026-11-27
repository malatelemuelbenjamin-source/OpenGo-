import { site } from "../site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

type OfficialStatus = {
  role: string;
  office: string;
  updated: string;
  status: "away" | "available" | "unavailable";
  label: string;
};

const officials: OfficialStatus[] = [
  {
    role: "Mayor",
    office: "Office of the Mayor",
    updated: "8:10 AM",
    status: "away",
    label: "Out of office",
  },
  {
    role: "Vice Mayor",
    office: "Office of the Vice Mayor",
    updated: "8:05 AM",
    status: "available",
    label: "Available",
  },
  {
    role: "Treasurer",
    office: "Municipal Treasurer",
    updated: "7:55 AM",
    status: "available",
    label: "Available",
  },
  {
    role: "Civil Registrar",
    office: "Civil Registry",
    updated: "9:15 AM",
    status: "unavailable",
    label: "Temporarily unavailable",
  },
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-grid" />
        <span className="hero-glow hero-glow-a" />
        <span className="hero-glow hero-glow-b" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-initiative">
            <span className="dot" aria-hidden="true" />
            {site.initiative}
          </p>

          <p className="hero-wordmark">
            <span>OPENNOW</span>
            <span className="hero-wordmark-accent">GOVERNMENT</span>
          </p>

          <h1 className="hero-title">
            <span className="hero-title-line">Know before</span>{" "}
            <span className="hero-title-line hero-title-accent">you go.</span>
          </h1>

          <p className="hero-subheadline">Check First. Travel Smarter. Save Time.</p>

          <p className="hero-description">
            Alamin muna kung bukas ang government office, available ang opisyal na kailangan mong
            makausap, at operational ang serbisyong kailangan mo bago ka bumiyahe.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#features">
              Discover OpenNow
              <Icon name="arrowRight" size={18} />
            </a>
            <a className="btn btn-outline-light" href="#how-it-works">
              How It Works
            </a>
          </div>

          <ul className="hero-facts" aria-label="What OpenNow provides">
            <li>
              <Icon name="building" size={18} />
              Office status
            </li>
            <li>
              <Icon name="userCheck" size={18} />
              Official availability
            </li>
            <li>
              <Icon name="clipboard" size={18} />
              Service availability
            </li>
          </ul>
        </div>

        <div className="hero-visual">
          <div
            className="dash"
            role="group"
            aria-label="Demo preview of the OpenNow government office availability dashboard"
          >
            <div className="dash-top">
              <span className="dash-brand">
                <Logo size={26} />
                <span>opennow</span>
              </span>
              <span className="dash-demo-tag">Demo preview</span>
            </div>

            <div className="dash-office">
              <div>
                <p className="dash-kicker">Marinduque · Boac</p>
                <p className="dash-office-name">Municipal Hall</p>
                <p className="dash-office-hours">
                  <Icon name="clock" size={13} />
                  Office hours · 8:00 AM – 5:00 PM
                </p>
              </div>
              <span className="status status-open status-lg">Open</span>
            </div>

            <p className="dash-section-label">Official availability</p>

            <ul className="dash-rows">
              {officials.map((official) => (
                <li key={official.role}>
                  <div className="dash-row-text">
                    <p className="dash-row-name">{official.role}</p>
                    <p className="dash-row-meta">
                      {official.office} · updated {official.updated}
                    </p>
                  </div>
                  <span className={`status status-${official.status}`}>{official.label}</span>
                </li>
              ))}
            </ul>

            <div className="dash-services">
              <span className="dash-service">
                <span className="dot dot-green" aria-hidden="true" />
                Tax payments · accepting
              </span>
              <span className="dash-service">
                <span className="dot dot-red" aria-hidden="true" />
                Civil registry · paused
              </span>
            </div>

            <div className="dash-return">
              <div>
                <p className="dash-return-label">Expected return</p>
                <p className="dash-return-value">4:00 PM</p>
              </div>
              <p className="dash-return-note">
                Illustrative estimate — not a guaranteed return time.
              </p>
            </div>

            <p className="dash-demo-bar">
              <Icon name="alert" size={13} />
              Demo data — not live government information
            </p>
          </div>

          <p className="hero-dash-caption">
            Sample interface for illustration only. Office names, statuses, and times are demo data.
          </p>
        </div>
      </div>
    </section>
  );
}
