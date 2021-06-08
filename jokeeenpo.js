function solucao(joao, andre) {
    // Escreva seu codigo aqui
     const jogo = {
     joao : ["PEDRA", "PAPEL", "TESOURA"],
     andre  : ["PEDRA", "PAPEL", "TESOURA"],    
 }; 
    
    if(joao == "PEDRA" && andre == "PAPEL"){
            console.log("ANDRE");
                
            }if(joao == "PEDRA" && andre == "TESOURA"){
                console.log("JOAO");
                    
                }if(joao == "PEDRA" && andre == "PEDRA"){
                    console.log("EMPATE");
                        
                }if(joao == "TESOURA" && andre == "PAPEL"){
                     console.log("JOAO");
                
                     }if(joao == "TESOURA" && andre == "TESOURA"){
                      console.log("EMPATE");
                    
                      }if(joao == "TESOURA" && andre == "PEDRA"){
                      console.log("ANDRE");
                          
                      }if(joao == "PAPEL" && andre == "PAPEL"){
                     console.log("EMPATE");
                
                     }if(joao == "PAPEL" && andre == "TESOURA"){
                      console.log("ANDRE");
                    
                      }else if(joao == "PAPEL" && andre == "PEDRA"){
                      console.log("JOAO");                   
                      }
                }
