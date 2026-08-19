const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

function closeMenu() {
  navbar.classList.remove("active");
  menuIcon.classList.remove("fa-times");
  menuIcon.classList.add("fa-bars");
}

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function toggleMore() {
  const box = document.getElementById("more-projects");
  const btn = document.querySelector(".more-toggle");
  const open = box.hidden;

  box.hidden = !open;
  btn.textContent = open ? "Show less" : "More projects";
  btn.setAttribute("aria-expanded", String(open));
}