"use client";

import { useEffect, useRef } from "react";
import { Search, PenTool, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Skill Gap Discovery",
    subtitle: "Week 1–2",
    description:
      "Our consultants map skill gaps, business goals, and requirements through structured interviews with L&D heads, CHROs, and team leads.",
    details: ["360° skill assessment", "Business goal alignment", "ROI framework setup"],
  },
  {
    icon: PenTool,
    number: "02",
    title: "Custom Curriculum Design",
    subtitle: "Week 2–4",
    description:
      "Co-create a learning journey with Accredian's academic partners from IITs and IIMs, tailored entirely to your organization's stack.",
    details: ["Academic partner involvement", "Industry expert review", "Milestone-based structure"],
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Onboard",
    subtitle: "Day 1",
    description:
      "Onboard teams with platform access, orientation sessions, and mentor assignment. Cohorts kick off within 5 days of sign-off.",
    details: ["Rapid 5-day onboarding", "Mentor matching", "Cohort kick-off session"],
  },
  {
    icon: LineChart,
    number: "04",
    title: "Track & Optimize",
    subtitle: "Ongoing",
    description:
      "Real-time analytics and monthly business reviews keep ROI measurable. Adaptive nudges keep completion rates consistently above 94%.",
    details: ["Monthly ROI reports", "Completion nudges", "Adaptive content tuning"],
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    containerRef.current
      ?.querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800/30 to-transparent" />
      <div
        className="absolute inset-0 bg-grid-pattern opacity-30"
        style={{ backgroundSize: "80px 80px" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 glass-card rounded-full text-xs text-brand-400 font-mono uppercase tracking-widest mb-6">
            The Process
          </div>
          <h2 className="animate-on-scroll text-4xl sm:text-5xl font-display font-bold text-white mb-5">
            From gap analysis to{" "}
            <em className="gradient-text not-italic">measurable ROI</em>
          </h2>
          <p className="animate-on-scroll text-lg text-white/50 max-w-xl mx-auto">
            A structured 4-step journey that turns your L&D budget into a
            competitive advantage.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="animate-on-scroll group"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  {/* Step indicator */}
                  <div className="relative flex flex-col items-center lg:items-center mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600/30 to-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:border-brand-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-500/20">
                        <Icon className="w-6 h-6 text-brand-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy-900 border border-brand-500/30 flex items-center justify-center">
                        <span className="text-xs font-mono text-brand-400">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:text-center">
                    <div className="text-xs font-mono text-brand-400/70 mb-2">
                      {step.subtitle}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-1.5">
                      {step.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-xs text-white/40 lg:justify-center"
                        >
                          <div className="w-1 h-1 rounded-full bg-brand-500" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="animate-on-scroll mt-20 glass-card rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">
              Ready to map your team's skill gaps?
            </h3>
            <p className="text-white/50 text-sm">
              Our consultants run a free 45-minute discovery session.
            </p>
          </div>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-shimmer flex-shrink-0 px-8 py-3.5 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-brand-600/25"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
