/*
    Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let cpu = (Math.floor(Math.random() * 6) + 1); 
let player = (Math.floor(Math.random() * 6) + 1); 

document.getElementById("cpu").innerHTML = cpu;
document.getElementById("player").innerHTML = player;

// test
console.log(cpu, player);

let result = "";

if (cpu > player) {
    result = "CPU wins";
} else if (cpu == player) {
    result = "Draw";
} else {
    result = "Player wins"
}

document.getElementById("winner").innerHTML = result;