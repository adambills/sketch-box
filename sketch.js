const container = document.querySelector('#grid-container');
const gridButton = document.querySelector('#grid-size');
const clearButton = document.querySelector('#clear-grid');

gridButton.addEventListener('click', () => updateGridSize());
clearButton.addEventListener('click', () => clearGrid());

function updateGridSize() {
    let gridSize = parseInt(
        prompt('Enter desired grid size. Must be a number > 0 & <= 100: ', '16')
    );
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert('Error! Please enter an appropriate value.');
        updateGridSize();
    }
    if (!(isNaN(gridSize) || gridSize < 1 || gridSize > 100)) {
        generateGrid(gridSize);
    }
}

function generateGrid(gridSize) {
    container.replaceChildren();
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.flexBasis = `${800 / gridSize}px`;
        container.appendChild(box);
    }
    startDrawing();
}

function startDrawing() {
    const boxes = document.querySelectorAll('.box');
    for (const box of boxes) {
        box.addEventListener('mouseover',
            (event) => { updateBoxColor(event) }
        );
    }
}

function updateBoxColor(event) {
    if (event.buttons === 1) {
        let box = event.target;
        box.style.backgroundColor = 'black';
        console.log(event);
    }
}

function clearGrid() {
    const boxes = document.querySelectorAll('.box');
    for (const box of boxes) {
        box.style.backgroundColor = '';
    }
}

generateGrid(16);
