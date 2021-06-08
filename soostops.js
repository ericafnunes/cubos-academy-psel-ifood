function solucao(produtos){
	//seu codigo aqui
let total = 0
let totalTop = 0

for(let i = 0;
    i < produtos.length; 
    i++){
total += produtos[i].preco
if(produtos[i].preco > 10000){
  totalTop += produtos[i].preco
}
}console.log({
    totalTop: totalTop,
    percentual: totalTop / total})
    
    
}