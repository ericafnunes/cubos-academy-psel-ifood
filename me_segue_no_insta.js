function solucao(largura, altura) {
    //seu codigo aqui
    
      const foto = {
        largura: 10,
        altura: 5,
    };
      
      if(largura > altura){
          console.log("PAISAGEM");
      }else if(altura > largura){
          console.log("RETRATO");
      }else{
          console.log("QUADRADA");
      }
      
  }