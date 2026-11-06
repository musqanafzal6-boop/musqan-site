import { useEffect, useRef } from "react";

// =====================================================
// toneGradients
// The colors used for the placeholder artwork while an
// item has no real photo yet ("tone" in the data files).
// This is exported so the galleries and project cards
// can reuse the SAME colors:
//   import { toneGradients } from "./Lightbox";
// =====================================================
export const toneGradients = {
  forest: "bg-gradient-to-br from-forest to-[#2F7F6E]",
  gold: "bg-gradient-to-br from-gold to-[#E6CFA0]",
  ocean: "bg-gradient-to-br from-[#0F4C5C] to-[#5FA8A8]",
  cream: "bg-gradient-to-br from-cream to-[#D9CFBB]",
};

// =====================================================
// Lightbox
// A full-screen viewer for artwork images.
//
// HOW IT IS USED by the galleries:
//   <Lightbox
//     items={artworks}            // the list being viewed
//     currentIndex={selectedIndex} // a number, or null when closed
//     onClose={() => setSelectedIndex(null)}
//     onNavigate={(index) => setSelectedIndex(index)}
//   />
//
// Visitors can close it with the X button, the Escape key
// or by clicking the dark background. The arrow buttons and
// the left/right arrow keys move between artworks.
// =====================================================

export default function Lightbox({ items, currentIndex, onClose, onNavigate }) {
  const closeButtonRef = useRef(null);

  const item = currentIndex !== null ? items[currentIndex] : null;
  const isOpen = item !== null && item !== undefined;
  const total = items.length;

  // While open: lock page scrolling, listen to the keyboard,
  // and move focus to the close button.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (closeButtonRef.current) closeButtonRef.current.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft" && total > 1) {
        onNavigate((currentIndex - 1 + total) % total);
      } else if (event.key === "ArrowRight" && total > 1) {
        onNavigate((currentIndex + 1) % total);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, currentIndex, total, onClose, onNavigate]);

  // Nothing is shown while the lightbox is closed.
  if (!isOpen) return null;

  const goPrev = () => onNavigate((currentIndex - 1 + total) % total);
  const goNext = () => onNavigate((currentIndex + 1) % total);

  const arrowButton =
    "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 text-ivory transition-all duration-300 hover:bg-gold hover:text-forest";

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${item.title}`}
      onClick={onClose}
    >
      {/* ---------- Close button ---------- */}
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-ivory transition-all duration-300 hover:bg-gold hover:text-forest sm:right-8 sm:top-8"
        aria-label="Close viewer"
      >
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
      </button>

      {/* ---------- Previous / Next buttons ---------- */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goPrev();
            }}
            className={`${arrowButton} left-3 sm:left-8`}
            aria-label="Previous artwork"
          >
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
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
            className={`${arrowButton} right-3 sm:right-8`}
            aria-label="Next artwork"
          >
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
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* ---------- Artwork and caption ---------- */}
      <div
        className="flex max-h-full w-full max-w-4xl flex-col items-center overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[65vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />
        ) : (
          <div
            className={`flex aspect-[4/3] w-full max-w-2xl items-center justify-center rounded-lg shadow-2xl ${
              toneGradients[item.tone] || toneGradients.forest
            }`}
          >
            <span className="px-6 text-center font-display text-3xl text-ivory/80 sm:text-4xl">
              {item.title}
            </span>
          </div>
        )}

        <div className="mt-6 max-w-2xl text-center">
          <p className="eyebrow">{item.category}</p>
          <h3 className="mt-2 font-display text-3xl font-medium text-ivory sm:text-4xl">
            {item.title}
          </h3>
          <p className="mt-3 font-body text-sm leading-relaxed text-ivory/70 sm:text-base">
            {item.description}
          </p>
          <p className="mt-4 font-body text-xs uppercase tracking-[0.3em] text-gold">
            {currentIndex + 1} / {total}
          </p>
        </div>
      </div>
    </div>
  );
}