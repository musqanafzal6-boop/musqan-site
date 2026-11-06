// =====================================================
// Logo
// The MUSQAN. logo: a luxury monogram.
//   - fine gold double ring
//   - code chevrons  < >  in the gaps of the ring (the code)
//   - serif letter M in the middle
//   - gold brush swoosh under the M (the art)
//
// HOW IT IS USED in other files:
//   <Logo />                 -> for light backgrounds
//   <Logo light />           -> for dark green backgrounds
//   <Logo showTagline />     -> adds "ARTIST & WEB DEVELOPER"
//   <Logo markOnly />        -> only the round symbol, no name
// =====================================================

export default function Logo({
  light = false,
  showTagline = false,
  markOnly = false,
}) {
  // The M and the name change color on dark backgrounds.
  const letterColor = light ? "#F8F5EF" : "#183D35";
  const nameColor = light ? "text-ivory" : "text-forest";

  return (
    <span className="inline-flex items-center gap-4">
      {/* ---------- The symbol ---------- */}
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12 shrink-0"
        role="img"
        aria-label="Musqan logo"
      >
        {/* Outer ring, open on the left and right */}
        <path
          d="M6.04 21.5 A28 28 0 0 1 57.96 21.5"
          fill="none"
          stroke="#C5A46D"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M57.96 42.5 A28 28 0 0 1 6.04 42.5"
          fill="none"
          stroke="#C5A46D"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {/* Code chevrons  <  > */}
        <path
          d="M7 27.5 L2.6 32 L7 36.5"
          fill="none"
          stroke="#C5A46D"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M57 27.5 L61.4 32 L57 36.5"
          fill="none"
          stroke="#C5A46D"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Fine inner ring */}
        <circle
          cx="32"
          cy="32"
          r="24.5"
          fill="none"
          stroke="#C5A46D"
          strokeWidth="0.5"
          strokeOpacity="0.7"
        />

        {/* The letter M */}
        <text
          x="32"
          y="42"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="34"
          fontWeight="600"
          fill={letterColor}
        >
          M
        </text>

        {/* Gold brush swoosh */}
        <path
          d="M19 46.5 C26 50.5 38 50.5 45 45.5 C38 48 26 48 19 46.5 Z"
          fill="#C5A46D"
        />
      </svg>

      {/* ---------- Thin gold line and the name ---------- */}
      {!markOnly && (
        <>
          <span
            className="hidden h-9 w-px bg-gold sm:block"
            aria-hidden="true"
          ></span>

          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-2xl font-semibold tracking-[0.3em] ${nameColor}`}
            >
              MUSQAN<span className="text-gold">.</span>
            </span>

            {showTagline && (
              <span className="mt-2 font-body text-[9px] font-medium uppercase tracking-[0.3em] text-gold">
                Artist &amp; Web Developer
              </span>
            )}
          </span>
        </>
      )}
    </span>
  );
}