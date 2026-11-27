import { useMemo, useState } from "react";
import { guides } from "../content/guides";
import { Icon } from "./Icon";

const officeCategories = [
  "Municipal Hall",
  "Provincial Government Office",
  "Barangay Office",
  "National agency field office",
];

const timeOptions = [
  "Morning · 8:00 AM – 12:00 PM",
  "Afternoon · 1:00 PM – 5:00 PM",
  "Time to be confirmed with the office",
];

const summaryChecks = [
  "Office operating schedule",
  "Official or staff availability",
  "Service availability",
  "Required documents",
  "Announcements and special closures",
];

export function Planner() {
  const [office, setOffice] = useState("");
  const [transaction, setTransaction] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const complete = Boolean(office && transaction && date && time);
  const selectedGuide = guides.find((guide) => guide.title === transaction);

  const formattedDate = useMemo(() => {
    if (!date) return "";
    const parsed = new Date(`${date}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return date;
    return parsed.toLocaleDateString("en-PH", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [date]);

  const reset = () => {
    setOffice("");
    setTransaction("");
    setDate("");
    setTime("");
  };

  return (
    <section className="section planner" id="planner">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Visit planner</p>
          <h2 className="section-title">Plan Your Government Office Visit.</h2>
          <p className="section-lead">
            Choose an office category, a transaction, and a preferred time. The planner turns those
            choices into a preparation summary — not a reservation.
          </p>
        </div>

        <div className="planner-layout">
          <form className="planner-form" data-reveal onSubmit={(event) => event.preventDefault()}>
            <div className="planner-field">
              <label htmlFor="planner-office">Government office category</label>
              <select
                id="planner-office"
                value={office}
                onChange={(event) => setOffice(event.target.value)}
              >
                <option value="">Choose an office category</option>
                {officeCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="planner-field">
              <label htmlFor="planner-transaction">Type of transaction</label>
              <select
                id="planner-transaction"
                value={transaction}
                onChange={(event) => setTransaction(event.target.value)}
              >
                <option value="">Choose a transaction</option>
                {guides.map((guide) => (
                  <option key={guide.slug} value={guide.title}>
                    {guide.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="planner-row">
              <div className="planner-field">
                <label htmlFor="planner-date">Preferred visit date</label>
                <input
                  id="planner-date"
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>

              <div className="planner-field">
                <label htmlFor="planner-time">Preferred visit time</label>
                <select
                  id="planner-time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                >
                  <option value="">Choose a time block</option>
                  {timeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="planner-actions">
              <button type="button" className="text-button" onClick={reset} disabled={!office && !transaction && !date && !time}>
                Clear selections
              </button>
              <p className="planner-privacy">
                <Icon name="shield" size={13} />
                Nothing is stored or sent. Selections stay in this browser tab.
              </p>
            </div>
          </form>

          <div className="planner-summary" data-reveal aria-live="polite">
            {complete ? (
              <>
                <div className="planner-summary-head">
                  <div>
                    <p className="planner-summary-kicker">Preparation summary</p>
                    <h3>Your planned visit</h3>
                  </div>
                  <span className="planner-badge">Not a booking</span>
                </div>

                <dl className="planner-details">
                  <div>
                    <dt>Office category</dt>
                    <dd>{office}</dd>
                  </div>
                  <div>
                    <dt>Transaction</dt>
                    <dd>{transaction}</dd>
                  </div>
                  <div>
                    <dt>Preferred date</dt>
                    <dd>{formattedDate}</dd>
                  </div>
                  <div>
                    <dt>Preferred time</dt>
                    <dd>{time}</dd>
                  </div>
                </dl>

                <p className="planner-summary-label">Before you travel, verify:</p>
                <ul className="planner-checks">
                  {summaryChecks.map((check) => (
                    <li key={check}>
                      <Icon name="check" size={14} />
                      {check}
                    </li>
                  ))}
                </ul>

                {selectedGuide && (
                  <p className="planner-guide-link">
                    <Icon name="file" size={14} />
                    Guidance for {selectedGuide.title.toLowerCase()}
                    <a href="#guides">Review the guide</a>
                  </p>
                )}

                <p className="planner-disclaimer">
                  <Icon name="alert" size={14} />
                  This is a planning aid only. It does not check availability, reserve a slot, or book
                  anything. Confirm all details with the office before travelling.
                </p>
              </>
            ) : (
              <div className="planner-empty">
                <span className="planner-empty-icon">
                  <Icon name="calendar" size={24} />
                </span>
                <h3>Your summary will appear here</h3>
                <p>
                  Complete all four selections to generate a preparation checklist. No personal
                  information is requested.
                </p>
                <ul className="planner-empty-steps">
                  <li>
                    <span>1</span> Choose an office category
                  </li>
                  <li>
                    <span>2</span> Choose a transaction
                  </li>
                  <li>
                    <span>3</span> Pick a preferred date and time
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
