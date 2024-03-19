// we need to create a game where the player must click on the boxes inside our squares

// we create a variable to call our button from our index.html:
let elBtnPlay = document.getElementById("startBtn");
let cellsNumber;
let blacklist = [];
let score = 0;
const mineNumber = 16;
let gameOver = false;
let maxscore = 0;

// this button will make the game start:
elBtnPlay.addEventListener('click', function() {
    const mineField = document.getElementById("mineField");
    mineField.innerHTML = '';
    console.log('iniziamo a giocare!');
    const difficultySelect = document.getElementById("difficulty");
    cellsNumber = parseInt(difficultySelect.value);
    console.log(cellsNumber);
    let bombCount = parseInt(mineNumber)
    let bomb = getRndInteger (1,cellsNumber);
    console.log(bomb);
    blacklist = generateBomb (cellsNumber, bombCount);
    console.log(blacklist);
    createGrid(blacklist);
});

//we do a function to create our grid into our "mineField" container:
function createGrid (blacklist) {
    // this constant calls our "mineField"
    // here we define the number of cell we need:
    let cell;
    // now we tell the machine how to create our cells
//now we tell the machine how to create our cells
    for (let i = 0; i < cellsNumber; i++) {
        const cell = document.createElement("article");
        // here we add to our cells the classes we want to give them:
        cell.classList.add("ls-cell");
        // with cell.textContent we are telling the machine to print sequentially the text
        if (cellsNumber === 81){
            cell.classList.add("ls-cell-medium");
        } else if (cellsNumber === 49) {
            cell.classList.add("ls-cell-hard");
        } 
        cell.addEventListener('click', function() {
            cell.textContent = i + 1;
            executeOnClick(cell,blacklist);
        }, {once:true});
        mineField.appendChild(cell);
        //console.log(cell);
    }
    return cell;
};

// we need to create a function to put some mines into our "mineField":
// the AI must generate 16 random Numbers in the same range of the chosen difficulty: our mines. ATTENTION:**only one mine can be placed in a cell, so into our minesArray we need no repeated numbers.

// function endgame() {
//     const messageEnd = document.getElementById('result');
//     let message = `<h4>Il tuo punteggio è: ${score}</h4>`;
//     if (gameOver) {
//         gameOver = true;
//         message += 'hai perso, ritenta!';
//     } else {
//         score++;
//         messageEnd.innerHTML = '';
//         if ( score === maxscore) {
//             messageEnd.innerHTML += 'hai vinto!';
//             gameOver=true;
//         }
//     }
// }

// this is our bomb generator:
function generateBomb(cellsNumber, bombCount) {
    let blacklist = [];
    let counter = 0;
    while (blacklist.length < bombCount && counter < 100) {
        let bomb = getRndInteger (1, cellsNumber);
        if (!blacklist.includes(bomb)) {
            blacklist.push(bomb);
        }
        counter++;
    } 
    return blacklist;
};

// randomized numbers function:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

// this function works on the cells inside our "mineField"
function executeOnClick(cell,blacklist) {
    if (!gameOver){
        const cellsNumber = parseInt(cell.textContent);
        if(blacklist.includes(cellsNumber)) {
            cell.classList.add('ls-lose')
            gameOver=true;
            cell.forEach(cell => {cell.removeEventListener('click', cellClickHandler)});
        } else {
            cell.classList.add('ls-blue')
            console.log(cell.textContent);
            score ++;
            console.log(score,'Punteggio');
            if (score === maxscore) {
                console.log('hai vinto!')
            }
        }
    }
    // we print on console the number inside the cell we 'click' into:
    // console.log(typeof cell.textContent);
};