import { Icon, type IconName } from "./Icon";

type ScheduleKind = "regular" | "nonworking" | "local" | "special" | "revised";

const schedules: {
  kind: ScheduleKind;
  tag: string;
  icon: IconName;
  title: string;
  date: string;
  body: string;
}[] = [
  {
    kind: "regular",
    tag: "Regular Holiday",
    icon: "calendar",
    title: "Regular holiday · all offices closed",
    date: "Sample date",
    body: "Government offices are closed for a regular holiday. Transactions resume on the next working day.",
  },
  {
    kind: "nonworking",
    tag: "Special Non-Working Day",
    icon: "bell",
    title: "Special non-working day declared",
    date: "Sample date",
    body: "A special non-working day applies to selected offices. Check whether your office follows the declaration.",
  },
  {
    kind: "local",
    tag: "Local Government Announcement",
    icon: "landmark",
    title: "Local fiesta · half-day operations",
    date: "Sample date",
    body: "Some municipal offices close at noon for a local observance. Published by the office concerned.",
  },
  {
    kind: "special",
    tag: "Special Working Day",
    icon: "clipboard",
    title: "Special working day for document releasing",
    date: "Sample date",
    body: "Selected frontline services accept transactions on a day normally outside the regular schedule.",
  },
  {
    kind: "revised",
    tag: "Revised Office Schedule",
    icon: "clock",
    title: "Temporary shift in operating hours",
    date: "Sample date",
    body: "An office publishes adjusted opening and closing hours for a defined period, replacing its regular schedule.",
  },
];

export function HolidayPreview() {
  return (
    <section className="section schedules" id="holiday-preview">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Holiday &amp; special schedule preview</p>
          <h2 className="section-title">The days that quietly change everything.</h2>
          <p className="section-lead">
            Holidays, local observances, special working days, and temporary revised hours are the most
            common reason a planned trip fails. These card layouts show how each kind would be published.
          </p>
        </div>

        <div className="demo-strip" role="note" data-reveal>
          <Icon name="alert" size={16} />
          <span>
            <strong>Sample schedule cards.</strong> Dates and advisories below are placeholders for
            layout review — they are not official holiday declarations.
          </span>
        </div>

        <div className="schedule-grid">
          {schedules.map((item, index) => (
            <article
              className={`schedule-card schedule-${item.kind}`}
              key={item.title}
              data-reveal
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              <div className="schedule-top">
                <span className="schedule-tag">
                  <Icon name={item.icon} size={14} />
                  {item.tag}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className="schedule-foot">
                <span className="schedule-date">
                  <Icon name="calendar" size={13} />
                  {item.date}
                </span>
                <span className="sample-pill">Sample</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const advisoryFields = [
  { label: "Affected office", value: "Municipal Hall · Sample Office" },
  { label: "Effective date", value: "Sample date, 2026" },
  { label: "Expected reopening", value: "Next working day, 8:00 AM" },
  { label: "Alternative contact", value: "To be published by the office" },
];

export function ClosureAdvisory() {
  return (
    <section className="section closure" id="closure-advisory">
      <div className="container">
        <div className="closure-panel" data-reveal>
          <div className="closure-notice">
            <div className="closure-badge">
              <Icon name="alert" size={16} />
              Important office advisory
            </div>
            <p className="closure-stamp" aria-hidden="true">
              Sample notice
            </p>
            <p className="closure-lead">
              Please be informed that a government office may temporarily suspend transactions due to
              unforeseen operational circumstances. Check the latest official announcement before
              visiting.
            </p>
            <p className="closure-disclaimer">
              <Icon name="shield" size={14} />
              This advisory is a design preview. It is not a real closure notice and no office is
              currently being reported as closed.
            </p>
          </div>

          <div className="closure-details">
            <p className="closure-details-title">How a notice would be structured</p>
            <dl>
              {advisoryFields.map((field) => (
                <div key={field.label}>
                  <dt>{field.label}</dt>
                  <dd>{field.value}</dd>
                </div>
              ))}
            </dl>
            <p className="closure-details-foot">
              In the live platform, a notice would only be published by the affected office or a
              verified administrator, with an update time and, where possible, an alternative channel
              for urgent transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
