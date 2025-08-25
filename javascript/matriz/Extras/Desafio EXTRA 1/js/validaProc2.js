function validaProc2(){

    let valores=[];

    let linha=4, coluna=4;

    for(let i=0;i<linha;i++){

        valores[i]=[];

        for(let c=0;c<coluna;c++){

            valores[i][c]= parseInt(prompt("Insira o valor da | linha "+i+" | coluna "+c+" |"));
            console.log("Valor inserido: | "+i+" | "+c+" | = "+valores[i][c]);
        }
        console.log("\n");
    }
    console.log("Diagonal Esquerda ↙️ Direita");

    for (let i = 0; i < linha; i++) {
        for (let c = 0; c < coluna; c++) {
            
            if (c == (coluna - 1 - i)) {
                console.log("Valores na diagonal: " + valores[i][c]);
            } else {
                valores[i][c] = 0;
            }
        }
    }
    
    console.table(valores);
    
    return false;
}