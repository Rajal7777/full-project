import "./style.css";

import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#about-btn");
const contactButton = document.querySelector("#contact-btn");

const content = document.querySelector("#content");

const buttons = [homeButton, menuButton, contactButton];

// function setActiveButton(button) {
//   buttons.forEach((btn) => btn.classList.toggle("active", btn === button));
// }

function activePage(page, btnparam) {
  content.innerHTML = "";

  buttons.forEach(
    (btn) => btn === btnparam && btn.classList.toggle("active"),
    //   ? btn.classList.add("active")
    //   : btn.classList.remove("active"),
  );
  page();
  //   setActiveButton(btn);
}

// Load Home page when website starts
activePage(homePage, homeButton);

homeButton.addEventListener("click", () => {
  activePage(homePage, homeButton);
});

menuButton.addEventListener("click", () => {
  activePage(menuPage, menuButton);
});

contactButton.addEventListener("click", () => {
  activePage(contactPage, contactButton);
});
