import useReveal from "../hooks/useReveal";

// =====================================================
// SectionHeading
// A reusable title block used at the top of each section:
//   small gold label  ->  big heading  ->  gold line  ->  short text
//
// HOW IT IS USED in other files:
//   <SectionHeading
//     eyebrow="Handmade Collection"
//     heading="Resin Art"
//     text="Short description here."
//   />
//
// Optional settings:
//   align="left"   -> left-aligned (default is "center")
//   light={true}   -> light text, for dark green backgrounds
// =====================================================

export default function SectionHeading({
  eyebrow,
  heading,
  text,
  align = "center",
  light = false,
}) {
  const ref = useReveal();

  const isCenter = align === "center";

  const wrapperAlign = isCenter ? "text-center" : "text-left";
  const lineAlign = isCenter ? "mx-auto" : "";
  const textAlign = isCenter ? "mx-auto" : "";
  const headingColor = light ? "text-ivory" : "text-forest";
  const textColor = light ? "text-ivory/70" : "text-charcoal/70";

  return (
    <div className={`mb-14 sm:mb-16 ${wrapperAlign}`}>
      <div ref={ref} className="reveal">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}

        <h2
          className={`mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl ${headingColor}`}
        >
          {heading}
        </h2>

        <div className={`gold-line mt-6 ${lineAlign}`}></div>

        {text && (
          <p
            className={`mt-6 max-w-2xl font-body text-base leading-relaxed sm:text-lg ${textAlign} ${textColor}`}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
}