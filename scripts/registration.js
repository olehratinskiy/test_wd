const inputsArr = document.querySelectorAll('.input-field');
const signupButton = document.querySelector(".signup-btn");

function registerUser(message) {
    let firstName = inputsArr[0].value;
    let lastName = inputsArr[1].value;
    let email = inputsArr[2].value;
    let username = inputsArr[3].value;
    let password = inputsArr[4].value;

    fetch('http://127.0.0.1:5000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        })
     })
    .then(response => {
        window.location.href = '../account-user.html'
    })
}

signupButton.addEventListener("click", registerUser)

