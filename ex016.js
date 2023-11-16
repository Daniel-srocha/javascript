let resultado = soma(5, 5)

console.log("O resultado dessa função é " + resultado)

function soma(nA, nB){
    let totalSoma = nA + nB
    return totalSoma
}

let userName = getFirstname("Daniel Santos Rocha")

console.log("Seja bem-vindo " + userName)

function getFirstname(name){
    let firstname = name.split(" ")[0]
    return firstname
}