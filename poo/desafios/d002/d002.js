class Carro {
    constructor() {
        this.marca = null;
        this.ano = null;
    }

    ligar() {
        console.log('O carro está ligado.');
    }
}

let c1 = new Carro();

c1.marca = "Chevrolet";
c1.ano = 2008;
c1.ligar();