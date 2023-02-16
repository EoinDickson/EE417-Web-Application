
const form = document.getElementById("register");

const firstName = document.getElementById("firstName");
const secondName = document.getElementById("secondName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const address1 = document.getElementById("address1");
const country = document.getElementById("country");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");


    form.addEventListener('submit', e => {
        e.preventDefault();
        console.log("listerner");
        validateInputs();
    });

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    console.log(element);
    console.log(inputControl);
    console.log(errorDisplay.innerHTML);
    console.log(message);





    errorDisplay.innerText = message;
    console.log(errorDisplay.innerHTML);

    // inputControl.classList.add('error');
    // inputControl.classList.remove('success')
}

function validateInputs(){
    const username = document.getElementById("username");
    const userName = username.value;
    if (userName === '') {

        setError(username,"Please Enter a Valid Username.")
    }
}