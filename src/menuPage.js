import { beverages, mainDishes, sides } from "./menuPageInfo.js";

function drawMenuPage() {
  const contentField = document.querySelector("#content");
  if (contentField.hasChildNodes()) {
    while (contentField.firstChild) {
      const element = contentField.firstChild;
      contentField.removeChild(element);
    }
  }

  console.log(contentField);

  const menuHeader = document.createElement("div");
  menuHeader.classList.add("main-menu-header");
  menuHeader.textContent = "Menu";
  contentField.appendChild(menuHeader);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const beveragesColumn = document.createElement("div");
  beveragesColumn.classList.add("beverages-column");

  const beveragesColumnHeader = document.createElement("div");
  beveragesColumnHeader.classList.add("card");
  beveragesColumnHeader.classList.add("menu-header");
  beveragesColumnHeader.textContent = "Beverages";
  beveragesColumn.appendChild(beveragesColumnHeader);

  for (const beverage of beverages) {
    const beverageCard = document.createElement("div");
    beverageCard.classList.add("card");
    beverageCard.classList.add("menu-item");
    const beverageCardHeader = document.createElement("div");
    beverageCardHeader.classList.add("card-header");
    beverageCardHeader.textContent = beverage.name;
    beverageCard.appendChild(beverageCardHeader);
    const beverageCardInfoContainer = document.createElement("div");
    beverageCardInfoContainer.classList.add("menu-information-container");
    const beverageCardInfoText = document.createElement("div");
    beverageCardInfoText.classList.add("menu-information-text");
    beverageCardInfoText.textContent = beverage.description;
    beverageCardInfoContainer.appendChild(beverageCardInfoText);
    const beverageCardInformationIcon = document.createElement("div");
    beverageCardInformationIcon.classList.add("menu-information-icon");
    const beverageCardIconPlaceholder = document.createElement("div");
    beverageCardIconPlaceholder.classList.add("menu-icon-placeholder");
    const beverageImage = document.createElement("img");
    beverageImage.classList.add("menu-icon");
    switch (beverage.type) {
      case "alcohol":
        beverageImage.src = "images/alcohol.png";
        break;
      case "non-alcohol":
        beverageImage.src = "images/non-alcohol.png";
        break;
      case "coffee":
        beverageImage.src = "images/coffee.png";
        break;
    }
    beverageCardIconPlaceholder.appendChild(beverageImage);
    beverageCardInformationIcon.appendChild(beverageCardIconPlaceholder);
    beverageCardInfoContainer.appendChild(beverageCardInformationIcon);
    beverageCard.appendChild(beverageCardInfoContainer);
    const beveragePrice = document.createElement("div");
    beveragePrice.classList.add("menu-price");
    beveragePrice.textContent = beverage.price;
    beverageCard.appendChild(beveragePrice);
    beveragesColumn.appendChild(beverageCard);
  }

  menuContainer.appendChild(beveragesColumn);

  const mainDishesColumn = document.createElement("div");
  mainDishesColumn.classList.add("main-dishes-column");

  const mainDishesColumnHeader = document.createElement("div");
  mainDishesColumnHeader.classList.add("card");
  mainDishesColumnHeader.classList.add("menu-header");
  mainDishesColumnHeader.textContent = "Main dishes";
  mainDishesColumn.appendChild(mainDishesColumnHeader);

  for (const mainDish of mainDishes) {
    const mainDishCard = document.createElement("div");
    mainDishCard.classList.add("card");
    mainDishCard.classList.add("menu-item");
    const mainDishCardHeader = document.createElement("div");
    mainDishCardHeader.classList.add("card-header");
    mainDishCardHeader.textContent = mainDish.name;
    mainDishCard.appendChild(mainDishCardHeader);
    const mainDishCardInfoContainer = document.createElement("div");
    mainDishCardInfoContainer.classList.add("menu-information-container");
    const mainDishCardInfoText = document.createElement("div");
    mainDishCardInfoText.classList.add("menu-information-text");
    mainDishCardInfoText.textContent = mainDish.description;
    mainDishCardInfoContainer.appendChild(mainDishCardInfoText);
    const mainDishCardInformationIcon = document.createElement("div");
    mainDishCardInformationIcon.classList.add("menu-information-icon");
    const mainDishCardIconPlaceholder = document.createElement("div");
    mainDishCardIconPlaceholder.classList.add("menu-icon-placeholder");
    const mainDishImage = document.createElement("img");
    mainDishImage.classList.add("menu-icon");
    mainDishImage.src = "images/main_food.png";
    mainDishCardIconPlaceholder.appendChild(mainDishImage);
    mainDishCardInformationIcon.appendChild(mainDishCardIconPlaceholder);
    mainDishCardInfoContainer.appendChild(mainDishCardInformationIcon);
    mainDishCard.appendChild(mainDishCardInfoContainer);
    const mainDishPrice = document.createElement("div");
    mainDishPrice.classList.add("menu-price");
    mainDishPrice.textContent = mainDish.price;
    mainDishCard.appendChild(mainDishPrice);
    mainDishesColumn.appendChild(mainDishCard);
  }
  menuContainer.appendChild(mainDishesColumn);

  const sidesColumn = document.createElement("div");
  sidesColumn.classList.add("sides-column");

  const sidesColumnHeader = document.createElement("div");
  sidesColumnHeader.classList.add("card");
  sidesColumnHeader.classList.add("menu-header");
  sidesColumnHeader.textContent = "Sides";
  sidesColumn.appendChild(sidesColumnHeader);

  for (const side of sides) {
    const sideCard = document.createElement("div");
    sideCard.classList.add("card");
    sideCard.classList.add("menu-item");
    const sideCardHeader = document.createElement("div");
    sideCardHeader.classList.add("card-header");
    sideCardHeader.textContent = side.name;
    sideCard.appendChild(sideCardHeader);
    const sideCardInfoContainer = document.createElement("div");
    sideCardInfoContainer.classList.add("menu-information-container");
    const sideCardInfoText = document.createElement("div");
    sideCardInfoText.classList.add("menu-information-text");
    sideCardInfoText.textContent = side.description;
    sideCardInfoContainer.appendChild(sideCardInfoText);
    const sideCardInformationIcon = document.createElement("div");
    sideCardInformationIcon.classList.add("menu-information-icon");
    const sideCardIconPlaceholder = document.createElement("div");
    sideCardIconPlaceholder.classList.add("menu-icon-placeholder");
    const sideImage = document.createElement("img");
    sideImage.classList.add("menu-icon");
    sideImage.src = "images/side_food.png";
    sideCardIconPlaceholder.appendChild(sideImage);
    sideCardInformationIcon.appendChild(sideCardIconPlaceholder);
    sideCardInfoContainer.appendChild(sideCardInformationIcon);
    sideCard.appendChild(sideCardInfoContainer);
    const sidePrice = document.createElement("div");
    sidePrice.classList.add("menu-price");
    sidePrice.textContent = side.price;
    sideCard.appendChild(sidePrice);
    sidesColumn.appendChild(sideCard);
  }
  menuContainer.appendChild(sidesColumn);

  contentField.appendChild(menuContainer);
}

export { drawMenuPage };
