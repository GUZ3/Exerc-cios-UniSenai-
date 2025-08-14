function validaProc(){
    
    let contador=0,numero1,numero2,chute,resultadoSoma

    console.log("Escreva dois números e adivinhe a soma entre eles!!")

    numero1 = parseInt(prompt("Insira o primeiro número: "));
    console.log(numero1);
    numero2 = parseInt(prompt("Insira o segundo número: "));
    console.log(numero2);

    resultadoSoma= numero1+numero2

    do{
        contador++
        chute = parseInt(prompt("Qual o resultado da soma? "+numero1+"+"+numero2+"= "));
        console.log("tentativa nº "+contador+" = "+chute);

            if(resultadoSoma!==chute){
                console.log("tente novamente!");
                alert("tente novamente!");
            }

    } while(resultadoSoma!=chute)          
        console.log("resultado correto!");
        alert("resultado correto!");
    return false; 
}