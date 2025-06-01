// Entendendo Métodos Estáticos em Javascript

class Person {
    constructor(firstName, LastName, age) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }
    getFullName() {
        console.log(`${this.firstName} ${this.LastName}`);
    }

    static speak() {
        console.log("Olá, Mundo!");
    }
}

const person = new Person('Gabriel', 'Sandes', 16)

person.getFullName();
Person.speak();