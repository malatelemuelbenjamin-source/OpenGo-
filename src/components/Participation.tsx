import { site } from "../site";
import { Icon, type IconName } from "./Icon";

const infoTypes: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "clock",
    title: "Office operating schedules",
    text: "Regular hours, transaction cut-offs, and non-working days.",
  },
  {
    icon: "calendar",
    title: "Special schedule announcements",
    text: "Holiday hours, special operating days, and revised windows.",
  },
  {
    icon: "userCheck",
    title: "Authorized official availability",
    text: "Availability updates published by authorized personnel only.",
  },
  {
    icon: "clipboard",
    title: "Government service availability",
    text: "Which services are accepting, limited, or paused.",
  },
  {
    icon: "alert",
    title: "Temporary closure notices",
    text: "Short-notice closures with the reason and expected resumption.",
  },
  {
    icon: "pin",
    title: "Contact and location information",
    text: "Verified channels and addresses the public can rely on.",
  },
];

export function Participation() {
  return (
    <section className="section participation" id="participation">
      <div className="container">
        <div className="participation-panel" data-reveal>
          <span className="participation-glow" aria-hidden="true" />
          <div className="participation-copy">
            <p className="eyebrow eyebrow-light">Government participation</p>
            <h2>Better Public Information Starts With Participation.</h2>
            <p>
              Authorized government offices may take part by publishing the public information citizens
              actually check before travelling. Participation is voluntary, verified, and limited to what
              each office authorizes for public view.
            </p>
            <a className="btn btn-light" href={site.participationHref}>
              Learn About Government Participation
              <Icon name="arrowRight" size={17} />
            </a>
            <p className="participation-note">
              <Icon name="shield" size={14} />
              No government office has agreed to participate yet, and no partnership is claimed or
              implied. Participation begins only after formal verification and authorization by the
              office concerned.
            </p>
          </div>

          <div className="participation-card">
            <p className="participation-card-title">What a participating office may publish</p>
            <ul className="participation-types">
              {infoTypes.map((type) => (
                <li key={type.title}>
                  <span className="participation-type-icon">
                    <Icon name={type.icon} size={16} />
                  </span>
                  <div>
                    <h3>{type.title}</h3>
                    <p>{type.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
