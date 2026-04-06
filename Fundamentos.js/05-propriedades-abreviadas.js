//Alguns dados de um usuário
const fullname = 'Jonicleisso Junqueira Júnior'
const username = 'junin'
const group = 'aluno'

//CRIANDO UM OBJETO A PARTIR DAS VARIÁVEIS ACIMA
const user1 = {
    fullname: fullname,
    username: username,
    grupo: group
}
console.log(user1)

/*
    Quando o nome da propriedade de um objeto é idêntico 
    à da variável que lhe dará o valor, é possível usar 
    o sintaxe chamada PROPRIEDADE ABREVIADA. Ale permite 
    não repetir os nomes das variáveis à frente dos nomes 
    das propriedades
    */
   const user2 ={
    fullname,
    username,
    group
   }
   console.log(user2)
   
   //Um objeto pode mesclar propriedades abreviados e
   //não abreviados 

   const user3 = {
    fullname, 
    username,
    password: 'SoberanoTricolor',
    group,
    lastLogin: '2026-03-02 11:27:35'
   }
   console.log(user3)

   /* USANDO PROPRIEDADES ABREVIADAS PARA DEPURAÇÂO (DEBUG) */

   const x = 10, y = 'batata'

   /* 
   Exibindo o valor das duas variáveis com console.log().
   Observe que os valores são mostrados, mas a saída não 
   informa quais as variáriveis de onde provêm os valores.
   */
  console.log(x, y)
   
  /*
  Saída melhorada: passando um objetivo formado pelas variáveis 
  como propriedades obreviadas para o console.log(), conseguimos
  identificar onde vêm os valores 
  */
 console.log ({x,y})