import { drawHomePage } from "./homePage.js";
import { drawMenuPage } from "./menuPage.js";
import { drawAboutPage } from "./aboutPage.js";

const [homeButton, menuButton, aboutButton] =
  document.querySelectorAll(".navigation");

homeButton.classList.add("selected");
homeButton.addEventListener("click", () => {
  homeButton.classList.add("selected");
  menuButton.classList.remove("selected");
  aboutButton.classList.remove("selected");

  drawHomePage();
});

menuButton.addEventListener("click", () => {
  homeButton.classList.remove("selected");
  menuButton.classList.add("selected");
  aboutButton.classList.remove("selected");

  drawMenuPage();
});

aboutButton.addEventListener("click", () => {
  homeButton.classList.remove("selected");
  menuButton.classList.remove("selected");
  aboutButton.classList.add("selected");

  drawAboutPage();
});
drawHomePage();
