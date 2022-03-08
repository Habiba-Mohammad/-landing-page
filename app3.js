
// get elements from Html

let Nav = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");

let style = (document.querySelector("h1").style.color = "red");

let classLink = document.getElementsByClassName("menu__link");

// set the varibales of the project

let link = "";

let contaner = `<li class="menu__link" id="classId"`;

let counter = 1;

let sectionId = "#section";

let scrolling2 = "<style>html{scroll-behavior: smooth;}</style>";

let list = [];

// first requirement add a dynamic navigation bar //

for (let section = 1; section <= sections.length; section += 1) {
  let Id = sectionId + counter;

  let DataNav = "Section " + section;

  // add counter instead of section because counter start from 1 but section start from zero
  console.log(DataNav);
  counter++;
  function clickFun(section) {
    sections[section - 1].scrollIntoView({ behavior: "smooth" });
  }
  link += `${contaner}" style="display:inline-block" onclick="clickFun(${section})"}>${DataNav}</li>`;

  list = link;

  ///// change color of section when scrolling using addEventListener and getBoundingClientRect()

  let sectionScroll = document.getElementById("section" + section);

  let x = document.querySelector("section");

  let section3 = section;

  section3 -= 1;

  activeClass = document.getElementsByClassName("your-active-class");

  document.addEventListener("scroll", function () {
    if (
      sectionScroll.getBoundingClientRect().top >= -20 &&
      sectionScroll.getBoundingClientRect().top <= 150
    ) {
      sectionScroll.classList.add("your-active-class");

      sectionScroll.style.backgroundColor = "pink";
    } else {
      sectionScroll.classList.remove("your-active-class");
      sectionScroll.style.backgroundColor = "transparent";
    }
  });
}


Nav.innerHTML = link;


