function activateButtons() {
    const gridButton = document.querySelector('#grid-size');
    const clearButton = document.querySelector('#clear-grid');
    const colorButton = document.querySelector('#color-change');
    gridButton.addEventListener('click', () => updateGridSize());
    clearButton.addEventListener('click', () => clearGrid());
    colorButton.addEventListener('click', () => updateColorSelection());
}

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
    const container = document.querySelector('#grid-container');
    container.setAttribute('ondragstart', 'return false;');
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
            (drawingEvent) => { updateBoxColor(drawingEvent) }
        );
        box.addEventListener('mousedown', 
            (drawingEvent) => { updateBoxColor(drawingEvent) }
        );
    }
}

let colorName = 'black';

function updateColorSelection() {
    colorName = prompt(
        'Enter a CSS supported color name, "random", or "gradient": ', 'black'
    );
    if (colorName === 'gradient' || colorName === 'random' ||
        CSS.supports('color', colorName.toLowerCase())) return;
    else {
        alert('Error! Invalid value entered. Please try again.')
        updateColorSelection();
    }
}

function updateBoxColor(drawingEvent) {
    //console.log(drawingEvent);
    if (drawingEvent.buttons === 1) {
        let box = drawingEvent.target;
        if (colorName === 'random') {
            box.style.backgroundColor = generateRandomColor();
            console.log(box.style.backgroundColor);
            return;
        }
        if (colorName === 'gradient') {
            generateColorGradient();
            return;
        }
        
        box.style.backgroundColor = colorName;
    }
}

function generateRandomColor() {
    const rgb = [];
    for (let i =0; i < 3; i++) {
        let rgbValue = Math.floor(Math.random() * 255);
        rgb.push(rgbValue);
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function clearGrid() {
    const boxes = document.querySelectorAll('.box');
    for (const box of boxes) {
        box.style.backgroundColor = '';
    }
}

activateButtons();
generateGrid(16);
