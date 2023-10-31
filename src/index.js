import { generatecontent } from "./content.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

generatecontent();
menu();
contact();

const Button = document.querySelector("button");
Button.addEventListener("click", menu);
