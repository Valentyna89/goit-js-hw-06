const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const categoriesList = document.querySelector("#ingredients");
console.log(categoriesList);

const newLis = ingredients
  .map((elem) => `<li class='item'>${elem}</li>`)
  .join("");

categoriesList.insertAdjacentHTML("afterbegin", newLis);
