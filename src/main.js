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
                //Adicionar aluno
                break;
            case "2":
                //Listar alunos
                break;
            case "3":
                //Registrar notas
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