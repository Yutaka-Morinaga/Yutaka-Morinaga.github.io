const circle = document.getElementById('circle');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');

let rotateValue = circle.style.transform;
let rotateSum;
let counter = 0;

upBtn.onclick = function() {
    counter += 1;
    rotateSum = rotateValue + "rotate(120deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum
    console.log(counter);
}
downBtn.onclick = function() {
    counter -= 1;
    rotateSum = rotateValue + "rotate(-120deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum
    console.log(counter);
}

const card = document.querySelector('.card');

upBtn.addEventListener('click', function() {
    card.classList = "card"
    if (counter % 3 === 0) {
        card.classList.add("metallic");
        console.log("meta")
    } else if (counter % 3 === 1) {
        card.classList.add("pearl");
        console.log("pearl")
    } else if (counter % 3 === 2) {
        card.classList.add("colid");
        console.log("colid")
    }
})

downBtn.addEventListener('click', function() {
    card.classList = "card"
    if (counter >= 0) {
        if (counter % 3 === 0) {
            card.classList.add("metallic");
            console.log("meta")
        } else if (counter % 3 === 1) {
            card.classList.add("pearl");
            console.log("pearl")
        } else if (counter % 3 === 2) {
            card.classList.add("colid");
            console.log("colid")
        }
    } else if (counter < 0) {
        if (counter % 3 === 0) {
            card.classList.add("metallic");
            console.log("meta")
        } else if (counter % 3 === -2) {
            card.classList.add("pearl");
            console.log("pearl")
        } else if (counter % 3 === -1) {
            card.classList.add("colid");
            console.log("colid")
        }

    }
})

const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');
const black = document.getElementById('black');
const brown = document.getElementById('brown');
const gradiate = document.getElementById('gradiate');

red.addEventListener('click', function() {
    gradiate.classList = "gradiate";
    gradiate.classList.add("graditionred");
})

blue.addEventListener('click', function() {
    gradiate.classList = "gradiate";
    gradiate.classList.add("graditionblue");
})

green.addEventListener('click', function() {
    gradiate.classList = "gradiate";
    gradiate.classList.add("graditiongreen");
})

yellow.addEventListener('click', function() {
    gradiate.classList = "gradiate";
    gradiate.classList.add("graditionyellow");
})

black.addEventListener('click', function() {
    gradiate.classList = "gradiate";
    gradiate.classList.add("graditionblack");
})

brown.addEventListener('click', function() {
    gradiate.classList = "gradiate";
    gradiate.classList.add("graditionbrown");
})