"use client";

import { useEffect, useRef } from "react";

const partners = [
  { name: "IIT Kanpur", short: "IITK", color: "from-blue-500 to-blue-700" },
  { name: "IIM Lucknow", short: "IIML", color: "from-red-500 to-red-700" },
  {
    name: "IIM Visakhapatnam",
    short: "IIMV",
    color: "from-green-500 to-green-700",
  },
  { name: "IIM Trichy", short: "IIMT", color: "from-purple-500 to-purple-700" },
  { name: "XLRI Jamshedpur", short: "XLRI", color: "from-amber-500 to-amber-700" },
  { name: "SP Jain", short: "SPJ", color: "from-teal-500 to-teal-700" },
];

const companyLogos = [
  "Infosys",
  "Wipro",
  "TCS",
  "HCL",
  "Cognizant",
  "Deloitte",
  "Accenture",
  "Capgemini",
];

export default function Partners() {
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
      id="partners"
      ref={containerRef}
      className="relative py-28 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 glass-card rounded-full text-xs text-brand-400 font-mono uppercase tracking-widest mb-6">
            Academic Partners
          </div>
          <h2 className="animate-on-scroll text-4xl sm:text-5xl font-display font-bold text-white mb-5">
            Programs co-certified by
            <br />
            <em className="gradient-text not-italic">India's finest institutions</em>
          </h2>
          <p className="animate-on-scroll text-lg text-white/50 max-w-xl mx-auto">
            Every program is rigorously structured and co-designed with faculty
            from India's most prestigious academic institutions.
          </p>
        </div>

        {/* Academic partners */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className="animate-on-scroll glass-card glass-card-hover rounded-2xl p-5 text-center"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}
              >
                <span className="text-white text-xs font-bold font-mono">
                  {p.short}
                </span>
              </div>
              <div className="text-xs text-white/60 font-medium leading-tight">
                {p.name}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="animate-on-scroll flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-xs text-white/30 font-mono uppercase tracking-widest">
            Trusted by leading enterprises
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Company logos scroll */}
        <div className="animate-on-scroll relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy-900 to-transparent z-10" />

          <div className="flex gap-8 overflow-hidden">
            <div className="flex gap-8 animate-marquee">
              {[...companyLogos, ...companyLogos].map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-6 py-3 glass-card rounded-xl text-white/30 text-sm font-medium whitespace-nowrap hover:text-white/60 transition-colors"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="animate-on-scroll mt-16 glass-card rounded-2xl p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Professionals Trained" },
              { value: "6", label: "Partner Institutions" },
              { value: "50+", label: "Programs Available" },
              { value: "8+", label: "Years of Excellence" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
