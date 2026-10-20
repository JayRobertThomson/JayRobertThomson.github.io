(() => {
  "use strict";
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-nav");
  const portrait = document.querySelector(".portrait");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  // No storage is needed; refresh returns to the original dark theme.
  toggle?.addEventListener("click", () => {
    const light = root.getAttribute("data-theme") !== "light";
    root.setAttribute("data-theme", light ? "light" : "dark");
    toggle.setAttribute("aria-label", light ? "Use dark mode" : "Use light mode");
  });
  menuButton?.addEventListener("click", () => {
    if (!mobileMenu) return;
    const opening = mobileMenu.hidden;
    mobileMenu.hidden = !opening;
    menuButton.setAttribute("aria-expanded", String(opening));
  });
  mobileMenu?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mobileMenu.hidden = true;
    menuButton?.setAttribute("aria-expanded", "false");
  }));
  // Show initials gracefully if img/profile.png has not been provided.
  portrait?.addEventListener("error", () => { portrait.hidden = true; });
  if (portrait?.complete && portrait.naturalWidth === 0) portrait.hidden = true;
})();
