// =====================================================
// siteData.js
// All the main text and links for the website live here.
// To change your website text, edit THIS file only.
// Anything marked "PLACEHOLDER" must be replaced with
// your real information before you publish the site.
// =====================================================

// ---------- Basic site information ----------
export const siteInfo = {
  name: "Musqan",
  logoText: "MUSQAN.",
  heroEyebrow: "Artist & Web Developer",
  heroHeading: "Creativity Meets Technology.",
  heroText:
    "Exploring the world of art, design and digital experiences through handmade creations and modern web development.",
  heroPrimaryButton: "Explore My Work",
  heroSecondaryButton: "Let's Connect",
  footerText:
    "A creative artist and web developer blending handmade art with modern digital design.",
};

// ---------- Navigation menu ----------
// "href" must match the section "id" used in each component.
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resin Art", href: "#resin-art" },
  { label: "Paintings", href: "#paintings" },
  { label: "Web Development", href: "#web-development" },
  { label: "Contact", href: "#contact" },
];

// ---------- About section ----------
// PLACEHOLDER: rewrite these paragraphs in your own words.
export const aboutContent = {
  eyebrow: "About",
  heading: "A Little About Me",
  intro:
    "Hello, I'm Musqan, a creative artist and web developer who loves turning ideas into beautiful things, both on a canvas and on a screen.",
  paragraphs: [
    {
      title: "My Creative Journey",
      text: "PLACEHOLDER: Write a few sentences here about how your creative journey began and what inspired you to start making art.",
    },
    {
      title: "Resin Art",
      text: "PLACEHOLDER: Share what you love about resin art, such as working with color, depth and shine to make trays, clocks, coasters and ocean-inspired pieces.",
    },
    {
      title: "Paintings & Handmade Crafts",
      text: "PLACEHOLDER: Describe your love for canvas paintings, abstract work, clay art and handmade crafts.",
    },
    {
      title: "Web Development",
      text: "PLACEHOLDER: Explain your interest in building responsive websites with React and Tailwind CSS, and what you enjoy about frontend development.",
    },
  ],
  approach:
    "PLACEHOLDER: Describe your approach to creativity and design in one or two sentences.",
  // Your portrait photo. The file lives in public/images, so the path starts with /images/.
  // To use a different photo, change the file name (for example "/images/photo-09.jpg").
  // Leave it empty ("") to show an elegant placeholder instead.
  portrait: "/images/photo-06.jpg",
};

// ---------- Contact details ----------
export const contactInfo = {
  eyebrow: "Contact",
  heading: "Let's Create Something Together",
  text: "Have a project in mind, a custom resin piece to order, or a website to build? Send me a message and I'll get back to you.",

  // PLACEHOLDER: replace with your real email address.
  email: "your-email@example.com",

  // PLACEHOLDER: your WhatsApp number in international format,
  // digits only, no "+", no spaces. Example format: 923001234567
  whatsappNumber: "920000000000",
  whatsappMessage: "Hello Musqan, I found your portfolio and would like to connect.",

  // ----- FORM SUBMISSION SETUP -----
  // A website with only a frontend cannot send emails by itself.
  // You need a form service. A free option is Formspree (formspree.io):
  //   1. Create a free account and make a new form.
  //   2. Copy your form link. It looks like: https://formspree.io/f/xxxxxxxx
  //   3. Paste it between the quotes below.
  // While this is empty, the form will check the fields but will clearly
  // tell visitors that sending is not set up yet.
  formEndpoint: "",
};

// ---------- Social media links ----------
// PLACEHOLDER: replace each "url" with your real profile link.
export const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/your-username" },
  { name: "Facebook", url: "https://facebook.com/your-username" },
  { name: "GitHub", url: "https://github.com/your-username" },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-username" },
];