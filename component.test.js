function runComponentTests() {
  testar("COMPONENT TEST se botão compras existe ", () => {
    var botao = document.getElementById("btnComprar");
    if (!botao) {
      throw new Error("O botão comprar não existe.");
    }
  });

  testar("COMPONENT TEST se botao vendas", () => {
    var botao2 = document.getElementById("btnVender");
    if (!botao2) {
      throw new Error("botao vender nao existe ")
    }
  });

  testar("COMPONENT TEST se botao  avançar dias existe ", () => {
    var botao3 = document.getElementById("btnAvancarDia");
    if (!botao3) {
      throw new Error("o botao de avançardias nao existe")

    }
  });

  testar("COMPONENT TEST avancar dia  ", () => {
    var dia = document.getElementById("dia");

    var botaodia = document.getElementById("btnAvancarDia");

    var teste1 = parseInt(dia.textContent)


    botaodia.click();

    var teste2 = parseInt(dia.textContent)

    if (teste2 !== teste1 + 1) {
      throw new Error("aconteceu erro")
    }



  });
  testar("COMPONENT TEST se compras funcionam  ", () => {
    var estoque = document.getElementById("estoque");
    var compras = document.getElementById("btnComprar");
    var cp = parseInt(estoque.textContent);
    compras.click();
    var compras_at = parseInt(estoque.textContent)
    if (compras_at !== cp + 1
    ) { throw new Error("deu erro") }


  });
  testar("COMPONENT TEST se vendas funcionam", () => {
    let est = document.getElementById("estoque");
    var vendas = document.getElementById("btnVender");
    var vender_velho = parseInt(est.textContent)
    vendas.click();
    var vender_atual = parseInt(est.textContent);
    if (vender_atual  !== vender_velho -1  ) {throw new Error("esse deu erro")}

  });
  


}
