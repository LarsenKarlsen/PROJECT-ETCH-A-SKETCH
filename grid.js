const mainObj = document.querySelector('main');
let gridObj = document.querySelector('.grid');

let gridSquare = 256;

// initial state
// creating tab with gridSide X gridSide

//reset func

const resetFunction = (gridSide) => {
    //get all grid cells
    gridSide = Number(prompt('Enter size of one side (100 max)'))//**2;
    gridSquare = gridSide**2;
    gridObj = document.querySelector('.grid');
    if (gridSide<21){

        mainObj.removeChild(gridObj);
        let _gridObj = document.createElement('div');
        _gridObj.classList.add('grid');
        mainObj.appendChild(_gridObj);
        createGrid(gridSquare);
    
    }else{
        alert('mistake!!! size of one side must be 100 max')        
    }

}

const createGrid = (gridSquare, grid) => {
    grid = document.querySelector('.grid');
    let gridSide = gridSquare**(1/2);
    grid.style.gridTemplateRows = `repeat(${gridSide}, 50px)`;
    grid.style.gridTemplateColumns = `repeat(${gridSide}, 50px)`;
    const changeClassObj = (event) =>{
        event.target.classList.toggle('gridCellh')
    };

    for (let i=0; i<gridSquare; i++){
        const gridCellObj = document.createElement('div');
        gridCellObj.classList.add('gridCell');
        gridCellObj.addEventListener('mouseover', changeClassObj);
        grid.appendChild(gridCellObj);
    };

    const resetButtonObj = document.createElement('button');
    resetButtonObj.textContent = 'RESET BUTTON'
    resetButtonObj.style.height = `50px`;
    resetButtonObj.style.width = getComputedStyle(grid)['width'];
    resetButtonObj.addEventListener('click',resetFunction )
    grid.appendChild(resetButtonObj);

} 
createGrid(gridSquare); //create 16x16 grid;




// resetButtonObj.classList.add('resetButton');
