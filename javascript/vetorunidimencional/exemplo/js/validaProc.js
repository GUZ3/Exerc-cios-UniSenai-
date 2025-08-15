function validaProc(){

    //Declarando a variável controladora i
    let i;

    //declarando o vetor
    let num = [];

    //alimentando o vetor com dados
    for(i=0;i<3;i++){

        num[i]=parseInt(prompt("Digite o número:"));
        
    }

    //retirando os valores de cada posição do vetor...
    for(i=0;i<3;i++){

        console.log("O valor do vetor numa na posição "+i+" é : "+num[i]);
    }

return false;

}