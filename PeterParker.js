const pessoa = {
    nome:"Peter Parker",
    dataDeNascimento:"25/05/1989",
    carteiraDeIdentidade:"999362-1",
    email:"peterparker@email.com",
    telefone:"+552711112222",
    cidade:"Cariacica",
    estado:"ES"
}

pessoa.cpf = "12345678909";

const chaves =["nome", "dataDeNascimento", "carteiraDeIdentidade", "email", "telefone", "cidade", "estado", "cpf"];

chaves.forEach(info => console.log(pessoa[info]))


