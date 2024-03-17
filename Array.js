// concat = Combina, junta (concatena) dois ou mais arrays, retornando um novo array.
// Não altera nenhuma array, só mescla todas em uma.
// exemplo 1

//declaro uma array chamada numeroCamisa
let numeroCamisa =
       ['5 ', '7 ', '8 ',
        '10 ', '11 ', '14 ']

// declaro outra array chamada times
let times =
    ['boca ', 'juventude ', 'star soccer']

//  declaro uma nova array, concatena, juntando as duas    
let doisJuntos = numeroCamisa.concat (times); 

// declaro uma mensagem para exibir os dois juntos 
let mensageem = "Já usei estes números e joguei por esses times: " + doisJuntos; 

// exibo a mensagem
console.log (mensageem);

// saída : [ 5 , 7 , 8 , 10 , 11 ,14 ]  e [boca , juventude , star soccer]

// exemplo 2
// declaro uma array 
let posicao = 
    [ 'meia' , 'ponta' , 'atacante' ]

//concateno, junto as arrays
let tudoJunto = numeroCamisa.concat (times,posicao);

// declaro a mensagem que quero exibir
let mensagem = "Já usei estes numeros, joguei por esses times e nessas posições: " + tudoJunto

console.log(mensagem) // saída: [5 ,7 ,8 ,10 ,11 ,14] [boca ,juventude ,star soccer] [meia,ponta,atacante]
 