abstract class LavoratoreAutonomo {
    //Proprietà della classe
    private _codRedd: number;
    private _reddAnnuo: number;
    private _tasseIrpef: number;
    private _tasseInps: number;

    constructor(codRedd: number, reddAnnuo: number, tasseIrpef: number, tasseInps: number) {
        this._codRedd = codRedd;
        this._reddAnnuo = reddAnnuo;
        this._tasseIrpef = tasseIrpef;
        this._tasseInps = tasseInps;
    }

    // Getter proprietà
    get codRedd(): number { return this._codRedd; }
    set codRedd(codRedd: number) { this._codRedd = codRedd; }
    get reddAnnuo(): number { return this._reddAnnuo; }
    get tasseIrpef(): number { return this._tasseIrpef }
    get tasseInps(): number { return this._tasseInps; }

    public abstract getUtileTasse(): number;
    public abstract getTasseInps(): number;
    public abstract getTasseIrpef(): number;
}

abstract class LiberoProf extends LavoratoreAutonomo {

}

abstract class Artigiano extends LavoratoreAutonomo {
    
}

abstract class Commerciante extends LavoratoreAutonomo {

}

class Avvocato extends LiberoProf {

    constructor(codRedd: number, reddAnnuo: number, tasseIrpef: number, tasseInps: number) {
        super(codRedd, reddAnnuo, tasseIrpef, tasseInps)
    }
    public getUtileTasse(): number {
        return (this.reddAnnuo * this.codRedd) / 100;
    }
    public getTasseInps(): number {
        return (this.getUtileTasse() * this.tasseInps) / 100;
    }
    public getTasseIrpef(): number {
        return (this.getUtileTasse() * this.tasseIrpef) / 100;
    }

    public getRedditoAnnuoNetto(): number {
        return this.reddAnnuo - (this.getTasseInps() + this.getTasseIrpef());
    }
    
}

class Idraulico extends Artigiano {
    
    constructor(codRedd: number, reddAnnuo: number, tasseIrpef: number, tasseInps: number) {
        super(codRedd, reddAnnuo, tasseIrpef, tasseInps)
    }

    public getUtileTasse(): number {
        return (this.reddAnnuo * this.codRedd) / 100;
    }
    public getTasseInps(): number {
        return (this.getUtileTasse() * this.tasseInps) / 100;
    }
    public getTasseIrpef(): number {
        return (this.getUtileTasse() * this.tasseIrpef) / 100;
    }

    public getRedditoAnnuoNetto(): number {
        return this.reddAnnuo - (this.getTasseInps() + this.getTasseIrpef());
    }
}

class Abbigliamento extends Commerciante {
    constructor(codRedd: number, reddAnnuo: number, tasseIrpef: number, tasseInps: number) {
        super(codRedd, reddAnnuo, tasseIrpef, tasseInps)
    }

    public getUtileTasse(): number {
        return (this.reddAnnuo * this.codRedd) / 100;
    }
    public getTasseInps(): number {
        return (this.getUtileTasse() * this.tasseInps) / 100;
    }
    public getTasseIrpef(): number {
        return (this.getUtileTasse() * this.tasseIrpef) / 100;
    }

    public getRedditoAnnuoNetto(): number {
        return this.reddAnnuo - (this.getTasseInps() + this.getTasseIrpef());
    }
}

function calcolaCodRedd(annuoLordo: number) {
    if(annuoLordo <= 30000) {
        return 60;
    } else if(annuoLordo <= 50000) {
        return 70;
    } else {
        return 80;
    }
}

let rossi = new Avvocato(calcolaCodRedd(50000), 50000, 10, 25);
console.log('Utile Tasse Professionista Avvocato: ' + rossi.getUtileTasse() + ' €');
console.log('Tasse INPS Professionista Avvocato: ' + rossi.getTasseInps() + ' €');
console.log('Tasse IRPEF Professionista Avvocato: ' + rossi.getTasseIrpef() + ' €');
console.log('Reddito Annuo Netto Professionista Avvocato: ' + rossi.getRedditoAnnuoNetto() + ' €');
console.log('*************************')
let verdi = new Idraulico(50, 30000, 8, 22);
console.log('Utile Tasse Professionista Idraulico: ' + verdi.getUtileTasse() + ' €');
console.log('Tasse INPS Professionista Idraulico: ' + verdi.getTasseInps() + ' €');
console.log('Tasse IRPEF Professionista Idraulico: ' + verdi.getTasseIrpef() + ' €');
console.log('Reddito Annuo Netto Professionista Idraulico: ' + verdi.getRedditoAnnuoNetto() + ' €');
console.log('*************************')
let bianchi = new Abbigliamento(45, 40000, 10, 20);
console.log('Utile Tasse Professionista Commerciante: ' + bianchi.getUtileTasse() + ' €');
console.log('Tasse INPS Professionista Commerciante: ' + bianchi.getTasseInps() + ' €');
console.log('Tasse IRPEF Professionista Commerciante: ' + bianchi.getTasseIrpef() + ' €');
console.log('Reddito Annuo Netto Professionista Commerciante: ' + bianchi.getRedditoAnnuoNetto() + ' €');