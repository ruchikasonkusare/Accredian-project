"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved by 40%. The ROI is undeniable.",
    name: "Priya Sharma",
    title: "Chief People Officer",
    company: "TechCorp India",
    industry: "Technology",
    metric: "40% velocity increase",
  },
  {
    quote:
      "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.",
    name: "Rajesh Nair",
    title: "VP Engineering",
    company: "FinServe Solutions",
    industry: "Financial Services",
    metric: "Self-led ML projects",
  },
  {
    quote:
      "We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.",
    name: "Ananya Krishnan",
    title: "Head of L&D",
    company: "GlobalOps Ltd.",
    industry: "Operations",
    metric: "96% completion rate",
  },
  {
    quote:
      "The custom curriculum aligned perfectly with our product roadmap. Every session directly translated into skills our team applied the very next sprint.",
    name: "Vikram Mehta",
    title: "CTO",
    company: "BuildRight Technologies",
    industry: "SaaS",
    metric: "Direct sprint impact",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
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

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 glass-card rounded-full text-xs text-brand-400 font-mono uppercase tracking-widest mb-6">
            Success Stories
          </div>
          <h2 className="animate-on-scroll text-4xl sm:text-5xl font-display font-bold text-white mb-5">
            Trusted by L&D leaders
            <br />
            <em className="gradient-text not-italic">driving real change</em>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="animate-on-scroll max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 relative">
            {/* Quote icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-16 h-16 text-brand-400" />
            </div>

            {/* Industry badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-600/10 border border-brand-500/20 rounded-full text-xs text-brand-400 mb-8">
              {t.industry}
            </div>

            {/* Quote */}
            <blockquote className="text-xl sm:text-2xl font-display text-white leading-relaxed mb-8">
              "{t.quote}"
            </blockquote>

            {/* Metric highlight */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm font-medium mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              {t.metric}
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center text-white font-bold font-display">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="text-white font-medium">{t.name}</div>
                <div className="text-white/40 text-sm">
                  {t.title}, {t.company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? "w-6 h-2 bg-brand-500"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mini testimonial grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`animate-on-scroll text-left p-4 glass-card rounded-xl transition-all duration-200 ${
                i === active
                  ? "border-brand-500/40 bg-brand-600/10"
                  : "hover:bg-white/5"
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="text-xs text-white/40 mb-1">{t.company}</div>
              <div className="text-sm font-medium gradient-text">{t.metric}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
