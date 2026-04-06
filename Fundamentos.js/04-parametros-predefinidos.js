/*
calcArea() é uma função que calcula a área de uma figura 
geométrica plana, dados a base, a altura e o tipo da forma 
*/
function calcArea(base, altura, tipo) {
    switch(tipo) {
        case'R':  //Retângulo
            return base * altura
        case 'T': //Triângulo
            return base * altura / 2 
        case 'E': //Elipse/círculo 
            return (base/2) * (altura / 2) * Math.PI
        default: //Formas inválidas/desconhecidos
            return undefined
    }
} 
console.log('Àrea triângulo 10x30: ${calcArea(10, 30, 'T')}')
console.log('Àre'
console.log