const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

const courseNames = [
  "Human-Centered Computing",
  "Prototyping & Usability",
  "Design for Accessibility",
  "Mobile Design",
  "Cognitive Psychology",
  "Research Methods",
  "Deaf Culture",
  "American Sign Language"
];

const courseList = document.getElementById("courseList");
courseNames.forEach((name) => {
  const chip = document.createElement("span");
  chip.className = "course-chip";
  chip.textContent = name;
  courseList?.appendChild(chip);
});
