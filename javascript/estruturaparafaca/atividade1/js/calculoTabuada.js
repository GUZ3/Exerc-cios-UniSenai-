function calculoTabuada() {

    if(document.tabuada.tabuadade.value==""){
        alert("preencha a única coisa que tem pra fazer no site!");
        document.tabuada.tabuadade.focus();
        return false;
    }  
        else {
            for (let i = 1; i < 11; i++) {
                let numero = document.getElementById("tabuadade").value;
                console.log(numero, "x", i, "=", numero * i);
                
            }
            return false;
        }
}