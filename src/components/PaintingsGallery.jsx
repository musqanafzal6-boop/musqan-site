import { useCallback, useState } from "react";
import useReveal from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import Lightbox, { toneGradients } from "./Lightbox";
import {
  paintingsSection,
  paintingCategories,
  paintingArtworks,
} from "../data/paintingsData";

// =====================================================
// PaintingsGallery
// The Paintings & Handmade Art section:
//   - filter buttons (All, Canvas Paintings, Abstract...)
//   - a responsive grid of artwork cards
//   - clicking a card opens the full-screen viewer
// All content comes from src/data/paintingsData.js.
// =====================================================

// ---------- One artwork card ----------
function PaintingCard({ artwork, index, onOpen }) {
  const ref = useReveal();

  const placeholderText =
    artwork.tone === "gold" || artwork.tone === "cream"
      ? "text-forest/50"
      : "text-ivory/60";

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        className="group block w-full text-left"
        aria-label={`View ${artwork.title}`}
      >
        {/* ----- Image area ----- */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-cream shadow-md transition-shadow duration-500 group-hover:shadow-2xl">
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
              <span className={`font-display text-6xl ${placeholderText}`}>
                {artwork.title.charAt(0)}
              </span>
            </div>
          )}

          {/* Overlay with a "view" icon, shown on hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-forest/0 transition-all duration-500 group-hover:bg-forest/40">
            <span className="flex h-12 w-12 scale-75 items-center justify-center rounded-full border border-gold bg-ivory/10 text-ivory opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
              </svg>
            </span>
          </div>
        </div>

        {/* ----- Text under the image ----- */}
        <div className="mt-4">
          <p className="font-body text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
            {artwork.category}
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold text-forest transition-colors duration-300 group-hover:text-gold sm:text-2xl">
            {artwork.title}
          </h3>
          <p className="mt-1 line-clamp-2 font-body text-sm leading-relaxed text-charcoal/70">
            {artwork.description}
          </p>
        </div>
      </button>
    </div>
  );
}

// ---------- The whole section ----------
export default function PaintingsGallery() {
  // Which filter button is active?
  const [activeCategory, setActiveCategory] = useState("All");

  // Which artwork is open in the viewer? A number, or null when closed.
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openViewer = useCallback((index) => setSelectedIndex(index), []);
  const closeViewer = useCallback(() => setSelectedIndex(null), []);

  // The artworks shown for the active filter.
  const visibleArtworks =
    activeCategory === "All"
      ? paintingArtworks
      : paintingArtworks.filter((item) => item.category === activeCategory);

  return (
    <section id={paintingsSection.id} className="bg-cream py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={paintingsSection.eyebrow}
          heading={paintingsSection.heading}
          text={paintingsSection.text}
        />

        {/* ---------- Filter buttons ---------- */}
        <div
          className="mb-14 flex flex-wrap justify-center gap-3"
          role="group"
          aria-label="Filter artworks by category"
        >
          {paintingCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-2.5 font-body text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                  isActive
                    ? "border-forest bg-forest text-ivory"
                    : "border-forest/30 text-forest hover:border-gold hover:text-gold"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* ---------- Artwork grid ---------- */}
        {visibleArtworks.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            {visibleArtworks.map((artwork, index) => (
              <PaintingCard
                key={artwork.id}
                artwork={artwork}
                index={index}
                onOpen={openViewer}
              />
            ))}
          </div>
        ) : (
          <p className="text-center font-body text-charcoal/60">
            No artworks in this category yet.
          </p>
        )}
      </div>

      <Lightbox
        items={visibleArtworks}
        currentIndex={selectedIndex}
        onClose={closeViewer}
        onNavigate={openViewer}
      />
    </section>
  );
}