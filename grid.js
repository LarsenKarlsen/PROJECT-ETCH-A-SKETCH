const mainObj = document.querySelector('main');
const gridObj = document.querySelector('.grid');

let gridSide = 256;
//create 16x16 grid;

const changeClassObj = (event) =>{
    event.target.classList.toggle('gridCellh')
};
// initial state
// creating tab with gridSide X gridSide
for (let i=0; i<gridSide; i++){
    const gridCellObj = document.createElement('div');
    gridCellObj.classList.add('gridCell');
    gridCellObj.addEventListener('mouseover', changeClassObj);
    gridObj.appendChild(gridCellObj);
};

const resetButtonObj = document.createElement('button');

// resetButtonObj.classList.add('resetButton');
resetButtonObj.textContent = 'RESET BUTTON'
resetButtonObj.style.height = `50px`;
resetButtonObj.style.width = getComputedStyle(gridObj)['width'];
gridObj.appendChild(resetButtonObj);