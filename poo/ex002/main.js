// Entendendo Métodos em Javascript

class Person {
    constructor(firstName, LastName, age) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }
    getFullName() {
        console.log(`${this.firstName} ${this.LastName}`);
    }

    speak() {
        console.log("Olá, Mundo!");
    }
}

const person = new Person('Gabriel', 'Sandes', 16)

person.getFullName();
person.speak();