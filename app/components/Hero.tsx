"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Play, Shield, TrendingUp, Users } from "lucide-react";

const stats = [
  { value: "94%", label: "Avg. completion rate" },
  { value: "500+", label: "Industry mentors" },
  { value: "40%", label: "Avg. productivity boost" },
  { value: "300+", label: "Enterprise clients" },
];

const badges = [
  { icon: Shield, text: "IIT & IIM Certified" },
  { icon: TrendingUp, text: "Measurable ROI" },
  { icon: Users, text: "10,000+ Alumni" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = containerRef.current?.querySelectorAll(".animate-on-scroll");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div
        className="absolute inset-0 bg-grid-pattern"
        style={{ backgroundSize: "60px 60px" }}
      />

      {/* Orbs */}
      <div
        className="orb w-96 h-96 bg-brand-500"
        style={{ top: "15%", left: "-5%" }}
      />
      <div
        className="orb w-72 h-72 bg-brand-400"
        style={{
          top: "60%",
          right: "5%",
          animationDelay: "3s",
          opacity: 0.08,
        }}
      />
      <div
        className="orb w-56 h-56 bg-accent-500"
        style={{
          top: "25%",
          right: "20%",
          animationDelay: "1.5s",
          opacity: 0.06,
        }}
      />

      {/* Dashboard preview floating card */}
      <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 w-[500px] opacity-70 pointer-events-none">
        <div
          className="glass-card rounded-2xl p-6 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-brand-400 uppercase tracking-widest">
              Live Dashboard
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/40">Live</span>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { label: "Team Completion", pct: 94, color: "bg-brand-500" },
              { label: "Engagement Score", pct: 87, color: "bg-green-500" },
              { label: "Mentor Sessions", pct: 78, color: "bg-accent-500" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/60">{item.label}</span>
                  <span className="text-white/80">{item.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-3 gap-3">
            {[
              { v: "247", l: "Active Learners" },
              { v: "96%", l: "Satisfaction" },
              { v: "12", l: "Programs" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-lg font-semibold gradient-text">{s.v}</div>
                <div className="text-xs text-white/40">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm mb-8"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/70">
              Trusted by{" "}
              <span className="text-white font-medium">300+ enterprises</span>{" "}
              across India
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-on-scroll text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-white">The Operating</span>
            <br />
            <span className="text-white">System for</span>
            <br />
            <em className="gradient-text not-italic">Enterprise Learning</em>
          </h1>

          {/* Subheading */}
          <p
            className="animate-on-scroll text-lg sm:text-xl text-white/60 leading-relaxed mb-8 max-w-2xl"
            style={{ animationDelay: "0.3s" }}
          >
            Partner with IITs, IIMs, and global universities to upskill your
            workforce. Custom programs, live mentorship, and real-time analytics
            — all in one platform.
          </p>

          {/* Trust badges */}
          <div
            className="animate-on-scroll flex flex-wrap gap-3 mb-10"
            style={{ animationDelay: "0.35s" }}
          >
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-3 py-1.5 glass-card rounded-full text-xs text-white/60"
              >
                <Icon className="w-3.5 h-3.5 text-brand-400" />
                {text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="animate-on-scroll flex flex-wrap gap-4 mb-16"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={scrollToContact}
              className="btn-shimmer group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-medium rounded-xl transition-all duration-200 shadow-xl shadow-brand-600/30 hover:shadow-brand-500/50 hover:-translate-y-0.5"
            >
              Get a Free Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={scrollToFeatures}
              className="group flex items-center gap-2.5 px-8 py-4 glass-card rounded-xl text-white/70 hover:text-white transition-all duration-200 hover:bg-white/8"
            >
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-500/50 transition-colors">
                <Play className="w-3 h-3 ml-0.5" />
              </div>
              See Platform
            </button>
          </div>

          {/* Stats */}
          <div
            className="animate-on-scroll grid grid-cols-2 sm:grid-cols-4 gap-6"
            style={{ animationDelay: "0.5s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold gradient-text stat-number">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
}
