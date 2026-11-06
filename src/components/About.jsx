import useReveal from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import { aboutContent } from "../data/siteData";

// =====================================================
// About
// "A Little About Me" section.
//   Left side:  your portrait (or an elegant placeholder)
//   Right side: intro, four short paragraphs, and your
//               approach to creativity and design.
// All the text comes from "aboutContent" in
// src/data/siteData.js, so edit your words there.
// =====================================================

export default function About() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={aboutContent.eyebrow}
          heading={aboutContent.heading}
        />

        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ================= LEFT: PORTRAIT ================= */}
          <div ref={leftRef} className="reveal lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Gold frame offset behind the portrait */}
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-2xl border border-gold/70"></div>

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-forest shadow-xl">
                {aboutContent.portrait ? (
                  <img
                    src={aboutContent.portrait}
                    alt="Portrait of Musqan"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-forest via-forest to-[#2F7F6E] p-8 text-center">
                    <span className="font-display text-8xl font-medium text-gold">
                      M
                    </span>
                    <div className="gold-line mt-4"></div>
                    <p className="mt-4 font-body text-xs uppercase tracking-[0.3em] text-ivory/70">
                      Your portrait goes here
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ================= RIGHT: TEXT ================= */}
          <div ref={rightRef} className="reveal reveal-delay-1 lg:col-span-7">
            <p className="font-display text-2xl leading-snug text-forest sm:text-3xl">
              {aboutContent.intro}
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {aboutContent.paragraphs.map((item, index) => (
                <div
                  key={item.title}
                  className="border-t border-gold/50 pt-5"
                >
                  <span className="font-display text-sm text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-forest">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/75">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* ----- Approach to creativity ----- */}
            <div className="mt-12 border-l-2 border-gold pl-6">
              <p className="eyebrow">My Approach</p>
              <p className="mt-3 font-display text-xl italic leading-relaxed text-forest">
                {aboutContent.approach}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}