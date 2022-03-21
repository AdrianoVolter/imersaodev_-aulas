function Adicionar() {
    var adicionarAnime = listaAnimes.push(document.getElementById("url").value);
     var novaImg = document.createElement("img");
    novaImg.classList.add("capas");
    novaImg.src = document.getElementById("url").value;
    document.body.appendChild(novaImg);
    document.getElementById("url").value =""
  }
var listaAnimes= ["https://media.fstatic.com/lY9Br6D6rYtG9CVCaUxTnGhXgkA=/290x478/smart/media/movies/covers/2021/07/FB_IMG_1626228115682.jpg", "https://animefan.cc/cdn/anime/Shingeki-no-Kyojin-4-Capa.jpg","https://i0.wp.com/animeui.com/wp-content/uploads/2021/09/117777.jpg" ,"https://animesonline.cc/wp-content/uploads/2021/10/ku2UZF5h5xLdqu4sCMJCtBpicaM-185x278.jpg" ,"https://animesonline.cc/wp-content/uploads/2019/07/jyFHtqYeVvc2A9nLhFGvM49xGPg-185x278.jpg", "https://animesonline.cc/wp-content/uploads/2019/11/ppy8IRlKHCOMY8yuoYHLHfxkmmE-185x278.jpg", "https://animesonline.cc/wp-content/uploads/2019/07/uuBvVQVRUXYdoBRo0HqOhFOoYRZ-185x278.jpg", "https://animesonline.cc/wp-content/uploads/2019/07/resnTLTZG8021YHHFLefZsO8PaR-185x278.jpg", "https://animesonline.cc/wp-content/uploads/2019/07/lTY0FVqRgLBq98LH164M3ZbqPbY-185x278.jpg",]

for (var i = 0; i < listaAnimes.length; i++){
    document.write(`<img class= "capas" src=  ${listaAnimes[i]}  >`);   
    }

