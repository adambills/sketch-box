const container = document.querySelector('#grid-container');
let gridSize = 16;

for (let i = 0; i < (gridSize * gridSize); i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.flexBasis = `${800 / gridSize}px`;
    container.appendChild(box);
}

const boxes = document.querySelectorAll('.box');

for (const box of boxes) {
    box.addEventListener('mouseover', 
        (event) => {updateBoxColor(event)}
    );
}

function updateBoxColor(event) {
    if (event.buttons === 1) {
        let box = event.target;
        box.style.backgroundColor = 'black';
        console.log(event);
    }
}

