
const form = document.getElementById("register");
const userName = document.getElementById("username");

let loginId = 0;
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log("listerner");
    valid = validateInputs();
    if (valid) {

        const fd = new FormData(form);
        const obj = Object.fromEntries(fd);
        const json = JSON.stringify(obj);

        localStorage.setItem("login" + loginId, json);
        console.log(localStorage.getItem("login" + loginId));
        loginId++
    }

});

function ouputLocal() {
    const numLocalStorageElements = localStorage.length;

    for (let i = 0; i < numLocalStorageElements; i++) {
        console.log(localStorage.getItem(i));

    }
}

function loginTable() {
    document.getElementById("loginTable").removeChild(document.getElementById("loginTable").lastChild);

    console.log("loginTable pressed");
    let obj = JSON.parse(localStorage.getItem("login" + 0));

    const table = document.createElement('table');

    const header = table.createTHead();
    const row = header.insertRow(0);
    for (const key in obj) {
        const th = document.createElement('th');
        const text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
    for (let i = 0; i < localStorage.length; i++) {
        obj = JSON.parse(localStorage.getItem("login" + i))

        const tbody = table.createTBody();
        const dataRow = tbody.insertRow(0);
        for (const key in obj) {
            const cell = dataRow.insertCell();
            const text = document.createTextNode(obj[key]);
            cell.appendChild(text);
        }

    }
    console.log("asdf pressed");
    document.getElementById("loginTable").appendChild(table);
    // document.body.appendChild(table);


}

userName.onfocus = () => {
    console.log("focused");
    setSuggestion(userName, "John");
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    console.log(errorDisplay.innerHTML);
}
const setSuggestion = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.classList.add('suggestion');
    errorDisplay.classList.remove('error');
    errorDisplay.innerText = "Hint : " + message;
}
const resetSuggestion = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.suggestion');
    errorDisplay.classList.add('error');
    errorDisplay.classList.remove('suggestion');
    errorDisplay.innerText = '';
}



function validateInputs() {
    const userName = document.getElementById("username");
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

    let valid = true;

    if (userName.value === '') {
        valid = false;
        setError(userName, "Please Enter a Valid Username.")
    } else {
        setError(userName, '');
    }

    if (firstName.value === '') {
        valid = false;
        setError(firstName, "Please Enter a Valid Second Name")
    }
    else {
        setError(firstName, '');
    }

    if (secondName.value === '') {
        valid = false;

        setError(secondName, "Please Enter a Valid Second Name")
    }
    else {
        setError(secondName, '');
    }

    if (email.value === '') {
        valid = false;

        setError(email, "Please Enter a Valid Email")
    }
    else {
        setError(email, '');
    }

    if (phone.value === '') {
        valid = false;

        setError(phone, "Please Enter a Valid Phone number")
    }
    else {
        setError(phone, '');
    }

    if (dob.value === '') {
        valid = false;

        setError(dob, "Please Enter a Valid Date of Birth")
    }
    else {
        setError(dob, '');
    }

    if (gender.value === '') {
        valid = false;

        setError(gender, "Please Enter a Valid Gender")
    }
    else {
        setError(gender, '');
    }

    if (address1.value === '') {
        valid = false;

        setError(address1, "Please Enter a Valid Address")
    }
    else {
        setError(address1, '');
    }

    if (country.value === '') {
        valid = false;

        setError(country, "Please Enter a Valid Country")
    }
    else {
        setError(country, '');
    }

    if (password.value != confirmPassword.value) {
        valid = false;

        setError(password, "Passords are not the same. Please retry.")
        setError(confirmPassword, "Passords are not the same. Please retry.")
    }
    else {
        setError(password, '');
        setError(confirmPassword, '');
    }

    if (password.value === '') {
        valid = false;

        setError(password, "Please Enter a Password")
    }
    else {
        setError(password, '');
    }
    if (confirmPassword.value === '') {
        valid = false;

        setError(confirmPassword, "Please Confirm Password")
    }
    else {
        setError(confirmPassword, '');
    }
    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value)){
        setError(phone,'');
    }else{
        setError(phone,'Invalid Phone number');

    }

    return valid;

}