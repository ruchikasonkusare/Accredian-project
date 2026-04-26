import { Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Solutions: [
    { label: "Custom Programs", href: "#features" },
    { label: "Live Mentorship", href: "#features" },
    { label: "Analytics Dashboard", href: "#features" },
    { label: "Team Cohorts", href: "#features" },
    { label: "AI Learning Engine", href: "#features" },
  ],
  Company: [
    { label: "About Accredian", href: "#" },
    { label: "Partner Institutions", href: "#partners" },
    { label: "Case Studies", href: "#testimonials" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Whitepapers", href: "#" },
    { label: "ROI Calculator", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "API Docs", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm font-display">A</span>
              </div>
              <div>
                <span className="text-white font-semibold text-lg tracking-tight">
                  Accredian
                </span>
                <span className="ml-1.5 text-brand-400 text-xs font-mono uppercase tracking-widest">
                  Enterprise
                </span>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              India's most trusted enterprise learning platform. Partner with
              IITs & IIMs to upskill your workforce at scale.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              <a
                href="mailto:enterprise@accredian.com"
                className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-400" />
                enterprise@accredian.com
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-400" />
                +91 123 456 7890
              </a>
              <div className="flex items-center gap-2 text-xs text-white/40">
                <MapPin className="w-3.5 h-3.5 text-brand-400" />
                Gurugram, Haryana, India
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 glass-card rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-white/40 hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Accredian. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/20">
              Built with Next.js 14 + Tailwind CSS
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/30">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
