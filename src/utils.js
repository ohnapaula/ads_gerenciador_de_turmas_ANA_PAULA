
function verificarNomeDeAluno(alunos, nome) {
    let alunoJaEstahCadastrado = false;
    for (let i = 0; i < alunos.length; i++){
        if(alunos[i].nome.toLowerCase() === nome.trim().toLowerCase()){
            alunoJaEstahCadastrado = true;
            console.log("Aluno já existe no sistema.");
            break;
        }
    }

    return alunoJaEstahCadastrado;
}

module.exports = {};