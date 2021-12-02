import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-form');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const chatchphrasesEl = document.getElementById('chatchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

console.log(headDropdown);
console.log(middleDropdown);
console.log(bottomDropdown);
console.log(headEl);
console.log(middleEl);
console.log(bottomEl);
console.log(reportEl);
console.log(chatchphrasesEl);
console.log(catchphraseButton);
console.log(catchphraseInput);


let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

let catchphrases = [];

headDropdown.addEventListener('change', () => {
    const id = headDropdown.value;

    headCount++;

    headEl.backgroundImage = `url('./assets/${id}-head.png')`;
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    const value = middleDropdown.value;

    middleCount++;
    middleEl.backgroundImage = `url("./assets/${value}-middle.png")`;
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    const value = bottomDropdown.value;

    bottomCount++;
    bottomEl.backgroundImage = `url("./assets/${value}-pants.png")`;
    displayStats();
});

catchphraseButton.addEventListener = () => {
    const newCatchphrase = catchphraseInput.value;
    catchphrases.push(newCatchphrase);

    catchphraseInput.value = '';
    displayCatchphrases();
};

function displayStats() {
    const statsString = makeStatsString(headCount, middleCount, bottomCount);
    reportEl.textContent = statsString;
}

function displayCatchphrases() {
    chatchphrasesEl.textContent = '';

    for (let catchphrase of catchphrases) {
        const p = document.createElement('p');

        p.classList.add('catchphrase');
        p.textContent = catchphrase;

        chatchphrasesEl.append(p);
    }
}
