const btnToggle = document.getElementById("labelToggle");
const bgToggle = document.querySelector(".top__btn--toggle");

const cards1 = document.querySelectorAll(".component1__card");
const cards2 = document.querySelectorAll(".component2__card");

const numbers1 = document.querySelectorAll(".number");
const numbers2 = document.querySelectorAll(".component2__card--bot-number");

///////////////////////////////////////////////////////////////////////////

function toggleOn() {
  bgToggle.style.background =
    "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
  document.querySelector("main").style.backgroundColor = "hsl(230, 17%, 14%)";
  document.querySelector(".top").style.backgroundColor = "hsl(232, 19%, 15%)";
  document.querySelector(".top__info--heading").style.color = "white";
  document.querySelector(".middle__heading").style.color = "white";
  cards1.forEach((value) => {
    value.style.backgroundColor = "hsl(228, 28%, 20%)";
  });
  cards2.forEach((value) => {
    value.style.backgroundColor = "hsl(228, 28%, 20%)";
  });
  numbers1.forEach((value) => {
    value.style.color = "white";
  });
  numbers2.forEach((value) => {
    value.style.color = "white";
  });
}

function toggleOff() {
  bgToggle.style.background = "hsl(230, 22%, 74%)";
  document.querySelector("main").style.backgroundColor = "white";
  document.querySelector(".top").style.backgroundColor = "hsl(225, 100%, 98%)";
  document.querySelector(".top__info--heading").style.color =
    "hsl(230, 17%, 14%)";
  document.querySelector(".middle__heading").style.color = "hsl(228, 12%, 44%)";
  cards1.forEach((value) => {
    value.style.backgroundColor = "hsl(227, 47%, 96%)";
  });
  cards2.forEach((value) => {
    value.style.backgroundColor = "hsl(227, 47%, 96%)";
  });
  numbers1.forEach((value) => {
    value.style.color = "hsl(230, 17%, 14%)";
  });
  numbers2.forEach((value) => {
    value.style.color = "hsl(230, 17%, 14%)";
  });
}

///////////////////////////////////////////////////////////////////////////
let counter = 0;

btnToggle.addEventListener("click", (e) => {
  counter++;
  if (counter % 2) {
    toggleOn();
  } else if (counter % 2 === 0) {
    toggleOff();
  }
});
