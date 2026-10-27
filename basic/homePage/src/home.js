//module for homepage
function homePage() {
  //select the div to display the context in page
  const context = document.querySelector("#content");

  //create a homepage layout
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Resturant.";

  const description = document.createElement("p");
  description.textContent = "Enjoy delicious food made with fresh ingredients.";

  const image = document.createElement("img");
  image.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4";
  image.alt = "Restaurant interior";

  //append the created layouts to the main container to display
  context.appendChild(heading);
  context.appendChild(description);
  context.appendChild(image);
}

export default homePage;
