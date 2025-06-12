


function runUnitTests() {
  testar("UNIQUE TEST compras com estoque 1 ", () => {
    if (comprar(1) !== 2) { throw new Error("o resultado deveria ser 2") }
  });

  testar("UNIQUE TEST compras com estoque 2 ", () => {
    if (comprar(2) !== 3) { throw new Error("deveria ser 3 ") }

  });

  testar("UNIQUE TEST se vender for menor que 0 dar erro ",() => {
   var errar = false ;
   try{
    vender(0);
   }
   catch(e){
   errar = true ;}

   if (!errar){throw new Error("o codigo deu problema")}

  });
   testar("UNIQUE TEST vendas com estoque 54", () => {
    if(vender(55) !== 54 ){throw new Error("deveria ser 54")}
   }) ;

   testar("UNIQUE TEST vendas com estoque limite", () => {
    if(vender(1) !== 0 ){throw new Error("0")}
   }) ;

    testar ("UNIQUE TEST varias comprar ao mesmo tempo ", () => { 
      var estoque = 15
      estoque = comprar(estoque);
      estoque = comprar(estoque);
       estoque = comprar(estoque);
      estoque = comprar(estoque);
       estoque = comprar(estoque);
      estoque = comprar(estoque);
       estoque = comprar(estoque);
      estoque = comprar(estoque);
      if (estoque !== 23 ){throw new Error("o resutado deveria ser 23")}

    });

     testar(" UNIQUE TEST compras e vendas ao mesmo tempo ", () => {
      var estoque = 15
       estoque = comprar(estoque);
      estoque = comprar(estoque);
       estoque = comprar(estoque);
      estoque = comprar(estoque);
      estoque = vender(estoque);
      if (estoque !== 18 ){throw new Error("o resutado deveria ser 18")}

     }

     )  
      
      
}
