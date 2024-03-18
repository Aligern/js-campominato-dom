// we need to create a game where the player must click on the boxes inside our squares

// we create a variable to call our button from our index.html:
let elBtnPlay = document.getElementById("startBtn");
let cellsNumber;

// this button will make the game start:
elBtnPlay.addEventListener('click', function() {
    const mineField = document.getElementById("mineField");
    mineField.innerHTML = '';
    console.log('iniziamo a giocare!');
    createGrid();
    const difficultySelect = document.getElementById("difficulty");
    cellsNumber = parseInt(difficultySelect.value);
    console.log(cellsNumber);
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
