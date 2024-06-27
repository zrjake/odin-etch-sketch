container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    newElem = document.createElement("div");
    newElem.style.width = (960 / 4) + "px";
    newElem.style.height = (960 / 4) + "px";
    newElem.classList = "grid-elem";
    newElem.textContent = i;
    container.appendChild(newElem);
}