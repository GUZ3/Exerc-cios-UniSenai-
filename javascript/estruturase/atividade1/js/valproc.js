function procFormulario(){
    //validação de campos
        if(document.frmnotas.txtnum1.value==""){

            alert("Informe o primeiro número");
            document.frmnotas.txtnum1.focus();
            return false;
        }else if(document.frmnotas.txtnum2.value==""){

            alert("Informe o segundo número");
            document.frmnotas.txtnum2.focus();
            return false;
        }else if(document.frmnotas.txtnum3.value==""){

                alert("Informe o terceiro número");
                document.frmnotas.txtnum3.focus();
                return false;
            }else{
                //Processamento do programa
                let nota1 = parseFloat(document.getElementById('num1').value)
                let nota2 = parseFloat(document.getElementById('num2').value)
                let nota3 = parseFloat(document.getElementById('num3').value)
                let media = (nota1 + nota2 + nota3) / 3;

                if(media>=7){

                    alert("Sua média foi "+ media.toFixed(2) + ", Você foi aprovado!");

                }else if(media>=5 & media<=6.9){

                        alert("Sua média foi "+ media.tofixed(2) + ", Você está de recuperação!");

                    }else{

                    alert("Sua média foi "+ media.toFixed(2) + ", Você foi reprovado!");
                  }
            }

}