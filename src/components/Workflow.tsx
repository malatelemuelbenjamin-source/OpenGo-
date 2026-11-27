import { Icon, type IconName } from "./Icon";

const situations = [
  "Pumunta sa munisipyo pero wala pala ang opisyal na kailangan mong kausapin.",
  "Bumiyahe para kumuha ng dokumento pero pansamantalang hindi available ang serbisyo.",
  "Hindi alam kung may pagbabago sa office operating schedule.",
  "Hindi sigurado kung kailan babalik ang isang opisyal.",
];

export function Problem() {
  return (
    <section className="section problem" id="problem">
      <div className="container">
        <div className="problem-layout">
          <div className="problem-copy" data-reveal>
            <p className="eyebrow eyebrow-warm">The problem we want to solve</p>
            <h2 className="section-title">Don&rsquo;t Waste Another Trip.</h2>
            <p className="section-lead">
              A single wasted trip costs more than fare. It costs a day of leave, a missed errand, and
              the patience of a family waiting at home. These are the situations OPENNOW Government is
              built to prevent.
            </p>
            <p className="problem-closing">
              <Icon name="sparkle" size={20} />
              Your time, money, and effort matter.
            </p>
          </div>

          <ul className="problem-list">
            {situations.map((text, index) => (
              <li key={text} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                <span className="problem-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const features: { icon: IconName; key: string; title: string; description: string }[] = [
  {
    icon: "clock",
    key: "A",
    title: "Office open status",
    description:
      "View regular government office schedules, opening hours, closing hours, and special operating days.",
  },
  {
    icon: "userCheck",
    key: "B",
    title: "Official availability",
    description:
      "See whether participating public officials are available, in a meeting, out of office, or temporarily unavailable.",
  },
  {
    icon: "clipboard",
    key: "C",
    title: "Service availability",
    description:
      "Find out whether specific government services are currently accepting transactions or temporarily suspended.",
  },
  {
    icon: "return",
    key: "D",
    title: "Expected return information",
    description:
      "View authorized estimated return times when an office publishes them — always labelled as estimates, never guarantees.",
  },
  {
    icon: "calendar",
    key: "E",
    title: "Next available schedule",
    description:
      "See confirmed consultation schedules and appointment windows when the office releases them.",
  },
  {
    icon: "bell",
    key: "F",
    title: "Special office schedules",
    description:
      "Check special operating days, shortened hours, and locally declared office schedules.",
  },
  {
    icon: "megaphone",
    key: "G",
    title: "Holiday & closure announcements",
    description:
      "Read holiday advisories, temporary closures, and service updates in one public place.",
  },
  {
    icon: "shield",
    key: "H",
    title: "Last updated information",
    description:
      "Every entry shows when it was last updated, so you can judge how fresh it is before travelling.",
  },
];

export function HowItWorks() {
  return (
    <section className="section how" id="features">
      <div className="container">
        <div className="section-head section-head-center" data-reveal>
          <p className="eyebrow">Platform features</p>
          <h2 className="section-title">Eight things to check before you travel.</h2>
          <p className="section-lead">
            Office status, official availability, service status, return times, schedules, and
            announcements — the full set of checks in one public place.
          </p>
        </div>

        <div className="feature-grid feature-grid-eight">
          {features.map((feature, index) => (
            <article
              className="feature-card"
              key={feature.key}
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="feature-card-top">
                <span className="feature-icon">
                  <Icon name={feature.icon} size={24} />
                </span>
                <span className="feature-key">{feature.key}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfficePreview() {
  return (
    <section className="section preview" id="offices">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Government office availability preview</p>
          <h2 className="section-title">What a check looks like.</h2>
          <p className="section-lead">
            A single view of the things that usually take three phone calls to confirm. This is a
            design preview of the intended public directory.
          </p>
        </div>

        <div className="preview-frame" data-reveal>
          <div className="preview-toolbar">
            <div className="preview-toolbar-left">
              <span className="preview-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="preview-url">
                <Icon name="globe" size={14} />
                opennow.bettergomarinduque.com/offices
              </span>
            </div>
            <span className="preview-sample-badge">
              <Icon name="alert" size={13} />
              Sample information
            </span>
          </div>

          <div className="preview-body">
            <div className="preview-heading">
              <div>
                <p className="preview-breadcrumb">Marinduque / Boac</p>
                <h3>Municipal Hall</h3>
                <p className="preview-sub">
                  <Icon name="pin" size={14} /> Poblacion, Boac, Marinduque
                </p>
              </div>
              <span className="status status-open status-lg">Open</span>
            </div>

            <div className="preview-grid">
              <div className="preview-panel">
                <p className="preview-panel-label">Regular schedule</p>
                <p className="preview-panel-value">Monday – Friday</p>
                <p className="preview-panel-value strong">8:00 AM – 5:00 PM</p>
                <p className="preview-panel-foot">
                  <Icon name="calendar" size={14} />
                  Special operating days will be posted in announcements.
                </p>
              </div>

              <div className="preview-panel">
                <p className="preview-panel-label">Office of the Mayor</p>
                <div className="preview-panel-status">
                  <span className="status status-away">Out of office</span>
                </div>
                <p className="preview-panel-value">Expected return</p>
                <p className="preview-panel-value strong">4:00 PM</p>
                <p className="preview-panel-foot">
                  <Icon name="shield" size={14} />
                  Authorized entries only.
                </p>
              </div>

              <div className="preview-panel">
                <p className="preview-panel-label">Municipal Treasurer</p>
                <div className="preview-panel-status">
                  <span className="status status-available">Available</span>
                </div>
                <p className="preview-panel-value">Accepting transactions</p>
                <p className="preview-panel-value strong">Until 4:30 PM</p>
                <p className="preview-panel-foot">
                  <Icon name="clipboard" size={14} />
                  Service availability may change without notice.
                </p>
              </div>

              <div className="preview-panel">
                <p className="preview-panel-label">Civil Registrar</p>
                <div className="preview-panel-status">
                  <span className="status status-unavailable">Temporarily unavailable</span>
                </div>
                <p className="preview-panel-value">Document requests</p>
                <p className="preview-panel-value strong">Paused</p>
                <p className="preview-panel-foot">
                  <Icon name="alert" size={14} />
                  Check announcements before travelling.
                </p>
              </div>
            </div>

            <div className="preview-notice">
              <Icon name="alert" size={16} />
              <p>
                <strong>Illustrative preview only.</strong> All offices, officials, and schedules above
                are sample data for design demonstration. They are not live government records and do
                not represent the actual status of any office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
