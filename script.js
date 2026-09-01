import { projects as projectData } from "./scripts/data.js";

const humbergerMenu = document.querySelector(".hamburger-menu");
const humbergurBtn = document.querySelector(".humbergur-btn");
const spans = document.querySelectorAll(".humbergur-btn span");

// humbergur menu handler
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

const projectCatagoryBar = document.querySelector(".js-project-catagory-bar");
const projectsContainer = document.querySelector(".selectd-works");
const catagoryBars = document.querySelectorAll(".js-project-catagory-bar .catagory");


// catagory figures
projectCatagoryBar.addEventListener("click", (e) => {
  if (e.target.classList.contains("catagory")) {
    filterProjects(e.target.textContent);
    catagoryBars.forEach((catagory) => {
        catagory.classList.remove('clicked')
    });
    e.target.classList.add('clicked');
  }
});

// filters  data for selected catagory
filterProjects('Web App');
function filterProjects(catagory){
    const filteredProject = projectData.filter((project) => {
        return project.type===catagory;
    })
    renderProjects(filteredProject);
}

// renders data to ui
function renderProjects(data){
    let projectHTML = ``;
    data.forEach(d => {
        let project = `
            <div class="project">
                <div class="project-demo-container">
                <img class="demo-img" src="${d.demoPath}" alt="">
                </div>
                <div class="project-info-container">
                <p class="project-title">
                    ${d.title}
                </p>
                <p class="project-description">
                    ${d.description}
                </p>
                <div class="project-links">
                    <a href="${d.liveLink}" target="_blank" class="project-link demo">
                    View Live
                    <img class="img-arrow link-arrow" src="images/icons/arrow-up-right-blue.svg" alt="">
                    </a>
                    <a href="${d.repolink}" target="_blank" class="project-link github-repo">Repo</a>
                </div>
                </div>
            </div>
        `;
        projectHTML += project;
    });
    projectsContainer.innerHTML=projectHTML;
}