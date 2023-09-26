const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector(`#counter>span`);
let count = 0;

console.dir(decrementBtn)

decrementBtn.addEventListener(`click`, decrementCount);

function decrementCount() {
    count -= 1;
    counterValue.textContent = count;
}

incrementBtn.addEventListener(`click`, incrementCount);

function incrementCount() {
    count += 1;
    counterValue.textContent = count;
}