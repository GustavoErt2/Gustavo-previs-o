

const button = document.querySelector(".button-value")
const title = document.querySelector(".title")
const temp = document.querySelector(".temp")
const clima = document.querySelector(".clima")
const umidade = document.querySelector(".umidade")
const icone = document.querySelector(".icone")


const api_key = "a331f5236de24061afe96bf1294ebec4"


function mudarValor(dados){

    title.innerHTML = "Tempo em " + dados.name
    temp.innerHTML =  Math.floor(dados.main.temp) + "ºC"
    clima.innerHTML = dados.weather[0].description
    umidade.innerHTML = "Umidade: " + dados.main.humidity+"%"
    icone.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


async function buscarCidade(cidade){

    let dados = 
    await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    api_key + 
    "&lang=pt_br" +
    "&units=metric")
        .then(response => response.json())

    mudarValor(dados)

    console.log(dados)
    
}


function pegarValor(){
    
    let cidade = document.querySelector(".input-text").value

    buscarCidade(cidade)

}


