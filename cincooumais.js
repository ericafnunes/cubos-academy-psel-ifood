function solucao(precos) {
    //seu codigo aqui
       
const proMin = Math.min(...precos);
const temcinco = precos.length >= 5;
let s = 0 
for(let i = 0; i < precos.length; i++){
    s += precos[i];
}
if(temcinco){ s -= proMin;
}console.log(s);
    
}