import validator from './validator.js';

console.log(validator);
document
  .getElementById("validateButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let cardNumber2=document.getElementById("cardNumber").value;
   
    let saludo = validator.isValid(cardNumber);
    validator.maskify(cardNumber);
    
    alert("Mensaje de index.js\n\n"+saludo+"  "+cardNumber2);

     })


