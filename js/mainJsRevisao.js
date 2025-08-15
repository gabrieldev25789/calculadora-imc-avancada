// =======================================
// PROJETO: CALCULADORA DE IMC + PLANOS
// (versão corrigida e robusta)
// =======================================

// ----- TABELA IMC -----
const data = [
  { min: 0,   max: 18.4, classification: "Menor que 18,5", info: "Magreza",          obesity: "0"   },
  { min: 18.5,max: 24.9, classification: "Entre 18,5 e 24,9", info: "Normal",         obesity: "0"   },
  { min: 25,  max: 29.9, classification: "Entre 25,0 e 29,9", info: "Sobrepeso",      obesity: "I"   },
  { min: 30,  max: 39.9, classification: "Entre 30,0 e 39,9", info: "Obesidade",      obesity: "II"  },
  { min: 40,  max: 99,   classification: "Maior que 40,0",    info: "Obesidade grave",obesity: "III" },
];

// ===== IMPORTS (mantenha <script type="module"> no HTML) =====
import treinosPerder   from "./treinos/treinoperder.js";
import treinosManter   from "./treinos/treinomanter.js";
import treinosGanhar   from "./treinos/treinoganhar.js";
import refDiasPerder   from "./refeicoes/refeicoesperder.js";
import refDiasManter   from "./refeicoes/refeicoesmanter.js";
import refDiasGanhar   from "./refeicoes/refeicoesganhar.js";

// ====== ELEMENTOS (com checagens) ======
const $ = (sel) => document.querySelector(sel);

// Intro / layout
const imgIntro      = $("#imgs");
const opacity       = $("#opacity");
const infosIntro    = $("#intro-infos");
const newH2         = $("#buttons h2");
const telaPreta     = $("#telaPreta");
const buttons       = $("#buttons");

// Containers principais
const buttonsContainer = $("#buttons-container");
const calcContainer    = $("#calc-container");

// Metas
const perder = $("#perder");
const manter = $("#manter");
const ganhar = $("#ganhar");

// Entradas
const weight   = $("#peso");
const height   = $("#altura");

// Ação calcular
const calcBtn  = $("#btn-calc");

// Resultado
const resultContainer = $("#result");
const resultMessage   = $("#result p");
const alertMessage    = $("#result span");
const setas           = $("#setas");

// Navegação
const back = $("#voltar");

// Treino/Alimentação (parte 2)
const buttonShowTreinoAlimentacao = $("#button-show-container");
const treinoAlimentacao           = $("#treino-alimentacao");
const treinoAlimentacaoContainer  = $("#container-treino-alimentacao");
const plano                       = $("#plano");

// Treino
const buttonTreino     = document.querySelectorAll(".button-treino");
const containerTreino  = $("#treino-container");
const treinoStyle      = $("#treino");

// Alimentação
const alimentacaoContainer = $("#alimentacao");
const containerAlimentacao = $("#alimentacao-container");
const selects              = document.querySelectorAll(".select-ref");

// ======= ESTADO =======
let meta = null;

// ======= UTIL =======
function esconder() {
  if (imgIntro) imgIntro.classList.add("hidden");
  if (opacity)  opacity.classList.add("hide");
  if (infosIntro) infosIntro.classList.add("hide");
  if (buttons) buttons.style.marginTop = "-60vh";
}

function normalizarVisual() {
  const introInfos = $("#intro-infos");
  const opacityEl  = $("#opacity");

  if (imgIntro) imgIntro.classList.remove("hidden");
  if (buttons)  buttons.style.marginTop = "0";
  if (introInfos) introInfos.classList.remove("hide");
  if (opacityEl)  opacityEl.classList.remove("hide");
}

function limparTextoClasses(el) {
  if (!el) return;
  el.textContent = "";
  el.className = ""; // remove todas as classes
}

function valoresOK() {
  const w = +weight?.value;
  const h = +(height?.value || "").replace(",", ".");
  // Limites CONSISTENTES (mesmos em todo o código)
  if (!w || !h) return false;
  if (w < 30 || w > 380) return false;
  if (h < 1.30 || h > 2.20) return false;
  return true;
}

function calcImc() {
  if (!valoresOK()) return null;
  const w = +weight.value;
  const h = +height.value.replace(",", ".");
  const calc = w / (h * h);
  return Number(calc.toFixed(1));
}

// ======= INTERFACE / ESTILOS =======
function HideH2eButtonsContainer() {
  if (treinoAlimentacao) treinoAlimentacao.style.display = "none";
  if (newH2) newH2.classList.add("hide");
  if (buttonsContainer) buttonsContainer.classList.add("hidden");
}

function hideContainer() {
  if (buttonsContainer) buttonsContainer.classList.remove("hidden");
  if (treinoAlimentacaoContainer) treinoAlimentacaoContainer.classList.add("hide");
  if (treinoAlimentacao) treinoAlimentacao.classList.add("hidden");
  if (back) back.classList.add("hide");
}

function estilosMetas(meta1, meta2, meta3) {
  if (newH2) {
    newH2.style.marginTop = "2rem";
    newH2.classList.remove("hide");
    newH2.innerHTML = "Selecione uma opção";
  }
  if (calcContainer) calcContainer.classList.remove("hidden");

  meta1?.classList.add("select");
  meta2?.classList.remove("select");
  meta3?.classList.remove("select");

  if (meta1?.classList.contains("recomend")) {
    hideContainer();
    normalizarVisual();
    meta1.classList.remove("recomend");
    meta2?.classList.remove("hide");
    meta3?.classList.remove("hide");
  }
}

function normalizarCores(btn, cor) {
  if (btn?.classList.contains("select")) {
    btn.style.backgroundColor = cor;
    if (newH2) newH2.classList.remove("selectH2");
    if (buttonsContainer) buttonsContainer.classList.remove("border");
    normalizarVisual();
  }
}

function removerContainereMostrarMensagem() {
  if (resultContainer) resultContainer.classList.remove("hide");
  if (alertMessage) alertMessage.classList.add("hide");
}

function ShowRecomendOption(msg, hide1, hide2, destacar) {
  if (alertMessage) {
    alertMessage.classList.remove("hide");
    alertMessage.textContent = msg;
  }

  hide1?.classList.add("hide");
  hide2?.classList.add("hide");

  if (destacar) {
    destacar.style.backgroundColor = "rgb(9, 255, 0)";
    destacar.classList.add("recomend");
  }

  if (newH2) newH2.classList.add("hide");
  if (setas) setas.classList.remove("hide");
}

// ======= RESULTADO =======
function showResult() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  esconder();

  if (!meta) {
    if (newH2) newH2.classList.add("selectH2");
    if (buttonsContainer) {
      buttonsContainer.classList.add("border");
      buttonsContainer.classList.add("hide");
    }
    if (newH2) newH2.style.marginTop = "0";
    if (treinoAlimentacaoContainer) treinoAlimentacaoContainer.classList.add("hide");
    return;
  }

  buttonShowTreinoAlimentacao?.classList.remove("hide");

  const imc = calcImc();
  if (!imc) return;

  if (resultMessage) resultMessage.className = "";
  resultContainer?.classList.remove("hide");

  data.forEach((dados) => {
    if (imc >= dados.min && imc <= dados.max) {
      if (resultMessage)
        resultMessage.innerHTML = `Seu IMC é de ${imc}, seu índice é ${dados.info}`;
      alertMessage?.classList.add("hide");

      switch (dados.info) {
        case "Magreza":
          resultMessage?.classList.add("low-extreme");
          HideH2eButtonsContainer();
          break;
        case "Normal":
          resultMessage?.classList.add("normal");
          HideH2eButtonsContainer();
          break;
        case "Sobrepeso":
          resultMessage?.classList.add("low-extreme");
          HideH2eButtonsContainer();
          break;
        case "Obesidade":
          resultMessage?.classList.add("extreme");
          HideH2eButtonsContainer();
          break;
        case "Obesidade grave":
          resultMessage?.classList.add("very-extreme");
          HideH2eButtonsContainer();
          break;
      }

      // ===== Verificações meta x IMC =====
      if (meta === "perder" && imc < 18.5) {
        ShowRecomendOption(
          `Seu índice já é de ${dados.info}. Por favor, clique na opção de Ganhar Peso.`,
          perder, manter, ganhar
        );
        hideContainer();
      }

      if (meta === "ganhar" && imc > 24.9) {
        ShowRecomendOption(
          `Seu índice já é de ${dados.info}. Por favor, clique na opção de Perder Peso.`,
          ganhar, manter, perder
        );
        hideContainer();
      }

      if (meta === "manter" && imc >= 25) {
        ShowRecomendOption(
          `Seu índice é de ${dados.info}. Por favor, clique na opção de Perder Peso.`,
          ganhar, manter, perder
        );
        hideContainer();
      }

      if (meta === "manter" && imc <= 18.4) {
        ShowRecomendOption(
          `Seu índice é de ${dados.info}. Por favor, clique na opção de Ganhar Peso.`,
          perder, manter, ganhar
        );
        hideContainer();
      }

      if (meta === "ganhar" && dados.info === "Normal") {
        ShowRecomendOption(
          `Seu índice é de ${dados.info}. Por favor, clique na opção de Manter Peso.`,
          perder, ganhar, manter
        );
        hideContainer();
      }

      if (meta === "perder" && dados.info === "Normal") {
        ShowRecomendOption(
          `Seu índice é de ${dados.info}. Por favor, clique na opção de Manter Peso.`,
          perder, ganhar, manter
        );
        hideContainer();
      }
    }
  });
}

// ======= VALIDAÇÃO ENTRADAS =======
function validHeightAndWeight() {
  if (calcContainer?.classList.contains("hidden")) return;

  resultMessage?.classList.add("very-extreme");

  if (!weight?.value || !height?.value) {
    removerContainereMostrarMensagem();
    if (resultMessage) resultMessage.textContent = "Digite valor em peso e altura";
    if (newH2) newH2.style.marginTop = "-5rem";
  } else {
    const w = +weight.value;
    const h = +height.value.replace(",", ".");
    if (w < 30 || w > 380 || h > 2.20 || h < 1.30) {
      removerContainereMostrarMensagem();
      if (resultMessage) resultMessage.textContent = "Valores inválidos (Peso: 30–380 kg, Altura: 1,30–2,20 m)";
      if (newH2) newH2.style.marginTop = "-5rem";
      resultMessage?.classList.add("very-extreme");
    } else {
      resultContainer?.classList.add("hide");
      treinoAlimentacaoContainer?.classList.remove("hide");
    }
  }
}

function verificarValores() {
  if (!valoresOK()) return;

  showResult();
  cleanInputs();
  calcContainer?.classList.add("hidden");
}

// ======= LIMPEZAS =======
function cleanInfos() {
  if (weight) weight.value = "";
  if (height) height.value = "";

  resultContainer?.classList.add("hide");
  setas?.classList.add("hide");

  if (resultMessage) {
    resultMessage.textContent = "";
    resultMessage.className = "";
  }

  if (alertMessage) {
    alertMessage.textContent = "";
    alertMessage.className = "";
  }
}

function cleanInputs() {
  if (weight) weight.value = "";
  if (height) height.value = "";
}

// ======= EVENTOS DE METAS =======
perder?.addEventListener("click", () => {
  meta = "perder";
  estilosMetas(perder, manter, ganhar);
  normalizarCores(perder, "red");
  cleanInfos();
});

manter?.addEventListener("click", () => {
  meta = "manter";
  estilosMetas(manter, perder, ganhar);
  normalizarCores(manter, "rgb(221, 108, 15)");
  cleanInfos();
});

ganhar?.addEventListener("click", () => {
  meta = "ganhar";
  estilosMetas(ganhar, manter, perder);
  normalizarCores(ganhar, "rgb(14, 226, 42)");
  cleanInfos();
});

// ======= CALCULAR =======
calcBtn?.addEventListener("click", () => {
  validHeightAndWeight();
  verificarValores();
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    if (calcBtn) {
      calcBtn.style.backgroundColor = "#0056b3";
      setTimeout(() => (calcBtn.style.backgroundColor = "#007bff"), 400);
    }

    validHeightAndWeight();

    const w = +weight?.value;
    const h = +(height?.value || "").replace(",", ".");

    if (!w || !h || w > 380 || w < 30 || h > 2.20 || h < 1.30) return;

    showResult();
    cleanInputs();
    calcContainer?.classList.add("hidden");
  }
});

// ==============================
// PARTE 2 — TREINO / ALIMENTAÇÃO
// ==============================

// Estado de plano
plano?.classList.add("hide");

// Dois botões de fechar independentes
const buttonFecharTreinoEl = document.createElement("button");
buttonFecharTreinoEl.id = "fechar-treino";
buttonFecharTreinoEl.textContent = "X";
buttonFecharTreinoEl.classList.add("hide");

const buttonFecharAlimEl = document.createElement("button");
buttonFecharAlimEl.id = "fechar-alimentacao";
buttonFecharAlimEl.textContent = "X";
buttonFecharAlimEl.classList.add("hide");

// Garantir visibilidade inicial do wrapper
treinoAlimentacao?.classList.remove("hide");

// Mostrar container Treino/Alimentação
buttonShowTreinoAlimentacao?.addEventListener("click", () => {
  if (treinoAlimentacao) treinoAlimentacao.style.display = "flex";
  mostrarContainer();
  plano?.classList.remove("hide");
  if (plano) plano.innerHTML = `Treino / Alimentação pra quem quer ${meta} peso`;
});

function mostrarContainer() {
  treinoAlimentacao?.classList.remove("hidden");
  resultContainer?.classList.add("hide");
  buttonShowTreinoAlimentacao?.classList.add("hide");
  back?.classList.remove("hide");
}

back?.classList.add("hide");
back?.classList.add("hide");
back?.addEventListener("click", () => {
  zerarContainers();
  normalizarVisual();
});

// Reset geral para voltar ao início
function zerarContainers() {
  buttonFecharTreinoFn();
  fecharContainerAlimentacao();

  selects.forEach((select) => (select.selectedIndex = 0));

  plano?.classList.add("hide");
  back?.classList.add("hide");

  newH2?.classList.remove("hide");
  buttonsContainer?.classList.remove("hidden");
  calcContainer?.classList.remove("hidden");
  buttonShowTreinoAlimentacao?.classList.add("hide");
  treinoAlimentacao?.classList.add("hidden");
  treinoAlimentacaoContainer?.classList.add("hide");
}

// ---------- TREINO ----------
const divTreino = document.createElement("div");
divTreino.id = "gerar-treino";

function mostrarTreino(treino1, treino2, treino3, dia, grupo, imagem1, imagem2) {
  divTreino.classList.remove("hide");
  divTreino.innerHTML = "";

  const treinos = [];
  treinos.push(treino1, treino2, treino3);

  const divImg = document.createElement("div");
  divImg.id = "div-img";

  const imgTreino1 = document.createElement("img");
  imgTreino1.id = "img-treino1";
  imgTreino1.src = `./img/${imagem1}`;

  const imgTreino2 = document.createElement("img");
  imgTreino2.id = "img-treino2";
  imgTreino2.src = `./img/${imagem2}`;

  const grupoMuscular = document.createElement("h3");
  grupoMuscular.id = "grupo-muscular";
  grupoMuscular.textContent = grupo;

  const ulTreino = document.createElement("ul");
  ulTreino.id = "ul-treino";

  treinos.forEach((treino) => {
    if (treino == null) return;
    const li = document.createElement("li");
    li.id = "lista-treino";
    li.textContent = Array.isArray(treino) ? treino.join(" / ") : treino;
    ulTreino.appendChild(li);
  });

  const diaTreino = document.createElement("h3");
  diaTreino.id = "dia-treino";
  diaTreino.textContent = dia;

  divImg.appendChild(imgTreino1);
  divImg.appendChild(imgTreino2);

  divTreino.appendChild(diaTreino);
  divTreino.appendChild(grupoMuscular);
  divTreino.appendChild(ulTreino);
  divTreino.appendChild(divImg);

  estilizarContainerTreino();
}

function estilizarContainerTreino() {
  alimentacaoContainer?.classList.add("hide");
  if (treinoStyle) {
    treinoStyle.style.width = "100%";
    treinoStyle.appendChild(divTreino);
  }
  buttonFecharTreinoEl.classList.remove("hide");
  divTreino.appendChild(buttonFecharTreinoEl);
}

buttonFecharTreinoEl.addEventListener("click", buttonFecharTreinoFn);

function buttonFecharTreinoFn() {
  if (treinoStyle) treinoStyle.style.width = "50%";
  divTreino.classList.add("hide");
  containerTreino?.classList.remove("hide");
  alimentacaoContainer?.classList.remove("hide");
}

// Mapear treinos por meta/dia
function criarTreino(metaKey, dadosTreino) {
  return {
    segunda: dadosTreino[metaKey].segunda,
    terca:   dadosTreino[metaKey].terca,
    quarta:  dadosTreino[metaKey].quarta,
    quinta:  dadosTreino[metaKey].quinta,
    sexta:   dadosTreino[metaKey].sexta,
  };
}

const treinosPorMeta = {
  perder: criarTreino("perder", treinosPerder),
  manter: criarTreino("manter", treinosManter),
  ganhar: criarTreino("ganhar", treinosGanhar),
};

buttonTreino.forEach((treinoBtn) => {
  treinoBtn.addEventListener("click", () => {
    buttonFecharTreinoEl.style.marginTop = "0rem";
    containerTreino?.classList.add("hide");
    const treinoDia = treinoBtn.parentElement; // ex: div#segunda

    if (meta && treinoDia?.id) {
      const treino = treinosPorMeta[meta][treinoDia.id];

      if (treinoDia.id === "segunda") {
        mostrarTreino(
          treino.peito, treino.ombro, treino.triceps,
          "Segunda Feira", "Peito / Ombro / Tríceps",
          "treinopeito.avif", "treinopeito2.webp"
        );
      } else if (treinoDia.id === "terca") {
        mostrarTreino(
          treino.costas, treino.biceps, null,
          "Terça Feira", "Costas / Bíceps",
          "treinocostas.webp", "treinocostas2.jpg"
        );
      } else if (treinoDia.id === "quarta") {
        mostrarTreino(
          treino.pernaCompleto, null, null,
          "Quarta Feira", "Perna Completo",
          "treinoperna.webp", "treinoperna2.jpg"
        );
      } else if (treinoDia.id === "quinta") {
        mostrarTreino(
          treino.ombroIsolado, null, null,
          "Quinta Feira", "Ombro Isolado",
          "treinoombro.jpg", "treinoombro2.jpg"
        );
      } else if (treinoDia.id === "sexta") {
        mostrarTreino(
          treino.biceps, treino.triceps, null,
          "Sexta Feira", "Bíceps / Tríceps",
          "treinobiceps.jpg", "treinobiceps2.webp"
        );
      }
    }
  });
});

// ---------- ALIMENTAÇÃO ----------
const divRefeicao = document.createElement("div");
divRefeicao.id = "div-refeicao";

function mostrarRefeicao(dia, refeicaoTipo, refeicao, macro, imagem) {
  const diaSemana = document.createElement("h3");
  diaSemana.id = "dia-semana";
  diaSemana.textContent = dia;

  const divImg = document.createElement("div");
  divImg.id = "div-img";

  const img = document.createElement("img");
  img.id = "img-ref";
  img.src = `./img/${imagem}`;

  const tipoRefeicao = document.createElement("h4");
  tipoRefeicao.id = "tipo-refeicao";
  tipoRefeicao.textContent = refeicaoTipo;

  const ulRef = document.createElement("ul");
  ulRef.id = "ul-refeicao";

  const ulMacro = document.createElement("ul");
  ulMacro.id = "ul-Macro";

  const liRef = document.createElement("li");
  liRef.id = "lista-refeicao";
  liRef.textContent = refeicao;

  const liMacro = document.createElement("li");
  liMacro.id = "lista-macro";
  liMacro.textContent = macro;

  ulRef.appendChild(liRef);
  ulMacro.appendChild(liMacro);

  divRefeicao.innerHTML = "";
  divRefeicao.appendChild(diaSemana);
  divRefeicao.appendChild(tipoRefeicao);
  divRefeicao.appendChild(ulRef);
  divRefeicao.appendChild(ulMacro);
  divRefeicao.appendChild(img);

  estilizarRefeicao();
}

function estilizarRefeicao() {
  alimentacaoContainer?.appendChild(divRefeicao);
  buttonFecharAlimEl.classList.remove("hide");
  alimentacaoContainer?.appendChild(buttonFecharAlimEl);
  if (alimentacaoContainer) alimentacaoContainer.style.width = "100%";
  containerAlimentacao?.classList.add("hide");
  treinoStyle?.classList.add("hide");
  divRefeicao.classList.remove("hide");
}

buttonFecharAlimEl.addEventListener("click", fecharContainerAlimentacao);

function fecharContainerAlimentacao() {
  buttonFecharAlimEl.classList.add("hide");
  treinoStyle?.classList.remove("hide");
  divRefeicao.classList.add("hide");
  if (alimentacaoContainer) alimentacaoContainer.style.width = "50%";
  containerAlimentacao?.classList.remove("hide");
  selects.forEach((select) => (select.selectedIndex = 0));
}

// Dias (labels)
const nomesDias = {
  "select-segunda": "Segunda Feira",
  "select-terca":   "Terça Feira",
  "select-quarta":  "Quarta Feira",
  "select-quinta":  "Quinta Feira",
  "select-sexta":   "Sexta Feira",
  "select-sabado":  "Sábado",
  "select-domingo": "Domingo",
};

// Tipos de refeição (labels)
const nomesRefeicoes = {
  cafe:   "Café da manhã",
  almoco: "Almoço",
  lanche: "Lanche da tarde",
  janta:  "Janta",
};

// Imagens por refeição
const imagensRefeicoes = {
  cafe:   "cafemanha.webp",
  almoco: "almoco.png",
  lanche: "lanche.webp",
  janta:  "janta.jpg",
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

selects.forEach((select) => {
  select.addEventListener("change", () => {
    buttonFecharAlimEl.style.marginTop = "-1rem";
    divRefeicao.innerHTML = "";

    const diaId = select.id;                  // "select-segunda"
    const diaChave = diaId.replace("select-", ""); // "segunda"
    const refeicaoTipo = select.value;        // "cafe" | "almoco" | "lanche" | "janta"

    const nomeDia = nomesDias[diaId];
    const nomeRefeicao = nomesRefeicoes[refeicaoTipo];
    const imagem = imagensRefeicoes[refeicaoTipo];

    const refPorMeta = {
      perder: refDiasPerder,
      manter: refDiasManter,
      ganhar: refDiasGanhar,
    };

    const referencias = refPorMeta[meta];
    if (!referencias) return;

    referencias.forEach((ref) => {
      const nomeRefeicaoProp = `${refeicaoTipo}${capitalize(diaChave)}`;      // p.ex. cafeSegunda
      const nomeMacroProp    = `macros${capitalize(refeicaoTipo)}${capitalize(diaChave)}`; // p.ex. macrosCafeSegunda

      if (ref[nomeRefeicaoProp] && ref[nomeMacroProp]) {
        mostrarRefeicao(
          nomeDia,
          nomeRefeicao,
          Array.isArray(ref[nomeRefeicaoProp]) ? ref[nomeRefeicaoProp].join(" / ") : String(ref[nomeRefeicaoProp]),
          Array.isArray(ref[nomeMacroProp]) ? ref[nomeMacroProp].join(". ") : String(ref[nomeMacroProp]),
          imagem
        );
      }
    });
  });
});
