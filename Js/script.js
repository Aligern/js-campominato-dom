// we need to create a game where the player must click on the boxes inside our squares

// we create a variable to call our button from our index.html:
let elBtnPlay = document.getElementById("startBtn");
let cellsNumber;
let blacklist = [];
let score = 0;


// this button will make the game start:
elBtnPlay.addEventListener('click', function() {
    const mineField = document.getElementById("mineField");
    mineField.innerHTML = '';
    console.log('iniziamo a giocare!');
    const difficultySelect = document.getElementById("difficulty");
    cellsNumber = parseInt(difficultySelect.value);
    console.log(cellsNumber);
    const mineNumber = 16;
   for (let i = 0; i < mineNumber; i++) {
        blacklist = generateUniqueRandomNumber (1, 100, mineNumber);
    };
    console.log(blacklist);
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
    let mineTrigger = false;
    // this constant calls our "mineField"
    // 
//now we tell the machine how to create our cells
    for (let i = 0; i < cellsNumber; i++) {
        const cell = document.createElement("article");
        // here we add to our cells the classes we want to give them based on the difficulty:
        mineField.appendChild(cell);
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
            if (mineTrigger === false) {
                if (blacklist.includes(parseInt(cell.textContent))) {
                    mineTrigger = true;
                }
                if (mineTrigger === true) {
                    cell.classList.add('ls-lose');
                    
                }
                else {
                      cell.classList.add('ls-blue');
                }
                console.log(`Il tuo punteggio è ${score}`);
            } else {
                console.log('hai perso');
         };
        });
    }
};

// we need to create a function to put some mines into our "mineField":
// the AI must generate 16 random Numbers in the same range of the chosen difficulty: our mines. ATTENTION:**only one mine can be placed in a cell, so into our minesArray we need no repeated numbers.

// randomizer functions:
function generateUniqueRandomNumber (min,max,mineNumber) {
    // this is our randomUniqueNumber
    let randomNumber;
    // this is our flag
    let isFound = false;
    let blacklist = [];
    //while our flag is false
    while (isFound === false) {
        while(blacklist.length < mineNumber) {
            //we assign to randomNumber a value between our (min,max):
         randomNumber = getRndInteger(min,max);
         // if our randomNumber IS NOT CONTAINED inside our blacklist is found become isfound = true
         if (!blacklist.includes(randomNumber)) {
            isFound = true;
             blacklist.push(randomNumber);
            }
        }
        return blacklist; 
    }
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};
