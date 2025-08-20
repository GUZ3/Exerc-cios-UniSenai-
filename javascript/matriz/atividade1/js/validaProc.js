function validaProc(){

    let matriz=[],resultado=[];
    let linhas= 3;
    let colunas= 3;
    let multiplicador;
    
    //Alimentar a matriz 

    for(i=0;i<linhas;i++){

        matriz[i]=[]

        for(c=0;c<colunas;c++){

            matriz[i][c]= parseInt(prompt("Digite o valor da linha "+i+" e coluna "+c));

        }

    }

    multiplicador=parseInt(prompt("Por quanto deseja multiplicar?"));

    for(i=0;i<linhas;i++){

        resultado[i]=[]

        for(c=0;c<colunas;c++){

            resultado[i][c]=matriz[i][c]*multiplicador

        }

    }

    //Imprimindo os dados da matriz

    for(i=0;i<3;i++){
        for(c=0;c<3;c++){

            document.write(resultado[i][c]+"&nbsp&nbsp");

        }

        document.write("<br>");
    }
    return false;
}