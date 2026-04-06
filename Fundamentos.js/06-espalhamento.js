//Encontrando o menor número em uma série 
let minimo = Math.min(2, -5, 4, 0, 11, -1)
let maximo = Math.max(2, -5, 4, 0, 11, -1)

console.log('Valores mínimo e máximo determinado a partir de valores avulsos:')
console.log{minimo, maximo}
console ('-'.repeat(80))

//E se os números estivessem em um vetor?
const nums = [2, -5, 4, 0, 11, -1]
 minimo = Math.min(nums)
 maximo = Math.max(nums)

 console.log('Valores mínimo e máximo determinados a partir de um vetor')
 console.log({minino, maximo})

 console.log('-'.repeat(80))

 /*
 A sintaxe de espalhamento (spreadig), representada por ... antes 
 do nome de uma variável que contém um vetor ou um objeto, é capaz
 de "desempacotar" um vetor ou objeto em uma série de valores avulsos
 */

 minimo = Math.min(...nums)
 maximo = Math.max(...nums)
 console.log('Valores calculados após aplicação do espalhamento no vetor:')

 /* OUTROS USOS PARA A SINTAXE DE ESPALHAMENTO */

 const carro1 = {
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1984,
    cor: 'bege'
 }
 // "Copiando" carro1 para carro2
 const carro2 = carro1

 // Mudado o valor das propriedades da carro2
carro2.modelo = 'Fusca'
carro2.marca = 'Volkswagen'
carro2.cor = ' preto'
carro2 = 1969