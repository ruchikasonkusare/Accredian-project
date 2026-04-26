"use client";

import { useState, useEffect, useRef } from "react";
import { Send, CheckCircle, Loader } from "lucide-react";

const companySizes = ["1–50", "51–200", "201–1000", "1000+"];
const interests = [
  "Data Science & AI",
  "Product Management",
  "Leadership & Management",
  "Software Engineering",
  "Business Analytics",
  "Other",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    size: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    containerRef.current
      ?.querySelectorAll(".animate-on-scroll")
      .forEach((el: Element) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errs.email = "Valid email required";
    if (!form.company.trim()) errs.company = "Company is required";
    if (!form.size) errs.size = "Please select company size";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setState("success");
    } catch {
      setState("error");
    }
  };

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f: typeof form) => ({ ...f, [k]: e.target.value }));

  if (state === "success") {
    return (
      <section id="contact" className="relative py-28 overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="glass-card rounded-3xl p-12">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-3">
              Request Received!
            </h3>
            <p className="text-white/50 mb-6">
              Our enterprise team will reach out within 24 hours to schedule your free consultation.
            </p>
            <button
              onClick={() => { setState("idle"); setForm({ name: "", email: "", company: "", phone: "", size: "", interest: "", message: "" }); }}
              className="px-6 py-2.5 glass-card rounded-lg text-white/70 hover:text-white transition-colors"
            >
              Submit another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" ref={containerRef} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 glass-card rounded-full text-xs text-brand-400 font-mono uppercase tracking-widest mb-6">
              Get Started
            </div>
            <h2 className="animate-on-scroll text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              Transform your
              <br />
              <em className="gradient-text not-italic">workforce today</em>
            </h2>
            <p className="animate-on-scroll text-lg text-white/50 leading-relaxed mb-8">
              Book a free 45-minute consultation with our enterprise learning
              specialists. We'll map your skill gaps and design a custom
              roadmap.
            </p>

            {/* Value props */}
            <div className="animate-on-scroll space-y-4">
              {[
                "Free skill gap assessment",
                "Custom curriculum proposal within 72 hours",
                "ROI projection based on your goals",
                "No commitment required",
              ].map((v) => (
                <div key={v} className="flex items-center gap-3 text-white/60">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                  </div>
                  <span className="text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="animate-on-scroll">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 space-y-5"
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                Request a Demo
              </h3>
              <p className="text-sm text-white/40 mb-6">
                Fill out the form and we'll be in touch shortly.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Priya Sharma"
                    className={`w-full bg-white/5 border ${
                      errors.name ? "border-red-500/50" : "border-white/10"
                    } rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-500/50 focus:bg-white/8 transition-all`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="priya@company.com"
                    className={`w-full bg-white/5 border ${
                      errors.email ? "border-red-500/50" : "border-white/10"
                    } rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-500/50 focus:bg-white/8 transition-all`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">
                    Company *
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={set("company")}
                    placeholder="Acme Corp"
                    className={`w-full bg-white/5 border ${
                      errors.company ? "border-red-500/50" : "border-white/10"
                    } rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-500/50 focus:bg-white/8 transition-all`}
                  />
                  {errors.company && (
                    <p className="text-xs text-red-400 mt-1">{errors.company}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-500/50 focus:bg-white/8 transition-all"
                  />
                </div>
              </div>

              {/* Company size */}
              <div>
                <label className="block text-xs text-white/50 mb-2">
                  Company Size *
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {companySizes.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setForm((f) => ({ ...f, size: s }))}
                      className={`py-2 text-xs rounded-lg border transition-all ${
                        form.size === s
                          ? "border-brand-500/50 bg-brand-500/10 text-brand-400"
                          : "border-white/10 text-white/40 hover:border-white/20"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {errors.size && (
                  <p className="text-xs text-red-400 mt-1">{errors.size}</p>
                )}
              </div>

              {/* Interest */}
              <div>
                <label className="block text-xs text-white/50 mb-1.5">
                  Area of Interest
                </label>
                <select
                  value={form.interest}
                  onChange={set("interest")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500/50 transition-all appearance-none"
                >
                  <option value="" className="bg-navy-900">
                    Select a domain...
                  </option>
                  {interests.map((i) => (
                    <option key={i} value={i} className="bg-navy-900">
                      {i}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-white/50 mb-1.5">
                  Tell us about your goals
                </label>
                <textarea
                  value={form.message}
                  onChange={set("message")}
                  rows={3}
                  placeholder="We're looking to upskill 50 data analysts across 3 cities..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-500/50 focus:bg-white/8 transition-all resize-none"
                />
              </div>

              {state === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={state === "loading"}
                className="btn-shimmer w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-brand-600/25 disabled:opacity-60"
              >
                {state === "loading" ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Request Free Demo
                  </>
                )}
              </button>

              <p className="text-xs text-white/30 text-center">
                No spam. We'll only use this to get in touch about your demo.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
