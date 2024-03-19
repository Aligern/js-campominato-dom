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
    const mineField = document.getElementById("mineField"); // we recall from our HTML our "mineField" <div>
    mineField.innerHTML = ''; // we reset the "mineField" to make it ready for a new "play"
   // console.log('iniziamo a giocare!');
    const difficultySelect = document.getElementById("difficulty"); // here we get the value from our "difficulty" select from our HTML
    cellsNumber = parseInt(difficultySelect.value); // here we tell how many cells needs to be into our "mineField"
    console.log(cellsNumber);
    let bombCount = parseInt(mineNumber);
    let bomb = getRndInteger (1,cellsNumber);
    console.log(bomb);
    blacklist = generateBomb (cellsNumber, bombCount);
    console.log(blacklist);
    createGrid(blacklist);
});

//we do a function to create our grid into our "mineField" container:
function createGrid (blacklist) {

    // here we define the number of cell we need:
    let cell;


//now we tell the machine how to create our cells
    for (let i = 0; i < cellsNumber; i++) {
        const cell = document.createElement("article");

        // here we add to our cells the classes we want to give them:
        cell.classList.add("ls-cell");

        // here we define how many cells our "mineField" will have on the generation if the chosen difficulty is different from easy
        if (cellsNumber === 81){
            cell.classList.add("ls-cell-medium");
        } else if (cellsNumber === 49) {
            cell.classList.add("ls-cell-hard");
        };

        // this is the call of our cells function
        cell.addEventListener('click', function() {

            // with cell.textContent we are telling the machine to print sequentially the text
            cell.textContent = i + 1;
            executeOnClick(cell,blacklist);
        }, {once:true});
        mineField.appendChild(cell);
        //console.log(cell);
    }
    return cell;
};

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
    // this is our bomb array
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
            cell.removeEventListener('click', cellClickHandler);
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