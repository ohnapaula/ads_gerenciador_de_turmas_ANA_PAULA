const {
    adicionarAluno,
    listarAlunos,
    verificarNotas,
    adicionarNotas,
    verificarAluno,
    calcularMedia,
    mostrarAprovados,
    mostrarEstatisticasDaTurma,
} = require("./utils");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function pergunta(q) {
    return new Promise((resolve) => {
        readline.question(q, (ans) => resolve(ans));
    });
}

async function main() {
    let sair = false;

    while (!sair) {
        console.log("\n--- Gerenciador de Turma ---");
        console.log("1) Adicionar aluno");
        console.log("2) Listar alunos");
        console.log("3) Registrar notas");
        console.log("4) Calcular média de um aluno");
        console.log("5) Mostrar aprovados");
        console.log("6) Estatísticas da turma");
        console.log("7) Ordenar por média e listar");
        console.log("8) Remover aluno");
        console.log("9) Sair");

        const op = (await pergunta("Escolha uma opção: ")).trim();

        switch (op) {
            case "1":
                nome = (await pergunta("Digite o nome do aluno: ")).trim();
                adicionarAluno(nome);
                break;
            case "2":
                listarAlunos();
                break;
            case "3":
                nome = (await pergunta("Digite o nome do aluno: ")).trim();
                const ehAluno = verificarAluno(nome);

                if (ehAluno) {
                    let notas = (
                        await pergunta(
                            "Digite as notas separadas por vírgula (ex.: 7.5,8,9): "
                        )
                    ).trim();
                    let ehNotaValida = verificarNotas(notas);

                    if (ehNotaValida) {
                        adicionarNotas(nome, notas);
                    } else {
                        console.log("AVISO: Notas inválidas. Registre as notas novamente.");
                    }
                } else {
                    console.log(
                        "AVISO: Tentativa de registro de notas para aluno não cadastrado."
                    );
                }
                break;
            case "4":
                nome = (await pergunta("Digite o nome do aluno: ")).trim();
                const media = calcularMedia(nome);

                if (media != null) {
                    console.log(`Média de ${nome}: ${media}`);
                } else {
                    console.log("AVISO: Aluno sem notas ou não cadastrado!");
                }
                break;
            case "5":
                mostrarAprovados();
                break;
            case "6":
                mostrarEstatisticasDaTurma();
                break;
            case "7":
                //Ordenar alunos por média e listá-los
                break;
            case "8":
                //Remover um aluno
                break;
            case "9":
                sair = true;
                console.log("Encerrando aplicação...");
                break;
            default:
                console.log("Opção inválida.");
        }
    }

    readline.close();
}

main();
