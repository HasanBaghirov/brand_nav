const bars = document.querySelector(".bars");
const navbar = document.querySelector(".navbar-content");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const menu1 = document.querySelector(".menu1");
const menu2 = document.querySelector(".menu2");
const dropdown1 = document.querySelector(".dropdown1");
const dropdown2 = document.querySelector(".dropdown2");
const bars_img = document.querySelector(".bars-img");

let mood = false;
bars.addEventListener("click", () => {
  navbar.classList.toggle("active");
  if (mood) {
    bars_img.src = "bars-solid.svg";
    mood = false;
  } else {
    bars_img.src = "x-solid.svg";
    mood = true;
  }
});

icon1.addEventListener("click", () => {
  dropdown1.classList.toggle("active1");
});
icon2.addEventListener("click", () => {
  dropdown2.classList.toggle("active2");
});
