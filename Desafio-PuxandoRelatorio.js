const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678901",
    email:"andre@email.com",
    fones:["559123456789", "552132455632"],

    dependentes: [
        {
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

let relatorio = "";

for(let info in cliente)
{
    if(typeof cliente[info] === "object" || typeof cliente [info] === "function")
    {
        continue
    }else{
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
    
}
console.log(typeof cliente.depositar)
console.log(relatorio)