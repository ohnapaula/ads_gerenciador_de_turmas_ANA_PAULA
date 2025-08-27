function adicionarAluno(alunos, nome) {
    let alunoJahExiste = verificarNomeDeAluno(alunos, nome);

    if (alunoJahExiste) {
        console.log("Aluno já existe no sistema.");
    } else {
        alunos.push({ nome: nome, notas: [] });
        console.log(`Aluno ${nome} adicionado com sucesso.`);
    }
}

function verificarNomeDeAluno(alunos, nome) {
    let alunoJahEstahCadastrado = false;
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome.toLowerCase() === nome.trim().toLowerCase()) {
            alunoJahEstahCadastrado = true;
            break;
        }
    }

    return alunoJahEstahCadastrado;
}

module.exports = {adicionarAluno};