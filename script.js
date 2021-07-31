const calcular =document.getElementById('calcular');


function imc(){
 const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
      const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');

  if(nome !==''&& altura  !==''&& peso !==''){
          const valorIMC = (peso/(altura*altura)).toFixed(1);
              resultado.textContent=valorIMC;     
          let classificacao ="";
               if(valorIMC<18.5){
           alert("Você esta abaixo do peso se alimente melhor");
       }else{
               if(valorIMC>=18.6 && valorIMC <=25.0){
                             
               alert('Parabens sua saude esta em dias');
          }
                  }
              if(valorIMC>25.2){
           alert('Voce precisa emagrecer faça exercicios');
           }
  }else{
      resultado.textContent='Por favor Preencha todos os campos!!!';
  }
}

  calcular.addEventListener('click',imc);

