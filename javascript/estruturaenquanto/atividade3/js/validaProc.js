function validaProc(){

    let numero
    let soma=0
    let contador=1
    
        while(contador<=3){
         
          numero=parseInt(prompt("Digite o número"));
          console.log("O número inserido é: "+ numero);
            
            if (numero % 5 == 0){
                 soma+=numero
            }
        contador++
     
        }
        console.log("O número e: "+soma);
        return false
    }