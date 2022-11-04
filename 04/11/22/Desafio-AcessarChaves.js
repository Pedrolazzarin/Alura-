const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678909",
    email:"andre@email.com"
}
              // 0        1       2       3
const chaves =["nome", "idade", "cpf", "email"]

// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["conta"])