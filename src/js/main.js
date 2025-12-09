/**
 * Main JS for HTML Template
 * - Mobile navigation toggle
 * - Smooth scrolling for in-page links (respects prefers-reduced-motion)
 */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initNavToggle() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.hidden = expanded;
  });
}

function initSmoothScroll() {
  if (prefersReducedMotion) return;

  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href") || "";
      if (!targetId || targetId === "#" || targetId === "#0") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initSmoothScroll();
});
