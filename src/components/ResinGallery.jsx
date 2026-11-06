import { useCallback, useState } from "react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import Lightbox, { toneGradients } from "./Lightbox";
import { resinSection, resinArtworks } from "../data/resinData";

// =====================================================
// ResinGallery
// The Resin Art section: a grid of artwork cards.
// Clicking a card opens the full-screen viewer (Lightbox).
// All content comes from src/data/resinData.js.
// =====================================================

// ---------- One artwork card ----------
// It is a separate component so that each card can have
// its own fade-in effect as the visitor scrolls.
function ResinCard({ artwork, index, onOpen }) {
  const ref = useReveal();

  // Placeholder text color: dark on light colors, light on dark colors.
  const placeholderText =
    artwork.tone === "gold" || artwork.tone === "cream"
      ? "text-forest/50"
      : "text-ivory/60";

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        className="group block w-full text-left"
        aria-label={`View ${artwork.title}`}
      >
        {/* ----- Image area ----- */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream shadow-md transition-shadow duration-500 group-hover:shadow-2xl">
          {artwork.image ? (
            <img
              src={artwork.image}
              alt={artwork.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110 ${
                toneGradients[artwork.tone] || toneGradients.forest
              }`}
            >
              <span className={`font-display text-7xl ${placeholderText}`}>
                {artwork.title.charAt(0)}
              </span>
            </div>
          )}

          {/* Dark overlay with a "view" icon, shown on hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-forest/0 transition-all duration-500 group-hover:bg-forest/40">
            <span className="flex h-14 w-14 scale-75 items-center justify-center rounded-full border border-gold bg-ivory/10 text-ivory opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
              </svg>
            </span>
          </div>

          {/* Category label on the image */}
          <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 font-body text-[10px] font-medium uppercase tracking-[0.2em] text-forest backdrop-blur-sm">
            {artwork.category}
          </span>
        </div>

        {/* ----- Text under the image ----- */}
        <div className="mt-5">
          <h3 className="font-display text-2xl font-semibold text-forest transition-colors duration-300 group-hover:text-gold">
            {artwork.title}
          </h3>
          <p className="mt-2 line-clamp-2 font-body text-sm leading-relaxed text-charcoal/70">
            {artwork.description}
          </p>
        </div>
      </button>
    </div>
  );
}

// ---------- The whole section ----------
export default function ResinGallery() {
  // Which artwork is open in the viewer? A number, or null when closed.
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openViewer = useCallback((index) => setSelectedIndex(index), []);
  const closeViewer = useCallback(() => setSelectedIndex(null), []);

  return (
    <section id={resinSection.id} className="bg-ivory py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={resinSection.eyebrow}
          heading={resinSection.heading}
          text={resinSection.text}
        />

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {resinArtworks.map((artwork, index) => (
            <ResinCard
              key={artwork.id}
              artwork={artwork}
              index={index}
              onOpen={openViewer}
            />
          ))}
        </div>
      </div>

      <Lightbox
        items={resinArtworks}
        currentIndex={selectedIndex}
        onClose={closeViewer}
        onNavigate={openViewer}
      />
    </section>
  );
}