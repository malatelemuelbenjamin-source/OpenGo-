import { footerLinks, policyLinks, site } from "../site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  const { contact } = site;
  const hasContact = Boolean(contact.email || contact.phone || contact.address);

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="brand brand-footer" href="#top" aria-label={`${site.name} — home`}>
            <Logo />
            <span className="brand-text">
              <span className="brand-name">OPENNOW</span>
              <span className="brand-sub">GOVERNMENT</span>
            </span>
          </a>
          <p className="footer-tagline">{site.tagline}</p>
          <p className="footer-initiative">{site.initiative}</p>
          <p className="footer-description">
            An independent digital initiative under BetterGo Marinduque, designed to help citizens
            access public office schedules, availability information, and service updates before
            traveling.
          </p>
          <a
            className="footer-bettergo"
            href={site.betterGo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.betterGo.name}
            <Icon name="arrowUpRight" size={15} />
          </a>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <p className="footer-heading">Explore</p>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href={site.betterGo.url} target="_blank" rel="noopener noreferrer">
                BetterGo Marinduque
                <Icon name="arrowUpRight" size={13} />
              </a>
            </li>
          </ul>
        </nav>

        <div className="footer-about">
          <p className="footer-heading">About BetterGo</p>
          <p>
            OPENNOW Government is a specialized digital initiative within BetterGo Marinduque, focused
            on making government office availability and public service information easier to access.
          </p>
          <a
            className="footer-inline-link"
            href={site.betterGo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the initiative
            <Icon name="arrowUpRight" size={13} />
          </a>

          <p className="footer-heading footer-heading-spaced">Policies</p>
          <ul className="footer-policies">
            {policyLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <p className="footer-heading">Contact</p>
          {hasContact ? (
            <ul className="footer-contact-list">
              {contact.email && (
                <li>
                  <Icon name="mail" size={14} />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              )}
              {contact.phone && (
                <li>
                  <Icon name="phone" size={14} />
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                </li>
              )}
              {contact.address && (
                <li>
                  <Icon name="pin" size={14} />
                  <span>{contact.address}</span>
                </li>
              )}
            </ul>
          ) : (
            <p className="footer-contact-pending">
              Official contact channels are being confirmed. Details will be published here once
              verified.
            </p>
          )}
          <a className="footer-inline-link" href="#contact">
            Contact section
            <Icon name="arrowRight" size={13} />
          </a>

          <p className="footer-sample-note">
            <Icon name="alert" size={14} />
            All office statuses and announcements on this introduction site are sample content.
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-disclaimer">
          OpenNow Government is an independent public-information initiative. It is not an official
          government agency or a substitute for direct confirmation from government offices.
          Government participation and availability updates are subject to authorization. Always confirm
          critical transactions directly with the concerned office.
        </p>
        <div className="footer-meta">
          <span>
            © {year} {site.betterGo.name}. All rights reserved.
          </span>
          <nav className="footer-meta-links" aria-label="Legal">
            {policyLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#top" className="footer-top">
            Back to top
            <Icon name="arrowUpRight" size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
