console.log('this dal globale', this, typeof this);

const clickButton = document.getElementById('click-button');

// clickButton.addEventListener('click', function() {
//     // Questo mi stampa l'elemento HTML che ha subito l'evento
//     console.log(this);
// });

clickButton.addEventListener('click', () => {
    console.log('click');
});

// clickButton.addEventListener('click', gestisciClick);

// function gestisciClick() {
//     console.log(this);
// }

// if (true) {
//     genericFunction();
// }

function genericFunction() {
    console.log('this da genericFunction', this, typeof this);
}

setTimeout(genericFunction, 2000);






function somma() {
    return 1 + 2;
}

console.log(somma());

// Return è implicito
const sommaArrowUno = () =>  1 + 2;
// const sommaArrowUno = () => return 1 + 2;
console.log(sommaArrowUno());

const sommaArrowDue = () => {
    return 1 + 2;
}
console.log(sommaArrowDue());