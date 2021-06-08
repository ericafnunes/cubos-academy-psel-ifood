function solucao(letra, palavras) {
   const palavrasSorteadas = palavras
const letraMisturada = letra
let cont = 0

  for(let i = 0;i < palavrasSorteadas.length;i++){ 
  if(!palavrasSorteadas[i].startsWith(letraMisturada)){
  cont++
  }
}
console.log(cont)   
}