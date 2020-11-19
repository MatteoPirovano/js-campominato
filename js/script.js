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
var campoMinato= []
for (var i = 0; i < 15; i++) {
  var bombe = randomNumber(1,100)
  campoMinato.push(bombe)
}
console.log(campoMinato)

for (var i = 0; i < 83; i++) {
  numeriUtente= parseInt(prompt('Inserisci un numero compreso tra 1 e 100'))
  if (numeriUtente) {

}

//------------------------------------------------------------
function randomNumber(min, max)  {
  return Math.floor(Math.random() * (max - min)) + min;
}

function control(array, numero) {
  var esito = -1;
  var i = 0;
  while ( i < array.lenght && esito == -1) {
      if (numero == array[i]) {
          alert('Hai perso')
      }
    i++
  }
  return esito;
}
