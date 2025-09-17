function procFormulario(){
    
    if (document.frmnumint.textnumint.value == ""){

        alert("Preencha o campo de idade");
        document.frmnumint.textnumint.focus();
        return false

    } else {

        let numint=parseInt(document.getElementById("numint").value)

        switch(true){

            case(numint>=0 && numint<=3):

                console.log("Bebê");
                return false;
            break;

            case(numint>=4 && numint<=10):

                console.log("Criança");
                return false;
            break;

            case(numint>=11 && numint<=18):

                console.log("adolescente");
                return false;
            break;

            default:

                console.log("adulto")
                return false;
            break;

        }
    }
    
}