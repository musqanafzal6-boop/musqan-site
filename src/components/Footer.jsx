import { siteInfo, navLinks, socialLinks } from "../data/siteData";
import Logo from "./Logo";

// =====================================================
// Footer
// The bottom of the website:
//   - your logo (dark version) and a short introduction
//   - navigation links
//   - social media links
//   - copyright text
// All content comes from src/data/siteData.js.
// =====================================================

export default function Footer() {
  // The year updates by itself every January.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-ivory">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* ================= LOGO AND INTRO ================= */}
          <div className="lg:col-span-5">
            <a
              href="#home"
              aria-label="Musqan, back to top"
              className="inline-block transition-opacity duration-300 hover:opacity-80"
            >
              <Logo light showTagline />
            </a>
            <div className="gold-line mt-6"></div>
            <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-ivory/70">
              {siteInfo.footerText}
            </p>
          </div>

          {/* ================= NAVIGATION LINKS ================= */}
          <nav className="lg:col-span-3 lg:col-start-7" aria-label="Footer navigation">
            <p className="eyebrow">Explore</p>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-ivory/80 transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ================= SOCIAL LINKS ================= */}
          <div className="lg:col-span-3">
            <p className="eyebrow">Follow</p>
            <ul className="mt-6 space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-ivory/80 transition-colors duration-300 hover:text-gold"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= COPYRIGHT BAR ================= */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/30 pt-8 sm:flex-row">
          <p className="font-body text-xs tracking-wide text-ivory/60">
            &copy; {currentYear} {siteInfo.name}. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:text-ivory"
          >
            Back to top
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}