import {
  restaurantNameText,
  restaurantInfoText,
  schedule,
  restaurantAddress,
} from "./homePageInfo.js";

function drawHomePage() {
  const mainPage = document.querySelector("#content");
  if (contentField.hasChildNodes()) {
    while (contentField.firstChild) {
      const element = contentField.firstChild;
      contentField.removeChild(element);
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

  const locationCard = document.createElement("div");
  locationCard.classList.add("card");
  locationCard.classList.add("restaurant-address");
  const locationHeader = document.createElement("div");
  locationHeader.classList.add("card-header");
  locationHeader.textContent = "Location";
  locationCard.appendChild(locationHeader);
  const locationText = document.createElement("div");
  locationText.classList.add("address");
  locationText.textContent = restaurantAddress;
  locationCard.appendChild(locationText);
  mainPage.appendChild(locationCard);
}

export { drawHomePage };
