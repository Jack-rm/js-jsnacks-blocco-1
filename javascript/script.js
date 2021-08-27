/*
 * /// SNACK #1
 *
 * L'utente inserisce due parole in successione, con due prompt. 
 * Il software stampa prima la parola più corta, poi la parola più lunga.
*/

/*
const primaParola = prompt("Inserisci una parola");
const secondaParola = prompt("Inserisci un'altra parola");

if (primaParola.length == secondaParola.length){
        console.log("Le parole hanno lo stesso numero di caratteri")
} else if (primaParola.length > secondaParola.length){
        console.log(primaParola + "," + secondaParola)
} else {
        console.log(secondaParola + "," + primaParola)
}
*/





/**
 *  /// SNACK #2
 *
 * Il software deve chiedere per 10 volte all'utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti. 
*/


/*
var numeriInseriti = [];
var total = 0;

for (let i= 0; i < 10; i++){
        numeriInseriti.push(parseInt(prompt("inserisci un numero")))
}

for (var i = 0; i < numeriInseriti.length; i+=1){
        total += numeriInseriti[i];
}

console.log(total)
*/





/**
 *   /// SNACK #3
 * 
 *  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
 *  chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

/*
let invitatiAllaFesta = ["Gatsby", "Alice", "Jacopo", "Malcolm", "Andrew"];
let status = "Non invitato"

let nomeInserito = prompt("inserisci il tuo nome");

for (let i = 0; i < invitatiAllaFesta.length; i++){
       if (nomeInserito == invitatiAllaFesta[i]){
               status = "Invitato";
       }
}

alert(status)
*/





/**
 *   /// SNACK #4
 * 
 * Crea un array vuoto.
 * Chiedi per 6 volte all'utente di inserire un numero,
 * se è dispari inseriscilo nell'array.
*/

/*
let myArr = [];
let numeroInserito = 0;

for (let i = 0; i < 6; i++){
        let numeroInserito = parseInt(prompt("Inserisci un numero"));
        if ( numeroInserito % 2 == 1){
                myArr.push(numeroInserito)
        } 
}

console.log(myArr)
*/





/**
 *  /// SNACK #5
 * 
 * Calcola la somma e la media dei primi 10 numeri
*/

/*
var totale = 0;

for (let i = 0; i < 10; i++){
    totale += i; // (totale = totale + i) il "+="" non serve a non ripetere la somma
}

console.log(totale);
*/

// media dei primi 10 numeri

/*
var totale = 0

for (let i = 1; i <= 10; i++){
    totale += i / 10;
}

console.log(totale)
*/

// ripeto l'esercizio ma con un ciclo while

/* 
let contatore = 0;

while ( contatore < 10) {
    somma = somma + contatore;
    contatore++;
}

console.log(somma);
console.log(somma / 10);
*/






/**
 *  /// SNACK #6
 *
 *	Crea un array vuoto.
 * 	Chiedi all'utente di inserire cinque parole.
 *	Quando una parola è scritta con tutti i caratteri in maiuscolo stampa un alert,
 *	altrimenti inseriscila nell'array.
 *
*/

/*
let myArray = [];

for ( let i = 0; i < 5; i++){
    let paroleScelte = prompt("Inserisci una parola");{
        if ( paroleScelte === paroleScelte.toUpperCase()){
            alert("LA PAROLA E' TROPPO MAIUSCOLA!")
        } else {
            myArray.push(paroleScelte);
        }
    }
}

console.log(myArray);
*/







/**
 * /// SNACK #7
 * 
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
*/

/*
let sommaFor = 0;

for ( let i = 0; i < 5; i++){
    sommaFor = sommaFor + parseInt(prompt("inserisci un numero"))
}

console.log(sommaFor);

// Lo eseguo con un ciclo while.

let sommaWhile = 0;
let j = 0;

while ( j < 5){
    sommaWhile = sommaWhile + parseInt(prompt("inserisci un numero"))
    j++
}

console.log(sommaWhile);
*/






/**
 *  /// SNACK #8
 *  
 * Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
 * una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
 * Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
 * 
*/

/*
let listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
let listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];

let falsaListaInvitati = [];

// Lo svolgo con un ciclo for

for ( let i = 0; i < 8 ; i++){
    let nomeRandomico = Math.floor(Math.random() * listaNomi.length);
    let cognomeRandomico = Math.floor(Math.random() * listaCognomi.length);
    let nomeInteroRandomico = listaNomi[nomeRandomico] + ' ' + listaCognomi[cognomeRandomico];
    falsaListaInvitati.push(nomeInteroRandomico);
}

console.log(falsaListaInvitati)
*/

/*
*  document.getElementById(" ## ").innerHTML += '<li>' + nomeInteroRandomico + '</li>';
*
*  document.getElementById("lista-nomi").innerHTML = listaNomi.toString();
*  document.getElementById("lista-cognomi").innerHTML =  listaCognomi.toString();
*
*/

// Lo svolgo con un cilo While trasformando i nomi al femminile con desinenza "ina"

/*
let j = 0

while (j < listaNomi.length) {
    if (listaNomi[j].charAt(listaNomi[j].length - 1) == 'a' ||
        listaNomi[j].charAt(listaNomi[j].length - 1) == 'e' ||
        listaNomi[j].charAt(listaNomi[j].length - 1) == 'i' ||
        listaNomi[j].charAt(listaNomi[j].length - 1) == 'o' ||
        listaNomi[j].charAt(listaNomi[j].length - 1) == 'u' ||
        listaNomi[j].charAt(listaNomi[j].length - 1) == 'y' ) {
            listaNomi[j] = listaNomi[j].slice(0,-1) + 'ina';        
        } else {
            listaNomi[j] = listaNomi[j] + 'ina';
        }
    j++;
}
*/





/**
 *  /// SNACK #9
 * 
 *  A)
 *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
 *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
 *   tanti quanti l'altro.
 * 
 *  B)
 *  Mostriamo in HTML le due liste in parallelo
*/

/*
let primaLista = ['Mela','Pera','Banana','Uva','Fragola','Kiwi'];
let secondaLista = ['Formaggio','Pane','Vino','Acqua','Pepe','Sale','Insalata','Carne','Pesce','Strudel'];

while ( primaLista.length < secondaLista.length ){
    primaLista.push(Math.floor(Math.random() * secondaLista.length));
}

console.log(primaLista);
*/

// Esempio esercizio corretto in classe

/*
let listaRock = ["Guns", "Van Halen", "AC/DC", "Aerosmith", "Queens of the...", "Queen" , "Rolling Stones", "Pink Floyd", "Not Available", "Cugini di Campagna"];
let listaSoul = ["Otis Redding", "Aretha Franklin", "Ray Charles", "Stevie Wonder", "Prince", "Pink"];
 
if ( listaRock.length > listaSoul.length) {
    while ( listaSoul.length < listaRock.length ) {
        listaSoul.push(Math.floor(Math.random() * 1240));
    }
} else if (( listaRock.length < listaSoul.length)) {
    while ( listaRock.length < listaSoul.length ) {
        listaRock.push(Math.floor(Math.random() * 6613));
    }
} else {
    alert("Sono uguali, non aggiungo nessun elemento.");
}

console.log(listaRock);
console.log(listaSoul);
*/