/*
    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.
    (non usare INCLUDES)
*/

// lista email degli utenti che possono accedere
let grantedEmails = ["giovanni.verdi@gmail.com", "luca.rossi@gmail.com", "francesco.neri@hotmail.com"];

let email = prompt("Inserisci la tua email");
let isInGranted = false;

// controllo la presenza della mail nella lista delle mail accettate
for (let i = 0; i < grantedEmails.length; i++) {
    if (email === grantedEmails[i]) {
        isInGranted = true;
        break;
    }
}

let message = document.getElementById("message");

// stampa del messaggio
if (isInGranted) {
    message.innerHTML = "La mail che hai inserito è nella lista."
} else {
    message.innerHTML = "La mail che hai inserito NON è nella lista."
}
