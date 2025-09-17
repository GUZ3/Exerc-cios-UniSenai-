function validaProc(){

    let somaMedia1 = 0, somaMedia2 = 0, somaMedia3 = 0;
    let superior1 = 0, superior2 = 0, superior3 = 0;
    let qtdAlunos1, qtdAlunos2, qtdAlunos3;
    let mediaAluno1, mediaAluno2, mediaAluno3;

    do {
        qtdAlunos1 = parseFloat(prompt("Quantos alunos tem na sala 1? "));
    } while (isNaN(qtdAlunos1) || qtdAlunos1 <= 0);

    do {
        qtdAlunos2 = parseFloat(prompt("Quantos alunos tem na sala 2? "));
    } while (isNaN(qtdAlunos2) || qtdAlunos2 <= 0);
    
    do {
        qtdAlunos3 = parseFloat(prompt("Quantos alunos tem na sala 3? "));
    } while (isNaN(qtdAlunos3) || qtdAlunos3 <= 0);

    // Turma 1
    for (let i = 0; i < qtdAlunos1; i++) {
        do {
            mediaAluno1 = parseFloat(prompt(`Qual a média do ${i+1}º aluno da turma 1? `));
        } while (isNaN(mediaAluno1) || mediaAluno1 < 0);

        somaMedia1 += mediaAluno1;
        if (mediaAluno1 >= 7){
            superior1++
        }
    }
    let mediaTurma1 = somaMedia1 / qtdAlunos1;

    // Turma 2
    for (let i = 0; i < qtdAlunos2; i++) {
        do {
            mediaAluno2 = parseFloat(prompt(`Qual a média do ${i+1}º aluno da turma 2? `));
        } while (isNaN(mediaAluno2) || mediaAluno2 < 0);

        somaMedia2 += mediaAluno2;
        if (mediaAluno2 >= 7){
            superior2++
        }
    }
    let mediaTurma2 = somaMedia2 / qtdAlunos2;

    // Turma 3
    for (let i = 0; i < qtdAlunos3; i++) {
        do {
            mediaAluno3 = parseFloat(prompt(`Qual a média do ${i+1}º aluno da turma 3? `));
        } while (isNaN(mediaAluno3) || mediaAluno3 < 0);

        somaMedia3 += mediaAluno3;
        if (mediaAluno3 >= 7){
            superior3++
        }
    }
    let mediaTurma3 = somaMedia3 / qtdAlunos3;


    console.log("A turma 1 tem: "+qtdAlunos1+" alunos.\n");
    console.log("A média da turma 1 é:"+mediaTurma1+"\n");
    console.log("A quantidade de alunos acima da média(7) na turma 1 é: "+superior1+"\n");
    console.log("")
    
    console.log("A turma 2 tem: "+qtdAlunos2+" alunos.");
    console.log("A média da turma 2 é:"+mediaTurma2);
    console.log("A quantidade de alunos acima da média(7) na turma 2 é: "+superior2+"\n");
    console.log("")

    console.log("A turma 3 tem: "+qtdAlunos3+" alunos.");
    console.log("A média da turma 3 é:"+mediaTurma3);
    console.log("A quantidade de alunos acima da média(7) na turma 3 é: "+superior3+"\n\n");
    console.log("")

    console.log("A média geral da escola é: "+(mediaTurma1+mediaTurma2+mediaTurma3)/3)

}