const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector(`ul#ingredients`);
const items = [];

ingredients.forEach(ingredient => {
  const ingredientsItem = document.createElement(`li`);
  ingredientsItem.textContent = ingredient;
  items.push(ingredientsItem);
 
});


   ingredientsList.append(...items);
