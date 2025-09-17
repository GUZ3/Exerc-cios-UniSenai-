function validaProc(){

let numeros= [], numeroMult, resultMult= [];
let i,j;

    for(i=0;i<5;i++){

            numeros[i]=parseInt(prompt("Insira o "+(i+1)+"º número:"));
            console.log("Número digitado: "+numeros[i]);

    }
    alert("Números preenchidos✅")
    numeroMult=parseInt(prompt("Insira o número para multiplicar"));
    console.log("Número digitado: "+numeroMult);

    for(i=0;i<5;i++){

        resultMult[i]= numeroMult*numeros[i]
        console.log(numeros[i]+"x"+numeroMult+"= "+resultMult[i]);

    }
    return false;

}