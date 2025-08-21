function validaProc() {

    let numero = [], soma = [];
    let linha = 2, coluna = 2;
    let linhaSolicitada;

    for (let i = 0; i < linha; i++) {

        numero[i] = [];
        soma[i] = 0;

        for (let c = 0; c < coluna; c++) {
            numero[i][c] = parseInt(prompt("Insira o número da linha " + (i+1) + ", coluna " + (c+1) + ":"));
            console.log("Número inserido: " + numero[i][c]);
            soma[i] += numero[i][c];
        }
    }

    linhaSolicitada = parseInt(prompt("Qual linha deseja ver os resultados? (1 até " + linha + ")")) - 1;

    if (linhaSolicitada >= 0 && linhaSolicitada < linha) {
        console.log("Soma da linha " + (linhaSolicitada+1) + " = " + soma[linhaSolicitada]);
        alert("Soma da linha " + (linhaSolicitada+1) + " = " + soma[linhaSolicitada]);
    } else {
        console.log("Linha inválida!");
    }

    return false;
}
