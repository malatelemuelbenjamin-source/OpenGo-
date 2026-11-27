import { useMemo, useState, type FormEvent } from "react";
import { site } from "../site";
import { Icon } from "./Icon";

const categories = [
  "Report outdated information",
  "Suggest missing government office information",
  "Request clarification",
  "Send general feedback",
  "Accessibility feedback",
];

type Fields = { name: string; email: string; category: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emptyFields: Fields = { name: "", email: "", category: "", message: "" };

export function Feedback() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [reviewed, setReviewed] = useState(false);

  const update = (key: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = (values: Fields): Errors => {
    const next: Errors = {};
    if (!values.category) next.category = "Please choose a feedback category.";
    if (values.message.trim().length < 12) {
      next.message = "Please write at least 12 characters so we can understand the concern.";
    }
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address, or leave this blank.";
    }
    if (values.name.trim().length > 80) {
      next.name = "Please keep your name under 80 characters.";
    }
    return next;
  };

  const mailto = useMemo(() => {
    const email = site.contact.email;
    if (!email) return null;
    const subject = `OpenNow feedback · ${fields.category || "General"}`;
    const body = [
      fields.name ? `Name: ${fields.name}` : "Name: (not provided)",
      fields.email ? `Email: ${fields.email}` : "Email: (not provided)",
      `Category: ${fields.category}`,
      "",
      fields.message,
    ].join("\n");
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [fields]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setReviewed(false);
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(`feedback-${firstKey}`)?.focus();
      return;
    }
    setReviewed(true);
  };

  const reset = () => {
    setFields(emptyFields);
    setErrors({});
    setReviewed(false);
  };

  return (
    <section className="section feedback" id="feedback">
      <div className="container">
        <div className="feedback-layout">
          <div className="feedback-copy" data-reveal>
            <p className="eyebrow">Feedback and corrections</p>
            <h2 className="section-title">Help Us Improve Public Information.</h2>
            <p className="section-lead">
              Citizens often notice outdated, unclear, or incorrect public information first. Tell us
              what needs fixing, and we will route it to the office that owns the entry.
            </p>

            <ul className="feedback-points">
              <li>
                <Icon name="check" size={16} />
                <span>
                  <strong>Report outdated information</strong> — hours, statuses, or schedules that no
                  longer match what the office publishes.
                </span>
              </li>
              <li>
                <Icon name="check" size={16} />
                <span>
                  <strong>Suggest missing office information</strong> — an office, service, or contact
                  detail that should be listed.
                </span>
              </li>
              <li>
                <Icon name="check" size={16} />
                <span>
                  <strong>Request clarification</strong> — information that is unclear, ambiguous, or
                  hard to interpret.
                </span>
              </li>
              <li>
                <Icon name="check" size={16} />
                <span>
                  <strong>Send general feedback</strong> — anything else that would make this easier to
                  use.
                </span>
              </li>
            </ul>

            <div className="feedback-privacy">
              <Icon name="shield" size={18} />
              <p>
                <strong>Privacy notice.</strong> Name and email are optional. Please do not send
                sensitive personal information, document numbers, or case details. This demonstration
                form does not store or transmit anything you type.
              </p>
            </div>
          </div>

          <div className="feedback-form-wrap" data-reveal>
            {reviewed ? (
              <div className="feedback-result" role="status">
                <span className="feedback-result-icon">
                  <Icon name="check" size={24} />
                </span>
                <h3>Your feedback passed validation — but it was not sent.</h3>
                <p>
                  This form is a clearly labelled demonstration. OPENNOW Government has no feedback
                  server connected to this introduction website yet, so nothing has been transmitted or
                  stored.
                </p>
                {mailto ? (
                  <>
                    <p className="feedback-result-hint">
                      You can still send the same message through the configured channel:
                    </p>
                    <a className="btn btn-primary" href={mailto}>
                      Send feedback by email
                      <Icon name="mail" size={17} />
                    </a>
                  </>
                ) : (
                  <p className="feedback-result-hint">
                    An official feedback channel will be published here once confirmed. Until then, you
                    can review the contact section for available options.
                  </p>
                )}
                <div className="feedback-result-actions">
                  <button type="button" className="btn btn-outline" onClick={() => setReviewed(false)}>
                    Edit my feedback
                  </button>
                  <button type="button" className="text-button" onClick={reset}>
                    Clear the form
                  </button>
                </div>
              </div>
            ) : (
              <form className="feedback-form" onSubmit={onSubmit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="feedback-name">
                      Name <span className="form-optional">(optional)</span>
                    </label>
                    <input
                      id="feedback-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={fields.name}
                      onChange={(event) => update("name", event.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "feedback-name-error" : undefined}
                      placeholder="How should we address you?"
                    />
                    {errors.name && (
                      <p className="form-error" id="feedback-name-error" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="feedback-email">
                      Email <span className="form-optional">(optional)</span>
                    </label>
                    <input
                      id="feedback-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={fields.email}
                      onChange={(event) => update("email", event.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "feedback-email-error" : undefined}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="form-error" id="feedback-email-error" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="feedback-category">
                    Feedback category <span className="form-required">(required)</span>
                  </label>
                  <select
                    id="feedback-category"
                    name="category"
                    value={fields.category}
                    onChange={(event) => update("category", event.target.value)}
                    aria-invalid={Boolean(errors.category)}
                    aria-describedby={errors.category ? "feedback-category-error" : undefined}
                  >
                    <option value="">Choose a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="form-error" id="feedback-category-error" role="alert">
                      {errors.category}
                    </p>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="feedback-message">
                    Message <span className="form-required">(required)</span>
                  </label>
                  <textarea
                    id="feedback-message"
                    name="message"
                    rows={5}
                    value={fields.message}
                    onChange={(event) => update("message", event.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "feedback-message-error" : "feedback-message-hint"}
                    placeholder="What should be corrected, added, or made easier to use?"
                  />
                  {errors.message ? (
                    <p className="form-error" id="feedback-message-error" role="alert">
                      {errors.message}
                    </p>
                  ) : (
                    <p className="form-hint" id="feedback-message-hint">
                      Please avoid personal document numbers, addresses, or other sensitive details.
                    </p>
                  )}
                </div>

                <div className="feedback-submit">
                  <button className="btn btn-primary" type="submit">
                    Review feedback
                    <Icon name="arrowRight" size={17} />
                  </button>
                  <button type="button" className="text-button" onClick={reset}>
                    Reset form
                  </button>
                </div>
                <p className="feedback-demo-label">
                  <Icon name="alert" size={13} />
                  Demonstration form — submissions are validated in your browser only.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
