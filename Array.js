// declaro uma array chamada numeroCamisa
let numeroCamisa =
       ['5', '7', '8',
        '10', '11', '14']
// declaro outra array chamada times
let times =
    ['boca', 'juventude', 'star soccer']

// concat = concatena, junta duas arrays    
let doisJuntos = numeroCamisa.concat (times); 

// declaro a mensagem que vou exibir com os array's
let mensage = "Eu já usei estes números e já joguei por esses times: " + [doisJuntos] + ".";

// exibo a mensagem
console.log(mensage);

// exemplo 2

// declaro array numFav
let numFav = ['8 ', '10 ', '14 ']

// declaro array favoritos 
let favoritos = ['juventude ', 'boca juniors '] 

// uso concat para concatenar, juntar dois arrays 
let juntos = numFav.concat(favoritos);

// declaro a minha mensagem e já adiciono o meu concat
let mensagem = "Mas os meus favoritos são: " + [juntos]

// exibo
console.log(mensagem);