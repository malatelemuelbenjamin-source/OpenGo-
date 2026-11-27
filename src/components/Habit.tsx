import { Icon, type IconName } from "./Icon";

const actions: { step: string; verb: string; icon: IconName; text: string }[] = [
  {
    step: "01",
    verb: "Check",
    icon: "clock",
    text: "The office schedule — regular hours, special days, and any revised operating time.",
  },
  {
    step: "02",
    verb: "Verify",
    icon: "userCheck",
    text: "Official or service availability, and whether the service is accepting transactions.",
  },
  {
    step: "03",
    verb: "Review",
    icon: "megaphone",
    text: "The latest announcements, closures, and advisories affecting your planned day.",
  },
  {
    step: "04",
    verb: "Prepare",
    icon: "clipboard",
    text: "Your documents and questions, confirmed with the office before you travel.",
  },
];

export function Habit() {
  return (
    <section className="section habit" id="habit">
      <div className="container">
        <div className="habit-panel" data-reveal>
          <span className="habit-glow" aria-hidden="true" />
          <div className="habit-head">
            <p className="eyebrow eyebrow-light">The OpenNow habit</p>
            <h2>One Simple Habit Before Every Government Trip.</h2>
            <p>
              Four actions, about a minute, and a much better chance that the trip ends with a completed
              transaction instead of a return ticket.
            </p>
            <a className="btn btn-light" href="#checklist">
              Open the before-you-go checklist
              <Icon name="arrowRight" size={17} />
            </a>
          </div>

          <ol className="habit-steps">
            {actions.map((action) => (
              <li key={action.verb}>
                <span className="habit-step-number">{action.step}</span>
                <span className="habit-step-icon">
                  <Icon name={action.icon} size={19} />
                </span>
                <h3>{action.verb}</h3>
                <p>{action.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
