class Livro {
    constructor() {
        this._paginas = null;
        this.titulo = null;
    }

    lerLivro() {
        console.log(`Lendo o livro: "${this.titulo}".`)
    }

    lerPaginas() {
        console.log(`Possuí ${this._paginas} páginas.`)
    }
}

let l1 = new Livro();

l1._paginas = 10;
l1.titulo = "O pequeno príncipe.";
l1.lerLivro();
l1.lerPaginas();
