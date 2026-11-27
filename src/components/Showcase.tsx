import { Icon } from "./Icon";

const features = [
  "Office status at a glance",
  "Mayor's availability and expected return",
  "Regular operating hours",
  "Service availability, per service",
  "Announcements that affect today's trip",
  "Readable on a small screen, on a slow connection",
];

export function MobileShowcase() {
  return (
    <section className="section showcase" id="mobile">
      <div className="container showcase-layout">
        <div className="showcase-visual" data-reveal>
          <div className="showcase-glow" aria-hidden="true" />
          <div
            className="phone phone-showcase"
            role="img"
            aria-label="Illustration of the OpenNow mobile interface showing sample office status, official availability, operating hours, service availability, and an announcement"
          >
            <div className="phone-speaker" aria-hidden="true" />
            <div className="phone-screen">
              <div className="phone-header">
                <span className="phone-logo">
                  <span className="phone-logo-dot" aria-hidden="true" />
                  opennow
                </span>
                <span className="phone-sample">Sample</span>
              </div>
              <p className="phone-location">
                <Icon name="pin" size={14} />
                Boac, Marinduque
              </p>

              <div className="phone-card phone-card-main">
                <div className="phone-card-head">
                  <span className="phone-card-icon">
                    <Icon name="building" size={19} />
                  </span>
                  <div>
                    <p className="phone-card-title">Municipal Hall</p>
                    <p className="phone-card-meta">Today · Regular schedule</p>
                  </div>
                  <span className="status status-open">Open</span>
                </div>
                <div className="phone-hours">
                  <span>Monday – Friday</span>
                  <strong>8:00 AM – 5:00 PM</strong>
                </div>
                <ul className="phone-list">
                  <li>
                    <span>Office of the Mayor</span>
                    <span className="status status-away">Out of office</span>
                  </li>
                  <li>
                    <span>Expected return</span>
                    <strong className="phone-inline-value">4:00 PM</strong>
                  </li>
                </ul>
              </div>

              <div className="phone-card">
                <p className="phone-soft-title">Service availability</p>
                <ul className="phone-list phone-list-tight">
                  <li>
                    <span>Tax payments</span>
                    <span className="status status-available">Accepting</span>
                  </li>
                  <li>
                    <span>Civil registry</span>
                    <span className="status status-unavailable">Paused</span>
                  </li>
                </ul>
              </div>

              <div className="phone-card phone-card-soft phone-card-announce">
                <Icon name="megaphone" size={16} />
                <div>
                  <p className="phone-soft-title">Announcement · Sample</p>
                  <p className="phone-soft-value">Revised operating hours on Friday</p>
                </div>
              </div>
            </div>
          </div>
          <p className="showcase-note">
            <Icon name="alert" size={13} />
            Illustrative mobile interface. All entries are sample data.
          </p>
        </div>

        <div className="showcase-copy" data-reveal>
          <p className="eyebrow eyebrow-light">Mobile experience</p>
          <h2 className="section-title section-title-light">
            Built for one hand, one bag, and one bar of signal.
          </h2>
          <p className="section-lead section-lead-light">
            Most citizens will check OpenNow while standing at a terminal, packing documents, or already
            on the road. The public interface is designed for that moment first.
          </p>

          <ul className="showcase-list">
            {features.map((feature) => (
              <li key={feature}>
                <Icon name="check" size={16} />
                {feature}
              </li>
            ))}
          </ul>

          <p className="showcase-footnote">
            This introduction website is fully responsive as well — resize the window or open it on a
            phone and every section reflows, no horizontal scrolling.
          </p>
        </div>
      </div>
    </section>
  );
}
