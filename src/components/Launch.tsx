import { site } from "../site";
import { Icon } from "./Icon";

export function Launch() {
  return (
    <section className="section launch" id="launch">
      <div className="container">
        <div className="launch-panel" data-reveal>
          <p className="eyebrow">Public launch</p>
          <h2 className="launch-title">Introducing OPENNOW GOVERNMENT.</h2>
          <p className="launch-text">
            Isang digital initiative na naglalayong tulungan ang mga Marinduqueño na malaman muna ang
            office schedules, official availability, service updates, at public announcements bago
            bumiyahe.
          </p>
          <p className="launch-highlight">Because every government trip matters.</p>

          <div className="launch-actions">
            <a className="btn btn-primary" href="#how-it-works">
              Discover How OpenNow Works
              <Icon name="arrowRight" size={17} />
            </a>
            <a
              className="btn btn-outline"
              href={site.betterGo.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore BetterGo Marinduque
              <Icon name="arrowUpRight" size={16} />
            </a>
          </div>

          <p className="launch-note">
            <Icon name="alert" size={14} />
            This is the introduction stage. The live government availability system is not yet
            operational, and every board on this site remains demonstration data.
          </p>
        </div>
      </div>
    </section>
  );
}
