const alunos = [];

function verificarAluno(nome) {
    if (alunos.length === 0) {
        return false;
    } else {
        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].nome === nome) {
                return true;
            }
        }

        return false;
    }
}

module.exports = {};
