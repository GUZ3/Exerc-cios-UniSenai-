function validaProc() {

    let nomes = [], totalValorCompras = [], qtdCompras = [], media = [];
    let clientes = 3, meses = 3;


    for (let i = 0; i < clientes; i++) {

        nomes[i] = prompt("Qual o nome do " + (i + 1) + "º Cliente?");

        totalValorCompras[i] = 0;
        qtdCompras[i] = 0;

        for (let c = 0; c < meses; c++) {

            let comprasMes = parseFloat(prompt("Quanto foi gasto no " + (c + 1) + "º mês?"));

            totalValorCompras[i] += comprasMes;

            if (comprasMes > 0) {
                qtdCompras[i]++;
            }
        }
    }


    for (let i = 0; i < clientes; i++) {
        if (qtdCompras[i] > 0) {
            media[i] = totalValorCompras[i] / qtdCompras[i];
        } else {
            media[i] = 0;
        }
    }


    let continuar;
    do {
        let selecao = parseInt(prompt("CONSULTA:\n1- Ver compras de um cliente\n2- Ver as compras de todos os clientes"));

        switch (selecao) {

            case 1:
                for (let i = 0; i < clientes; i++) {
                    console.log("Nome dos clientes: " + (i + 1) + " - " + nomes[i]);
                }

                let selecaoNome = parseInt(prompt("Qual cliente deseja verificar?"));

                if (selecaoNome >= 1 && selecaoNome <= clientes) {
                    let idx = selecaoNome - 1;
                    console.log(`O cliente ${nomes[idx]}, realizou ${qtdCompras[idx]} compras, a média gasta foi R$${media[idx].toFixed(2)} em ${meses} meses\n`);
                } else {
                    console.log("Cliente não existente!");
                }
                break;

            case 2:
                for (let i = 0; i < clientes; i++) {
                    console.log(`O cliente ${nomes[i]}, realizou ${qtdCompras[i]} compras, a média gasta foi R$${media[i].toFixed(2)} em ${meses} meses\n`);
                }
                break;

            default:
                console.log("Opção inválida");
        }

        continuar = parseInt(prompt("Deseja fazer novamente? 1- Sim 2- Não"));
        console.log("\n");

    } while (continuar === 1);

    console.log("Volte sempre!");
    return false;
}
