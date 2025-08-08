function procFormulario() {

    if (document.frmnumint.textnumint1.value == "") {

        alert("Preencha o primeiro número!");
        document.frmnumint.textnumint1.focus();
        return false

    }
    if (document.frmnumint.textnumint2.value == "") {

        alert("Preencha o segundo número!");
        document.frmnumint.textnumint2.focus();
        return false
    }
    if (document.frmnumint.textnumintselecao.value == "") {

        alert("Escolha uma operação!");
        document.frmnumint.textnumintselecao.focus();
        return false
    } else {

        let numint1 = parseInt(document.getElementById("numint1").value)
        let numint2 = parseInt(document.getElementById("numint2").value)
        let numintselecao = parseInt(document.getElementById("numintselecao").value)
        let resultadoOperacao

        switch (numintselecao) {

            case 1:

                resultadoOperacao = numint1 + numint2
                alert(resultadoOperacao);
                console.log(resultadoOperacao);

                    if (resultadoOperacao % 2 == 0){

                        alert(resultadoOperacao+" é PAR");
                        console.log("PAR");
                    }else{

                        alert(resultadoOperacao+" é IMPAR");
                        console.log("IMPAR");
                    }
                return false;
                break

            case 2:

                resultadoOperacao = numint1 - numint2
                alert(resultadoOperacao);
                console.log(resultadoOperacao);

                    if (resultadoOperacao % 2 == 0){

                        alert(resultadoOperacao+" é PAR");
                        console.log("PAR");
                    }else{

                        alert(resultadoOperacao+" é IMPAR");
                        console.log("IMPAR");
                    }
                return false;
                break

            case 3:
                resultadoOperacao = numint1 * numint2
                alert(resultadoOperacao);
                console.log(resultadoOperacao);

                    if (resultadoOperacao % 2 == 0){

                        alert(resultadoOperacao+" é PAR");
                        console.log("PAR");
                    }else{

                        alert(resultadoOperacao+" é IMPAR");
                        console.log("IMPAR");
                    }
                return false;
                break

            case 4:
                resultadoOperacao = numint1 / numint2
                alert(resultadoOperacao);
                console.log(resultadoOperacao);

                    if (resultadoOperacao % 2 == 0){

                        alert(resultadoOperacao+" é PAR");
                        console.log("PAR");
                    }else{

                        alert(resultadoOperacao+" é IMPAR");
                        console.log("IMPAR");
                    }
                return false;
                break
        }
    }

}