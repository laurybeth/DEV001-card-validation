import validator from './validator.js';

document.getElementById("creditCardForm").addEventListener("submit", function (event) {

    event.preventDefault();
    
    const creditCardNumber=document.getElementById("cardNumberHtml").value
 
    if(validator.isValid(creditCardNumber))
    {
      document.getElementById("innerTextOutput").innerText="Tu tarjeta de crédito Nº "+validator.maskify(creditCardNumber)+"\nes válida"; 

     // alert("Tu tarjeta de crédito Nº "+validator.maskify(creditCardNumber)+" es válida");
    }
    else
    document.getElementById("innerTextOutput").innerText="Tu tarjeta de crédito Nº "+validator.maskify(creditCardNumber)+"\nNO es válida";
   // alert("Tu tarjeta de crédito Nº "+validator.maskify(creditCardNumber)+" no es válida");
  })

  
    
   
   

