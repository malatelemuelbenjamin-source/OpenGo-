import { Icon, type IconName } from "./Icon";

type StatusEntry = { label: string; className: string; text: string };

const statusGroups: { key: string; title: string; intro: string; entries: StatusEntry[] }[] = [
  {
    key: "office",
    title: "Office status",
    intro: "Whether the building is accepting transactions right now.",
    entries: [
      { label: "OPEN", className: "status-open", text: "Within published hours and accepting regular transactions." },
      {
        label: "CLOSED",
        className: "status-closed",
        text: "Outside published hours, on a non-working day, or after the last transaction was accepted.",
      },
      {
        label: "OPENING SOON",
        className: "status-soon",
        text: "Expected to open shortly according to the published schedule.",
      },
      {
        label: "CLOSING SOON",
        className: "status-soon",
        text: "Near closing time. New transactions may no longer be accepted.",
      },
      {
        label: "TEMPORARILY CLOSED",
        className: "status-unavailable",
        text: "Closed during normal hours because of an advisory. Check the notice for details.",
      },
      {
        label: "SCHEDULE NOT AVAILABLE",
        className: "status-neutral",
        text: "The office has not published a schedule. Confirm directly before travelling.",
      },
    ],
  },
  {
    key: "official",
    title: "Official availability",
    intro: "Whether a specific official can attend to your concern.",
    entries: [
      {
        label: "AVAILABLE",
        className: "status-open",
        text: "In the office and able to attend to inquiries, subject to the office's own rules.",
      },
      {
        label: "OUT OF OFFICE",
        className: "status-away",
        text: "Not in the office. An expected return may be published, but it is only an estimate.",
      },
      {
        label: "IN A MEETING",
        className: "status-away",
        text: "Present but engaged. Walk-in inquiries may need to wait or return later.",
      },
      {
        label: "ON OFFICIAL BUSINESS",
        className: "status-away",
        text: "Attending official duties or fieldwork elsewhere, such as a site visit.",
      },
      {
        label: "ON LEAVE",
        className: "status-closed",
        text: "On approved leave. An officer-in-charge may handle routine concerns.",
      },
      {
        label: "TEMPORARILY UNAVAILABLE",
        className: "status-unavailable",
        text: "A short-term condition, such as a system downtime or an urgent matter.",
      },
      {
        label: "NEXT AVAILABLE SCHEDULE",
        className: "status-available",
        text: "A published consultation window. It is the next opportunity, not a reservation.",
      },
    ],
  },
  {
    key: "service",
    title: "Service status",
    intro: "Whether the specific transaction you need is being processed.",
    entries: [
      {
        label: "AVAILABLE",
        className: "status-open",
        text: "The service is accepting transactions within its published window.",
      },
      {
        label: "TEMPORARILY UNAVAILABLE",
        className: "status-unavailable",
        text: "Paused for now — a system issue, a missing signatory, or a supply shortage.",
      },
      {
        label: "LIMITED SERVICE",
        className: "status-limited",
        text: "Only part of the service is operating, or only certain transaction types are accepted.",
      },
      {
        label: "SUSPENDED",
        className: "status-closed",
        text: "Transactions are stopped, possibly beyond today. Check the notice for the reason.",
      },
      {
        label: "SCHEDULE NOT AVAILABLE",
        className: "status-neutral",
        text: "No service schedule has been published by the office yet.",
      },
    ],
  },
];

export function Availability() {
  return (
    <section className="section availability" id="availability">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Status guide</p>
          <h2 className="section-title">Three statuses, three different questions.</h2>
          <p className="section-lead">
            An office status, an official's availability, and a service status answer different things.
            Reading them separately is what stops a citizen from queueing for something the office
            cannot process today.
          </p>
        </div>

        <div className="status-groups">
          {statusGroups.map((group, groupIndex) => (
            <div
              className="status-group"
              key={group.key}
              data-reveal
              style={{ transitionDelay: `${groupIndex * 70}ms` }}
            >
              <div className="status-group-head">
                <h3>{group.title}</h3>
                <p>{group.intro}</p>
              </div>
              <ul className="status-list">
                {group.entries.map((entry) => (
                  <li key={entry.label}>
                    <span className={`status ${entry.className}`}>{entry.label}</span>
                    <p>{entry.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="status-key" data-reveal>
          <Icon name="alert" size={20} />
          <p>
            <strong>
              An office may be OPEN even when a particular official is OUT OF OFFICE or a specific
              service is TEMPORARILY UNAVAILABLE.
            </strong>{" "}
            Check all three before you travel — the building's status alone does not tell you whether
            your transaction can proceed.
          </p>
        </div>

        <div className="availability-note" data-reveal>
          <span className="availability-note-icon">
            <Icon name="shield" size={22} />
          </span>
          <div>
            <h3>Published by authorized personnel — never by tracking.</h3>
            <p>
              Availability is self-reported by authorized office staff for their own officials. OPENNOW
              Government does not use GPS, device tracking, or private location data. If an entry is not
              published by the office, it should not appear as a status at all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const services: { name: string; icon: IconName; status: "accepting" | "paused" | "limited"; note: string }[] = [
  {
    name: "Business Permit Processing",
    icon: "clipboard",
    status: "accepting",
    note: "New applications and renewals accepted at the business one-stop desk.",
  },
  {
    name: "Birth Certificate Applications",
    icon: "landmark",
    status: "paused",
    note: "On hold while the civil registry system is being updated.",
  },
  {
    name: "Civil Registry Transactions",
    icon: "users",
    status: "limited",
    note: "Only certified copies are released; late registration is unavailable.",
  },
  {
    name: "Tax Payments",
    icon: "wallet",
    status: "accepting",
    note: "Counter payments accepted until 4:30 PM.",
  },
  {
    name: "Financial Assistance Inquiries",
    icon: "search",
    status: "limited",
    note: "Inquiries accepted; releasing of assistance depends on fund availability.",
  },
  {
    name: "Document Releasing",
    icon: "mail",
    status: "accepting",
    note: "Claiming of previously filed documents at the releasing window.",
  },
];

const serviceStatus = {
  accepting: { label: "Accepting transactions", className: "status-open" },
  paused: { label: "Temporarily suspended", className: "status-unavailable" },
  limited: { label: "Limited service", className: "status-away" },
} as const;

export function ServiceAvailability() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services-layout">
          <div className="services-copy" data-reveal>
            <p className="eyebrow">Service availability</p>
            <h2 className="section-title">An open office does not always mean an open service.</h2>
            <p className="section-lead">
              A municipal hall can be open while one specific service is paused — a system upgrade, a
              missing signatory, or a supply shortage. Service status is checked separately from office
              hours, so you do not queue for something that cannot be processed today.
            </p>

            <ul className="services-points">
              <li>
                <Icon name="check" size={16} />
                Each service carries its own status, not just the building's.
              </li>
              <li>
                <Icon name="check" size={16} />
                Offices can note requirements, cut-offs, and temporary suspensions.
              </li>
              <li>
                <Icon name="check" size={16} />
                Citizens see the difference between &ldquo;closed&rdquo; and &ldquo;paused&rdquo;.
              </li>
            </ul>

            <p className="services-disclaimer">
              <Icon name="alert" size={14} />
              The statuses in the panel are sample layouts, not live service information.
            </p>
          </div>

          <div className="services-panel" data-reveal>
            <div className="services-panel-head">
              <div>
                <p className="services-panel-title">Sample service board</p>
                <p className="services-panel-sub">Municipal Hall · Demonstrasyon lamang</p>
              </div>
              <span className="sample-pill">Sample data</span>
            </div>

            <ul className="service-list">
              {services.map((service) => {
                const meta = serviceStatus[service.status];
                return (
                  <li key={service.name}>
                    <span className="service-icon">
                      <Icon name={service.icon} size={18} />
                    </span>
                    <div className="service-info">
                      <p className="service-name">{service.name}</p>
                      <p className="service-note">{service.note}</p>
                    </div>
                    <span className={`status ${meta.className}`}>{meta.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
