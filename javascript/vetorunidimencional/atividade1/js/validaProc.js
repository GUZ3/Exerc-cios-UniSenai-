function validaProc(){

    let notas=[];

    for(let i=0;i<3;i++){

        notas[i]=parseFloat(prompt("Qual a "+(i+1)+"ª nota?"));

    }

    for(let i=0;i<3;i++){

        if(notas[i]>=7.5){
            console.log("A nota: "+notas[i]+" é maior do que 7,5👍");
        } else {
            console.log("A nota: "+notas[i]+" é menor do que 7,5💩👎");
        }   
    }

    for(let i=0;i<3;i++){

        if(notas[i]>=7.5){          
            alert("A nota: "+notas[i]+" é maior do que 7,5👍");
        } else {
            alert("A nota: "+notas[i]+" é menor do que 7,5💩👎");
        }
    }
    return false;
}