// =====================================================
// resinData.js
// Your Resin Art gallery lives here.
// To add, remove or change an artwork, edit THIS file only.
//
// HOW TO ADD ANOTHER PHOTO:
//   1. Copy your photo into:  public/images/
//   2. Give it a simple name with no spaces, like photo-17.jpg
//   3. Copy one artwork block below, paste it at the end of the
//      list, and set "image" to its path:
//        image: "/images/photo-17.jpg",
//
// "tone" only controls the placeholder color (used when "image"
// is empty). Choose one of: "forest", "gold", "ocean", "cream"
// =====================================================

// ---------- Section heading text ----------
export const resinSection = {
  id: "resin-art",
  eyebrow: "Handmade Collection",
  heading: "Resin Art",
  text: "Each piece is poured and finished by hand, capturing color, depth and movement in glossy resin.",
};

// ---------- Artwork list ----------
// PLACEHOLDER: the titles are simple names and the descriptions
// still need your own words. Edit them any time.
export const resinArtworks = [
  {
    id: "resin-1",
    title: "Deep Sea Tray",
    category: "Ocean Art",
    description:
      "PLACEHOLDER: Describe this tray, its colors, size and the inspiration behind it.",
    image: "/images/photo-11.jpg",
    tone: "ocean",
  },
  {
    id: "resin-2",
    title: "Emerald Tray",
    category: "Resin Trays",
    description:
      "PLACEHOLDER: Describe this tray, its emerald colors and any gold details.",
    image: "/images/photo-12.jpg",
    tone: "forest",
  },
  {
    id: "resin-3",
    title: "Deep Ocean Tray",
    category: "Ocean Art",
    description:
      "PLACEHOLDER: Describe this ocean-inspired tray and the technique you used.",
    image: "/images/photo-13.jpg",
    tone: "ocean",
  },
  {
    id: "resin-4",
    title: "Custom Keychains",
    category: "Custom Creations",
    description:
      "PLACEHOLDER: Describe these custom pieces and what can be personalized.",
    image: "/images/photo-14.jpg",
    tone: "gold",
  },
  {
    id: "resin-5",
    title: "Resin Tray",
    category: "Resin Trays",
    description:
      "PLACEHOLDER: Describe this tray, its colors, size and finish.",
    image: "/images/photo-15.jpg",
    tone: "cream",
  },
  {
    id: "resin-6",
    title: "Resin Clock",
    category: "Resin Clocks",
    description:
      "PLACEHOLDER: Describe this wall clock, its materials and finish.",
    image: "/images/photo-16.jpg",
    tone: "gold",
  },
];