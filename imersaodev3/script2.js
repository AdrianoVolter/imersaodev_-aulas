var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML ="Parabéns, você acertou! "
    tentativas = 3;
    numeroSecreto = parseInt(Math.random() * 11);

  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digite um número de 0 a 10!";

  } else if (chute < numeroSecreto) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML =`Você Errou! O número é maior que ${chute}
    .Você tem mais ${tentativas} tentativas`;   
           
  } else if (chute > numeroSecreto) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML =`Você Errou! O número é menor que  ${chute}.
    Você tem mais ${tentativas} tentativas  `;
          
  }
  if (tentativas == 0) {
    elementoResultado.innerHTML=`Acabou as tentativas! O número secreto era " ${numeroSecreto}
    .Tente outra vez!`;
    
    tentativas = 3;
    numeroSecreto = parseInt(Math.random() * 11);
  
  }
}