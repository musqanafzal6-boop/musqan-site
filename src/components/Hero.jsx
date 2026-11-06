import { siteInfo } from "../data/siteData";

// =====================================================
// Hero
// The first section of the website.
//   Left side:  label, big heading, text and two buttons
//   Right side: your artwork inside an arch, a floating
//               browser window with code lines, and a badge.
// All the text comes from "siteInfo" in src/data/siteData.js.
//
// TO CHANGE THE PICTURE in the arch:
//   change the file name in "heroImage" below, for example
//   "/images/photo-16.jpg".
//   Set it to "" to show the drawn artwork instead.
// =====================================================

const heroImage = "/images/photo-17.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ivory pb-16 pt-28 sm:pt-32"
    >
      {/* ---------- Soft background glows ---------- */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-forest/10 blur-3xl"></div>

      <div className="container-page relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* ================= LEFT: TEXT ================= */}
          <div className="text-center lg:text-left">
            <p
              className="eyebrow animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              {siteInfo.heroEyebrow}
            </p>

            <h1
              className="animate-fade-up mt-6 font-display text-5xl font-medium leading-[1.05] text-forest sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.25s" }}
            >
              {siteInfo.heroHeading}
            </h1>

            <div
              className="gold-line animate-fade-up mx-auto mt-8 lg:mx-0"
              style={{ animationDelay: "0.4s" }}
            ></div>

            <p
              className="animate-fade-up mx-auto mt-8 max-w-xl font-body text-base leading-relaxed text-charcoal/75 sm:text-lg lg:mx-0"
              style={{ animationDelay: "0.55s" }}
            >
              {siteInfo.heroText}
            </p>

            <div
              className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
              style={{ animationDelay: "0.7s" }}
            >
              <a href="#resin-art" className="btn-primary w-full sm:w-auto">
                {siteInfo.heroPrimaryButton}
              </a>
              <a href="#contact" className="btn-outline w-full sm:w-auto">
                {siteInfo.heroSecondaryButton}
              </a>
            </div>
          </div>

          {/* ================= RIGHT: VISUAL ================= */}
          <div
            className="animate-fade-in relative mx-auto w-full max-w-md lg:max-w-lg"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Thin gold arch outline behind the artwork */}
            <div className="absolute -right-4 -top-4 h-full w-full rounded-t-full border border-gold/60 sm:-right-6 sm:-top-6"></div>

            {/* ----- Artwork arch ----- */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-full bg-forest shadow-2xl">
              {heroImage ? (
                <img
                  src={heroImage}
                  alt="Handmade resin artwork by Musqan"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <svg
                  viewBox="0 0 400 500"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="heroResinBase" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#183D35" />
                      <stop offset="55%" stopColor="#1F5A4C" />
                      <stop offset="100%" stopColor="#2F7F6E" />
                    </linearGradient>
                    <radialGradient id="heroResinGlow" cx="0.3" cy="0.2" r="0.7">
                      <stop offset="0%" stopColor="#C5A46D" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#C5A46D" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <rect width="400" height="500" fill="url(#heroResinBase)" />
                  <rect width="400" height="500" fill="url(#heroResinGlow)" />

                  <path
                    d="M-20 330 C60 270 120 390 200 330 C280 270 340 380 430 320 L430 520 L-20 520 Z"
                    fill="#EEE8DC"
                    fillOpacity="0.14"
                  />
                  <path
                    d="M-20 390 C70 340 130 440 210 390 C290 340 350 430 430 380 L430 520 L-20 520 Z"
                    fill="#C5A46D"
                    fillOpacity="0.28"
                  />

                  <g
                    fill="none"
                    stroke="#C5A46D"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  >
                    <path d="M-10 150 C80 90 150 210 240 150 C310 105 360 160 420 130" strokeOpacity="0.9" />
                    <path d="M-10 190 C90 140 160 250 250 190 C320 150 370 200 420 175" strokeOpacity="0.6" />
                    <path d="M-10 230 C100 190 170 290 260 230 C330 195 380 240 420 220" strokeOpacity="0.35" />
                  </g>

                  <circle cx="95" cy="110" r="10" fill="#F8F5EF" fillOpacity="0.2" />
                  <circle cx="320" cy="260" r="7" fill="#F8F5EF" fillOpacity="0.25" />
                  <circle cx="240" cy="90" r="5" fill="#F8F5EF" fillOpacity="0.3" />
                  <circle cx="140" cy="300" r="14" fill="#F8F5EF" fillOpacity="0.12" />
                </svg>
              )}
            </div>

            {/* ----- Floating browser window (the "digital" side) ----- */}
            <div className="animate-float absolute -bottom-8 -left-4 w-56 rounded-xl bg-white p-4 shadow-2xl ring-1 ring-forest/10 sm:-left-10 sm:w-64">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-gold"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-cream"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-forest/40"></span>
              </div>

              <p className="mt-4 font-mono text-xs text-forest">
                {"<Musqan />"}
              </p>

              <div className="mt-3 space-y-2">
                <div className="h-1.5 w-3/4 rounded-full bg-gold/70"></div>
                <div className="h-1.5 w-1/2 rounded-full bg-forest/25"></div>
                <div className="h-1.5 w-2/3 rounded-full bg-forest/25"></div>
                <div className="h-1.5 w-2/5 rounded-full bg-gold/40"></div>
              </div>
            </div>

            {/* ----- Small gold badge ----- */}
            <div className="absolute -right-2 bottom-16 flex h-24 w-24 items-center justify-center rounded-full bg-gold text-center shadow-xl sm:-right-8 sm:h-28 sm:w-28">
              <span className="font-display text-sm font-semibold uppercase leading-tight tracking-widest text-forest sm:text-base">
                Art
                <br />+ Code
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}