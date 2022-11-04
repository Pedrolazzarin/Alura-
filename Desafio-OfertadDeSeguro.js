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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))
    {
        console.log(` Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.values(cliente))
oferecerSeguro(cliente)
