function validaProc(){

    let renda=[], media;
    let qtdAndares=6,qtdAp=4; //por andar
    let soma=0;

    for(let i=0;i<qtdAndares;i++){

        renda[i]=[];

        for(let c=0;c<qtdAp;c++){

            renda[i][c]=parseFloat(prompt("Insira a renda do "+(i+1)+"º andar, apartamento :"+(c+1)));
            soma+=renda[i][c];
            console.log("renda do "+i+"º andar, apartamento :"+c+"= "+renda[i][c]);
            
        }
    }

    media=soma/(qtdAndares*qtdAp);
    console.log("Média de renda do Balança mas não cai:"+media);
    
    return false;
}