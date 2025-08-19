// PROJETO DE CALCULADORA DE IMC COM MAIS ALGUMAS FUNCIONALIDADES
// PEDE QUE O USUARIO SELECIONE O SEU OBJETIVO (PERDER, MANTER OU GANHAR PESO)
// VERIFICA SE O OBJETIVO CONDIZ COM O IMC CALCULADO
// PASSA UM TREINO E UMA ALIMENTAÇÃO PRA TODOS OS DIAS (O TREINO E ALIMENTAÇÃO MUDAM DE ACORDO COM A CONDIÇÃO DO USUARIO)
// PEGUEI UM PROJETO SIMPLES E PENSEI EM CRIAR UM SISTEMA MAIS COMPLETO QUE REALMENTE PODE AJUDAR ALGUÉM ADICIONANDO MAIS ALGUMAS FUNCIONALIDADES, ESPERO QUE GOSTE!

// DADOS DE IMC PARA FAZER OS CALCULOS E VERIFICAR A CONDIÇÃO DO USARIO 
const data = 
[
{ min: 0, max: 18.4, classification: "Menor que 18,5", info: "Magreza", obesity: "0"},
{ min: 18.5, max: 24.9, classification: "Entre 18,5 e 24,9", info: "Normal", obesity: "0"},
{ min: 25, max: 29.9, classification: "Entre 25,0 e 29,9", info: "Sobrepeso", obesity: "I"},
{ min: 30, max: 39.9, classification: "Entre 30,0 e 39,9", info: "Obesidade", obesity:"II"},
{ min: 40, max: 99, classification: "Maior que 40,0", info: "Obesidade grave",obesity:"III"},
];

// PARTE DAS FUNCIONLAIDADE DAS E OS CALCULOS (PRIMEIRA PARTE DO PROJETO)
const imgIntro = document.querySelector("#imgs")
const opacity = document.querySelector("#opacity")
const infosIntro = document.querySelector("#intro-infos")
const newH2 = document.querySelector("#buttons h2")

const telaPreta = document.querySelector("#telaPreta")

const buttons = document.querySelector("#buttons")


function esconder(){
imgIntro.classList.add("hidden")
opacity.classList.add("hide")
infosIntro.classList.add("hide")
buttons.style.marginTop = "-60vh"
} 

const buttonsContainer = document.querySelector("#buttons-container")

const calcContainer = document.querySelector("#calc-container")

const perder = document.querySelector("#perder")
const manter = document.querySelector("#manter")
const ganhar = document.querySelector("#ganhar")

const weight = document.querySelector("#peso")
const height = document.querySelector("#altura")

const calcBtn = document.querySelector("#btn-calc")

const resultContainer = document.querySelector("#result")
const resultMessage = document.querySelector("#result p")
const alertMessage = document.querySelector("#result span")
const setas = document.querySelector("#setas")

let meta 

// BUTTON DE VOLTAR
const back = document.querySelector("#voltar")
back.classList.add("hide")

// FUNÇÃO DE MOSTRAR O RESULTADO E VERIFICAR SE O IMC CONDIZ COM A OPÇÃO
function showResult(){
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  esconder()

if(!meta){
  newH2.classList.add("selectH2")
  buttonsContainer.classList.add("border")
  buttonsContainer.classList.add("hide")
  newH2.style.marginTop = "0"
  treinoAlimentacaoContainer.classList.add("hide")
  return 
  } 

  buttonShowTreinoAlimentacao.classList.remove("hide")

  const imc = calcImc()

  if(!imc) return 

  resultMessage.className = ""

  resultContainer.classList.remove("hide")

  data.forEach((dados) => {

  if (imc >= dados.min && imc <= dados.max) {

    resultMessage.innerHTML = `Seu IMC é de ${imc}, seu índice é ${dados.info}`
    alertMessage.classList.add("hide")

  switch (dados.info) {
      case "Magreza":
          resultMessage.classList.add("low-extreme");
          HideH2eButtonsContainer()
          break;

      case "Normal":
          resultMessage.classList.add("normal");
          HideH2eButtonsContainer()
          break;

      case "Sobrepeso":
          resultMessage.classList.add("low-extreme");
          HideH2eButtonsContainer()
          break;

      case "Obesidade":
          resultMessage.classList.add("extreme");
          HideH2eButtonsContainer()
          break;

      case "Obesidade grave":
          resultMessage.classList.add("very-extreme");
          HideH2eButtonsContainer()
          break;
      }

   // VERIFICAR SE A OPÇÃO ESCOLHIDA CONDIZ COM O IMC DO USARIO 
  if (meta === "perder" && imc < 18.4) {
     ShowRecomendOption(
        `seu indice já é de ${dados.info}, Por favor clique na opção de ganhar Peso`,
        perder,
        manter,
        ganhar       
        );
          hideContainer()
      }

  if (meta === "ganhar" && imc > 24.9) {
     ShowRecomendOption(
        `seu indice já é de ${dados.info}, Por favor clique na opção de perder Peso`,
        ganhar,
        manter,
        perder        
        );
          hideContainer()

        }

  if (meta === "manter" && imc >= 25) {
     ShowRecomendOption(
        `seu indice é de ${dados.info}, Por favor clique na opção de perder Peso`,
        ganhar,
        manter,
        perder        
        );
          hideContainer()

        }

  if (meta === "manter" && imc <= 18.4) {
     ShowRecomendOption(
       ` seu indice é de ${dados.info}, Por favor clique na opção de Ganhar Peso`,
        perder,
        manter,
        ganhar        
        );
          hideContainer()

        }

  if (meta === "ganhar" && dados.info === "Normal") {
     ShowRecomendOption(
        `seu indice é de ${dados.info}, Por favor clique na opção de Manter Peso`,
        perder,
        ganhar,
        manter        
        );
          hideContainer()

        }

  if (meta === "perder" && dados.info === "Normal") {
     ShowRecomendOption(
        `seu indice é de ${dados.info}, Por favor clique na opção de Manter Peso`,
        perder,
        ganhar,
        manter        
        );
        hideContainer()
        } 
      }
    } 
  )
}

// FUNÇÃO PARA APLICAR AS CLASSES CERTAS NOS BUTTONS DE ACORDO COM O IMC E A OPÇÃO SELECIONADA 
function ShowRecomendOption(msg, hide1, hide2, destacar){
  alertMessage.classList.remove("hide")
  alertMessage.textContent = msg;

  hide1.classList.add("hide");
  hide2.classList.add("hide");

  destacar.style.backgroundColor = "rgb(9, 255, 0)";
  destacar.classList.add("recomend");

  newH2.classList.add("hide")
  setas.classList.remove("hide") 
}

// CALCULO IMC
function calcImc(){
  const weightValue = +weight.value 
  const heightValue = +height.value.replace("," , ".")

  if(!weightValue || !heightValue) return 

  const calc = weightValue / (heightValue * heightValue)

  return calc.toFixed(1)
}

// FUNÇÃO PARA AVALIAR SE NÃO EXISTEM VALORES / VERIFICA SE OS VALORES NÃO SÃO FORA DO NORMAL (EX: WEIGHT = 500 OU HEIGHT = 2,70)
function validHeightAndWeight(){

    const weightValue = +weight.value 
    const heightValue = +height.value.replace("," , ".") 

    if(calcContainer.classList.contains("hidden")) return 

    resultMessage.classList.add("very-extreme") 

    if(!weightValue || !heightValue){
      removerContainereMostrarMensagem()
      resultMessage.textContent = "digite valor em peso e altura"
      newH2.style.marginTop = "-5rem"
    } 
    else if( weightValue >= 400 || /*weightValue >= 400 || */ heightValue > 2.20 || heightValue <= 1.30){
      removerContainereMostrarMensagem()
      resultMessage.textContent = "valores invalidos"
      newH2.style.marginTop = "-5rem"
      resultMessage.classList.add("very-extreme") 
    }
    else{
      resultContainer.classList.add("hide")
      treinoAlimentacaoContainer.classList.remove("hide")
  }
}

// FUNÇÃO QUE LIMPA AS INFORMAÇÕES INSERIDAS E AS INFORMAÇÕES FORNECIDAS PELO SISTEMA 
function cleanInfos(){
    weight.value = ""
    height.value = "" 

    resultContainer.classList.add("hide")
    setas.classList.add("hide")

    resultMessage.textContent = ""
    resultMessage.classList.value = ""

    alertMessage.textContent = ""
    
    // lista das classes de estado
const stateClasses = ["normal", "low-extreme", "extreme", "very-extreme"];

// remove só essas classes, se existirem
stateClasses.forEach(c => resultMessage.classList.remove(c));

// depois adiciona a nova classe de estado, se precisar
resultMessage.classList.add("extreme"); 
}

function cleanInputs(){
  weight.value = ""
  height.value = ""
}

// ESCONDER O H2 E O CONTAINER DE BUTTONS
function HideH2eButtonsContainer(){
treinoAlimentacao.style.display = "none"
newH2.classList.add("hide")
buttonsContainer.classList.add("hidden")
} 

// SE O IMC NÃO CONDIZ COM A OPÇÃO SELECIONADA ESSA FUNÇÃO É CHAMADA PRA APLICAR OS ESTILOS
function hideContainer(){
buttonsContainer.classList.remove("hidden")
treinoAlimentacaoContainer.classList.add("hide")
treinoAlimentacao.classList.add("hidden")
back.classList.add("hide")
}

// FUNÇÃO PARA ESTILIZAR OS BUTTONS QUANDO VOCÊ ESCOLHE UMA OPÇÃO OU QUANDO UMA OPÇÃO É RECOMENDADA
function estilosMetas(meta1, meta2, meta3){
  newH2.style.marginTop = "2rem"
  newH2.classList.remove("hide")
  newH2.innerHTML = "Selecione uma opção"
  calcContainer.classList.remove("hidden")

  meta1.classList.add("select")
  meta2.classList.remove("select")
  meta3.classList.remove("select")

  if(meta1.classList.contains("recomend")){
    hideContainer()
    normalizarVisual()
    meta1.classList.remove("recomend")
    meta2.classList.remove("hide")
    meta3.classList.remove("hide")
  }
}
// NORMALIZA AS CORES DOS BUTTONS
function normalizarCores(meta, cor){
  if(meta.classList.contains("select")){
    meta.style.backgroundColor = cor
    newH2.classList.remove("selectH2")
    buttonsContainer.classList.remove("border")
    normalizarVisual()
  }
}

// REMOVE O CONTAINER E MOSTRA A MENSAGEM DIZENDO QUE OS VALORES SÃO INVALIDOS OU PRECISAM SER INSERIDOS
function removerContainereMostrarMensagem(){
  resultContainer.classList.remove("hide")
  alertMessage.classList.add("hide")
}

// VERIFICA SE OS VALORES SÃO VALIDOS
function verificarValores(){
    const weightValue = +weight.value;
    const heightValue = +height.value.replace(",", ".");

    if (!weightValue || !heightValue || weightValue >= 400 || /*weightValue >= 400 || */ heightValue >= 2.20 /*|| heightValue <= 1 || heightValue < 1.10 ||*/ || 
    heightValue <= 1.30) return;

    showResult();
    cleanInputs()

    calcContainer.classList.add("hidden")
}

// EVENTOS DOS BUTTONS
perder.addEventListener("click", () =>{
  meta = "perder"

  estilosMetas(perder, manter, ganhar)
  normalizarCores(perder, "red")
  cleanInfos()
})

manter.addEventListener("click", () =>{
  meta = "manter"

  estilosMetas(manter, perder, ganhar)
  normalizarCores(manter, "rgb(221, 108, 15)")

  cleanInfos()
})

ganhar.addEventListener("click", () =>{
  meta = "ganhar"

  estilosMetas(ganhar, manter, perder)
  normalizarCores(ganhar, "rgb(14, 226, 42)")

  cleanInfos()
})

calcBtn.addEventListener("click", (e) => { 
    validHeightAndWeight();
    verificarValores()
    /*normalizarEstilo()*/ 

});

document.addEventListener("keyup", (e) => {

if(e.code === "Enter"){

  calcBtn.style.backgroundColor = "#0056b3"

  setTimeout(()=>{

  calcBtn.style.backgroundColor = "#007bff"

  },400)

  validHeightAndWeight();

    // Se tiver erro, não continua
  const weightValue = +weight.value;
  const heightValue = +height.value.replace(",", ".");

  if (!weightValue || !heightValue || weightValue >= 400 || heightValue >= 2.20 || heightValue < 1.30) return;

  showResult()
  cleanInputs()

  calcContainer.classList.add("hidden")
  /*normalizarEstilo()*/
  } 
})

// PARTE DE TREINO (PARTE 2 DO PROJETO)
const buttonShowTreinoAlimentacao = document.querySelector("#button-show-container")
const treinoAlimentacao = document.querySelector("#treino-alimentacao")
const treinoAlimentacaoContainer = document.querySelector("#container-treino-alimentacao")
const plano = document.querySelector("#plano")

plano.classList.add("hide")

const buttonFechar = document.createElement("button")
buttonFechar.id = "fechar"
buttonFechar.innerHTML = "X"
buttonFechar.classList.add("hide")

treinoAlimentacao.classList.remove("hide")

// MOSTRAR TREINO / ALIMENTAÇÃO
buttonShowTreinoAlimentacao.addEventListener("click", (e) => {
  treinoAlimentacao.style.display = "flex"
  mostrarContainer()
  plano.classList.remove("hide")
  plano.innerHTML = `Treino / Alimentação pra quem quer ${meta} peso`
})

function mostrarContainer(){
  treinoAlimentacao.classList.remove("hidden")
  resultContainer.classList.add("hide")
  buttonShowTreinoAlimentacao.classList.add("hide")
  back.classList.remove("hide")
}

back.addEventListener("click", () => {
  zerarContainers()
  normalizarVisual()
})

// FUÇÃO PRA NORMALIZAR O VISUAL INICIAL 
function normalizarVisual(){
const introInfos = document.querySelector("#intro-infos")
const opacity = document.querySelector("#opacity")

 imgIntro.classList.remove("hidden")
 buttons.style.marginTop = "0"
 introInfos.classList.remove("hide")
 opacity.classList.remove("hide")
}

// FUNÇÃO PRA VOLTAR PRO INCIO DO PROJETO / LIMPAR TODAS AS INFORMAÇÕES QUE FORAM FORNECIDAS
function zerarContainers(){
  buttonFecharTreino()
  fecharContainerAlimentacao()

  selects.forEach((select)=>{
    select.selectedIndex = 0
  })

  plano.classList.add("hide")
  back.classList.add("hide")

  newH2.classList.remove("hide")
  buttonsContainer.classList.remove("hidden")
  calcContainer.classList.remove("hidden")
  buttonShowTreinoAlimentacao.classList.add("hide")
  treinoAlimentacao.classList.add("hidden")
  treinoAlimentacaoContainer.classList.add("hide")
}

const buttonTreino = document.querySelectorAll(".button-treino")
const containerTreino = document.querySelector("#treino-container")
const treinoStyle = document.querySelector("#treino")

// DIV DE TREINO
const div = document.createElement("div")
div.id = "gerar-treino"

function mostrarTreino(treino1, treino2, treino3, dia, grupo, imagem1, imagem2){
  div.classList.remove("hide")
  div.innerHTML = ""

  let treinos = []

  treinos.push(treino1, treino2, treino3)

  const divImg = document.createElement("div")
  divImg.id = "div-img"

  const imgTreino1 = document.createElement("img")
  imgTreino1.id = "img-treino1"
  imgTreino1.src = `./img/${imagem1}`

  const imgTreino2 = document.createElement("img")
  imgTreino2.id = "img-treino1"
  imgTreino2.src = `./img/${imagem2}`

  const grupoMuscular = document.createElement("h3")
  grupoMuscular.id = "grupo-muscular"
  grupoMuscular.textContent = grupo

  const ulTreino = document.createElement("ul")
  ulTreino.id = "ul-treino"

  treinos.forEach((treino)=>{

  if (treino === null) return;
  const listaTreino = document.createElement("li");

  listaTreino.id = "lista-treino";
  listaTreino.textContent = Array.isArray(treino) ? treino.join(" / ") : treino;
  ulTreino.appendChild(listaTreino);
}) 

  const diaTreino = document.createElement("h3")
  diaTreino.id = "dia-treino"
  diaTreino.textContent = dia

  divImg.appendChild(imgTreino1)
  divImg.appendChild(imgTreino2)
  div.appendChild(diaTreino)
  div.appendChild(grupoMuscular)
  div.appendChild(ulTreino)
  div.appendChild(divImg)

  estilizarContainerTreino()
}

function normalizarEstilo(){
  if(resultMessage.classList.contains("very-extreme") ||
    resultMessage.classList.contains("extreme") ||
    resultMessage.classList.contains("low-extreme") || 
    resultMessage.classList.contains("normal")){
    buttonShowTreinoAlimentacao.style.marginTop = "-105rem"
    buttonShowTreinoAlimentacao.style.marginLeft = "1vh"
    treinoAlimentacao.style.marginTop = "-290vh"
    treinoAlimentacao.style.marginLeft = "25vh"
    plano.style.marginTop = "-321vh"
    plano.style.marginLeft = "10vh"
  }
}


window.addEventListener("keydown", (event) => {
  // verifica se é a tecla Enter
  if (event.key === "Enter" && window.innerWidth <= 768) {
    normalizarEstilo();
  }
}); 

// ESTILIZAR O CONTAINER DE TREINO PRA PREENCHER 100% DO CONTAINER E MOSTRAR O TREINO SELECIONADO
function estilizarContainerTreino(){
  alimentacaoContainer.classList.add("hide")
  treinoStyle.style.width = "100%"
  treinoStyle.appendChild(div)
  buttonFechar.classList.remove("hide")
  div.appendChild(buttonFechar)
}

buttonFechar.addEventListener("click", () => {
  buttonFecharTreino()
})

function buttonFecharTreino(){
  treinoStyle.style.width = "50%"
  div.classList.add("hide")
  containerTreino.classList.remove("hide")
  alimentacaoContainer.classList.remove("hide")
}

// INFOS DOS TREINOS
function criarTreino(meta, dadosTreino) {
  return {
    segunda: dadosTreino[meta].segunda,
    terca: dadosTreino[meta].terca,
    quarta: dadosTreino[meta].quarta,
    quinta: dadosTreino[meta].quinta,
    sexta: dadosTreino[meta].sexta,
  };
}

const treinosPorMeta = {
  perder: criarTreino('perder', treinosPerder),
  manter: criarTreino('manter', treinosManter),
  ganhar: criarTreino('ganhar', treinosGanhar),
};

// FAZER UM LOOP NOS BUTTONS DE TREINO E MOSTRAR O TREINO CORRESPONDENTE
buttonTreino.forEach((treinoBtn)=>{
  treinoBtn.addEventListener("click", () => {
  buttonFechar.style.marginTop = "0rem"

  containerTreino.classList.add("hide") 
  const treinoDia = treinoBtn.parentElement
    if(meta){
      const treino = treinosPorMeta[meta][treinoDia.id]

      if(treinoDia.id === "segunda"){
      mostrarTreino(treino.peito, treino.ombro, treino.triceps, treinoDia.id.replace(treinoDia.id, `Segunda Feira`), "Peito / Ombro / Tríceps", "treinopeito.avif", "treinopeito2.webp")
      } 
      else if(treinoDia.id === "terca"){
        mostrarTreino(treino.costas, treino.biceps, null, treinoDia.id.replace(treinoDia.id, `Terça Feira`), "Costas / Biceps", "treinocostas.webp", "treinocostas2.jpg")
      } 
      else if(treinoDia.id === "quarta"){
        mostrarTreino(treino.pernaCompleto, null, null, treinoDia.id.replace(treinoDia.id, `Quarta Feira`), "Perna Completo", "treinoperna.webp", "treinoperna2.jpg")
      } 
      else if(treinoDia.id === "quinta"){
        mostrarTreino(treino.ombroIsolado, null, null, treinoDia.id.replace(treinoDia.id, `Quinta Feira`), "Ombro Isolado", "treinoombro.jpg", "treinoombro2.jpg")
      } 
      else if(treinoDia.id === "sexta"){
        mostrarTreino(treino.biceps, treino.triceps, null, treinoDia.id.replace(treinoDia.id, `Sexta Feira`), "Biceps / Tríceps", "treinobiceps.jpg", "treinobiceps2.webp")
      }
    }
  })
})

// ALIMENTAÇÃO
const alimentacaoContainer = document.querySelector("#alimentacao")
const containerAlimentacao = document.querySelector("#alimentacao-container")
const selects = document.querySelectorAll(".select-ref");

const divRefeicao = document.createElement("div")

// MOSTRAR REFEIÇÕES
function mostrarRefeicao(dia, refeicaoTipo, refeicao, macro, imagem){

  const diaSemana = document.createElement("h3")
  diaSemana.id = "dia-semana"
  diaSemana.textContent = dia

  const divImg = document.createElement("div")
  divImg.id = "div-img"

  const img = document.createElement("img")
  img.id = "img-ref"
  img.src = `./img/${imagem}`

  const tipoRefeicao = document.createElement("h4")
  tipoRefeicao.id = "tipo-refeicao"
  tipoRefeicao.textContent = refeicaoTipo

  divRefeicao.id = "div-refeicao"

  const ulRef = document.createElement("ul")
  ulRef.id = "ul-refeicao"

  const ulMacro = document.createElement("ul")
  ulMacro.id = "ul-Macro" 

  const listaRef = document.createElement("li")
  listaRef.id = "lista-refeicao"
  listaRef.textContent = refeicao

  const listaMacro = document.createElement("li")
  listaMacro.id = "lista-macro"
  listaMacro.textContent = macro

  ulRef.appendChild(listaRef) 
  ulMacro.appendChild(listaMacro) 
  divRefeicao.appendChild(diaSemana)
  divRefeicao.appendChild(tipoRefeicao)
  divRefeicao.appendChild(ulRef)
  divRefeicao.appendChild(ulMacro)
  divRefeicao.appendChild(img)

  console.log(divRefeicao)

  estilizarRefeicao()
}

// ESTILIZAR O COONTAINER DE REFEIÇÃO PRA OCUPAR 100% DO CONTAINER E MOSTRAR A REFEIÇÃO 
function estilizarRefeicao(){
  alimentacaoContainer.appendChild(divRefeicao) 
  buttonFechar.classList.remove("hide")
  alimentacaoContainer.appendChild(buttonFechar)
  alimentacaoContainer.style.width = "100%"
  containerAlimentacao.classList.add("hide")
  treinoStyle.classList.add("hide")
  divRefeicao.classList.remove("hide")
}
 buttonFechar.addEventListener("click", () => {
  fecharContainerAlimentacao()
})

function fecharContainerAlimentacao(){
    buttonFechar.classList.add("hide")
    treinoStyle.classList.remove("hide")
    divRefeicao.classList.add("hide")
    alimentacaoContainer.style.width = "50%"
    containerAlimentacao.classList.remove("hide")
    selects.forEach((select)=>{
    select.selectedIndex = 0
  })
}

// INFOS DOS DIAS 
const nomesDias = {
  "select-segunda": "Segunda Feira",
  "select-terca": "Terça Feira",
  "select-quarta": "Quarta Feira",
  "select-quinta": "Quinta Feira",
  "select-sexta": "Sexta Feira",
  "select-sabado": "Sábado",
  "select-domingo": "Domingo"
};

// INFOS DAS REFEIÇÕES
const nomesRefeicoes = {
  cafe: "Café da manhã",
  almoco: "Almoço",
  lanche: "Lanche da tarde",
  janta: "Janta"
};

// INFOS DAS IMAGENS
const imagensRefeicoes = {
  cafe: "cafemanha.webp",
  almoco: "almoco.png",
  lanche: "lanche.webp",
  janta: "janta.jpg"
};

// LOOP NOS SELECTS PARA MOSTRAR A REFEIÇÃO CORRESPONDENTE
selects.forEach((select) => {
  select.addEventListener("change", () => {
    buttonFechar.style.marginTop = "-1rem"
    divRefeicao.innerHTML = "";

    const diaId = select.id; // ex: "select-segunda"
    const diaChave = diaId.replace("select-", ""); // ex: "segunda"
    const refeicaoTipo = select.value; // ex: "cafe"

    const nomeDia = nomesDias[diaId];
    const nomeRefeicao = nomesRefeicoes[refeicaoTipo];
    const imagem = imagensRefeicoes[refeicaoTipo];

    const refPorMeta = {
      perder: refDiasPerder,
      manter: refDiasManter,
      ganhar: refDiasGanhar
    };

    const referencias = refPorMeta[meta];

    referencias.forEach((ref) => {
      const nomeRefeicaoProp = `${refeicaoTipo}${capitalize(diaChave)}`;
      const nomeMacroProp = `macros${capitalize(refeicaoTipo)}${capitalize(diaChave)}`;

      if (ref[nomeRefeicaoProp] && ref[nomeMacroProp]) {
        mostrarRefeicao(
          nomeDia,
          nomeRefeicao,
          ref[nomeRefeicaoProp].join(" / "),
          ref[nomeMacroProp].join(". "),
          imagem
        );
      }
    });
  });
});

// Função auxiliar para capitalizar
function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

import treinosPerder from "./treinos/treinoperder.js";
import treinosManter from "./treinos/treinomanter.js";
import treinosGanhar from "./treinos/treinoganhar.js";
import refDiasPerder from "./refeicoes/refeicoesperder.js"
import refDiasManter from "./refeicoes/refeicoesmanter.js";
import refDiasGanhar from "./refeicoes/refeicoesganhar.js";