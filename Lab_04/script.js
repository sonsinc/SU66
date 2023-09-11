document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const message = document.getElementById("message");

    loginButton.addEventListener("click", function () {
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === "user01" && password === "1234") {
            message.textContent = "Your username and password are correct! you are logged in.";
            message.classList.remove("incorrect");
            message.classList.add("correct");
        } else {
            message.textContent = "Your username or password is incorrect! Please try again.";
            message.classList.remove("correct");
            message.classList.add("incorrect");
        }

        // Clear the input fields
        usernameInput.value = "";
        passwordInput.value = "";
    });
});