/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

/* ESERCIZIO 1 Mail
1. Chiedi all’utente la sua email
2. controlla che sia nella lista di chi può accedere
3. stampa un messaggio appropriato sull’esito del controllo

strumenti
prompt 
array
ciclo for
condizione if/else
*/

//1.
let userMail = prompt('inserisci la tua mail');
console.log(userMail);
//la condizione è falsa di default 
userMail = false;

//2.
const usersList = ['pincopallino@gmail.com', 'dany.t_87@gmail.com', 'nomeutente@hotmail.com'];

for (let i = 0; i < usersList.length; i++) {

    const user = usersList[i];
    const h1El = document.querySelector('h1');

    if (userMail == user) {
        //qui la condizione diventa vera
        userMail = true;
        console.log(' Puoi accedere ');
    }

}
if (userMail == false) {
    console.log('Accesso negato ');
}
/**
 * console.log('Puoi accedere');
        //3.
        h1El.insertAdjacentHTML('beforeend', userMail + ' Puoi accedere ');
        console.log('Accesso negato');
        //3.
        h1El.insertAdjacentHTML('beforeend', userMail + ' Accesso negato ');
 */