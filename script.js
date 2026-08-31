import { projects as projectData } from "./scripts/data.js";

const humbergerMenu = document.querySelector(".hamburger-menu");
const humbergurBtn = document.querySelector(".humbergur-btn");
const spans = document.querySelectorAll(".humbergur-btn span");

let click = false;
// humbergur menu handler
humbergurBtn.addEventListener("click", () => {
  humbergurBtn.classList.toggle("active");
  console.log("working");

  if (!click) {
    humbergerMenu.classList.add("hamburger-active");
    spans.forEach((span) => {
      span.style.backgroundColor = "white";
    });
    click = true;
  } else {
    humbergerMenu.classList.remove("hamburger-active");
    spans.forEach((span) => {
      span.style.backgroundColor = "black";
    });
    click = false;
  }
});

const projectCatagoryBar = document.querySelector(".js-project-catagory-bar");
const projectsContainer = document.querySelector(".selectd-works");
// console.log(projectData);

projectCatagoryBar.addEventListener("click", (e) => {
  if (e.target.classList.contains("catagory")) {
    console.log(e.target.textContent);
  }
});
