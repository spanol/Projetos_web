let inputNome = document.querySelector('#nome')
let inputEmail = document.querySelector('#email') 
let textareaMensagem = document.querySelector('#mensagem') 
let btnEnviar = document.querySelector('#enviar')
 

inputNome.addEventListener('keydown', () => { 
   if(inputNome.value.length < 2){
      inputNome.style.borderColor = 'red' 
   } else {
      inputNome.style.borderColor = 'green'
   }
})



inputEmail.addEventListener('keydown', () => {
   if(inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf('.') == -1){
      inputEmail.style.borderColor = 'red'
    } else {
      inputEmail.style.borderColor = 'green' 
   }  
})


textareaMensagem.addEventListener('keyup', ()=>{
   if(textareaMensagem.value.length > 100){
      textareaMensagem.style.borderColor = 'red' 
   } else {
      textareaMensagem.style.borderColor = 'green' 
   }
})


btnEnviar.addEventListener('click', () => {
   alert('Mensagem enviada com sucesso!, aguarde pelo retorno ;D')
})

audi