// Get elements
const tiles = Array.from(document.querySelectorAll('.box'));
const playerDisplay = document.querySelector('.display-player');
const announcer = document.querySelector('.announcer');
const resetButton = document.getElementById('reset');

// create variables for app
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

// tile check function 
const isValidaction = (tile) => {
    if (tile.innerText === 'X' || tile.innerText === 'O'){
        return false;
    }

    return true;
}

// update board function
const updateBoard = (index) => {
    board[index] = currentPlayer;
}

// remove and change current player
const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
}

// player action function
const userAction = (tile, index) => {
    if(isValidaction(tile) && isGameActive) {
        tile.innerText = currentPlayer;
        tile.classList.add(`player${currentPlayer}`);
        updateBoard(index);
        handleResultValidation();
        changePlayer();
    }
}

// reset board function 
const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    announcer.classList.add('hide');

    if (currentPlayer === 'O') {
        changePlayer();
    }

    tiles.forEach(tile => {
        tile.innerText = '';
        tile.classList.remove('playerX');
        tile.classList.remove('playerO');
    });
}

// add event listener to individual box
tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
})