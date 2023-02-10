const listOfEl = document.querySelectorAll(".item");
console.log("Number of categories: ", listOfEl.length);

const listOfCategories = document.querySelectorAll("h2");

listOfCategories.forEach((elem) => {
  console.log("Category: ", elem.textContent);

  const elements = elem.nextElementSibling.querySelectorAll("li");
  console.log("Elements: ", elements.length);
});
