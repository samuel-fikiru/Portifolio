const humbergerMenu = document.querySelector(".hamburger-menu");
const humbergurBtn = document.querySelector(".humbergur-btn");
const spans = document.querySelectorAll(".humbergur-btn span");

let click = false;
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
