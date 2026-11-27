import { Icon, type IconName } from "./Icon";
import { site } from "../site";

const benefits: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "wallet",
    title: "Avoid unnecessary transportation expenses",
    text: "One confirmed check can mean one less round trip, one less fare, and one less packed lunch for the road.",
  },
  {
    icon: "clock",
    title: "Reduce wasted waiting time",
    text: "Spend the hours you would have waited in line on work, family, or the rest of your errands.",
  },
  {
    icon: "calendar",
    title: "Know office schedules before traveling",
    text: "Regular hours, special operating days, and expected return times in one clear, readable view.",
  },
  {
    icon: "bell",
    title: "Get informed about temporary closures",
    text: "Closures, holiday advisories, and revised hours published in a single, consistent place.",
  },
  {
    icon: "clipboard",
    title: "Plan important government transactions",
    text: "Know which services are accepting requests today, and which ones you should schedule for another day.",
  },
  {
    icon: "globe",
    title: "Access public information more conveniently",
    text: "No hotline roulette and no forwarded screenshots — one public page that every citizen can read.",
  },
];

export function Benefits() {
  return (
    <section className="section benefits" id="benefits">
      <div className="benefits-bg" aria-hidden="true">
        <span />
      </div>
      <div className="container">
        <div className="section-head section-head-center" data-reveal>
          <p className="eyebrow eyebrow-light">Why it matters</p>
          <h2 className="section-title section-title-light">
            Your Time Matters. Your Money Matters.
          </h2>
          <p className="section-lead section-lead-light">
            Designed around the needs of every citizen. Each card below is a real cost of a wasted trip —
            fare, hours, and leave that a household does not get back.
          </p>
        </div>

        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <article
              className="benefit-card"
              key={benefit.title}
              data-reveal
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <span className="benefit-icon">
                <Icon name={benefit.icon} size={22} />
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const coverage: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "landmark",
    title: "Provincial Government Offices",
    text: "Provincial-level departments and offices serving the whole island.",
  },
  {
    icon: "building",
    title: "Municipal Government Offices",
    text: "Municipal halls and their respective departments across Marinduque.",
  },
  {
    icon: "pin",
    title: "Barangay Government Offices",
    text: "Barangay-level service points where information is authorized for publication.",
  },
  {
    icon: "users",
    title: "Office of the Mayor",
    text: "Availability and consultation schedules for participating municipal mayors.",
  },
  {
    icon: "userCheck",
    title: "Office of the Vice Mayor",
    text: "Public availability updates released by the participating office.",
  },
  {
    icon: "clipboard",
    title: "Government Departments and Divisions",
    text: "Frontline service desks, registrars, treasurers, assessors, and more.",
  },
  {
    icon: "globe",
    title: "Other Participating Public Offices",
    text: "Additional national agencies and public offices that choose to take part.",
  },
];

export function Coverage() {
  return (
    <section className="section coverage" id="coverage">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Government coverage</p>
          <h2 className="section-title">A directory built around how citizens actually transact.</h2>
          <p className="section-lead">
            OPENNOW Government is designed as a directory of offices, not a replacement for them. Each
            entry belongs to the office that owns it.
          </p>
        </div>

        <div className="coverage-layout">
          <ul className="coverage-list">
            {coverage.map((item, index) => (
              <li key={item.title} data-reveal style={{ transitionDelay: `${index * 50}ms` }}>
                <span className="coverage-icon">
                  <Icon name={item.icon} size={20} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <aside className="coverage-aside" data-reveal>
            <span className="coverage-aside-icon">
              <Icon name="shield" size={26} />
            </span>
            <h3>Participation comes first.</h3>
            <p>
              Coverage grows office by office. Information is published only for participating offices
              and only through authorized updates. An office that has not joined will not appear with a
              status, schedule, or announcement.
            </p>
            <ul className="check-list">
              <li>
                <Icon name="check" size={16} />
                Officially submitted schedules
              </li>
              <li>
                <Icon name="check" size={16} />
                Authorized official availability
              </li>
              <li>
                <Icon name="check" size={16} />
                Verified service status
              </li>
            </ul>
            <a className="text-link" href="#contact">
              Government office participation
              <Icon name="arrowRight" size={16} />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function BetterGoLink() {
  return (
    <a
      className="text-link text-link-external"
      href={site.betterGo.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit {site.betterGo.name}
      <Icon name="arrowUpRight" size={16} />
    </a>
  );
}
