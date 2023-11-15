// Funções com parâmetros

function torrar(pao, nome = "cliente", valor = 10.90){
    console.log("Torrada feita com " + pao)
    console.log("Encomendada por " + nome)
    console.log("Total do pedido é R$ " + valor)
}

torrar("pão de forma")
torrar("pão integral", "Daniel", 10.95 * 2)