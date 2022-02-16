// Get elements
const tiles = Array.from(document.querySelectorAll('.box'));
const playerDisplay = document.querySelector('.display-player');
const announcer = document.querySelector('.announcer');
const resetButton = document.getElementById('reset');

// create variables for app
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;