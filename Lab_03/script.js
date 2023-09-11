const addButton = document.getElementById("addButton");
const minusButton = document.getElementById("minusButton");
const counterElement = document.getElementById("counter");

let count = 0;

addButton.addEventListener("click", () => {
    if (count < 10) {
        count++;
        counterElement.innerHTML = '';
        for (let i = 0; i <= count; i++) {
            counterElement.innerHTML += i + '<br>';
        }
    }
});

minusButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counterElement.innerHTML = '';
        for (let i = 0; i <= count; i++) {
            counterElement.innerHTML += i + '<br>';
        }
    }
});