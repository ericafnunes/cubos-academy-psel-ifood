function solucao(obj) {
	//seu codigo aqui

    const temIngresso = obj.temIngresso
    const acessoCensura = obj.idade >= obj.censura || obj.estaComPais
    const meiaEntrada = obj.idade < 18 || obj.temCarteirinha == true  

if(acessoCensura && temIngresso){
  if(meiaEntrada){
    console.log("MEIA")
    
  }else{
    console.log("INTEIRA")
  }
}else {
  console.log("ACESSO NEGADO")
}
}