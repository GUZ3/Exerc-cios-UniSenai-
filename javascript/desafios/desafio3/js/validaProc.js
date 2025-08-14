function validaProc(){

    let contador=0,feminino=0,masculino=0,totalSalario=0,totalIdade=0,salarioFeminino=0,salarioMasculino=0
    let mediaGrupo,mediaFeminino,mediaMasculino,mediaIdade,finalizar="",salario

    do{
        contador++

            idade = parseInt(prompt("Insira a sua idade: "));
                console.log("Idade: "+idade+" anos");          

            sexo = parseInt(prompt("Qual o seu gênero?\n1- Masculino\n2- Feminino"));     

            salario= parseFloat(prompt("Insira o seu salário: "));
                console.log("Salario: R$"+salario+" reais");


            if(sexo==1){
                masculino++
                salarioMasculino+=salario

                console.log("sexo: "+sexo+"- Masculino");
            } else if(sexo==2){
                feminino++
                salarioFeminino+=salario

                console.log("sexo: "+sexo+"- Feminino");
            } else {
                alert("Opção inválida!");
                console.log("Opção inválida");
            }

        totalSalario+=salario
        totalIdade+=idade

        finalizar = prompt("Digite 'finalizar' para encerrar ou pressione ENTER para continuar:");

    } while(finalizar!=="finalizar") 

        mediaGrupo = totalSalario / contador
        mediaIdade = totalIdade / contador

            if(salarioFeminino>0){
                mediaFeminino = salarioFeminino / feminino
            }

            if(salarioMasculino>0){
                mediaMasculino = salarioMasculino / masculino
            }

    console.log("Média de salário do grupo: "+mediaGrupo+"\nMédia de salário feminino: "+mediaFeminino+"\nMédia de salário masculina: "+mediaMasculino+"\nMédia de idade: "+mediaIdade);
    alert("Média de salário do grupo: "+mediaGrupo+"\nMédia de salário feminino: "+mediaFeminino+"\nMédia de salário masculina: "+mediaMasculino+"\nMédia de idade: "+mediaIdade);
}