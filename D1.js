/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
Javascript nasce per dare maggiore "dinamicità" con oggetti del DOM, quindi dare dinamismo e movimento alle pagine html e CSS, in pratica cosa fa l'oggetto nel web. Viene inserito nel tag <script> nella parte bassa del <body>
L'utilizzo della "console"del browser è essenziale per il controllo del codice.

ecco alcuni tipi di dati principali:
 
Numeri e stringhe sono 2 tipi principali di valori.

ci sono le variabili che sono dei contenitori che all'interno c'è un valore che puo cambiare nel corso del programma.Possono avere valore numerico(numeri) o stringa(lettere, parole) e valori booleani(true -false)
Ricapitolando:
Si possono eseguire operazioni matematiche.
I datatype sono : Stringa, numerico,booleano, null e undefined.

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Emiliano";
console.log(nome);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
// Dichiarazione delle variabili contenenti i numeri
let numero1 = 12;
let numero2 = 20;

// Somma dei numeri
let risultato = numero1 + numero2;

// Stampa il risultato nella console
console.log("Il risultato dell'addizione è:......", risultato: 32);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

let myName = "emi";


myName = "ale";

console.log(myName); 

const myConstName = "NomeCostante";


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let x = 12;


let risultatoSottrazione = 4 - x;


console.log("Il risultato della sottrazione è:", risultatoSottrazione: o -8 invertendo +8);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";


if (name1 !== name2) {
  console.log("name1 è diverso da name2.");
} else {
  console.log("name1 è uguale a name2.");
}

if (name1.toLowerCase() === name2.toLowerCase()) {
  console.log("Ora name1 è uguale a name2 dopo la trasformazione in lowercase.");
} else {
  console.log("name1 è ancora diverso da name2 dopo la trasformazione in lowercase.");
}
/* SCRIVI QUI LA TUA RISPOSTA */
