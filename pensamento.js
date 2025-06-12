// Estado inicial
let estoque = 10;
let dia = 1;

// Funções puras para estoque e dia
function comprar(estoqueAtual) {
  return estoqueAtual + 1;
}

function vender(estoqueAtual) {
  if (estoqueAtual <= 0) throw new Error("Estoque insuficiente para vender");
  return estoqueAtual - 1;
}

function avancarDia(diaAtual) {
  return diaAtual + 1;
}

// Atualiza a interface
function atualizarTela() {
  document.getElementById("estoque").textContent = estoque;
  document.getElementById("dia").textContent = dia;
}

// Eventos dos botões
document.getElementById("btnComprar").addEventListener("click", () => {
  estoque = comprar(estoque);
  atualizarTela();
});

document.getElementById("btnVender").addEventListener("click", () => {
  try {
    estoque = vender(estoque);
    atualizarTela();
  } catch (e) {
    alert(e.message);
  }
});

document.getElementById("btnAvancarDia").addEventListener("click", () => {
  dia = avancarDia(dia);
  atualizarTela();
});

// Inicializa tela
atualizarTela();
