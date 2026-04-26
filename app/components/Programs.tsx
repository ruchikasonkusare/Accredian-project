"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Users, Award, ArrowRight } from "lucide-react";

const categories = ["All", "Data & AI", "Product", "Leadership", "Engineering"];

const programs = [
  {
    category: "Data & AI",
    title: "Post Graduate Program in Data Science & AI",
    institution: "IIT Kanpur",
    duration: "11 Months",
    cohort: "Batch of 30",
    level: "Advanced",
    highlights: ["Live sessions with IIT faculty", "Capstone projects", "Placement support"],
    color: "from-blue-600 to-blue-800",
    badge: "IITK",
  },
  {
    category: "Product",
    title: "Executive Program in Product Management",
    institution: "IIM Lucknow",
    duration: "6 Months",
    cohort: "Batch of 40",
    level: "Executive",
    highlights: ["Case-based learning", "Industry mentors", "IIM certification"],
    color: "from-red-600 to-red-800",
    badge: "IIML",
  },
  {
    category: "Leadership",
    title: "Senior Leadership Programme",
    institution: "XLRI Jamshedpur",
    duration: "12 Months",
    cohort: "Batch of 25",
    level: "C-Suite",
    highlights: ["Residential modules", "Global faculty", "Peer network"],
    color: "from-amber-600 to-amber-800",
    badge: "XLRI",
  },
  {
    category: "Engineering",
    title: "Advanced Program in Cloud & DevOps",
    institution: "IIT Kanpur",
    duration: "8 Months",
    cohort: "Batch of 35",
    level: "Intermediate",
    highlights: ["Hands-on labs", "AWS/GCP certification prep", "Live projects"],
    color: "from-teal-600 to-teal-800",
    badge: "IITK",
  },
  {
    category: "Data & AI",
    title: "Executive Program in Machine Learning",
    institution: "IIM Visakhapatnam",
    duration: "9 Months",
    cohort: "Batch of 30",
    level: "Advanced",
    highlights: ["Python-first curriculum", "Research-grade projects", "Industry mentors"],
    color: "from-purple-600 to-purple-800",
    badge: "IIMV",
  },
  {
    category: "Product",
    title: "Business Analytics & Strategy",
    institution: "SP Jain",
    duration: "5 Months",
    cohort: "Batch of 45",
    level: "Mid-level",
    highlights: ["Excel & Tableau", "Strategy frameworks", "Consulting simulations"],
    color: "from-green-600 to-green-800",
    badge: "SPJ",
  },
];

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("All");
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

  const filtered =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" ref={containerRef} className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 glass-card rounded-full text-xs text-brand-400 font-mono uppercase tracking-widest mb-6">
            Curated Programs
          </div>
          <h2 className="animate-on-scroll text-4xl sm:text-5xl font-display font-bold text-white mb-5">
            IIT & IIM certified programs
            <br />
            <em className="gradient-text not-italic">built for enterprise scale</em>
          </h2>
          <p className="animate-on-scroll text-lg text-white/50 max-w-xl mx-auto">
            Every program is co-designed with academic faculty and industry practitioners for maximum real-world relevance.
          </p>
        </div>

        {/* Category tabs */}
        <div className="animate-on-scroll flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25"
                  : "glass-card text-white/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((program, i) => (
            <div
              key={program.title}
              className="animate-on-scroll glass-card glass-card-hover rounded-2xl overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${program.color} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10 bg-grid-pattern" style={{ backgroundSize: "30px 30px" }} />
                <div className="relative z-10 flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <span className="text-white text-xs font-bold font-mono">{program.badge}</span>
                  </div>
                  <span className="px-2.5 py-1 bg-white/15 rounded-full text-xs text-white/80">
                    {program.level}
                  </span>
                </div>
                <div className="relative z-10 mt-4">
                  <div className="text-xs text-white/60 mb-1">{program.institution}</div>
                  <h3 className="text-base font-semibold text-white leading-snug">{program.title}</h3>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-xs text-white/40">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-400" />
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-brand-400" />
                    {program.cohort}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-brand-400" />
                    Certified
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-white/50">
                      <div className="w-1 h-1 rounded-full bg-brand-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="group w-full flex items-center justify-between px-4 py-2.5 glass-card rounded-xl text-sm text-white/60 hover:text-white transition-all"
                >
                  <span>Explore Program</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="animate-on-scroll text-center mt-12">
          <p className="text-sm text-white/40">
            Can't find what you need?{" "}
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-brand-400 hover:text-brand-300 underline underline-offset-2 transition-colors"
            >
              Request a custom program
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
