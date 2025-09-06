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

function buscarAluno(nome) {

    for (let posicaoDoAluno = 0; posicaoDoAluno < alunos.length; posicaoDoAluno++) {
        if (alunos[posicaoDoAluno].nome.toLowerCase() === nome.toLowerCase()) {
            return posicaoDoAluno;
        }
    }
}

function verificarNotas(notasArray) {
    const notas = notasArray.split(',');

    let ehNotaValida = false;

    for (let i = 0; i < notas.length; i++) {
        notas[i] = Number(notas[i]);

        if (!isNaN(notas[i]) && notas[i] >= 0 && notas[i] <= 10) {
            ehNotaValida = true;
        } else {
            ehNotaValida = false;
        }
    }

    return ehNotaValida;
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
            if (aluno.notas === undefined) {
                console.log(aluno.nome + ' - ' + 'SEM NOTAS');
            } else {
                console.log(aluno.nome + ' - ' + aluno.notas.length);
            }
        });
    }
}

function adicionarNotas(nome, notasArray) {
    let notas = notasArray.split(',');
    let posicaoDoAluno = buscarAluno(nome);

    if (alunos[posicaoDoAluno].notas === undefined) {
        alunos[posicaoDoAluno].notas = [];
        notas.forEach(nota => {
            alunos[posicaoDoAluno].notas.push(Number(nota));
        });
        console.log(`Notas adicionadas a ${alunos[posicaoDoAluno].nome}.`);

    } else {
        notas.forEach(nota => alunos[posicaoDoAluno].notas.push(Number(nota)));

        console.log(`Notas adicionadas a ${alunos[posicaoDoAluno].nome}.`);
    }
}

function calcularMedia(nome) {
    let ehAluno = verificarAluno(nome);
    let posicaoDoAluno = buscarAluno(nome);
    let soma = 0;
    let media = 0;

    if (ehAluno && alunos[posicaoDoAluno].notas === undefined) {
        console.log("AVISO: Aluno sem notas.");
        return null;
    } else if (ehAluno && alunos[posicaoDoAluno].notas !== undefined) {
        alunos[posicaoDoAluno].notas.forEach(nota => soma += nota);
        media = soma / alunos[posicaoDoAluno].notas.length;
        console.log(`Média de ${alunos[posicaoDoAluno].nome}: ${media.toFixed(2)}`);
        return media.toFixed(2);
    } else {
        console.log("AVISO: Tentativa de cálculo de média para aluno não cadastrado.");
        return null;
    }
}
module.exports = { adicionarAluno, listarAlunos, adicionarNotas, verificarNotas, verificarAluno, adicionarNotas, calcularMedia };
