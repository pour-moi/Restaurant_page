export function contact() {
  const content = document.getElementById("content");

  const contactbutton = document.createElement("button");
  contactbutton.textContent = "Contact";
  contactbutton.style.width = "80px";
  contactbutton.style.height = "30px";

  content.appendChild(contactbutton);

  contactbutton.addEventListener("click", function () {
    content.style.display = "none";

    const contactPageContent = document.createElement("div");
    contactPageContent.textContent = "Contact goes here";

    document.body.appendChild(contactPageContent);
  });
}
