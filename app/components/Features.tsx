"use client";

import { useEffect, useRef } from "react";
import {
  BarChart3,
  Brain,
  Users2,
  Sliders,
  Award,
  Globe,
  MessageSquare,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track completion rates, engagement scores, and ROI through a live command center dashboard. Monthly business reviews keep results visible.",
    tag: "Analytics",
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: "Live Mentorship",
    description:
      "1:1 sessions with 500+ industry practitioners across AI/ML, Data Science, Product Management, and Leadership.",
    tag: "Mentorship",
  },
  {
    icon: Users2,
    title: "Cohort Learning",
    description:
      "Structured cohorts foster collaboration, accountability, and peer learning — driving completion rates above 94%.",
    tag: "Collaboration",
  },
  {
    icon: Sliders,
    title: "Custom Programs",
    description:
      "Tailor curriculum entirely to your organization's skill gaps, industry context, and strategic goals. No one-size-fits-all.",
    tag: "Customization",
    highlight: true,
  },
  {
    icon: Award,
    title: "Verified Credentials",
    description:
      "Globally recognized certifications from IITs, IIMs, and partner institutions. Verifiable, shareable, and career-defining.",
    tag: "Certification",
  },
  {
    icon: Brain,
    title: "Adaptive AI Engine",
    description:
      "AI-driven learning paths adjust to each learner's pace and baseline, maximizing engagement and retention.",
    tag: "AI-Powered",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description:
      "Seamlessly upskill distributed teams across different timezones with asynchronous and synchronous learning options.",
    tag: "Scale",
  },
  {
    icon: Zap,
    title: "Rapid Onboarding",
    description:
      "Platform access, orientation, and mentor assignment in under 5 days. Your team is learning before you know it.",
    tag: "Speed",
  },
];

export default function Features() {
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
    <section id="features" ref={containerRef} className="relative py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-600/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 glass-card rounded-full text-xs text-brand-400 font-mono uppercase tracking-widest mb-6">
            Platform Capabilities
          </div>
          <h2 className="animate-on-scroll text-4xl sm:text-5xl font-display font-bold text-white mb-5">
            Everything your L&D team
            <br />
            <em className="gradient-text not-italic">needs to succeed</em>
          </h2>
          <p className="animate-on-scroll text-lg text-white/50 max-w-2xl mx-auto">
            From curriculum design to post-program analytics — Accredian Enterprise is the complete operating system for ambitious learning organizations.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className={`animate-on-scroll glass-card glass-card-hover rounded-2xl p-6 ${
                  feat.highlight
                    ? "sm:col-span-2 bg-gradient-to-br from-brand-600/10 to-brand-500/5 border-brand-500/20"
                    : ""
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      feat.highlight
                        ? "bg-brand-500/20"
                        : "bg-white/5"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        feat.highlight ? "text-brand-400" : "text-white/50"
                      }`}
                    />
                  </div>
                  <span className="text-xs font-mono text-white/30 px-2 py-1 glass-card rounded-md">
                    {feat.tag}
                  </span>
                </div>
                <h3
                  className={`font-semibold mb-2 ${
                    feat.highlight ? "text-xl text-white" : "text-base text-white/90"
                  }`}
                >
                  {feat.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {feat.description}
                </p>
                {feat.highlight && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <div className="flex gap-4 text-sm">
                      <div>
                        <span className="text-2xl font-bold gradient-text">94%</span>
                        <span className="text-white/40 ml-1">completion</span>
                      </div>
                      <div>
                        <span className="text-2xl font-bold gradient-text">40%</span>
                        <span className="text-white/40 ml-1">productivity ↑</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
