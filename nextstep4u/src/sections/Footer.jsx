import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export default function Footer({ links, socialLinks }) {
  return (
    <footer className="relative bg-charcoal text-white overflow-hidden">
      {/* Top gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/30">
                <GraduationCap className="w-5 h-5 text-charcoal" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                NextStep<span className="text-brand-500">4U</span>
              </span>
            </Link>
            <p className="mt-4 text-white/40 max-w-sm leading-relaxed text-[15px]">
              Empowering the next generation of professionals through
              AI-driven, personalized learning experiences.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500/20 hover:border-brand-500/30 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-white/50 hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
                {heading}
              </h4>
              <ul className="space-y-3">
                {items.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/35 hover:text-brand-500 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/25">
            2025 NextStep4U. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/25 hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-white/25 hover:text-white/50 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-brand-500/5 to-transparent blur-3xl pointer-events-none" />
    </footer>
  );
}
