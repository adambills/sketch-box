const container = document.querySelector('#grid-container');
const gridSize = 16;
const box = document.createElement('div');
for (let i = 0; i < (gridSize * gridSize); i++) {
    box.classList.add('box');
    box.style.flexBasis = `${800 / gridSize}px`;
    container.appendChild(box);
}
