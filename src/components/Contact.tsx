import { Icon, type IconName } from "./Icon";
import { site } from "../site";

type ChannelProps = {
  icon: IconName;
  title: string;
  text: string;
  value: string | null;
  hrefPrefix?: "mailto:" | "tel:";
  pendingLabel: string;
};

function Channel({ icon, title, text, value, hrefPrefix, pendingLabel }: ChannelProps) {
  return (
    <li className="contact-channel">
      <span className="contact-icon">
        <Icon name={icon} size={20} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        {value ? (
          <a className="contact-value" href={`${hrefPrefix ?? ""}${value}`}>
            {value}
            <Icon name="arrowUpRight" size={14} />
          </a>
        ) : (
          <span className="contact-pending">
            <Icon name="clock" size={14} />
            {pendingLabel}
          </span>
        )}
      </div>
    </li>
  );
}

export function Contact() {
  const { contact } = site;

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-panel" data-reveal>
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light">Contact</p>
            <h2 className="section-title section-title-light">
              Inquiries, suggestions, and office participation.
            </h2>
            <p className="section-lead section-lead-light">
              If you represent a government office that would like to be included, or if you have a
              suggestion for the platform, we would like to hear from you.
            </p>

            <div className="contact-notice">
              <Icon name="shield" size={18} />
              <p>
                <strong>No unverified contact details are published.</strong> Official channels will be
                listed here once confirmed. Until then, OPENNOW Government does not accept inquiries
                through unlisted personal numbers or unofficial accounts.
              </p>
            </div>
          </div>

          <ul className="contact-channels">
            <Channel
              icon="mail"
              title="Inquiries & suggestions"
              text="Questions about the platform, corrections to published information, or feedback on accessibility."
              value={contact.email}
              hrefPrefix="mailto:"
              pendingLabel="Contact channel to be published"
            />
            <Channel
              icon="landmark"
              title="Government office participation"
              text="For offices interested in publishing authorized schedules, availability, and announcements."
              value={contact.participationEmail ?? contact.email}
              hrefPrefix="mailto:"
              pendingLabel="Participation channel to be published"
            />
            <Channel
              icon="pin"
              title="Office address"
              text="The project's official correspondence address will be published once confirmed."
              value={contact.address}
              pendingLabel="Address to be published"
            />
          </ul>
        </div>

        <div className="contact-foot" data-reveal>
          <p>
            In the meantime, you can learn more about the initiative behind OPENNOW Government.
          </p>
          <a
            className="btn btn-outline"
            href={site.betterGo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to {site.betterGo.name}
            <Icon name="arrowUpRight" size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
