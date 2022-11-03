const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((Aluno, indice) => {
    return medias[indice] < 7; // precisa ser true ou false ou seja booleano!!!!!!!!!!!!!!!!!!!!!!!!!!
});

console.log(reprovados);