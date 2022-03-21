var adriano = {nome:"Adriano" , vitorias:0, empates:0, derrotas:0, pontos:0};
var sergio = {nome:"Sergio" , vitorias:0, empates:0, derrotas:0, pontos:0};

function novoJogador(nome) {
    return (jogador = {
     nome: nome,
     vitorias: 0,
     empates: 0,
     derrotas: 0,
     pontos: 0,
    });
   }
   function adicionarJogador () {
    var nome = document.getElementById ("nomeJogador");
    jogadores.push(novoJogador(nome.value));
    nome.value = "";
    exibeJogadores(jogadores);
  }

function calcularPontos(jogador){
    var pontos = (jogador.vitorias *2) + jogador.empates;
    return pontos;
}
adriano.pontos=calcularPontos(adriano)
sergio.pontos=calcularPontos(sergio)

var jogadores =[adriano, sergio]

function exibeJogadores(jogadores){
    var elemento = "";
    for (var i =0; i < jogadores.length; i++){
        elemento +="<tr><td>"+ jogadores[i].nome + "</td>"
        elemento +="<td>"+ jogadores[i].vitorias +"</td>"
        elemento +="<td>"+ jogadores[i].empates + "</td>"
        elemento +="<td>"+ jogadores[i].derrotas +"</td>"
        elemento +="<td>"+ jogadores[i].pontos +"</td>"
        elemento +="<td><button onClick='adicionarVitoria(" + i +")'>Vitória</button></td>"
        elemento +="<td><button onClick='adicionarEmpate(" + i +")'>Empate</button></td>"
        elemento +="<td><button onClick='adicionarDerrota(" + i +")'>Derrota</button></td>"
        elemento +="</tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento
}
exibeJogadores(jogadores);

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calcularPontos(jogador)
    exibeJogadores(jogadores)
}
function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calcularPontos(jogador)
    exibeJogadores(jogadores)
}
function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibeJogadores(jogadores)
}
function zerarPontos() {
    for (var i = 0; i < jogadores.length; i++){
      jogadores[i].vitorias = 0;
      jogadores[i].empates = 0;
      jogadores[i].derrotas = 0;
      jogadores[i].pontos = 0;
    }   
   exibeJogadores(jogadores);
   }