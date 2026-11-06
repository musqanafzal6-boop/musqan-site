// =====================================================
// paintingsData.js
// Your Paintings, Clay and Calligraphy gallery lives here.
// To add, remove or change an artwork, edit THIS file only.
//
// HOW TO ADD ANOTHER PHOTO:
//   1. Copy your photo into:  public/images/
//   2. Give it a simple name with no spaces, like photo-11.jpg
//   3. Copy one artwork block below, paste it at the end of the
//      list, and set "image" to its path:
//        image: "/images/photo-11.jpg",
//
// "tone" only controls the placeholder color (used when "image"
// is empty). Choose one of: "forest", "gold", "ocean", "cream"
//
// IMPORTANT: each artwork "category" must be exactly one of the
// names in "paintingCategories" below, so the filter buttons work.
// To add a new category, add it to BOTH places.
// =====================================================

// ---------- Section heading text ----------
export const paintingsSection = {
  id: "paintings",
  eyebrow: "Creative Artwork",
  heading: "Paintings & Handmade Art",
  text: "Canvas paintings, clay pieces and calligraphy, each made with patience and imagination.",
};

// ---------- Filter buttons ----------
// "All" shows everything. The other names must match the "category" of the artworks.
export const paintingCategories = [
  "All",
  "Canvas Paintings",
  "Clay Artwork",
  "Calligraphy",
];

// ---------- Artwork list ----------
// PLACEHOLDER: the titles are simple names and the descriptions
// still need your own words. Edit them any time.
export const paintingArtworks = [
  {
    id: "painting-1",
    title: "Tulip Painting",
    category: "Canvas Paintings",
    description:
      "PLACEHOLDER: Describe this painting, its colors, size and what inspired it.",
    image: "/images/photo-03.jpg",
    tone: "forest",
  },
  {
    id: "painting-2",
    title: "Canvas Painting",
    category: "Canvas Paintings",
    description:
      "PLACEHOLDER: Describe this painting, its colors, size and what inspired it.",
    image: "/images/photo-04.jpg",
    tone: "gold",
  },
  {
    id: "painting-3",
    title: "Swan Painting",
    category: "Canvas Paintings",
    description:
      "PLACEHOLDER: Describe this painting, its colors, size and what inspired it.",
    image: "/images/photo-10.jpg",
    tone: "ocean",
  },
  {
    id: "clay-1",
    title: "Clay Art",
    category: "Clay Artwork",
    description:
      "PLACEHOLDER: Describe this clay piece, its shape, texture and finish.",
    image: "/images/photo-01.jpg",
    tone: "cream",
  },
  {
    id: "clay-2",
    title: "Clay Mirror",
    category: "Clay Artwork",
    description:
      "PLACEHOLDER: Describe this clay mirror, how you shaped it and how you finished it.",
    image: "/images/photo-02.jpg",
    tone: "cream",
  },
  {
    id: "clay-3",
    title: "Clay Tortoise",
    category: "Clay Artwork",
    description:
      "PLACEHOLDER: Describe this clay tortoise and how you made it.",
    image: "/images/photo-05.jpg",
    tone: "forest",
  },
  {
    id: "clay-4",
    title: "Clay Bear",
    category: "Clay Artwork",
    description:
      "PLACEHOLDER: Describe this clay bear and how you made it.",
    image: "/images/photo-07.jpg",
    tone: "gold",
  },
  {
    id: "calligraphy-1",
    title: "Calligraphy",
    category: "Calligraphy",
    description:
      "PLACEHOLDER: Describe this calligraphy piece, the style and the tools you used.",
    image: "/images/photo-08.jpg",
    tone: "ocean",
  },
];