const alunos = ['Joao', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosMedias[0].includes(aluno)){
        // const alunos = listaDeAlunosMedias[0];
        // const medias = listaDeAlunosMedias[1];

        // ****** Desestruturaçao de lista ******
        const [alunos, medias] = listaDeAlunosMedias;
        //**********************************************
        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a media ${mediaDoAluno}`);
    }else{
        console.log("Aluno não encontrado");
    }
}

exibeNomeENota("Joao");

