function validaProc(){

    let numero= [], soma=[], resultado=[];
    let linha= 2, coluna=2;
    let linhaSolicitada;

    for(i=0;i<linha;i++){

        numero[i]=[]

        for(c=0;c<coluna;c++){

            numero[i][c]=parseInt(prompt("Insira o "+i+"º número da coluna, da "+c+"ª linha"));
            soma[i]+= numero[i][c]
            console.log(soma[i]);

        }
        
    }

    linhaSolicitada=parseInt(prompt("Qual linha deseja ver os resultados?"));

    for(i=0;i<linha;i++){

        console.log(soma[linhaSolicitada]);

    }
    return false;
}