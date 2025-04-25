let computerNumber //numero aleatório do computador
let userNumbers= [] //array vazio para guardar os números que o usuário já tentou
let attempts = 0 //variável para contar o número de tentativas
let maxGuesses = 10 //variável para guardar o número máximo de tentativas
const minNumber = 1
const maxNumber = 100 


function newGame(){
    window.location.reload() //recarrega a página para reiniciar o jogo
}

function init(){
    computerNumber = Math.floor(Math.random() * 100 + 1) //faz o computador escolher um numero aleatório de 0 a 100 (o +1 é por que o computador pega de 0 a 99)
    console.log(computerNumber)
}

function compareNumbers(){
  const userNumber = Number (document.getElementById('inputBox').value) //pega o valor que o usuario inseriu no input e transforma em número
  if (isNaN(userNumber) || userNumber < minNumber || userNumber > maxNumber){ //verifica se o número é um número e se está dentro do intervalo de 1 a 100
        document.getElementById('textOutput').innerHTML = 'Please enter a valid number between 1 and 100.' //mostra a mensagem de erro na tela
        document.getElementById('inputBox').value = '' //limpa o input após o usuário tentar adivinhar
        return //retorna para a função sem fazer nada
    }
  userNumbers.push(' ' + userNumber) //adiciona o número que o usuário inseriu no array userNumbers
  document.getElementById('guesses').innerHTML = userNumbers //Mosta o numero que o usuário inseriu na tela

    if(attempts < maxGuesses){
        if(userNumber > computerNumber){ //verifica se o numero do usuario é maior que o do computador
          document.getElementById('textOutput').innerHTML = 'Your number is too high!'
          document.getElementById('inputBox').value = '' //limpa o input após o usuário tentar adivinhar
          attempts++ //adiciona mais uma tentativa
          document.getElementById('attempts').innerHTML = attempts //mostra o número de tentativas na tela
        } 
        else if (userNumber < computerNumber){ //verifica se o numero do usuario é menor que o do computador
          document.getElementById('textOutput').innerHTML = 'Your number is too low!'
          document.getElementById('inputBox').value = '' 
          attempts++ //adiciona mais uma tentativa
          document.getElementById('attempts').innerHTML = attempts 
        }
        else{ //verifica se o numero do usuario é igual ao do computador
          document.getElementById('textOutput').innerHTML = 'Congrats, You got it!'
          attempts++ //adiciona mais uma tentativa
          document.getElementById('attempts').innerHTML = attempts 
          document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') //desabilita o input após o usuário acertar o número  
        }
    }
    else{
        document.getElementById('textOutput').innerHTML = 'You lost, what a lamer! The computer number was ' + computerNumber + '.' //mostra a mensagem de que o usuário perdeu e mostra o número do computador
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') 
    }

}

