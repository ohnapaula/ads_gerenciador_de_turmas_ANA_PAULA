const alunos = [];

function verificarAluno(nome) {
    if (alunos.length === 0) {
        return false;
    } else {
        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].nome.toLowerCase() === nome.toLowerCase()) {
                return true;
            }
        }

        return false;
    }
}

function adicionarAluno(nome) {
    let ehAluno = verificarAluno(nome);

    if (!ehAluno) {
        alunos.push({ nome: nome });
        console.log(`Aluno ${nome} adicionado com sucesso.`);
    } else {
        console.log("AVISO: Aluno já existe no sistema.");
    }
}

function listarAlunos() {
    if (alunos.length === 0) {
        console.log("AVISO: Sem alunos cadastrados!");
    } else {
        alunos.forEach(aluno => {
            if(aluno.notas === undefined){
                console.log(aluno.nome + ' - ' + 'SEM NOTAS');
            }else{
                console.log(aluno.nome + ' - ' + aluno.notas.length);
            }
        });
    }
}

module.exports = { adicionarAluno, listarAlunos};
