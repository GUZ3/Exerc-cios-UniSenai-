function validaProc() {
    let matriz=[];
    let i,c;
   
    for(i=0;i<2;i++){
        matriz[i]=[];
        
        for(c=0;c<2;c++){
            matriz[i][c]= i+c
            console.log("Matriz["+i+"]+["+c+"]= "+matriz[i][c]);  
        }
    }
    return false;
}




