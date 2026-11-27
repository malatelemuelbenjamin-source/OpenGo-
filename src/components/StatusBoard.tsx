import { useMemo, useState } from "react";
import { Icon } from "./Icon";

type StatusKey = "open" | "available" | "away" | "meeting" | "unavailable";

const statusMeta: Record<StatusKey, { label: string; className: string }> = {
  open: { label: "Open", className: "status-open" },
  available: { label: "Available", className: "status-available" },
  away: { label: "Out of office", className: "status-away" },
  meeting: { label: "In a meeting", className: "status-meeting" },
  unavailable: { label: "Temporarily unavailable", className: "status-unavailable" },
};

type Office = {
  name: string;
  department: string;
  status: StatusKey;
  schedule: string;
  update: string;
  note: string;
};

const offices: Office[] = [
  {
    name: "Municipal Hall",
    department: "Main building · Boac",
    status: "open",
    schedule: "Monday – Friday · 8:00 AM – 5:00 PM",
    update: "Sample posted 7:45 AM",
    note: "Regular transactions are being accepted at the main lobby.",
  },
  {
    name: "Office of the Mayor",
    department: "Executive office",
    status: "away",
    schedule: "Expected return · 4:00 PM",
    update: "Sample posted 8:10 AM",
    note: "Out on official engagement. Return time is an estimate published by the office.",
  },
  {
    name: "Office of the Vice Mayor",
    department: "Executive office",
    status: "available",
    schedule: "Monday – Friday · 8:00 AM – 5:00 PM",
    update: "Sample posted 8:05 AM",
    note: "Available for scheduled consultations while sessions are not in progress.",
  },
  {
    name: "Municipal Treasurer",
    department: "Revenue collection",
    status: "open",
    schedule: "Monday – Friday · 8:00 AM – 4:30 PM",
    update: "Sample posted 7:55 AM",
    note: "Tax payments are accepted until 30 minutes before closing.",
  },
  {
    name: "Civil Registrar",
    department: "Civil registry",
    status: "unavailable",
    schedule: "Transactions temporarily paused",
    update: "Sample posted 9:15 AM",
    note: "Document requests are on hold while records are being updated.",
  },
  {
    name: "Municipal Engineering",
    department: "Engineering & public works",
    status: "meeting",
    schedule: "Back at approximately 2:30 PM",
    update: "Sample posted 10:20 AM",
    note: "Technical staff are in a coordination meeting; permits desk may be unattended.",
  },
];

const filters: { key: StatusKey | "all"; label: string }[] = [
  { key: "all", label: "All offices" },
  { key: "open", label: "Open" },
  { key: "available", label: "Available" },
  { key: "away", label: "Out of office" },
  { key: "meeting", label: "In a meeting" },
  { key: "unavailable", label: "Unavailable" },
];

export function StatusBoard() {
  const [active, setActive] = useState<StatusKey | "all">("all");

  const visible = useMemo(
    () => (active === "all" ? offices : offices.filter((office) => office.status === active)),
    [active],
  );

  const counts = useMemo(() => {
    const next: Record<string, number> = { all: offices.length };
    offices.forEach((office) => {
      next[office.status] = (next[office.status] ?? 0) + 1;
    });
    return next;
  }, []);

  return (
    <section className="section board" id="office-status">
      <div className="container">
        <div className="board-head" data-reveal>
          <div>
            <p className="eyebrow">Office status demonstration</p>
            <h2 className="section-title">Try the board. Filter it like a citizen would.</h2>
          </div>
          <p className="board-head-note">
            A working preview of how a municipal directory could look. Everything below is invented
            for demonstration — including the schedules and the posting times.
          </p>
        </div>

        <div className="demo-strip" role="note" data-reveal>
          <Icon name="alert" size={16} />
          <span>
            <strong>DEMO DATA — NOT LIVE GOVERNMENT INFORMATION.</strong> No office, official, or
            service shown here represents a real status. Always verify with the concerned office.
          </span>
        </div>

        <div className="board-controls" data-reveal>
          <div className="filter-chips" role="group" aria-label="Filter office statuses">
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                className={`filter-chip${active === filter.key ? " is-active" : ""}`}
                aria-pressed={active === filter.key}
                onClick={() => setActive(filter.key)}
              >
                {filter.label}
                <span className="filter-count">{counts[filter.key] ?? 0}</span>
              </button>
            ))}
          </div>
          <p className="board-result" aria-live="polite">
            Showing {visible.length} of {offices.length} sample offices
          </p>
        </div>

        <div className="board-grid">
          {visible.map((office) => {
            const meta = statusMeta[office.status];
            return (
              <article className={`board-card board-${office.status}`} key={office.name}>
                <div className="board-card-top">
                  <div>
                    <h3>{office.name}</h3>
                    <p className="board-department">{office.department}</p>
                  </div>
                  <span className={`status ${meta.className} status-lg`}>{meta.label}</span>
                </div>

                <div className="board-card-body">
                  <p className="board-schedule">
                    <Icon name="clock" size={15} />
                    {office.schedule}
                  </p>
                  <p className="board-note">{office.note}</p>
                </div>

                <div className="board-card-foot">
                  <span className="board-update">
                    <Icon name="alert" size={12} />
                    {office.update}
                  </span>
                  <span className="sample-pill">Sample</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
