import { Icon, type IconName } from "./Icon";

const steps: {
  label: string;
  title: string;
  text: string;
  icon: IconName;
  tone: "before" | "problem" | "after";
}[] = [
  {
    label: "Step 1 · Before OpenNow",
    title: "A trip made on hope",
    text: "A citizen travels to the Municipal Hall without knowing whether the official they need, or the service they need, is actually available that day.",
    icon: "route",
    tone: "before",
  },
  {
    label: "Step 2 · The problem",
    title: "The wasted trip",
    text: "At the counter, they discover the official is out of office or the service is temporarily unavailable. The fare, the queue, and the leave are already spent.",
    icon: "alert",
    tone: "problem",
  },
  {
    label: "Step 3 · With OpenNow",
    title: "A trip made on information",
    text: "The citizen checks the public availability information before leaving home, learns the expected return, and plans a better time to visit.",
    icon: "check",
    tone: "after",
  },
];

export function Story() {
  return (
    <section className="section story" id="story">
      <div className="container">
        <div className="section-head story-head" data-reveal>
          <p className="eyebrow">A story you have probably lived</p>
          <h2 className="section-title story-title">
            Imagine Traveling to an Office Only to Find Out the Person You Need Isn&rsquo;t Available.
          </h2>
          <p className="section-lead">
            It is rarely one missed transaction. It is the fare, the half-day leave, the waiting, and
            the trip home with nothing resolved. Here is the difference a single check makes.
          </p>
        </div>

        <ol className="story-grid">
          {steps.map((step, index) => (
            <li
              className={`story-card story-${step.tone}`}
              key={step.title}
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <p className="story-label">{step.label}</p>
              <span className="story-icon">
                <Icon name={step.icon} size={21} />
              </span>
              <h3>{step.title}</h3>
              <p className="story-text">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="story-closing" data-reveal>
          <div>
            <p className="story-closing-kicker">The point of all of this</p>
            <h3>Your time, money, and effort matter.</h3>
            <p>
              Not every trip can be avoided — but a trip taken with current information is a better
              use of a day than a trip taken on a guess.
            </p>
          </div>
          <a className="btn btn-light" href="#office-status">
            See the demo board
            <Icon name="arrowRight" size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
