function validaProc(){

let qtdAlunos=5;

let nota1= [],nota2= [],mediaNotas= [];
let i;

    for(i=0;i<qtdAlunos;i++){
        
        nota1[i]=parseFloat(prompt("Aluno "+(i+1)+": Insira a primeira nota:"));
        console.log("Aluno "+(i+1)+": Primeira nota: "+nota1[i]);

        nota2[i]=parseFloat(prompt("Aluno "+(i+1)+": Insira a segunda nota: "));
        console.log("Aluno "+(i+1)+": Primeira nota: "+nota2[i]);

        mediaNotas[i]= (nota1[i]+nota2[i])/2
        console.log("Média "+(i+1)+"º aluno: "+mediaNotas[i]);
       
    }
    return false;
}