// Listas, coleção, vetor

let itens = ["item1", "item2", "item3", "item4"]


// usa-se colchetes para buscar itens em uma lista ordenada

console.log(itens[0])

// Ao digitar a variavel seguido de ponto (itens.), abre uma lista de comandos para manipular a lista (funçôes ou métodos)

itens.pop()
itens.sort()
itens.length()

// Buscando itens em uma matriz

let itenNome = [
    ["Daniel", 44, "Timão"],
    ["Ericha", 46, "Peixe"]
]

console.log("O usuário " + itenNome[0][0] + ", tem " + itenNome[0][1] + " anos e torce para o " + itenNome[0][2] + "!")
console.log("O usuário " + itenNome[1][0] + ", tem " + itenNome[1][1] + " anos e torce para o " + itenNome[1][2] + "!")


