function validaProc(){

    let contador=0,feminino=0,masculino=0,totalSalario=0
    let mediaGrupo,mediaFeminino,mediaMasculino,mediaIdade

    do{
        contador++

        idade = parseInt(prompt("Insira a sua idade: "));
        sexo = parseInt(prompt("Qual o seu gênero?\n1- Masculino\n2- Feminino"));
        salario= parseFloat(prompt("Insira o seu salário: "));

        totalSalario+=salario
        totalIdade+=idade

            if(sexo == 1){
                feminino++

                salarioFeminino+=salario
            } else if(sexo == 2){
                masculino++

                salarioMasculino+=salario
            } else{
                alert("Opção inválida!");
                console.log("Opção inválida");
            }
        

    } while(finalizar=="finalizar") 

        mediaGrupo = totalSalario / contador
        mediaFeminino = salarioFeminio / feminino
        mediaMasculino = salarioMasculino / masculino
        mediaIdade = totalIdade / idade
    
    console.log("Media do grupo: "+mediaGrupo+" media feminino: "+mediaFeminino+" media masculina: "+mediaMasculino+" media de idade: "+mediaIdade);
    alert("Média de salário do grupo: "+mediaGrupo+" Média de salário feminino: "+mediaFeminino+" Média de salário masculina: "+mediaMasculino+" Média de idade: "+mediaIdade);
}