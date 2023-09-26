const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector(`ul#ingredients`);

ingredients.forEach(ingredient => {
  const ingredientsItem = document.createElement(`li`);
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");

  ingredientsList.appendChild(ingredientsItem);
});
  
