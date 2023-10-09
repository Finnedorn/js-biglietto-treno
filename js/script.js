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