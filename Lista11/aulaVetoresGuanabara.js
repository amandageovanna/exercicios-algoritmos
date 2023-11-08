let num = [5,8,2,9,3]

num.sort() // saída -> (5) [2, 3, 5, 8, 9]
num.push(1)
console.log (num) // saída -> (5) [2, 3, 5, 8, 9]
console.log (`O vetor ${num.length} posições`) // saída -> O vetor 5 posições
console.log (`O primeiro valor do vetor é ${num[0]}`)// saída -> O primeiro valor do vetor é 5. Se for com num.sort ele vira 2.

console.log(valores)

// maneira arcaica: 
 var valores = [8, 1, 7, 4, 2, 9]

 console.log(valores)
 console.log(valores[0]) 
 console.log(valores[1]) 
 console.log(valores[2]) 
 console.log(valores[3]) 
 console.log(valores[4]) 
 console.log(valores[5]) 

//a outra opção inteligente:
var valores = [8, 1, 7, 4, 2, 9]
for (var pos=0; pos < valores.length; pos++) {
    console.log (`A posição ${pos} tem o valor ${valores[pos]} `)
}

// jeito mais facil de fazer: 
var valores = [8, 1, 7, 4, 2, 9]

for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}
fazer busca dentro de um vetor: 

var num = [5,8,2,9,3]
var pos = num.indexOf(3) // em que posição o número 8 está?
if (pos == -1) {
    console.log (`O valor não foi encontrado!`)
} else {
console.log(`posição ${pos}`)}