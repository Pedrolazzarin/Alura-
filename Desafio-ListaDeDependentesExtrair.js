const clientes = [
    {
    nome: "Andre",
    cpf: "12345678909",
    dependentes:[{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    },
{
        nome: "Samia",
        parentesco: "filha",
        dataNasc: "04/10/2014"
    }],
}, 
    {
        nome: "Juliana",
        cpf: "098765432121",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }
]

const listaDeDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDeDependentes)