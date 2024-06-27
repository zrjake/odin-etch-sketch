const container = document.querySelector(".container");

function renderNewGrid(gridRows) {
    container.innerHTML = '';
    for (let i = 0; i < gridRows**2; i++) {
        let newElem = document.createElement("div");
        newElem.style.width = (960 / gridRows - 2) + "px";
        newElem.style.height = (960 / gridRows - 2) + "px";
        newElem.classList = "grid-elem";
        container.appendChild(newElem);
    }
}

container.addEventListener("mouseover", (e) => {
    e.target.classList.add("activated");
});

const newGridButton = document.querySelector("#reset-button");
newGridButton.addEventListener("click", () => {
    let gridRows = prompt("Number of rows/cols:");
    while (gridRows > 100 || gridRows < 1) {
        gridRows = prompt("Please enter a number between 1 and 100:");
    }
    renderNewGrid(gridRows);
});