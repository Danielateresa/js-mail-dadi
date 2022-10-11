/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */


//1. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
//2. Stabilire il vincitore, in base a chi fa il punteggio più alto


/*strumenti
math.random inserita in due variabili, una per il pc, ua per il giocatore*/


//1
const numPc = Math.round(Math.random() * 6);
console.log(numPc);

const numPlayer = Math.round(Math.random() * 6);
console.log(numPlayer);
