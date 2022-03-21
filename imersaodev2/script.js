var valor;        
    function conversao(){
        var dolar = 5.06;
        var euro = 5.52;
        var libra = 6.63;			
        var bitcoin = 197097.17;
        var ethereum = 13124.72; 														
        var opcao = document.getElementById("opções").value;
        valor = parseFloat(document.getElementById("num").value);	

        switch (opcao) {
            case "US$":
                document.getElementById("valorFinal").innerHTML = (valor/dolar).toFixed(2);
                break;
            case "EU$":
                document.getElementById("valorFinal").innerHTML = (valor/euro).toFixed(2);
                break;
            case "LB$":
                document.getElementById("valorFinal").innerHTML = (valor/libra).toFixed(2);
                break;
            case "BTC":
                document.getElementById("valorFinal").innerHTML = (valor/bitcoin).toFixed(6);
                break;
            case "ETH":
                document.getElementById("valorFinal").innerHTML = (valor/ethereum).toFixed(6);
                break;
            default:
                document.getElementById("valorFinal").innerHTML = "<h3 style='color: red'>Erro<h3>";
                break;
        }
    }

				
		