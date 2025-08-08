function compararnum(){
   
    if(document.frmnums.txtnum1.value==""){

        alert("Digite o primeiro número")
        document.frmnums.txtnum1.focus();   
    }else if(document.frmnums.txtnum2.value==""){

        alert("Digite o segundo número")
        document.frmnotas.txtnum2.focus();   
    }else{

        let numero1 = parseFloat(document.getElementById('num1').value)
        let numero2 = parseFloat(document.getElementById('num2').value)

        if(numero1<numero2){

            alert("Número 2 é maior");
        }else if(numero1>numero2){
            
            alert("Número 1 é maior");
        }else{

            alert("Os números são iguais!");
        }
    }
}