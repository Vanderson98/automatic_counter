//Variaveis contador
let numeroContador = document.getElementById("numeroContador");
let numeroContadorMin = document.getElementById("numeroContadorMin");
let numeroContadorHoras = document.getElementById("numeroContadorHoras");
let espaco = document.getElementById("espaco");
let espaco2 = document.getElementById("espaco2");
let erro = document.getElementById("erro");

let segundos = 0;
let minutos = 0;
let horas = 0;

//Função de contar os segundos
function contadorSegundos() {
  segundos++;

  //Adicionar um 0 na frente dos numeros
  if (horas < 10) {
    numeroContadorHoras.innerHTML = `0${horas}`;
  } else {
    numeroContadorHoras.innerHTML = horas;
  }

  if (minutos < 10) {
    numeroContadorMin.innerHTML = `0${minutos}`;
  } else {
    numeroContadorMin.innerHTML = minutos;
  }

  if (segundos < 10) {
    numeroContador.innerHTML = `0${segundos}`;
  } else {
    numeroContador.innerHTML = segundos;
  }

  //Caso seja igual ou maior que 60, adiciona um 60 fixo no texto
  if (segundos >= 60) {
    numeroContador.innerHTML = 60;

    //Se for maior que 60, adiciona mais 1 aos minutos, e zera os segundos, iniciando a contagem novamente
    if (segundos > 60) {
      minutos++;
      segundos = 0;
      //Tirar o 60
      numeroContador.innerHTML = segundos;

      //Quando atingir 60, eles irão aparecer
      espaco.style.display = "block";
      numeroContadorMin.style.display = "block";
      numeroContadorMin.innerHTML = minutos;
    }

    if (minutos >= 60) {
      numeroContadorMin.innerHTML = 60;
      if (minutos > 60) {
        horas++;
        minutos = 0;
        numeroContadorMin.innerHTML = minutos;

        espaco2.style.display = "block";
        numeroContadorHoras.style.display = "block";
        numeroContadorHoras.innerHTML = horas;
      }
    }

    if (horas >= 24) {
      numeroContadorHoras.innerHTML = 24;
      if (horas > 24) {
        segundos = 0;
        minutos = 0;
        horas = 0;

        espaco.style.display = "none";
        espaco2.style.display = "none";
        numeroContadorMin.style.display = "none";
        numeroContadorHoras.style.display = "none";
      }
    }
  }
}

let checarBotaoComecar = false;
//Botão começar Script
botaoContadorComecar = function () {
  if (!checarBotaoComecar) {
    erro.style.display = "none";

    //Começar o time
    contadorSet = setInterval(contadorSegundos, 1000);
    checarBotaoComecar = true;
  } else {
    erro.style.display = "block";
  }
};

//Botão pausar Script
botaoContadorPausar = function () {
  //Irá pausar o time
  pausar = clearInterval(contadorSet);
  checarBotaoComecar = false;
  checarBotaoReniciar = false;
  erro.innerHTML = ""
};

let checarBotaoReniciar = false;
//Botão reniciar Script
botaoContadorReniciar = function () {
  if (!checarBotaoReniciar) {
    erro.style.display = "none";

    segundos = 0;
    minutos = 0;
    horas = 0;
    pausar = clearInterval(contadorSet);

    if (segundos == 0) {
      numeroContador.innerHTML = "00";

      //Tirar os numeros
      numeroContadorMin.style.display = "none";
      numeroContadorHoras.style.display = "none";

      //Tirar os espaços
      espaco.style.display = "none";
      espaco2.style.display = "none";
    }

    //Começar novamente a contar
    contadorSet = setInterval(contadorSegundos, 1000);
    checarBotaoReniciar = true;
    checarBotaoComecar = false;
  } else if (segundos < 5) {
    //O usuário só irá clicar no botão novamente depois de 5 segundos
    checarBotaoReniciar = false;
    erro.style.display = "block";
    erro.innerHTML = `<h2>
    <span>[ERRO]</span>Espere 5 segundos para clicar no botão novamente!<span>[ERRO]</span>
  </h2>`;
  }
};

data = new Date();
ano = document.getElementById("ano");
ano.innerHTML = data.getFullYear();

//Variaveis tema
let tema = document.getElementById("tema");
let textoPrincipal = document.getElementById("texto");
let numeroCont = document.getElementById("numeroCont");
let claro = document.getElementById("claro");
let escuro = document.getElementById("escuro");

//Cores
let branco = "#fff";
let pretoClaro = "#252525";

//Mudar tema da página
mudarTemaClaro = function () {
  tema.style.background = branco;
  textoPrincipal.style.color = pretoClaro;
  numeroCont.style.color = pretoClaro;
  erro.style.color = pretoClaro;

  //Ocultar o outro tema
  claro.style.display = "none";
  escuro.style.display = "block";
};

mudarTemaEscuro = function () {
  tema.style.backgroundColor = pretoClaro;
  textoPrincipal.style.color = branco;
  numeroCont.style.color = branco;
  erro.style.color = branco;

  //Ocultar o outro tema
  escuro.style.display = "none";
  claro.style.display = "block";
};
