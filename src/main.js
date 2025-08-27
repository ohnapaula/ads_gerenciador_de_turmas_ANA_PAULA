const {adicionarAluno, listarAlunos, registrarNotas} = require('./utils');

const readline = require('readline').createInterface({
    input: process.stdin, output: process.stdout
});

const alunos = [];

function pergunta(q) {
    return new Promise(resolve => {
        readline.question(q, ans => resolve(ans));
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
                const nome = (await pergunta("Digite o nome do aluno: "));
                adicionarAluno(alunos, nome);
                break;
            case "2":
                listarAlunos(alunos);
                break;
            case "3":
                const nomeDoAluno = (await pergunta("Nome do aluno: "));
                const notas = (await pergunta("Digite as notas separadas por vírgula (ex.: 7.5,8,9): "));
                registrarNotas(alunos, nomeDoAluno, notas);
                break;
            case "4":
                //Calcular média de um aluno
                break;
            case "5":
                //Mostrar aprovados
                break;
            case "6":
                //Estatísticas da turma
                break;
            case "7":
                //Ordenar por média e listar
                break;
            case "8":
                //Remover aluno
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