class Caneta { // Classe Caneta
    constructor () { // Atributos -> Características de um Objeto
        this.modelo = null;
        this.cor = null;
        this.ponta = null;
        this.carga = null;
        this.tampada = null;
    }

    rabiscar() {
        if (this.tampada) {
            console.log("ERRO! A caneta está tampada.");
        } else {
            console.log("Rabiscando...");
        }
    }

    tampar() { // Se esse método for chamado, a caneta vai ser tampada.
        this.tampada = Number(true);
    }

    destampar() { // Se esse método for chamado, a caneta não vai ser tampada ou vai ser destampada.
        this.tampada = Number(false);
    }
}

// Criação de um Objeto que vai herdar características da Classe Caneta.
let c1 = new Caneta(); 
let c2 = new Caneta();

// Atribuição das características da classe Caneta ao Objeto "c1" criado acima.
c1.cor = "Azul";
c1.ponta = 0.5;
c1.tampada = Number(false);

// Atribuição das características da classe Caneta ao Objeto "c2" criado acima.
c2.cor = "Vermelho";
c2.ponta = 0.3;
c2.tampada = Number(true);

//Para o JavaScript, a regra é essa:

//Booleanos convertidos para números:
//true → 1
//false → 0

//Booleanos convertidos para strings:
//true → "true"
//false → "false"

// Inicialização dos métodos para os Objetos criados.
c1.rabiscar();
c2.rabiscar();
