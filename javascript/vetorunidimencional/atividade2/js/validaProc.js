function validaProc(){

    let notas=[];
    let contador=0;

    for(let i=0;i<3;i++){

        notas[i]=parseFloat(prompt("Qual a "+(i+1)+"ª nota?"));

    }

    for(let i=0;i<3;i++){

        if(notas[i]>=7.5){
            console.log("A nota: "+notas[i]+" é maior do que 7,5✅");
            contador++
        } else {
            console.log("A nota: "+notas[i]+" é menor do que 7,5❌");
        }   
    }
    
    console.log("Quantidade de notas maiores do que 7,5: "+contador);
    alert("Quantidade de notas maiores do que 7,5: "+contador);

    for(let i=0;i<3;i++){

        if(notas[i]>=7.5){          
            alert("A nota: "+notas[i]+" é maior do que 7,5✅");
        } else {
            alert("A nota: "+notas[i]+" é menor do que 7,5❌");
        }
    }

    

    return false;
}