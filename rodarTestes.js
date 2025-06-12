function testar(nomeDoTeste, funcaoDeTeste) {
  const resultadosDiv = document.getElementById("testes-resultados");
  try {
    funcaoDeTeste();
    resultadosDiv.textContent += `✅ ${nomeDoTeste}\n`;
  } catch (erro) {
    resultadosDiv.textContent += `❌ ${nomeDoTeste} - ${erro.message}\n`;
  }
}

document.getElementById("rodarTestesComponentBtn").addEventListener("click", () => {
  const resultadosDiv = document.getElementById("testes-resultados");
  resultadosDiv.textContent = "";
  if (typeof runComponentTests === "function") {
    runComponentTests();
  } else {
    resultadosDiv.textContent = "❌ Função runComponentTests() não encontrada!";
  }
});

document.getElementById("rodarTestesUnitBtn").addEventListener("click", () => {
  const resultadosDiv = document.getElementById("testes-resultados");
  resultadosDiv.textContent = "";
  if (typeof runUnitTests === "function") {
    runUnitTests();
  } else {
    resultadosDiv.textContent = "❌ Função runUnitTests() não encontrada!";
  }
});
