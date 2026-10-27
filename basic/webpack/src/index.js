import "./style.css";
import { greeting } from "./greeting.js";

//import image
import logoImage from "./logo.png";

const image = document.createElement("img");
image.src = logoImage;
document.body.appendChild(image);

console.log(greeting);
