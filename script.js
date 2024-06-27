const container = document.querySelector(".container");

function renderNewGrid(gridRows) {
    container.innerHTML = '';
    for (let i = 0; i < gridRows**2; i++) {
        let newElem = document.createElement("div");
        newElem.style.width = (960 / gridRows - 2) + "px";
        newElem.style.height = (960 / gridRows - 2) + "px";
        newElem.style.opacity = 0;
        newElem.classList = "grid-elem";
        container.appendChild(newElem);
    }
}

let blackWhite = false;
const toggleBlackWhite = document.querySelector("#black-white");
toggleBlackWhite.addEventListener("click", () => {
    blackWhite = !blackWhite;
});

// Grid elems should change color, but the container shouldn't.
container.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("container")) {
        e.target.style.backgroundColor = blackWhite ? "black"
                                                    : getRandomColor();
        currentOpacity = Number(e.target.style.opacity);
        if (currentOpacity < 1) {
            e.target.style.opacity = currentOpacity + 0.1;
        }
    }
});

const newGridButton = document.querySelector("#reset-button");
newGridButton.addEventListener("click", () => {
    let gridRows = prompt("Number of rows/cols:");
    while (gridRows > 100 || gridRows < 1) {
        gridRows = prompt("Please enter a number between 1 and 100:");
    }
    renderNewGrid(gridRows);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function rgb(red, green, blue) {
    return `rgb(${red}, ${green}, ${blue})`;
}
function getRandomColor() {
    return rgb(getRandomInt(256),
               getRandomInt(256),
               getRandomInt(256));
}