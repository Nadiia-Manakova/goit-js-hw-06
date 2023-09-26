const list = document.querySelectorAll(`.item`);
console.log("Number of categories: " + list.length);

list.forEach(function (items) {
    const itemTitle = items.querySelector(`h2`).textContent;
    console.log("Category: " + itemTitle);

    const item = items.querySelectorAll(`ul > li`);
    console.log("Elements: " + item.length);

});

