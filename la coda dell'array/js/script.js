/*
    la coda dell' array
    Creare un array con un numero a piacere di elementi.
    Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell'array.
    Attenzione #1: quanti elementi minimo dovrà contenere l'array?
    Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, anche se
    non conosciamo a priori quanti elementi contiene.
    Extra Bonus
    Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri interi casuali
    quanti sono gli elementi da inserire.
    Attenzione #3: quali controlli dobbiamo fare sull'input dell'utente?
    Super Extra Bonus: chiedere all'utente anche quanti elementi vanno estratti dal fondo dell'array.
*/

let colori = ["bianco", "nero", "giallo", "verde", "rosso", "blu", "viola", "grigio"];
let coda = document.getElementById("coda");

for (let i=colori.length - 5; i<colori.length; i++) {
    // se il ciclo parte da indice negativo non fa nulla e continua a incrementare l'indice
    if (i >= 0) {
        coda.innerHTML += `<li>${colori[i]}</li>`;
    }
}

//Extra Bonus
let numbers = [];
let arrayLength = prompt("Quanti elementi avrà l'array?");

if (arrayLength > 0) {
    for (let i=0; i<arrayLength; i++) {
        numbers[i] = Math.floor(Math.random() * 100);
    }
} else {
    alert("Inserire un numero maggiore di 0");
}

console.log(numbers);