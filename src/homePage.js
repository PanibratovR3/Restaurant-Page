import {
  restaurantNameText,
  restaurantInfoText,
  schedule,
  restaurantSuggestions,
} from "./homePageInfo.js";
import "./style.css";

function drawHomePage() {
  const mainPage = document.querySelector("#content");
  if (mainPage.hasChildNodes()) {
    while (mainPage.firstChild) {
      const element = mainPage.firstChild;
      mainPage.removeChild(element);
    }
  }
  const restaurantNameCard = document.createElement("div");
  restaurantNameCard.classList.add("card");
  restaurantNameCard.classList.add("restaurant-name");
  restaurantNameCard.textContent = restaurantNameText;
  mainPage.appendChild(restaurantNameCard);

  const restaurantInfoCard = document.createElement("div");
  restaurantInfoCard.classList.add("card");
  restaurantInfoCard.classList.add("restaurant-info");
  restaurantInfoCard.textContent = restaurantInfoText;
  mainPage.appendChild(restaurantInfoCard);

  const scheduleCard = document.createElement("div");
  scheduleCard.classList.add("card");
  scheduleCard.classList.add("restaurant-schedule");
  const scheduleHeader = document.createElement("div");
  scheduleHeader.classList.add("card-header");
  scheduleHeader.textContent = "Hours";
  scheduleCard.appendChild(scheduleHeader);
  const scheduleList = document.createElement("ul");
  for (const day of schedule) {
    const listItem = document.createElement("li");
    listItem.textContent = `${day.dayOfWeek}: ${day.time}`;
    scheduleList.appendChild(listItem);
  }
  scheduleCard.appendChild(scheduleList);
  mainPage.appendChild(scheduleCard);

  const suggestionCard = document.createElement("div");
  suggestionCard.classList.add("card");
  suggestionCard.classList.add("restaurant-address");
  const suggestionHeader = document.createElement("div");
  suggestionHeader.classList.add("card-header");
  suggestionHeader.textContent = "Any ideas?";
  suggestionCard.appendChild(suggestionHeader);
  const suggestionText = document.createElement("div");
  suggestionText.classList.add("address");
  suggestionText.textContent = restaurantSuggestions;
  suggestionCard.appendChild(suggestionText);
  mainPage.appendChild(suggestionCard);
}

export { drawHomePage };
