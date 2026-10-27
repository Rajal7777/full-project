function contactPage() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const introduction = document.createElement("p");
  introduction.textContent =
    "We would love to hear from you! Visit us or get in touch.";

  const address = document.createElement("p");
  address.textContent = "Address: 1-2-3 Shibuya, Tokyo, Japan";

  const phone = document.createElement("p");
  phone.textContent = "Phone: 03-1234-5678";

  const hours = document.createElement("p");
  hours.textContent = "Opening Hours: 11:00 AM - 10:00 PM";

  content.appendChild(heading);
  content.appendChild(introduction);
  content.appendChild(address);
  content.appendChild(phone);
  content.appendChild(hours);
}

export default contactPage;
