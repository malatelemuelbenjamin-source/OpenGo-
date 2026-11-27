import { Icon, type IconName } from "./Icon";

const categories: { icon: IconName; title: string; text: string; href: string; link: string }[] = [
  {
    icon: "clock",
    title: "Office Hours and Schedules",
    text: "Regular opening and closing hours, plus special operating days an office may publish.",
    href: "#office-status",
    link: "See the demo board",
  },
  {
    icon: "userCheck",
    title: "Government Official Availability",
    text: "Whether an official is available, in a meeting, out of office, on leave, or temporarily unavailable.",
    href: "#availability",
    link: "Read the status guide",
  },
  {
    icon: "clipboard",
    title: "Government Service Availability",
    text: "Whether a specific service is accepting transactions, limited, paused, or suspended.",
    href: "#services",
    link: "Check service statuses",
  },
  {
    icon: "file",
    title: "Required Documents",
    text: "General preparation guidance for common transactions — and who to confirm the official list with.",
    href: "#guides",
    link: "Open the guides",
  },
  {
    icon: "megaphone",
    title: "Government Announcements",
    text: "Closures, revised hours, and service updates published by the office concerned.",
    href: "#announcements",
    link: "View announcements",
  },
  {
    icon: "calendar",
    title: "Holiday and Special Schedules",
    text: "Regular holidays, special non-working days, special working days, and revised schedules.",
    href: "#holiday-preview",
    link: "See schedule examples",
  },
  {
    icon: "pin",
    title: "Office Location and Contact Information",
    text: "How office profiles, addresses, and verified contact channels would be presented.",
    href: "#contact",
    link: "Go to contact",
  },
  {
    icon: "return",
    title: "Next Available Consultation Schedule",
    text: "Confirmed consultation windows, and how they differ from an estimated return time.",
    href: "#return-guide",
    link: "Learn the difference",
  },
];

export function InfoCenter() {
  return (
    <section className="section info-center" id="info-center">
      <div className="container">
        <div className="info-center-head" data-reveal>
          <div>
            <p className="eyebrow">Citizen information center</p>
            <h2 className="section-title">Your Guide Before Visiting a Government Office.</h2>
          </div>
          <p className="info-center-intro">
            Make every government transaction easier by knowing what to check and prepare before
            leaving home. Pick a category to jump straight to the explanation.
          </p>
        </div>

        <div className="info-grid">
          {categories.map((category, index) => (
            <a
              className="info-card"
              key={category.title}
              href={category.href}
              data-reveal
              style={{ transitionDelay: `${index * 45}ms` }}
            >
              <span className="info-icon">
                <Icon name={category.icon} size={22} />
              </span>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
              <span className="info-link">
                {category.link}
                <Icon name="arrowRight" size={15} />
              </span>
            </a>
          ))}
        </div>

        <p className="info-note" data-reveal>
          <Icon name="shield" size={15} />
          Every category links to a section of this website. None of them open live government records.
        </p>
      </div>
    </section>
  );
}
