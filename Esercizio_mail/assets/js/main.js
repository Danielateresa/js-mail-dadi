/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

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
//console.log(userMail);
//la condizione è falsa di default 



//2.
const usersList = ['pincopallino@gmail.com', 'dany.t_87@gmail.com', 'nomeutente@hotmail.com'];
const h1El = document.querySelector('h1');
for (let i = 0; i < usersList.length; i++) {

    const user = usersList[i];

    if (userMail == user) {
        //qui la condizione diventa vera
        userMail = true;
        console.log(' Puoi accedere ');
        //3.
        h1El.insertAdjacentHTML('beforeend', ' Puoi accedere ');
    }
}

if (userMail != true) {

    console.log(' Accesso negato ');
    //3.
    h1El.insertAdjacentHTML('beforeend', ' Accesso negato ');
}