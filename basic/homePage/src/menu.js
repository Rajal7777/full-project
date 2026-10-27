function menuPage() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const description = document.createElement("p");
  description.textContent = "Fresh food, made with love.";

  const menuItems = [
    {
      name: "Chicken Ramen",
      price: "2000",
      description:
        "A delicious bowl of chicken ramen with fresh vegetables and a rich broth.",
    },
    {
      name: "Beef Burger",
      price: "¥1,000",
      description: "Juicy beef with fresh vegetables.",
    },
    {
      name: "Vegetable Salad",
      price: "¥800",
      description: "Fresh seasonal vegetables.",
    },
  ];

  content.appendChild(heading);
  content.appendChild(description);

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const name = document.createElement("h2");
    name.textContent = item.name;

    const price = document.createElement("h2");
    price.textContent = item.price;

    const description = document.createElement("p");
    description.textContent = item.description;

    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(description);

    content.appendChild(card);
  });
}

export default menuPage;
