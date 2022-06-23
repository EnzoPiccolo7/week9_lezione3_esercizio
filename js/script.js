"use strict";
class form {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
}
let nome = document.querySelector('#nome');
let cognome = document.querySelector('#cognome');
let redditoannuolordo = document.querySelector('#redditolordo');
let bott = document.querySelector('#bottone');
bott.addEventListener('click', prendi);
function prendi() {
    let _nome = nome.value;
    let _cognome = cognome.value;
    let _redditoannuolordo = redditoannuolordo.value;
    let redditotasseinps = (_redditoannuolordo * 30) / 100;
    console.log(redditotasseinps);
    console.log(_nome, _cognome, _redditoannuolordo);
}
