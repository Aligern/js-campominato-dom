// we need to create a game where the player must click on the boxes inside our squares

// we create a variable to call our button from our index.html:
let elBtnPlay = document.getElementById("startBtn");

// this button will make the game start:
elBtnPlay.addEventListener('click', function() {
    const mineField = document.getElementById("mineField");
    mineField.innerHTML = '';
    console.log('iniziamo a giocare!');
    createGrid();
}
);

// this function works on the cells inside our "mineField"
function executeOnClick(cell) {
    cell.classList.toggle('ls-blue');
    // we print on console the number inside the cell we 'click' into:
    console.log(cell.textContent);
};

//we do a function to create our grid into our "mineField" container:
function createGrid () {
    // this constant calls our "mineField"
    // here we define the number of cell we need:
    const cellCount = 100;
    // now we tell the machine how to create our cells
    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement("div");
        // here we add to our cells the classes we want to give them:
        cell.classList.add("ls-cell","d-flex");
        // with cell.textContent we are telling the machine to print sequentially the text
        cell.textContent = i + 1;
        cell.addEventListener('click', function() {
            executeOnClick(cell);
            // here we will put
        });
        mineField.appendChild(cell);   
    }
};