 class form {
    codredd:number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;

    constructor( codredd:number,redditoannuolordo: number,tasseinps: number, tasseirpef: number){
      this.codredd = codredd;
      this.redditoannuolordo = redditoannuolordo;
      this.tasseinps = tasseinps;
      this.tasseirpef = tasseirpef;
    }
} 

let nome = <HTMLInputElement> document.querySelector('#nome');
let cognome = <HTMLInputElement> document.querySelector('#cognome');
let redditoannuolordo = <HTMLInputElement> document.querySelector('#redditolordo');
let bott = <HTMLInputElement> document.querySelector('#bottone');
bott.addEventListener('click',prendi);

function prendi (){
    let _nome = nome.value;
    let _cognome = cognome.value;
    let _redditoannuolordo = redditoannuolordo.value;
    let redditotasseinps:number = (_redditoannuolordo *30)/100; 
    console.log(redditotasseinps);

    console.log(_nome,_cognome,_redditoannuolordo);
}

