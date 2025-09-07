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
    for (
        let posicaoDoAluno = 0;
        posicaoDoAluno < alunos.length;
        posicaoDoAluno++
    ) {
        if (alunos[posicaoDoAluno].nome.toLowerCase() === nome.toLowerCase()) {
            return posicaoDoAluno;
        }
    }
}

function verificarNotas(notasArray) {
    const notas = notasArray.split(",");

    let ehNotaValida = false;

    for (let i = 0; i < notas.length; i++) {
        notas[i] = Number(notas[i]);

        if (!isNaN(notas[i]) && notas[i] >= 0 && notas[i] <= 10) {
            ehNotaValida = true;
        } else {
            ehNotaValida = false;
            break;
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
        alunos.forEach((aluno) => {
            if (aluno.notas === undefined) {
                console.log(aluno.nome + " - " + "SEM NOTAS");
            } else {
                console.log(aluno.nome + " - " + aluno.notas.length);
            }
        });
    }
}

function adicionarNotas(nome, notasArray) {
    let notas = notasArray.split(",");
    let posicaoDoAluno = buscarAluno(nome);
    let ehNotaValida = verificarNotas(notasArray);

    if (alunos[posicaoDoAluno].notas === undefined && ehNotaValida) {
        alunos[posicaoDoAluno].notas = [];
        notas.forEach((nota) => {
            alunos[posicaoDoAluno].notas.push(Number(nota));
        });
        console.log(`Notas adicionadas a ${alunos[posicaoDoAluno].nome}.`);

    } else if (alunos[posicaoDoAluno].notas !== undefined && ehNotaValida) {
        notas.forEach((nota) => alunos[posicaoDoAluno].notas.push(Number(nota)));

        console.log(`Notas adicionadas a ${alunos[posicaoDoAluno].nome}.`);
    }else{
        console.log("AVISO: Notas inválidas. Registre novamente!");
    }
}

function calcularMedia(nome) {
    let ehAluno = verificarAluno(nome);
    let posicaoDoAluno = buscarAluno(nome);
    let soma = 0;
    let media = 0;

    if (ehAluno && alunos[posicaoDoAluno].notas === undefined) {
        return null;
    } else if (ehAluno && alunos[posicaoDoAluno].notas !== undefined) {
        alunos[posicaoDoAluno].notas.forEach((nota) => (soma += nota));
        media = soma / alunos[posicaoDoAluno].notas.length;
        return Number(media.toFixed(2));
    } else {
        return null;
    }
}

function mostrarAprovados() {
    let media = 0;
    const aprovados = [];
    console.log("Aprovados:");
    alunos.forEach((aluno) => {
        media = calcularMedia(aluno.nome);
        if (media >= 7) {
            aprovados.push(aluno);
            console.log(`${aluno.nome} - ${media.toFixed(2)}`);
        }
    });

    if (aprovados.length === 0) {
        console.log("SEM ALUNOS APROVADOS.");
    }
}

function calcularMediaGeral() {
    let soma = 0;
    let mediaDoAluno = 0;
    let alunosComNotas = 0;
    let mediaGeral = 0;

    for (let i = 0; i < alunos.length; i++) {
        mediaDoAluno = calcularMedia(alunos[i].nome);

        if (mediaDoAluno !== null) {
            soma += mediaDoAluno;
            alunosComNotas++;
        }
    }

    if (alunosComNotas > 0) {
        mediaGeral = soma / alunosComNotas;

        return mediaGeral.toFixed(2);
    }

    return null;
}

function buscarAlunoComMaiorMedia() {
    let maiorMedia = 0;
    let media = 0;
    let alunoComMaiorMedia = {};

    for (let i = 0; i < alunos.length; i++) {
        media = calcularMedia(alunos[i].nome);
        if (media > maiorMedia) {
            maiorMedia = media;
            alunoComMaiorMedia.nome = alunos[i].nome;
            alunoComMaiorMedia.media = maiorMedia;
        }
    }

    return alunoComMaiorMedia;
}

function buscarAlunoComMenorMedia() {
    let menorMedia = 0;
    let media = 0;
    let alunoComMenorMedia = {};
    const alunosComNotas = [];

    alunos.map((aluno) => {
        if (aluno.notas !== undefined) {
            alunosComNotas.push(aluno);
        }
    });

    for (let i = 0; i < alunosComNotas.length; i++) {
        media = calcularMedia(alunosComNotas[i].nome);
        if (i == 0) {
            menorMedia = media;
            alunoComMenorMedia.nome = alunosComNotas[i].nome;
            alunoComMenorMedia.media = menorMedia;
        } else {
            if (media < menorMedia) {
                menorMedia = media;
                alunoComMenorMedia.nome = alunosComNotas[i].nome;
                alunoComMenorMedia.media = menorMedia;
            }
        }
    }

    return alunoComMenorMedia;
}

function mostrarEstatisticasDaTurma() {
    let alunoComMaiorMedia = buscarAlunoComMaiorMedia();
    let alunoComMenorMedia = buscarAlunoComMenorMedia();
    let mediaGeral = calcularMediaGeral();
    if (mediaGeral === null) {
        console.log("ALUNOS SEM NOTAS.");
    } else {
        console.log(`Média Geral: ${mediaGeral}`);
        console.log(
            `Maior média: ${alunoComMaiorMedia.nome
            }, ${alunoComMaiorMedia.media.toFixed(2)}`
        );
        console.log(
            `Menor média: ${alunoComMenorMedia.nome
            }, ${alunoComMenorMedia.media.toFixed(2)}`
        );
    }
}

function ordenarPorMedia(alunosArray) {
    alunosArray = alunos;
    const alunosComNotas = [];
    let mediaDoAluno = 0;

    if (alunosArray.length === 0) {
        console.log(
            "ERRO: Tentativa de ordenação para turma sem alunos cadastrados."
        );

        return null;
    }

    for (let i = 0; i < alunosArray.length; i++) {
        mediaDoAluno = calcularMedia(alunosArray[i].nome);
        if (mediaDoAluno !== null) {
            alunosComNotas.push({
                nome: alunosArray[i].nome,
                media: Number(mediaDoAluno.toFixed(2)),
            });
        }
    }

    if (alunosComNotas.length === 0) {
        console.log('AVISO: Todos os alunos estão sem notas!');
    } else {
        // Ordenação descrescente
        let alunoComMenorMedia = {};
        for (let i = 1; i <= alunosComNotas.length - 1; i++) {
            for (let j = 0; j < alunosComNotas.length - i; j++) {
                if (alunosComNotas[j].media < alunosComNotas[j + 1].media) {
                    alunoComMenorMedia = alunosComNotas[j + 1];
                    alunosComNotas[j + 1] = alunosComNotas[j];
                    alunosComNotas[j] = alunoComMenorMedia;
                }
            }
        }

        alunosComNotas.forEach((aluno) =>
            console.log(aluno.nome + " - " + aluno.media)
        );
    }
}

function removerAluno(nome){
    const ehAluno = verificarAluno(nome);

    if(ehAluno){
        const posicaoDoAluno = buscarAluno(nome);
        const aluno = alunos[posicaoDoAluno].nome;
        alunos.splice(posicaoDoAluno, 1);
        console.log(`Aluno ${aluno} removido!`);
        return true;
    }

    console.log("AVISO: Tentativa de remoção para aluno não cadastrado!");
    return false;
}

module.exports = {
    adicionarAluno,
    listarAlunos,
    adicionarNotas,
    verificarNotas,
    verificarAluno,
    adicionarNotas,
    calcularMedia,
    mostrarAprovados,
    mostrarEstatisticasDaTurma,
    ordenarPorMedia,
    alunos,
    removerAluno
};
