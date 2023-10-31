export function generatecontent() {
  const content = document.getElementById("content");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to my Resturant";
  content.appendChild(headline);

  const image = document.createElement("img");
  image.src = "../images/momos-4935232_960_720.jpg";
  image.alt = "Restaurant image";
  content.appendChild(image);

  const text = document.createElement("p");
  text.textContent =
    "My Restaurant is known for its exquisite cuisine and stunning ambiance. Come and experience dining like never before!";
  content.appendChild(text);
}
