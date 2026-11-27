import { Icon, type IconName } from "./Icon";
import { site } from "../site";

type Tag = "closure" | "hours" | "holiday" | "service";

const announcements: {
  tag: Tag;
  tagLabel: string;
  icon: IconName;
  title: string;
  office: string;
  date: string;
  body: string;
}[] = [
  {
    tag: "closure",
    tagLabel: "Temporary closure",
    icon: "alert",
    title: "Office closed for maintenance",
    office: "Municipal Hall · Sample Office",
    date: "Sample date",
    body: "The office will be temporarily closed while electrical works are completed. Regular operations resume the following working day.",
  },
  {
    tag: "hours",
    tagLabel: "Revised hours",
    icon: "clock",
    title: "Adjusted operating hours this week",
    office: "Municipal Treasurer · Sample Office",
    date: "Sample date",
    body: "Counter transactions will close earlier than usual to allow for end-of-period reconciliation. Please plan accordingly.",
  },
  {
    tag: "holiday",
    tagLabel: "Holiday advisory",
    icon: "calendar",
    title: "Government holiday advisory",
    office: "Provincial Government · Sample Office",
    date: "Sample date",
    body: "All government offices will be closed for the declared holiday. Services resume on the next regular working day.",
  },
  {
    tag: "service",
    tagLabel: "Service update",
    icon: "clipboard",
    title: "Document requests temporarily paused",
    office: "Civil Registrar · Sample Office",
    date: "Sample date",
    body: "Processing of selected civil documents is temporarily suspended while the record system is being updated.",
  },
];

export function Announcements() {
  return (
    <section className="section announcements" id="announcements">
      <div className="container">
        <div className="announcements-head" data-reveal>
          <div>
            <p className="eyebrow">Public announcements preview</p>
            <h2 className="section-title">One place for the updates that change your plans.</h2>
          </div>
          <p className="announcements-head-note">
            Closures, revised hours, holidays, and service updates published by participating offices —
            with a clear date on every entry.
          </p>
        </div>

        <div className="demo-banner" data-reveal>
          <Icon name="alert" size={16} />
          <span>
            <strong>Demonstration content.</strong> The announcement cards below are sample layouts only.
            No live government announcement is being published on this page.
          </span>
        </div>

        <div className="announcement-grid">
          {announcements.map((item, index) => (
            <article
              className={`announcement-card announcement-${item.tag}`}
              key={item.title}
              data-reveal
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="announcement-top">
                <span className="announcement-tag">
                  <Icon name={item.icon} size={14} />
                  {item.tagLabel}
                </span>
                <span className="announcement-date">{item.date}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="announcement-body">{item.body}</p>
              <div className="announcement-foot">
                <span>{item.office}</span>
                <span className="sample-pill">Sample</span>
              </div>
            </article>
          ))}
        </div>

        <p className="announcements-note">
          <Icon name="shield" size={15} />
          In the live platform, only authorized office representatives can publish announcements. Every
          entry will show its source office and last update.
        </p>
      </div>
    </section>
  );
}

export function Mission() {
  return (
    <section className="section mission" id="mission">
      <div className="container">
        <div className="mission-panel" data-reveal>
          <span className="mission-glow" aria-hidden="true" />
          <p className="eyebrow eyebrow-light">Our mission</p>
          <h2>Making Public Service Information More Accessible.</h2>
          <p className="mission-text">
            OPENNOW Government aims to make government office schedules, public official availability,
            and service information easier to access. We believe that every citizen deserves to know
            before making a trip to a government office.
          </p>
          <ul className="mission-pillars">
            <li>
              <Icon name="globe" size={18} />
              Accessible
            </li>
            <li>
              <Icon name="shield" size={18} />
              Authorized
            </li>
            <li>
              <Icon name="users" size={18} />
              Citizen-centered
            </li>
            <li>
              <Icon name="sparkle" size={18} />
              Practical
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function AboutBetterGo() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-copy" data-reveal>
            <p className="eyebrow">About OpenNow</p>
            <h2 className="section-title">A specialized initiative within BetterGo Marinduque.</h2>
            <p className="section-lead">
              OPENNOW Government is a specialized digital initiative under BetterGo Marinduque, focused
              on making government office availability and public service information easier to access.
            </p>
            <p className="about-text">
              BetterGo Marinduque explores digital tools built for the everyday realities of the island —
              travel, planning, and access to services. OPENNOW Government narrows that focus to one
              specific gap: the information a citizen needs before leaving home for a government office.
              It is part of the same initiative, with its own scope, identity, and public directory.
            </p>
            <a
              className="btn btn-primary"
              href={site.betterGo.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit {site.betterGo.name}
              <Icon name="arrowUpRight" size={17} />
            </a>
          </div>

          <div className="about-card" data-reveal>
            <div className="about-card-head">
              <span className="about-mark" aria-hidden="true">
                BG
              </span>
              <div>
                <p className="about-card-title">{site.betterGo.name}</p>
                <p className="about-card-sub">Digital initiatives for the island</p>
              </div>
            </div>

            <ul className="about-points">
              <li>
                <Icon name="sparkle" size={18} />
                <div>
                  <strong>Practical by design</strong>
                  <p>Built around real trips, real queues, and real schedules.</p>
                </div>
              </li>
              <li>
                <Icon name="users" size={18} />
                <div>
                  <strong>Community-focused</strong>
                  <p>Information shaped for Marinduqueños, not for tourists of bureaucracy.</p>
                </div>
              </li>
              <li>
                <Icon name="shield" size={18} />
                <div>
                  <strong>Responsible with information</strong>
                  <p>Published only with participation and authorization from the offices involved.</p>
                </div>
              </li>
            </ul>

            <p className="about-disclaimer">
              <Icon name="alert" size={15} />
              OPENNOW Government is an independent digital initiative. It does not claim ownership,
              endorsement, or partnership with any government office unless formally authorized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
