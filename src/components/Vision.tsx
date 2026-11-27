import { useMemo, useState } from "react";
import { Icon, type IconName } from "./Icon";

const outcomes: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "route",
    title: "Fewer wasted trips",
    text: "Citizens leave home with a real plan, not a hopeful guess about whether an office is open.",
  },
  {
    icon: "calendar",
    title: "Clearer expectations",
    text: "Hours, availability, and service status are stated plainly, with a visible update time.",
  },
  {
    icon: "users",
    title: "Better-informed decisions",
    text: "Families, workers, and small businesses can schedule government transactions around real life.",
  },
];

export function Vision() {
  return (
    <section className="section vision" id="vision">
      <div className="container">
        <div className="vision-layout">
          <div className="vision-copy" data-reveal>
            <p className="eyebrow">The OpenNow vision</p>
            <h2 className="section-title vision-title">Every Journey Deserves to Be Worth It.</h2>
            <p className="section-lead">
              We envision a community where every citizen can make informed decisions before visiting a
              government office. Through accessible and updated public information, we aim to reduce
              unnecessary trips and make public service information easier to understand.
            </p>
            <p className="vision-footnote">
              <Icon name="sparkle" size={16} />
              This is a long-term direction, built one participating office at a time.
            </p>
          </div>

          <ul className="vision-outcomes">
            {outcomes.map((item, index) => (
              <li key={item.title} data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                <span className="vision-icon">
                  <Icon name={item.icon} size={20} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const checklistItems = [
  "Have I checked whether the office is open?",
  "Have I checked the office operating hours?",
  "Is the official or department I need available?",
  "Is the service I need currently operational?",
  "Have I checked for temporary closures or announcements?",
  "Have I prepared the required documents?",
  "Have I confirmed the office location and contact details?",
];

export function Checklist() {
  const [checked, setChecked] = useState<number[]>([]);
  const total = checklistItems.length;
  const progress = useMemo(() => Math.round((checked.length / total) * 100), [checked.length, total]);

  const toggle = (index: number) => {
    setChecked((current) =>
      current.includes(index) ? current.filter((value) => value !== index) : [...current, index],
    );
  };

  return (
    <section className="section checklist" id="checklist">
      <div className="container">
        <div className="checklist-panel" data-reveal>
          <div className="checklist-intro">
            <p className="eyebrow">Before you go</p>
            <h2 className="section-title">Before You Go, Check First!</h2>
            <p className="section-lead">
              Seven quick checks that turn a hopeful trip into a planned one. Use this on the day
              itself — the answers change more often than people expect.
            </p>

            <div className="checklist-progress">
              <div className="checklist-progress-head">
                <span aria-live="polite">
                  {checked.length} of {total} checks completed.
                </span>
                <span>{progress}%</span>
              </div>
              <div
                className="progress-track"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Checklist progress"
              >
                <span style={{ width: `${progress}%` }} />
              </div>
              <button
                type="button"
                className="checklist-reset"
                onClick={() => setChecked([])}
                disabled={checked.length === 0}
              >
                Reset checklist
              </button>
            </div>

            <p className="checklist-reminder">
              <Icon name="sparkle" size={15} />
              Checking these details before traveling can help you save time, transportation expenses,
              and effort.
            </p>

            <p className="checklist-privacy">
              <Icon name="shield" size={15} />
              Nothing is saved, sent, or stored. Your checklist exists only in this browser tab and
              disappears when you leave the page.
            </p>
          </div>

          <fieldset className="checklist-fieldset">
            <legend className="sr-only">Before you go checklist</legend>
            {checklistItems.map((item, index) => {
              const isChecked = checked.includes(index);
              return (
                <label className={`check-item${isChecked ? " is-checked" : ""}`} key={item}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggle(index)}
                    value={item}
                  />
                  <span className="check-box" aria-hidden="true">
                    <Icon name="check" size={14} />
                  </span>
                  <span className="check-label">{item}</span>
                </label>
              );
            })}
          </fieldset>
        </div>
      </div>
    </section>
  );
}
