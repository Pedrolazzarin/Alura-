class Cliente{  
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
     
    depositar(valor){
        this.saldo += valor
    }
    
    exibirSaldo(){
        console.log(this.saldo)
    }
}

const Andre = new Cliente("Andre", "andre@email.com", "12345678909", "300")

Andre.exibirSaldo()

console.log(Andre)