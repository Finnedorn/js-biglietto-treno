//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let traindiv = document.getElementById ('train');
let km = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
let tax = 0.21;
let age = parseInt(prompt('Quanti anni hai?'));

console.log ('numero km', km, 'età passeggero', age);

if (isNaN(km) || isNaN(age)) {
   alert('inserisci dei numeri');
   location.reload();
}

if (age <=17) {
    let under_18 = km * tax - ((km * tax) * 20/100);
    traindiv.innerHTML = 'Costo del biglietto: ' + under_18.toFixed(2) + ' € (sconto minori di 18 anni incluso)';
} else if (age >=65) {
    let over_65 = km * tax - ((km * tax) * 40/100);
    traindiv.innerHTML = 'Costo del biglietto: ' + over_65.toFixed(2) + ' € (sconto minori di 18 anni incluso)';
} else {
    let pure = km * tax;
    traindiv.innerHTML = 'Costo del biglietto: ' + pure.toFixed(2) + ' €'; 
}