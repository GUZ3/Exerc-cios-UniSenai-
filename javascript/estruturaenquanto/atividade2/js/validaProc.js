function validaProc(){
    
    let numero
    let contador=1, maiornumero=0

    while(contador<=3){
        numero= parseInt(prompt("Insira o "+contador+"º número: "));
        console.log(numero)

            if(numero>maiornumero){
                maiornumero=numero
            }

        contador++

    }

    console.log("O maior número é:"+maiornumero);
    return false;
}