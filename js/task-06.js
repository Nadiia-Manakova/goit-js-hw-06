const userInput = document.querySelector(`#validation-input`);

userInput.addEventListener(`blur`, validationInput);

function validationInput(event) {
    const minLength = parseInt(userInput.getAttribute('data-length'));
    if (event.currentTarget.value.length >= minLength) {
        userInput.classList.add('valid');
        userInput.classList.remove('invalid')
    } else {
        userInput.classList.add('invalid');
        userInput.classList.remove('valid');
    }

    console.dir(userInput)
}