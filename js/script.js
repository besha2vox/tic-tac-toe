const refs = {
    game: document.querySelector('.game'),
    result: document.querySelector('.result'),
    btnGame: document.querySelector('.new-game'),
    fields: document.querySelectorAll('.field'),
};

let step = false;
let count = 0;
const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

refs.btnGame.addEventListener('click', newGame);
refs.game.addEventListener('click', onGameClick);

//* templates
const zero = `<svg class="zero">
				<circle r="45" cx="58" cy="58" stroke="blue" stroke-width="10" 
                fill="none" stroke-linecap="round" />
			</svg>`;
const cross = `<svg class="cross">
				<line class="first" x1="15" y1="15" x2="100" y2="100" 
                stroke="red" stroke-width="10" stroke-linecap="round" />
				<line class="second" x1="100" y1="15" x2="15" y2="100" 
                stroke="red" stroke-width="10" stroke-linecap="round" />
			</svg>`;
//* templates

function stepCross(target) {
    target.innerHTML = cross;
    target.classList.add('x');
    count += 1;
}
function stepZero(target) {
    target.innerHTML = zero;
    target.classList.add('o');
    count += 1;
}

function onGameClick(e) {
    if (e.target.nodeName !== 'DIV') return;
    if (!step) stepCross(e.target);
    if (step) stepZero(e.target);

    step = !step;
    checkWinner();
}

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
        item.classList.remove('x', 'o', 'active');
    });
}

function isContainsX(array) {
    return array.every((el) => refs.fields[el].classList.contains('x'));
}

function isContainsO(array) {
    return array.every((el) => refs.fields[el].classList.contains('o'));
}

function hasWinner() {
    return winCombo.some(
        (array, i) => isContainsX(array) || isContainsO(array)
    );
}

function checkWinner() {
    winCombo.forEach((array) => {
        if (isContainsX(array)) xWinner(array);
        if (isContainsO(array)) oWinner(array);
    });
    if (count === 9) {
        if (!hasWinner()) refs.result.textContent = 'DWAW';
    }
}

function addClass(winCombination) {
    winCombination.forEach((element) => {
        refs.fields[element].classList.add('active');
    });
}

function xWinner(winCombination) {
    addClass(winCombination);
    refs.result.textContent = 'Winner: X';
    refs.game.removeEventListener('click', onGameClick);
}

function oWinner(winCombination) {
    addClass(winCombination);
    refs.result.textContent = 'Winner: 0';
    refs.game.removeEventListener('click', onGameClick);
}
