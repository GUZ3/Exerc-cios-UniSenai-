function validaProc(){

    if(document.tabuadaInt.txttabuadade.value==""){
        document.tabuadaInt.txttabuadade.focus();
        alert("Preencha o campo obrigatório");
        return false;

    } else{
        let numero= parseInt(document.getElementById("tabuadade").value);
        contador=0
        console.log("Tabuada de: ",numero)

            do{ 
                console.log(numero+"x"+contador+"="+numero*contador);
                contador=contador+1;

            } while (contador<=10)
                return false;
         
        }
}