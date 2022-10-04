import validator from './validator.js';

document.getElementById("creditCardForm").addEventListener("submit", function (event) {

    event.preventDefault();
   
    const creditCardNumber=document.getElementById("cardNumberHtml").value
       
    if(validator.isValid(creditCardNumber))
    {
      alert("Tu tarjeta de crédito Nº "+validator.maskify(creditCardNumber)+" es válida");
    }
    else
    alert("Tu tarjeta de crédito Nº "+validator.maskify(creditCardNumber)+" no es válida");
  })

  
    
   
   

