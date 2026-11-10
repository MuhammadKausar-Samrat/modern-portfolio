const menuToggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

if (menuToggle && menu) {

  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  const navLinks = menu.querySelectorAll(".nav__link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menu.classList.remove("is-open");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
  });
}

const footerYear = document.querySelector("#footer__year");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
