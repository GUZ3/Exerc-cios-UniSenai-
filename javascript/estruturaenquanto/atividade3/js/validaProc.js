function validaProc(){
    
    let numero, contador=1, soma=0

    console.log("=== Soma de números divisíveis por 5 ===")

    while(contador<=3){
        numero=parseInt(prompt("Insira o "+contador+"º número: "));
        console.log(numero);
            if(numero % 5==0){
                soma+=numero
            }
        contador++
    }
    
    console.log("")
    console.log("A soma dos números divisíveis por 5 é: "+soma);
    return false;
}