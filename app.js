const circle = document.getElementById('circle');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');
const colorTypes = ["metallic", "pearl", "solid"];

let rotateValue = circle.style.transform;
let rotateSum;
let counter = 0;

upBtn.onclick = function() {
    if (counter === 2) {
        counter = 0;
    } else {
        counter += 1;
    }
    rotateSum = rotateValue + "rotate(120deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum
    console.log(counter);
}

downBtn.onclick = function() {
    if (counter === 0) {
        counter = 2;
    } else {
        counter -= 1;
    }
    rotateSum = rotateValue + "rotate(-120deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum
    console.log(counter);
}

const card = document.querySelector('.card');

function cardInitialize() {
    card.classList = "card"
    card.classList.add(colorTypes[counter]);
}

upBtn.addEventListener('click', cardInitialize);
downBtn.addEventListener('click', cardInitialize);

const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');
const black = document.getElementById('black');
const brown = document.getElementById('brown');
const gradiate = document.getElementById('gradiate');

function generateColorInitializer(color) {
    return function() {
        gradiate.classList = "gradiate";
        gradiate.classList.add(`gradition${color}`);
    }
}

red.addEventListener('click', generateColorInitializer("red"));
blue.addEventListener('click', generateColorInitializer("blue"));
green.addEventListener('click', generateColorInitializer("green"));
yellow.addEventListener('click', generateColorInitializer("yellow"));
black.addEventListener('click', generateColorInitializer("black"));
brown.addEventListener('click', generateColorInitializer("brown"));