// Compteur de clics - Application principale
let compteur = 0;

let gifArr = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2VoeHBjcjZyNHU4dDNyamY1dXpwbzdscGVpeGVvdmRobWE3ZXV6ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mbhseRYedlG5W/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZsODNkbWY1NW9xd3FyZWxid3RsMHlrbHg3bDFyOWZqeXV5cm5mYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ohzdIuqJoo8QdKlnW/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZsODNkbWY1NW9xd3FyZWxid3RsMHlrbHg3bDFyOWZqeXV5cm5mYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mXnO9IiWWarkI/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZThvampmM3JraWN2b3RkYnc4bXFxN201Yjh3MDFvb2N0bW5pMnUwcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dXckBa1HDG86RqUh19/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWg1NGdramM3eHV3Mm94bDkybWV1MGQzOHZvdWg4eWswdHkxYnhqbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5wWf7GW1AzV6pF3MaVW/giphy.gif",
];

const countDisplay = document.getElementById("count");
const btnPlus = document.getElementById("btn-plus");
const btnMoins = document.getElementById("btn-moins");
const btnReset = document.getElementById("btn-reset");
const btnTheme = document.getElementById("btn-theme");
const imgSurprise = document.getElementById("img-surprise");

btnPlus.addEventListener("click", function () {
  compteur = compteur + 1;
  addImg();
  countDisplay.textContent = compteur;
});

btnMoins.addEventListener("click", function () {
  compteur = compteur - 1;
  addImg();
  countDisplay.textContent = compteur;
});

btnReset.addEventListener("click", function () {
  compteur = 0;
  countDisplay.textContent = compteur;
});

// Toggle dark mode
btnTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Show a random gif every 10 points in the counter
const getRandom = (min, max) => {
  console.log(compteur);
  return Math.round(Math.random() * (max - min) + min);
};

const addImg = () => {
  if (compteur % 5 === 0) {
    console.log("coucou ??");
    let num = getRandom(0, gifArr.length);
    console.log("num", num);
    console.log(gifArr[num]);
    imgSurprise.src = gifArr[num];
    imgSurprise.alt = "Congratulating gif";
  }
};
