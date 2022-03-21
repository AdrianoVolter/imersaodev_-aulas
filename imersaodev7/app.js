var carta1 = {
    nome:"Pike",
    imagem:"https://i.pinimg.com/originals/ef/68/c8/ef68c88c12d2a68b8736d1801434411a.jpg",
    atributos:{
        Ataque: 9,
        Defesa: 6,
        Magia: 4   
    } 
};  
var carta2 = {
    nome:"Lutador",
    imagem:"https://montinkantigo.s3.amazonaws.com/data/camisas/lutador-pristontale-5dddc763f290f-estampa-301.png",
    atributos:{
        Ataque: 8,
        Defesa: 7,
        Magia: 5   
    } 
}; 
var carta3 = { 
    nome:"Mago ",
    imagem:"http://3.bp.blogspot.com/_qJUTeo_qrWI/TKdGXNN5LOI/AAAAAAAAAXk/h2LtQSsiPS0/s400/09.jpg",
    atributos:{
        Ataque: 5,
        Defesa: 9,
        Magia: 9   
    } 
};
var carta4 = {
    nome:"Atalanta",
    imagem:"https://i.pinimg.com/236x/cc/65/05/cc6505f99e229cdb86482eb005bc29f5.jpg",
    atributos:{
        Ataque: 8,
        Defesa: 8,
        Magia: 6   
    } 
};  
var carta5 = {
    nome:"Sacerdotisa",
    imagem:"http://photos1.blogger.com/blogger/1047/4205/1600/15.jpg",
    atributos:{
        Ataque: 4,
        Defesa: 9,
        Magia: 8  
    } 
}; 
var carta6={ 
    nome:"Arqueira",
    imagem:"http://habbinfo-pristontale.weebly.com/uploads/1/2/2/7/12279675/2810995.jpg",
    atributos:{
        Ataque: 9,
        Defesa: 6,
        Magia: 7   
    } 
}; 
var carta7 = {
    nome:"Cavaleiro",
    imagem:"http://images2.fanpop.com/image/photos/8800000/PristonTale-pristontale-8809288-600-849.jpg",
    atributos:{
        Ataque: 8,
        Defesa: 8,
        Magia: 7   
    } 
};  
var carta8 = {
    nome:"Mecanico",
    imagem:"https://2.bp.blogspot.com/-dv5MqBFJOzU/WL3RPjk96oI/AAAAAAAAAEU/UvKX9uSdOEUwzWHOpM7pNcCSfhihzVKyACLcB/s320/mechanicion_2013.jpg",
    atributos:{
        Ataque: 7,
        Defesa: 8,
        Magia: 7  
    } 
}; 
var carta9={ 
    nome:"Xamã",
    imagem:"http://3.bp.blogspot.com/-T1XGHe5pcBc/UrZWHLyAkQI/AAAAAAAAAkM/22-pjLN6vD8/s1600/shaman_2013.png",
    atributos:{
        Ataque: 7,
        Defesa: 7,
        Magia: 8   
    } 
};
var carta10={ 
    nome:"Assassina",
    imagem:"https://2.bp.blogspot.com/-hKWGIo68bOw/WL3OlcbD0HI/AAAAAAAAAEI/1EcGYu1AX5gr_lBs--1Bj-A-66WpuieqwCLcB/s320/assassin_2013.png",
    atributos:{
        Ataque: 8,
        Defesa: 8,
        Magia: 8   
    } 
}; 

  var cartas = [carta1, carta2, carta3,carta4, carta5, carta6, carta7, carta8, carta9, carta10];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 10);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 10);
    while (numeroCartaMaquina == numeroCartaJogador)
    {
      numeroCartaJogador = parseInt(Math.random() * 10);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
  }
  function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++)
      {
        if (radioAtributos[i].checked == true)
          {
            return radioAtributos[i].value;
          }
      }
  }
  function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
      htmlResultado = "<p class='resultado-final'>Venceu</p>"
    } else if (
      cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
      htmlResultado = "<p class='resultado-final'>Perdeu</p>"
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>"
    } 
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }   
  function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos)
    {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " = " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";  
  }
  function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos)
    {
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " = " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"; 
  }

function reiniciar() {
    history.go(0);
  }