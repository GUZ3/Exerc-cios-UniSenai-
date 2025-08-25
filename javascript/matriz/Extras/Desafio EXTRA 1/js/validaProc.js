function validaProc(){

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
    
    console.log("Diagonal Direita ↘️ Esquerda");

    for(let i=0;i<linha;i++){
        for(let c=0;c<coluna;c++){

            if(i!=c){

                valores[i][c]= 0;

            } else {

                console.log("Valores na diagonal: "+valores[i][c]);

            }
        }
    }

    console.table(valores);

    return false;
}