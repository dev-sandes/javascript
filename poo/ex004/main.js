// Entendendo Herança em Javascript

class Animal {
    constructor (nome) {
        this.name = nome;
    }

    speak() {
        console.log(`${this.name} é animal!`);
    }
}

class Dog extends Animal {
    constructor(nome) {
        super(nome);
    }

    speak() {
        console.log(`Dog ${this.name} latiu!`)
    }
}

const animal = new Animal("Simba");
const dog = new Dog("Bob");

animal.speak();
dog.speak();
