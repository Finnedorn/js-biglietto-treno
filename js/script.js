/*
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
*/

/*creo una costante che chiamerò cont con document mi pesco elementi dall'html e con queryselector posso selezionare un elemento dall hmtl con quella classe o linkato a quella classe (es .container>p)*/

const cont = document.querySelector('.container')

//console.dir mi permette di visualizzare il contenuto html selezionato dentro alla mia console, in questo modo sarò sicuro di avere selzionato proprio quell'elemento 

console.dir(cont);

/*addeventlistener mi permette di dare ad una const o var la possiiblità di triggerare un evento, dentro alla parentesi inserisci tra '' il tipo di evento che causera il trigger tipo click o altri, cerca gli altri event su w3school*/

/*ho creato quindi un evento trigger con click legato ad una funzione che mi permetta al click di rendere il colore di background rosso*/


cont.addEventListener('click',
    function(){
        cont.style.backgroundcolor = 'red';
    }
);


/*ho creato un evento trigger che mi permetta di aggiungere con un click una classe bg-danger (in questo caso sto usando una classe bootstrap che renda il bg rosso, in altri casi dovremmo settare prima la classe ed i suoi attributi dal css) all'elemento container selezionato dalla variabile let cont*/

cont.addEventListener('click',
    function(){
        cont.classList.add('bg-danger');
    }
);

//ora voglio selezionare tutti e tre i bottoni dell'html, quindi creo 3 const una per ogni bottone

const redbutton = document.querySelector('.btn-danger');
const bluebutton = document.querySelector('.btn-info');
const yellowbutton = document.querySelector('.btn-warning');

//ora creo un trigger linkato ad una funzione che mi porti lo sfondo del container (cont) ad assumere il colore del bottone premuto

redbutton.addEventListener('click', 
    function(){
        const.classList.remove('bg-warning');
        const.classList.remove('bg-info');
        cont.classList.toggle('bg-danger');
    }
);

//ora creo un trigger per ogni colore 

bluebuttonbutton.addEventListener('click', 
    function(){
        const.classList.remove('bg-warning');
        const.classList.remove('bg-danger');
        cont.classList.toggle('bg-info');
    }
);

yellowbuttonbuttonbutton.addEventListener('click', 
    function(){
        const.classList.remove('bg-danger');
        const.classList.remove('bg-info');
        cont.classList.toggle('bg-warning');
    }
);

//Nota bene!! in entrambe le funzioni ho dovuto inserire il comando remove per rimuovere il colori gia seelzionati in modo tale da non creare conflitto con le classi colore all'attivazione di una o più classi!!!



//ex03

/*creo un form dove una volta inserito nome e sesso e premuto invia esca un messaggio ed un pallino colorato a seconda del sesso scelto*/

const button = document.querySelector('.btn-success');

console.dir(button);

button.addEventListener('click',
    function() {
        const nome = document.getElementById('nome').value;
        const sesso = document.getElementById('sesso').value;

        if(nome === '' || sesso === ''){
            alert('devi inserire due valori!')
        } else {
            console.log(nome);
            console.log(sesso);
            const msgsaluto = document.getElementById('saluto');
            const msgcontainer = saluto.querySelector('p');
            const box = saluto.querySelector('.box');
            
            msgcontainer.innerHTML =`
                <h3>Ciao ${nome} !</h3>
            `;
            box.classList.remove('maschio');
            box.classList.remove('femmina');
            //qui sto dicendo aggiungi il valore (value) di sesso alla class box 
            //in questo caso i valori sono maschio e femmina
            let color;
            saluto.classList.remove('d-none');
            if (sesso === 'femmina') {
                color = 'femmina';
            } else  {
                color = 'maschio'
            }
            box.classList.add(color);
            saluto.classList.remove('d-none');
        }
    }
);