const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "") {
        message.textContent = "Please enter your name!";
    } else if (email === "") {
        message.textContent = "Please enter your email!";
    }  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message.textContent = "Please enter a valid email!"; 
        message.textContent = "Please enter a valid email!";
    } else {
        message.textContent = "Form submitted successfully!";
    }
});