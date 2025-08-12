function validaProc(){

    let num
    let soma=0
    let cont=1
    
    
        while(cont<=3){
         
          num=parseInt(prompt("Digite o número"));
          console.log("O número inserido é: "+ num);
            
        
            if (num % 5 == 0) {
                 soma+=num
                }
         
                cont++
     
        }
        console.log("O número e: "+soma);
        return false
    }