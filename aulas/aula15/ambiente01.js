let vetor = [5, 4, 3, 2, 1]
for (let i = 0; i < vetor.length; i++){
    console.log(`Na posição ${vetor.indexOf(i+1)} tem o valor ${vetor[i]}`)
}

vetor.sort()
for (let pos = 0; pos < vetor.length; pos++) {
    console.log(`Com o vetor invertido: na posição ${vetor.indexOf(pos+1)} tem o valor ${vetor[pos]}`)
}
