function solucao(ano) {

    
    const olimpiadasCopa = 2020
    const copa = 2018
    const anoDeCopa = ((ano - copa) % 4) === 0 
    const anoOlimpiadas = ((ano - olimpiadasCopa) % 4) === 0

    if(anoOlimpiadas){
         console.log("JOGOS")
    }else if(anoDeCopa){
      console.log("COPA")
    }else{
      console.log("MEH")
    }

}