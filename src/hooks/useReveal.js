import { useEffect, useRef } from "react";

// =====================================================
// useReveal
// Makes an element fade in and slide up when the visitor
// scrolls it into view.
//
// HOW TO USE IT inside a component:
//
//   import useReveal from "../hooks/useReveal";
//
//   const ref = useReveal();
//   return <div ref={ref} className="reveal">...</div>;
//
// The "reveal" and "is-visible" styles are in src/index.css.
// =====================================================

export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Very old browsers: just show the element straight away.
    if (typeof IntersectionObserver === "undefined") {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element); // reveal only once
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    // Clean up when the component is removed.
    return () => observer.disconnect();
  }, []);

  return ref;
}