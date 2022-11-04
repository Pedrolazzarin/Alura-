const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678901",
    email:"andre@email.com",
    fones:["559123456789", "552132455632"],
    dependentes: [{
    nome:"Sara",
    parentesco:"filha",
    dataDeNascimento:"02/03/2011" },
{
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
}
    ],
    saldo:100,

    depositar:function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar()
console.log(cliente.saldo)
