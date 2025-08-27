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

function listarAlunos(alunos) {
    if (alunos.length != 0) {
        for (let i = 0; i < alunos.length; i++) {
            console.log(`Nome: ${alunos[i].nome} -  Quantidade de notas: ${alunos[i].notas.length}`);
        }
    } else {
        console.log("Turma sem alunos.");
    }
}

function buscarAluno(alunos, nome) {
    let posicaoDoAluno = 0;
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome.toLowerCase() === nome.trim().toLowerCase()) {
            posicaoDoAluno = i;
            return posicaoDoAluno;
        }
    }
}

function validarNotas(stringComNotas) {
    let notasInvalidas = [];
    let notas = stringComNotas.split(",");
    let nota = 0;

    for (let i = 0; i < notas.length; i++) {
        nota = Number(notas[i]);
        if (nota < 0 || nota > 10) {
            notasInvalidas.push(nota);
            break;
        }
    }

    if (notasInvalidas.length > 0) {
        return false;
    } else {
        return true;
    }
}

function registrarNotas(alunos, nome, stringComNotas) {
    let alunoJahExiste = verificarNomeDeAluno(alunos, nome);
    const posicaoDoAluno = buscarAluno(alunos, nome);
    const ehNotaValida = validarNotas(stringComNotas);
    const notas = stringComNotas.split(",");

    if (!alunoJahExiste) {
        console.log("Aluno ainda não cadastrado no sistema.");
    } else {
        if (ehNotaValida) {
            for (let i = 0; i < notas.length; i++) {
                alunos[posicaoDoAluno].notas.push(Number(notas[i]));
            }

            console.log(`Notas adicionadas a ${alunos[posicaoDoAluno].nome}`);
        }
    }
}

function calcularMediaDoAluno(alunos, nome) {
    const alunoJahExiste = verificarNomeDeAluno(alunos, nome);
    if (alunoJahExiste) {

        const posicaoAluno = buscarAluno(alunos, nome);
        const notas = alunos[posicaoAluno].notas;

        if (alunos[posicaoAluno].notas.length === 0) {
            console.log("Aluno sem notas.");
        } else {
            let soma = 0;
            let media = 0;

            for (let i = 0; i < notas.length; i++) {
                soma += notas[i];
            }

            media = soma / notas.length;

            console.log(`A média do aluno ${nome} é ${media.toFixed(2)}`);
        }

    }else{
        console.log("Aluno ainda não cadastrado.");
    }
}

module.exports = { adicionarAluno, listarAlunos, registrarNotas, calcularMediaDoAluno };