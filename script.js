const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const form = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Thank you. Our team will contact you shortly.";
    form.reset();
  });
}
