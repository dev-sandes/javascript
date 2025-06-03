// Em JavaScript, atributos e métodos são públicos por padrão.
// Usamos # antes do nome do atributo ou método privado.
// Não existe suporte nativo para atributos e métodos protegidos em Javascript. Usamos _ para indicar que não deve ser acessado fora da classe ou subclasses.


class Caneta { // Classe Caneta
    #ponta; // Atributo privado
    constructor () { // Atributos -> Características de um Objeto
        this.modelo = null; // Atributo público por padrão
        this.cor = null; // Atributo público por padrão
        this.#ponta = null; // Atributo privado
        this._carga = null; // Atributo protegido
        this._tampada = null; // Atributo protegido
    }

    rabiscar() { // Método público por padrão, pode ser chamado fora de sua classe.
        if (this._tampada) {
            console.log("ERRO! A caneta está tampada.");
        } else {
            console.log("Rabiscando...");
        }
    }

    #tampar() { // Se esse método privado for chamado fora de sua classe, o compilador irá retornar erro.
        this._tampada = true;
    }

    #destampar() { // Se esse método privado for chamado fora de sua classe, o compilador irá retornar erro.
        this._tampada = false;
    }
}

// Criação de um Objeto que vai herdar características da Classe Caneta.
let c1 = new Caneta(); 
let c2 = new Caneta();

c1.modelo = "BIC";
c1.cor = "Azul";
c1._carga = 99; // Atributo protegido não impede de ser acessado. 
c1._tampada = true; // Atributo protegido não impede de ser acessado. 

// c1.#ponta -> Não pode ser acessado, pois é privado.

// c1.#destampar(); -> Vai retornar erro, pois esse método é privado.
// c1.#tampar(); -> Vai retornar erro, pois esse método é privado.

c1.rabiscar(); // -> Não vai retornar erro, pois esse método é público e pode ser acessado.

console.log(c1);
