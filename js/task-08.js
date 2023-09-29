const form = document.querySelector(`.login-form`);


form.addEventListener(`submit`, formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    if (email.value === `` || password.value  === ``) {
        alert(`Все поля должны быть заполнены`);
        
    } else {
        const data = {
            email: email.value,
            password: password.value
        }
        console.log(data);
        event.currentTarget.reset();
    }

}