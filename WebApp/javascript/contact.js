
const form = document.getElementById("contact_form");

let contactId = 0;
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log("listerner");
    valid = validateInputs();
    if (valid) {

        const fd = new FormData(form);
        const obj = Object.fromEntries(fd);
        const json = JSON.stringify(obj);

        localStorage.setItem("contact" + contactId, json);
        console.log(localStorage.getItem("contact" + contactId));
        contactId++
        document.getElementById("contact_form").reset();
    }

});

function ouputLocal() {
    const numLocalStorageElements = localStorage.length;

    for (let i = 0; i < numLocalStorageElements; i++) {
        console.log(localStorage.getItem(i));
    }
}

// function clear(){
//     document.getElementById("contact_form").reset();
//     console.log("cleared");
// }

function contactTable() {
    document.getElementById("contactTable").removeChild(document.getElementById("contactTable").lastChild);

    let obj = JSON.parse(localStorage.getItem("contact" + 0));

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
        obj = JSON.parse(localStorage.getItem("contact" + i))

        const tbody = table.createTBody();
        const dataRow = tbody.insertRow(0);
        for (const key in obj) {
            const cell = dataRow.insertCell();
            const text = document.createTextNode(obj[key]);
            cell.appendChild(text);
        }

    }
    console.log("asdf pressed");
    document.getElementById("contactTable").appendChild(table);
    // document.body.appendChild(table);


}


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
    const firstName = document.getElementById("firstName");
    const secondName = document.getElementById("secondName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const ref = document.getElementById("ref");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const terms = document.getElementById("terms");
    const mailing = document.getElementById("mailing");
    const contact = document.getElementById("contact");


    let valid = true;

    if (firstName.value === '') {
        valid = false;
        setError(firstName, "Please Enter a Valid First Name")
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
    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value)){
        setError(phone,'');
    }else{
        setError(phone,'Invalid Phone number');
    }
    if (subject.value === '') {
        valid = false;

        setError(subject, "Please don't leave subject empty.")
    }
    else {
        setError(subject, '');
    }
    if (message.value === '') {
        valid = false;

        setError(message, "Please don't leave message empty.")
    }
    else {
        setError(message, '');
    }
    if (terms.value === '') {
        valid = false;

        setError(terms, "Please agree to terms and conditions")
    }
    else {
        setError(terms, '');
    }
    return valid;

}