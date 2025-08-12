function validaProc(){
    
    let soma=0;
    let contador=1;
    
    console.log("=== Seja bem-vindo ao Some 3 números! ===\n");
 
    while(contador<=3){

        let numero= parseInt(prompt("Insira o "+contador+"º número"));
        soma=soma+numero
        contador++
    }

    console.log("A soma dos número é: "+soma);



}