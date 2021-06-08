function solucao(tempo, distancia) {
    
    const total = (tempo*100) + (distancia*50)
    
    if(tempo < 5){
    console.log(600)     
    }else if(tempo >= 5 && tempo < 60){
      console.log(total) 
    }else if(distancia < 100){
      console.log(200 * distancia)
      }else{
        console.log(150*distancia)
      }
}