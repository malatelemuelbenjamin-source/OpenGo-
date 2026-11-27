import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "../site";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { SearchDialog } from "./SearchDialog";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [active, setActive] = useState<string>(navLinks[0].href);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section indication for the primary navigation.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-42% 0px -50% 0px", threshold: [0, 0.25, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeSearch = () => {
    setSearchOpen(false);
    const trigger = searchButtonRef.current;
    if (trigger && trigger.offsetParent !== null) {
      trigger.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  };

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container header-inner">
          <a
            className="brand"
            href="#top"
            aria-label={`${site.name} — home`}
            onClick={() => setActive("#top")}
          >
            <Logo />
            <span className="brand-text">
              <span className="brand-name">OPENNOW</span>
              <span className="brand-sub">GOVERNMENT</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={active === link.href ? "is-active" : undefined}
                aria-current={active === link.href ? "location" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="search-trigger"
              ref={searchButtonRef}
              onClick={() => setSearchOpen(true)}
              aria-label="Search this website"
              aria-haspopup="dialog"
            >
              <Icon name="search" size={17} />
              <span className="search-trigger-label">Search</span>
            </button>
            <a className="btn btn-primary btn-sm header-cta" href={site.headerCta.href}>
              {site.headerCta.label}
            </a>
            <button
              type="button"
              className="menu-toggle"
              ref={menuButtonRef}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <Icon name={open ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} hidden={!open}>
          <nav aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={active === link.href ? "is-active" : undefined}
                onClick={() => {
                  setActive(link.href);
                  setOpen(false);
                }}
              >
                {link.label}
                <Icon name="arrowRight" size={18} />
              </a>
            ))}
            <button
              type="button"
              className="mobile-search"
              onClick={() => {
                setOpen(false);
                setSearchOpen(true);
              }}
            >
              <Icon name="search" size={18} />
              Search this website
            </button>
            <a className="btn btn-primary" href={site.headerCta.href} onClick={() => setOpen(false)}>
              {site.headerCta.label}
            </a>
            <a
              className="mobile-external"
              href={site.betterGo.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.betterGo.name}
              <Icon name="arrowUpRight" size={16} />
            </a>
          </nav>
        </div>
      </header>

      <SearchDialog open={searchOpen} onClose={closeSearch} />
    </>
  );
}
