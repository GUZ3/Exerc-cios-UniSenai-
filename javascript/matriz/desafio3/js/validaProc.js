function validaProc(){

    let dobro=[]
    let numeros=[];

    let linha=5, coluna=5;

    for(let i=0;i<linha;i++){
        numeros[i]=[]
        dobro[i]=[]

        for(let c=0;c<coluna;c++){
            
            numeros[i][c]=parseFloat(prompt("Insira o número | "+(i+1)+" | "+(c+1)+" | : "));
            console.log("nº inserido: "+numeros[i][c]);
            dobro[i][c]=numeros[i][c]*2
        }
    }
    console.log("Matriz original:");
    console.table(numeros);
    
    console.log("Matriz Dobrada:");
    console.table(dobro);
    return false;
}