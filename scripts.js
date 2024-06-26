

let chave = "f0b06eaa41a780b01ba4dcb46f4e1a59"


function colocarNaTela(dados){

document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name 
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " ºC"
document.querySelector(".descricao").innerHTML = dados.weather[0].description
document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {
    
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarNaTela(dados)

}

function clickBuscar(){

const cidade = document.querySelector(".input-cidade").value;

buscarCidade(cidade);

}
