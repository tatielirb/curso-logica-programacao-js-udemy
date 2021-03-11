var nComputador = "";
var nJogador = "";
var minhaEscolha = "par";

function sortear(max) {
  return Math.floor(Math.random() * max);
}

function jogar() {
  nJogador = parseInt(document.querySelector("#meuNumero").value) ;
  nComputador = sortear(5);

  soma = nComputador + nJogador;
  console.log(soma);
  if (soma % 2 === 0) {
    document.querySelector("#output").innerHTML = "A soma do numero do computador " + nComputador + " e numero do jogador " + nJogador + " é igual "+ soma + " sendo Par ";
  } else {
    document.querySelector("#output").innerHTML = "A soma do numero do computador " + nComputador + " e numero do jogador " + nJogador + " é igual "+ soma + " sendo Impar ";
  }
}


