function validaProc(){

let vetor= []

    for(let i=0;i<10;i++){

        vetor[i]=parseFloat(prompt("Insira o "+(i+1)+"º número:"));

    }

    console.log("Números ímpares:\n");

    for(let i=0;i<10;i++){

        if(i%2!=0){

            console.log("vetor["+i+"] = "+vetor[i]);

        }

    }
    return false;
}