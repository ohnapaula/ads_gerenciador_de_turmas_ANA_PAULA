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

    if(!ehAluno){
        alunos.push({nome: nome});
        console.log(`Aluno ${nome} adicionado com sucesso.`);
    }else{
        console.log("AVISO: Aluno já existe no sistema.");
    }
}

module.exports = {adicionarAluno};
