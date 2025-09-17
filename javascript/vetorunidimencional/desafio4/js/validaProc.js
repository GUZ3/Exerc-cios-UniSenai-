function validaProc(){

let numeros= [], i;

    for(i=0;i<4;i++){

        numeros[i]=parseInt(prompt("Insira o "+(i+1)+" número:"));
        console.log("Número inserido: "+numeros[i]);

    }

    alert("Vetor preenchidos✅");

    for(i=3;i>=0;i--){

        console.log("Número decrescente: "+numeros[i]);

    }

}