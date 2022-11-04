const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678901",
    email:"andre@email.com",
    fones:["559123456789", "552132455632"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataDeNascimento:"02/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva";

console.log(cliente)