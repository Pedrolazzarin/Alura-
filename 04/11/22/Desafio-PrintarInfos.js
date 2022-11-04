const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678901",
    email:"andre@email.com"
}

    console.log(`Meu nome eh ${cliente.nome} e tenho ${cliente.idade} anos.`);
    console.log(`Os tres ultimos digitos do meu cpf sao: ${cliente.cpf.substring(8,11)}`)

