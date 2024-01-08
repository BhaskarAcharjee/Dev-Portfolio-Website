"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// >>>>>>>>>>>>>>>>>>>>> Contact Form Script <<<<<<<<<<<<<<<<<<<<<<<

// contact form variables
const form = document.forms["submit-to-google-sheet"];
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxrdqUDIVns0po7HGyAyTslEofskNG6iec9AF109f2vGvkcfas6FDX1PmzYmumPd6SDzA/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// >>>>>>>>>>>>>>>>>>>>> Typing Animation <<<<<<<<<<<<<<<<<<<<<<<

const texts = [
  "Web Developer",
  "Android Developer",
  "Graphic Designer",
  "Data Analyst",
  "Python Developer",
  "Youtuber",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];

  if (index < currentText.length) {
    letter = currentText.slice(0, ++index);
  } else {
    letter = currentText.slice(0, index);
  }

  document.getElementById("typing-animation").textContent = letter + "|"; // Add text cursor

  if (letter.length === currentText.length) {
    setTimeout(backspace, 2000); // Delay before starting the backspacing animation
  } else if (index === currentText.length) {
    setTimeout(type, 500); // Delay before starting the next typing animation
  } else {
    setTimeout(type, 100); // Adjust typing speed (in milliseconds)
  }
}

function backspace() {
  const currentLength = currentText.length;

  if (index > 0) {
    letter = currentText.slice(0, --index);
  } else {
    letter = currentText.slice(0, index);
  }

  document.getElementById("typing-animation").textContent = letter + "|"; // Add text cursor

  if (index === 0) {
    count++;
    setTimeout(type, 500); // Delay before starting the next typing animation
  } else {
    setTimeout(backspace, 50); // Adjust backspacing speed (in milliseconds)
  }
}

type(); // Start the typing animation

// >>>>>>>>>>>>>>>>>>>>> Tech Stack Dynamic Data <<<<<<<<<<<<<<<<<<<<<<<

// Tech stack data with image paths
const techStacks = [
  "icons_c.svg",
  "icons_cpp.svg",
  "icons_java.svg",
  "icons_python.svg",
  "icons_flask.svg",
  "icons_html.svg",
  "icons_css.svg",
  "icons_javascript.svg",
  "icons_react.svg",
  "icons_bootstrap.svg",
  "icons_android.svg",
  "icons_androidstudio.svg",
  // Add more as needed
];

// Reference to the UL element
const techStacksList = document.getElementById("techStacksList");

// Function to create an LI element with an A element inside for each tech stack
const createTechStackItem = (imagePath) => {
  const listItem = document.createElement("li");
  listItem.classList.add("clients-item");

  const link = document.createElement("a");
  link.href = "#";

  const img = document.createElement("img");
  img.src = `./assets/images/techstacks_icons/${imagePath}`;
  // img.src = `./assets/images/${imagePath}`;
  img.alt = "client logo";
  img.loading = "lazy";

  link.appendChild(img);
  listItem.appendChild(link);

  return listItem;
};

// Populate the tech stacks dynamically
techStacks.forEach((techStack) => {
  const listItem = createTechStackItem(techStack);
  techStacksList.appendChild(listItem);
});

// >>>>>>>>>>>>>>>>>>>>> Skills Dynamic Data <<<<<<<<<<<<<<<<<<<<<<<

// Data for technical skills
const technicalSkills = [
  { name: "Web Development", value: 85 },
  { name: "App Development Development", value: 70 },
  { name: "Graphic Design Design", value: 90 },
  { name: "Data Analysis Analysis", value: 85 },
];

// Data for soft skills
const softSkills = [
  { name: "Communication", value: 75 },
  { name: "Teamwork", value: 80 },
  { name: "Adaptability", value: 85 },
  { name: "Problem Solving", value: 90 },
];

// Function to generate a skills item
function generateSkillsItem(name, value) {
  return `
    <li class="skills-item">
      <div class="title-wrapper">
        <h5 class="h5">${name}</h5>
        <data value="${value}">${value}%</data>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: ${value}%"></div>
      </div>
    </li>
  `;
}

// Function to populate skills list
function populateSkillsList(listId, skills) {
  const skillsList = document.getElementById(listId);
  skills.forEach((skill) => {
    skillsList.innerHTML += generateSkillsItem(skill.name, skill.value);
  });
}

// Populate technical skills
populateSkillsList("technicalSkillsList", technicalSkills);

// Populate soft skills
populateSkillsList("softSkillsList", softSkills);

// >>>>>>>>>>>>>>>>>>>>> Portfolio Projects Dynamic Data <<<<<<<<<<<<<<<<<<<<<<<

const projects = [
  {
    title: "Melody Morph",
    imageUrl: "./assets/images/projects_img/melodymorph.png",
    websiteUrl: "https://melodymorph.onrender.com/",
    description: "Audio analysis and melody transformation.",
    category: "Python Projects Web Development",
  },
  {
    title: "Pixel Craft",
    imageUrl: "./assets/images/projects_img/pixelcraft.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/PixelCraft",
    description: "Image editing with PIL library.",
    category: "Python Projects",
  },
  {
    title: "Notes App",
    imageUrl: "./assets/images/projects_img/notesapp.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/CorvasNotesApp",
    description: "Versatile tool for organizing notes.",
    category: "App Development",
  },
  {
    title: "Finance Tracker",
    imageUrl: "./assets/images/projects_img/financetracker.png",
    websiteUrl: "https://net-worth-tracker.netlify.app/",
    description: "User-friendly financial management web app.",
    category: "Web Development",
  },
  {
    title: "Sudoku Solver",
    imageUrl: "./assets/images/projects_img/sudokusolver.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/SudokuSolver",
    description: "Efficient Sudoku solver algorithm.",
    category: "Python Projects",
  },
  {
    title: "Morse Enigma",
    imageUrl: "./assets/images/projects_img/morseenigma.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/MorseEnigma",
    description: "Communication system with Morse code encryption.",
    category: "Python Projects",
  },
  {
    title: "AIConverse",
    imageUrl: "./assets/images/projects_img/aiconverse.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/AIConverse",
    description: "Advanced chatbot platform with AI.",
    category: "Python Projects",
  },
  {
    title: "HandSphere",
    imageUrl: "./assets/images/projects_img/handsphere.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/HandSphere",
    description: "Gesture-based gaming with hand cricket.",
    category: "Python Projects",
  },
  {
    title: "Attendance App",
    imageUrl: "./assets/images/projects_img/attandenceapp.png",
    websiteUrl: "#",
    description: "Convenient solution for managing attendance.",
    category: "App Development",
  },
  {
    title: "Expense Tracker App",
    imageUrl: "./assets/images/projects_img/expensetrackerapp.png",
    websiteUrl: "#",
    description: "Powerful tool for tracking personal expenses.",
    category: "App Development",
  },
  {
    title: "Student Results Analysis",
    imageUrl: "./assets/images/projects_img/student_results_analysis.png",
    websiteUrl: "https://github.com/BhaskarAcharjee/Student-Results-Analysis",
    description: "Analyzing student results to uncover insights.",
    category: "Data Analysis",
  },
  {
    title: "Cricket Calculator",
    imageUrl: "./assets/images/projects_img/cricketcalculator.png",
    websiteUrl: "https://bhaskaracharjee.github.io/Cricket-Calculator/",
    description: "Web app for calculating cricket metrics.",
    category: "Web Development",
  },
  {
    title: "Carousel Instagram Post",
    imageUrl: "./assets/images/projects_img/studymonkinstaad.png",
    websiteUrl:
      "https://www.behance.net/gallery/174824905/Carousel-Instagram-Post-for-StudyMonk",
    description: "Instagram carousel post for StudyMonk.",
    category: "Graphic Design hide",
  },
  {
    title: "Poster Design",
    imageUrl: "./assets/images/projects_img/Museum Poster.png",
    websiteUrl:
      "https://www.behance.net/gallery/174268297/Poster-Design-for-College-Museum/modules/984020541",
    description: "Poster design for College Museum.",
    category: "Graphic Design",
  },
  {
    title: "Personal Portfolio",
    imageUrl: "./assets/images/projects_img/My_Personal_Portfolio.png",
    websiteUrl: "https://bhaskaracharjee.github.io/Portfolio-Website/",
    description: "Showcasing skills, projects, and experiences.",
    category: "Web Development",
  },
  // ... (remaining projects)
];

const projectList = document.querySelector(".project-list");
const filterButtons = document.querySelectorAll(".filter-list button");

function updateProjects(category) {
  projectList.innerHTML = "";
  projects.forEach((project) => {
    if (category === "All" || project.category.includes(category)) {
      const projectItem = document.createElement("li");
      projectItem.className = "project-item active";
      projectItem.dataset.filterItem = true;
      projectItem.dataset.category = project.category;

      const projectLink = document.createElement("a");
      projectLink.href = project.websiteUrl;

      const projectImg = document.createElement("figure");
      projectImg.className = "project-img";

      const projectIconBox = document.createElement("div");
      projectIconBox.className = "project-item-icon-box";
      projectIconBox.innerHTML = '<ion-icon name="eye-outline"></ion-icon>';

      const img = document.createElement("img");
      img.src = project.imageUrl;
      img.alt = project.title;
      img.loading = "lazy";

      const projectName = document.createElement("h3");
      projectName.className = "project-title";
      projectName.textContent = project.title;

      const projectShortDescription = document.createElement("p");
      projectShortDescription.className = "project-category";
      projectShortDescription.textContent = project.description;

      projectImg.appendChild(projectIconBox);
      projectImg.appendChild(img);

      projectLink.appendChild(projectImg);
      projectLink.appendChild(projectName);
      projectLink.appendChild(projectShortDescription);

      projectItem.appendChild(projectLink);

      projectList.appendChild(projectItem);
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.textContent;
    updateProjects(category);
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

updateProjects("All"); // Initially load all projects

// ----------------------------------------------------------------
// Education & experience timeline animation

// Function to handle the intersection
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}

// Set up the Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Observe each timeline item
document.querySelectorAll('.timeline-item').forEach(item => {
  observer.observe(item);
});