import { location, employees } from "./aboutPageInfo.js";

function drawAboutPage() {
  const contentField = document.querySelector("#content");
  if (contentField.hasChildNodes()) {
    while (contentField.firstChild) {
      const element = contentField.firstChild;
      contentField.removeChild(element);
    }
  }
  const aboutHeader = document.createElement("div");
  aboutHeader.classList.add("main-menu-header");
  aboutHeader.textContent = "About";
  contentField.appendChild(aboutHeader);
  const locationCard = document.createElement("div");
  locationCard.classList.add("card");
  locationCard.classList.add("restaurant-address");
  const locationCardHeader = document.createElement("div");
  locationCardHeader.classList.add("card-header");
  locationCardHeader.textContent = "Location";
  locationCard.appendChild(locationCardHeader);
  const locationAddress = document.createElement("div");
  locationAddress.classList.add("address");
  locationAddress.textContent = location;
  locationCard.appendChild(locationAddress);
  contentField.appendChild(locationCard);
  console.log(contentField);

  for (const employee of employees) {
    const employeeInfoCard = document.createElement("div");
    employeeInfoCard.classList.add("card");
    employeeInfoCard.classList.add("contact-card");

    const employeeInfoCardHeader = document.createElement("div");
    employeeInfoCardHeader.classList.add("contact-header");
    employeeInfoCardHeader.textContent = employee.name;
    employeeInfoCard.appendChild(employeeInfoCardHeader);
    const employeeInfoContainer = document.createElement("div");
    employeeInfoContainer.classList.add("contact-info-container");

    const employeeJobPositionRow = document.createElement("div");
    employeeJobPositionRow.classList.add("contact-row");
    const employeeJobPositionLabel = document.createElement("div");
    employeeJobPositionLabel.classList.add("contact-label");
    employeeJobPositionLabel.textContent = "Job position: ";
    employeeJobPositionRow.appendChild(employeeJobPositionLabel);
    const employeeJobPositionField = document.createElement("div");
    employeeJobPositionField.classList.add("contact-field");
    employeeJobPositionField.textContent = employee.jobPosition;
    employeeJobPositionRow.appendChild(employeeJobPositionField);
    employeeInfoContainer.appendChild(employeeJobPositionRow);

    const employeeEmailRow = document.createElement("div");
    employeeEmailRow.classList.add("contact-row");
    const employeeEmailLabel = document.createElement("div");
    employeeEmailLabel.classList.add("contact-label");
    employeeEmailLabel.textContent = "Email: ";
    employeeEmailRow.appendChild(employeeEmailLabel);
    const employeeEmailField = document.createElement("div");
    employeeEmailField.classList.add("contact-field");
    employeeEmailField.classList.add("email");
    employeeEmailField.textContent = employee.email;
    employeeEmailRow.appendChild(employeeEmailField);
    employeeInfoContainer.appendChild(employeeEmailRow);

    const employeePhoneRow = document.createElement("div");
    employeePhoneRow.classList.add("contact-row");
    const employeePhoneLabel = document.createElement("div");
    employeePhoneLabel.classList.add("contact-label");
    employeePhoneLabel.textContent = "Phone number: ";
    employeePhoneRow.appendChild(employeePhoneLabel);
    const employeePhoneField = document.createElement("div");
    employeePhoneField.classList.add("contact-field");
    employeePhoneField.textContent = employee.phoneNumber;
    employeePhoneRow.appendChild(employeePhoneField);
    employeeInfoContainer.appendChild(employeePhoneRow);

    employeeInfoCard.appendChild(employeeInfoContainer);

    contentField.appendChild(employeeInfoCard);
  }
}

export { drawAboutPage };
