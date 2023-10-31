import { generatecontent } from "./content.js";

export function menu() {
  const content = document.getElementById("content");

  const menubutton = document.createElement("button");
  menubutton.textContent = "Menu";
  menubutton.style.width = "80px";
  menubutton.style.height = "30px";

  content.appendChild(menubutton);

  menubutton.addEventListener("click", function () {
    content.style.display = "none";

    const menuPageContent = document.createElement("div");
    menuPageContent.textContent = "Menu goes here";

    document.body.appendChild(menuPageContent);
  });
}
