// 1-Il computer deve generare 16 numeri casuali tra 1 e 100.
// 2-I numeri non possono essere duplicati.
// 3-In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// 4-L’utente non può inserire più volte lo stesso numero.
// 5-Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// 6-La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//7- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// 1
var campoMinato = [];
var numeroMassimoTentativi
var tentativiUtente = [];
var punteggio = 0;
var difficolta ;
var numeroDifficolta

difficolta = prompt('Scegli il grado di difficoltà tra 0, 1 e 2')
switch (difficolta) {
  case '2':
    numeroDifficolta = 50;
    break;
  case '1':
  numeroDifficolta = 80;
    break;
  default:
  numeroDifficolta = 100;
}
numeroMassimoTentativi  = numeroDifficolta - 16;

var i =0;
while (campoMinato.length < 16) {
  var bombe = randomNumber(1,numeroDifficolta);
  console.log('Numero casuale' , bombe)
  var checkNumber = controllo(campoMinato, bombe);
  if (checkNumber == false) {
    campoMinato.push(bombe);
  }
}
console.log(campoMinato);

var perso = false;
var i=0;
while (tentativiUtente.length < numeroMassimoTentativi && perso == false) {
  var numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e ' + numeroDifficolta));
  console.log('numero utente' , numeroUtente);
  var checkNumber = controllo(tentativiUtente, numeroUtente );

var gameControl = controllo(campoMinato ,numeroUtente)
if (gameControl == true) {
alert('hai perso');
perso = true;
} else  if (checkNumber == false) {
    tentativiUtente.push(numeroUtente);
    punteggio++;
  } else {
    alert('numero duplicato');
  }
}
alert('punteggio: ' + punteggio);
console.log(tentativiUtente);

//------------------------------------------------------------
function randomNumber(min, max)  {
  return Math.floor(Math.random() * max) + min;
}

function controllo (array, numero) {
  var check = false;
  for (var i = 0; i < array.length;  i++) {
    if (numero==array[i]) {
      check = true;
      return check;
    }
  }
  return check;
}
//------------------------------------------------------------
