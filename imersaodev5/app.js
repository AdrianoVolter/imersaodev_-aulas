function adicionarGame() {
    let gameFavorito = document.getElementById("game").value;
    if (gameFavorito.endsWith(".jpg")) {
      let nome = adicionarNome();
      let game = { game: gameFavorito, nome: nome };
      listarGames(game);
    } else {
      console.error("Endereço de filme inválido  ou campo vazio!!");
      window.alert("Endereço de filme inválido ou campo vazio!!");
    }
  
    document.getElementById("game").value = "";
    document.getElementById("nome").value = "";
  }
  function listarGames(game) {
    let elementoGameFavorito = " <div> <img src=" + game.game + ">";
    elementoGameFavorito += "<h1> " + game.nome + "</h1> </div> ";
    let elementoListaGame = document.getElementById("listaGames");
    elementoListaGame.innerHTML =
      elementoListaGame.innerHTML + elementoGameFavorito;
  }
  function adicionarNome() {
    let nomeDoGameFavorito = document.getElementById("nome").value;
    return nomeDoGameFavorito;
  }
  