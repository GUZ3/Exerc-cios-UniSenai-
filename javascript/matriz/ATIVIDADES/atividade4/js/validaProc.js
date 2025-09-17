function validaProc() {

    let matriz=[];

    for(let i=0;i<2;i++){

        matriz[i]=[]
        for(let c=0;c<3;c++){

            matriz[i][c]=parseInt(prompt("Insira o número da linha "+i+" coluna "+c+":"));
            console.log("Número digitado:"+matriz[i][c]);

        }
    }
    console.table(matriz);
}




