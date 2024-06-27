const container = document.querySelector(".container");

function renderNewGrid(gridRows) {
    container.innerHTML = '';
    for (let i = 0; i < gridRows**2; i++) {
        let newElem = document.createElement("div");
        newElem.style.width = (960 / gridRows) + "px";
        newElem.style.height = (960 / gridRows) + "px";
        newElem.classList = "grid-elem";
        newElem.textContent = i;
        container.appendChild(newElem);
    }
}

container.addEventListener("mouseover", (e) => {
    e.target.classList.add("activated");
});

const newGridButton = document.querySelector("#reset-button");
newGridButton.addEventListener("click", () => {
    renderNewGrid(prompt());
});