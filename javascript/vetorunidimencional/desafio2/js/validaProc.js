function validaProc(){

let qtdNumeros=10;
let i; 
let numeros= [], rastreioNumero, encontrou, posicao;

    for(i=0;i<qtdNumeros;i++){

        numeros[i]=parseInt(prompt("Insira o "+(i+1)+"º número:"));
        console.log("posição ["+i+"] → "+numeros[i]);
        
    }

    alert("Números preenchidos!")
    
    rastreioNumero=parseInt(prompt("Qual número deseja rastrear?🔎"));

    for(i=0;i<qtdNumeros;i++){

        if(numeros[i]==rastreioNumero){
            encontrou=true
            posicao=i
            break
            
        } else {
            encontrou=false
        }
        
    }

    if(encontrou==true){

        console.log("O número "+rastreioNumero+" foi encontrado na posição ["+posicao+"].✅");
        alert("O número "+rastreioNumero+" foi encontrado na posição ["+posicao+"].✅");
        

    } else {

        console.log("O número "+rastreioNumero+" não foi encontrado.❌");
        alert("O número "+rastreioNumero+" não foi encontrado.❌");

    }
    return false;
}