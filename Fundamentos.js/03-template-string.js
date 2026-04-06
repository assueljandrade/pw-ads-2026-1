const nome = 'Valcicleide'
const idade = 20
const cidade = 'Morro Alto de Cima/MG'

//Mesclando string com variáveis usando concatenação 
const msg1= 'Meu nome é '+ nome + '-'
'anos e moro em' + cidade + '-'
console.log(msg1)

/* Mesclando string e variáveis usando template string
Template stings são OBRIGATORIAMENTE delimitados por ``
(backticks /acentos / "crases ")
*/
const msg2 = 'Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.'
console.log(msg2)
//Dentro de uma template string, não estamos limitados a usar
//apenas variáveis dentro do simbolo ${}. Qualquer código JS valido pode ser empregado ali
console.log('EM $2026 + 7), ${nome.toUpperCase()} TERÁ ${idade + 7} ANOS. ')