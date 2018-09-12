let counter = 0;

const spanCounter = document.querySelector("span.counter");
const plus = document.getElementById('plusButton');
const minus = document.getElementById('minusButton');

function incremental() {
    counter++;
    //console.log(counter);
    addNumbers();
}

function decremental() {
    counter--;
    //console.log(counter);
    addNumbers();
}

function addNumbers() {
    spanCounter.textContent = counter;
}

plus.addEventListener('click', incremental);
minus.addEventListener('click', decremental);