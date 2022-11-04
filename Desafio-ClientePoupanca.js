function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const Andre = new clientePoupanca("Ju", "55588844411","ju@email.com", 100)

function clientePoupanca(nome, cpf, email, saldo, saldoPoup){
    cliente.call(this, nome, cpf, email,saldo)
    this.saldoPoup = saldoPoup
}

const ju = new clientePoupanca("Ju", "55588844411","ju@email.com", 100, 200)

console.log(ju)

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

ju.depositarPoup(30)

console.log(ju.saldoPoup)
console.log(Andre.saldoPoup)
