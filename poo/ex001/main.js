// Entendendo Classes em Javascript

class Person {
    constructor(firstName, LastName, age) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }
}

const person = new Person('Gabriel', 'Sandes', 16)
console.log(person);
