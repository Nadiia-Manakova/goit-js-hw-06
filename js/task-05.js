const userNameInput = document.querySelector(`#name-input`);
const userNameOutput = document.querySelector(`#name-output`);

userNameInput.addEventListener(`input`, handlerInput);

function handlerInput(event) {
    if (event.currentTarget.value.trim() === '') {
        userNameOutput.textContent = 'Anonymous';
    } else {
        userNameOutput.textContent = event.currentTarget.value;
    }
}






