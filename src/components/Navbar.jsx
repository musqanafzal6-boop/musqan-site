import { useEffect, useState } from "react";
import { navLinks } from "../data/siteData";
import Logo from "./Logo";

// =====================================================
// Navbar
// Fixed top navigation with:
//   - your logo (from Logo.jsx)
//   - desktop menu with a gold underline on the active link
//   - mobile menu opened by a hamburger button
// The links come from "navLinks" in src/data/siteData.js.
// =====================================================

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // is the mobile menu open?
  const [scrolled, setScrolled] = useState(false); // has the page been scrolled?
  const [active, setActive] = useState("#home"); // which section is on screen?

  // 1. Detect scrolling, to add a background to the bar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 2. Find which section is currently on screen, to highlight its link.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // 3. While the mobile menu is open: stop the page scrolling
  //    behind it, and let the Escape key close it.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const headerStyle =
    scrolled || isOpen
      ? "bg-ivory/90 py-3 shadow-sm backdrop-blur-md"
      : "bg-transparent py-5";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${headerStyle}`}
    >
      <nav
        className="container-page flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* ---------- Logo ---------- */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Musqan, back to top"
          className="transition-opacity duration-300 hover:opacity-80"
        >
          <Logo />
        </a>

        {/* ---------- Desktop menu ---------- */}
        <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative pb-1 font-body text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:text-gold after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
                    isActive
                      ? "text-gold after:w-full"
                      : "text-forest after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ---------- Mobile menu button ---------- */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-forest transition-colors duration-300 hover:bg-cream lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="h-6 w-6"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="h-6 w-6"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* ---------- Mobile menu panel ---------- */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="animate-fade-in border-t border-gold/30 bg-ivory lg:hidden"
        >
          <ul className="container-page flex flex-col py-6">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href} className="border-b border-forest/10">
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`block py-4 font-display text-2xl transition-colors duration-300 hover:text-gold ${
                      isActive ? "text-gold" : "text-forest"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}