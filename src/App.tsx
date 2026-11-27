import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks, OfficePreview, Problem } from "./components/Workflow";
import { Benefits, Coverage } from "./components/Benefits";
import { AboutBetterGo, Announcements, Mission } from "./components/Updates";
import { Story } from "./components/Story";
import { Launch } from "./components/Launch";
import { Vision, Checklist } from "./components/Vision";
import { StatusBoard } from "./components/StatusBoard";
import { Availability, ServiceAvailability } from "./components/Availability";
import { InformationFlow, Trust } from "./components/Information";
import { HolidayPreview, ClosureAdvisory } from "./components/Schedules";
import { MobileShowcase } from "./components/Showcase";
import { Participation } from "./components/Participation";
import { InfoCenter } from "./components/InfoCenter";
import { Guides } from "./components/Guides";
import { Planner } from "./components/Planner";
import { ReturnGuide } from "./components/ReturnGuide";
import { Scenarios } from "./components/Scenarios";
import { Habit } from "./components/Habit";
import { Faq } from "./components/Faq";
import { Feedback } from "./components/Feedback";
import { Contact } from "./components/Contact";
import { Legal } from "./components/Legal";
import { Footer } from "./components/Footer";

function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useRevealOnScroll();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <Story />
        <Launch />
        <HowItWorks />
        <OfficePreview />
        <InfoCenter />
        <Vision />
        <Checklist />
        <StatusBoard />
        <Availability />
        <ServiceAvailability />
        <ReturnGuide />
        <Scenarios />
        <Guides />
        <Planner />
        <Benefits />
        <Coverage />
        <Announcements />
        <HolidayPreview />
        <ClosureAdvisory />
        <InformationFlow />
        <Trust />
        <MobileShowcase />
        <Mission />
        <AboutBetterGo />
        <Participation />
        <Habit />
        <Faq />
        <Feedback />
        <Contact />
        <Legal />
      </main>
      <Footer />
    </>
  );
}
