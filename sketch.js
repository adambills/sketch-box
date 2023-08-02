const container = document.querySelector('#gridContainer');
for (let i = 0; i < 100; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}