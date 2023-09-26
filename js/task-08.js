const form = document.querySelector(`.login-form`);


form.addEventListener(`submit`, formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    const data = {
        email: email.value,
        password: password.value
    }
    console.log(data);
    event.currentTarget.reset();

}