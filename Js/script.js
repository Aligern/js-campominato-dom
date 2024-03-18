// we need to create a game where the player must click on the boxes inside our squares

// we create a variable to call our button from our index.html:
let elBtnPlay = document.getElementById("startBtn");
let cellsNumber;

// this button will make the game start:
elBtnPlay.addEventListener('click', function() {
    const mineField = document.getElementById("mineField");
    mineField.innerHTML = '';
    console.log('iniziamo a giocare!');
    const difficultySelect = document.getElementById("difficulty");
    cellsNumber = parseInt(difficultySelect.value);
    console.log(cellsNumber);
    createGrid();
});

// this function works on the cells inside our "mineField"
function executeOnClick(cell) {
    cell.classList.add('ls-blue');
    // we print on console the number inside the cell we 'click' into:
    console.log(cell.textContent);
};

//we do a function to create our grid into our "mineField" container:
function createGrid () {
    // this constant calls our "mineField"
    // 
//now we tell the machine how to create our cells
    for (let i = 0; i < cellsNumber; i++) {
        const cell = document.createElement("article");
        // here we add to our cells the classes we want to give them:
        if (cellsNumber === 81){
            cell.classList.add("ls-cell-medium");
        } else if (cellsNumber === 49) {
            cell.classList.add("ls-cell-hard");
        } else {
            cell.classList.add("ls-cell");
        }
        cell.addEventListener('click', function() {
            executeOnClick(cell);
            cell.textContent = i + 1;     
        });
        mineField.appendChild(cell);   
    }
};

// we need to create a function to put some mines into our "mineField":

// the AI must generate 16 random Numbers in the same range of the chosen difficulty: our mines. ATTENTION:**only one mine can be placed in a cell, so into our minesArray we need no repeated numbers.

//we need a random number generator
//this is our randomizer function:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function generateUniqueRandomNumber (min,max,list) {
    const blacklist = [
        1,
        3,
        5,
        7,
        9,
        11,
        13
    ];
    let randomNumber;

    

};