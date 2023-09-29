const userInput = document.querySelector(`#validation-input`);

userInput.addEventListener(`blur`, validationInput);

function validationInput(event) {
   const minLength = parseInt(userInput.getAttribute('data-length'));
    
    if (event.currentTarget.value.length === minLength) {
        updateClassEl('valid', 'invalid');
    } else {
        updateClassEl('invalid', 'valid');
        //userInput.classList.add('invalid');
        //userInput.classList.remove('valid');
    }
    //console.dir(userInput)

}

    function updateClassEl(a, b) {
    userInput.classList.add(a);
    userInput.classList.remove(b);
}