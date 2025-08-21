function validaProc(){

    let somaLinha=[];
    let somaElementos=0
    let numeros=[];

    let linha=4, coluna=5;

    for(let i=0;i<linha;i++){
        numeros[i]=[]
        somaLinha[i]=0

        for(let c=0;c<coluna;c++){
            
            numeros[i][c]=parseFloat(prompt("Insira o número | "+(i+1)+" | "+(c+1)+" | : "));
            console.log("nº inserido: "+numeros[i][c]);
            somaElementos+=numeros[i][c];
            somaLinha[i]+=numeros[i][c];
            
        }
        console.log("soma da "+i+"ª linhas: "+somaLinha[i]);
    }
    console.log("Soma dos elementos: "+somaElementos); 

    return false;
}
