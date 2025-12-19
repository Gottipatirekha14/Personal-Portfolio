const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = link.dataset.section;

    sections.forEach(sec => sec.classList.remove("active"));
    navLinks.forEach(nav => nav.classList.remove("active"));

    document.getElementById(target).classList.add("active");
    link.classList.add("active");
  });
});
const aboutBoxes = document.querySelectorAll(".about-box");
const aboutPanels = document.querySelectorAll(".about-panel");

aboutBoxes.forEach(box => {
  box.addEventListener("click", () => {

    aboutBoxes.forEach(b => b.classList.remove("active"));
    aboutPanels.forEach(p => p.classList.remove("active"));

    box.classList.add("active");
    document.getElementById(box.dataset.tab).classList.add("active");
  });
});

