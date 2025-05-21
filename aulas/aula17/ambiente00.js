var amigo = {nome: 'Gabriel',
idade: 16,
sexo: 'masculino',
altura: 1.75,
peso: 125.7,
engordar(p=0){
    this.peso += p
}}

amigo.engordar(2)
console.log(`O nome da pessoa é ${amigo['nome']}, tem ${amigo['idade']} anos de idade, sexo ${[amigo['sexo']]}, ${amigo['altura']}cm de altura e pesa ${amigo['peso']}kg`)
console.log(`${amigo.nome} tem ${amigo.idade} anos de idade.`)
