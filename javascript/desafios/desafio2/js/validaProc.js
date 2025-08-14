function validaProc(){
    
    let peso,altura,imc,continuar

    do{
        peso = parseFloat(prompt("Insira o seu peso: "));
        altura = parseFloat(prompt("Insira a sua altura: "));

        imc = peso / (altura * altura)

            if(imc<=18.5){

                console.log(imc);
                alert("Seu IMC é: "+imc);
                console.log("Você está abaixo do peso");
                alert("Você está abaixo do peso");

            } else if(imc>=18.6 && imc<=24.9){

                console.log(imc);
                alert("Seu IMC é: "+imc);
                console.log("Você está com o peso normal");
                alert("Você está com o peso normal");

            } else if(imc>=25 && imc<=29.9){

                console.log(imc);
                alert("Seu IMC é: "+imc);
                console.log("Você está sobrepeso");
                alert("Você está sobrepeso");

            } else{

                console.log(imc);
                alert("Seu IMC é: "+imc);
                console.log("Você está OBESO!");
                alert("Você está OBESO!");

            }
        
        continuar = parseInt(prompt("Deseja continuar?\n\nDigite 0 para Sair, ou ENTER para continuar"))
           
    }while(continuar!==0);

    return false;
}
