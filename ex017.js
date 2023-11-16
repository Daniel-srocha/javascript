let invoice = {
    name: "Daniel",
    age: 28,
    products: {
        0: ["mouse", 20.00],
        1: ["Teclado", 100.00],
        2: ["Monitor", 899.99],
        3: ["TV 55 pol", 10000.00]
    }
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("------------------")

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
           console.log(`- ${productName}: R$ ${productPrice}`)
    }
}