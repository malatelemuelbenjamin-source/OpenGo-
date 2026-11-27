import { useEffect, useState } from "react";
import { faqs } from "../content/faqs";
import { Icon } from "./Icon";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Search results link to #faq-q-<index>; open the matching answer.
  useEffect(() => {
    const openFromHash = () => {
      const match = window.location.hash.match(/^#faq-q-(\d+)$/);
      if (!match) return;
      const index = Number(match[1]);
      if (index < 0 || index >= faqs.length) return;
      setOpenIndex(index);
      window.requestAnimationFrame(() => {
        document.getElementById(`faq-q-${index}`)?.scrollIntoView({ block: "center" });
      });
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-copy" data-reveal>
            <p className="eyebrow">Frequently asked questions</p>
            <h2 className="section-title">Straight answers before you rely on us.</h2>
            <p className="section-lead">
              OPENNOW Government is an information platform. It helps you prepare for a visit — it does
              not replace the office, the official, or the service itself.
            </p>
            <div className="faq-aside">
              <Icon name="mail" size={20} />
              <p>
                Still have a question?{" "}
                <a href="#feedback">Send feedback</a> or bring it up when your office joins the
                directory.
              </p>
            </div>
          </div>

          <div className="faq-list" data-reveal>
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div
                  className={`faq-item${open ? " is-open" : ""}`}
                  key={faq.question}
                  id={`faq-q-${index}`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-trigger-${index}`}
                      onClick={() => setOpenIndex(open ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-chevron" aria-hidden="true">
                        <Icon name="chevronDown" size={18} />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="faq-panel"
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                  >
                    <div>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
