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

ingredients.forEach((elem) => {
  const newLi = document.createElement("li");
  newLi.textContent = elem;
  newLi.classList.add("item");

  categoriesList.append(newLi);
});
