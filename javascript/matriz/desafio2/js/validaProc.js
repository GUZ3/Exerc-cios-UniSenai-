function validaProc(){

    let soma=0;
    let numeros=[];

    let linha=4, coluna=3;

    for(let i=0;i<linha;i++){
        numeros[i]=[]

        for(let c=0;c<coluna;c++){
            
            numeros[i][c]=parseFloat(prompt("Insira o número | "+(i+1)+" | "+(c+1)+" | : "));
            console.log("nº inserido: "+numeros[i][c]);
            soma+=numeros[i][c];
        }
    }
    console.log("o resultado: "+soma);
    alert("o resultado é: "+soma);
    return false;
}