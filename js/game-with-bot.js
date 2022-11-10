import ai from './bot-algorithm.js';
import { winCombo } from './win-combo.js';
import { zero, cross } from './template.js';

const refs = {
    game: document.querySelector('.game'),
    result: document.querySelector('.result'),
    btnGame: document.querySelector('.new-game'),
    fields: document.querySelectorAll('.field'),
    aiWinsCounter: document.querySelector('.ai-wins-counter'),
    playerWinsCounter: document.querySelector('.player-wins-counter'),
    drawsCounter: document.querySelector('.draws-counter'),
};

let step = false;
let count = 0;
let timeoutId = null;

refs.btnGame.addEventListener('click', newGame);
refs.game.addEventListener('click', onGameClick);

//* templates

//* --------------------|onClick|--------------------

function onGameClick(e) {
    if (e.target.nodeName !== 'DIV') return;
    if (!step) stepCross(e.target);
}

//* --------------------|stepsCross|--------------------

function stepCross(target) {
    count += 1;
    step = !step;

    target.innerHTML = cross;
    target.classList.add('x', 'clicked');

    checkWinner();

    refs.game.removeEventListener('click', onGameClick);
    setTimeout(stepZero, 1000);
}

//* --------------------|AI step|--------------------

function stepZero() {
    if (refs.result.textContent.length > 0) return;
    step = !step;
    count += 1;

    let indx = ai(refs.fields, count);

    refs.fields[indx].innerHTML = zero;
    refs.fields[indx].classList.add('o', 'clicked');

    checkWinner();

    refs.game.addEventListener('click', onGameClick);
}

//* --------------------|checkWinner|--------------------

function checkWinner() {
    winCombo.forEach((array) => {
        if (isContainsX(array)) xWinner(array);
        if (isContainsO(array)) oWinner(array);
    });
    if (count === 9) {
        if (!hasWinner()) {
            refs.result.textContent = 'DRAW';
            refs.drawsCounter.textContent =
                Number(refs.drawsCounter.textContent) + 1;
            refs.game.removeEventListener('click', onGameClick);
        }
    }
}

function isContainsX(array) {
    return array.every((el) => refs.fields[el].classList.contains('x'));
}

function isContainsO(array) {
    return array.every((el) => refs.fields[el].classList.contains('o'));
}

function addClass(winCombination) {
    winCombination.forEach((element) => {
        refs.fields[element].classList.add('active');
    });
}

function xWinner(winCombination) {
    clearTimeout(timeoutId);
    addClass(winCombination);
    refs.result.textContent = 'Winner: X';
    refs.playerWinsCounter.textContent =
        Number(refs.playerWinsCounter.textContent) + 1;
    refs.game.removeEventListener('click', onGameClick);
}

function oWinner(winCombination) {
    clearTimeout(timeoutId);
    addClass(winCombination);
    refs.result.textContent = 'Winner: 0';
    refs.aiWinsCounter.textContent = Number(refs.aiWinsCounter.textContent) + 1;
    refs.game.removeEventListener('click', onGameClick);
}

function hasWinner() {
    return winCombo.some(
        (array, i) => isContainsX(array) || isContainsO(array)
    );
}

//* --------------------|New Game|--------------------

function newGame() {
    step = false;
    count = 0;
    refs.result.textContent = '';
    clearBoard();
    refs.game.addEventListener('click', onGameClick);
}

function clearBoard(params) {
    refs.fields.forEach((item) => {
        item.innerHTML = '';
        item.classList.remove('x', 'o', 'active', 'clicked');
    });
}
