const validator = {
  
  isValid:function(creditCardNumber){

    let nSum = 0;
    let isSecond = false;

    for (let i = creditCardNumber.length - 1; i >= 0; i--)
    {
          let d=Number(creditCardNumber[i]);//convierte letra a equivalente a número

        if (isSecond == true) //se duplica cada segundo dígito
            d = d * 2;

    //para caso en que el valor doblado tenga dos dìgitos
        nSum += parseInt(d/10, 10); //obtienes las decenas del digito doblado y lo sumas
        nSum += d%10; //obtienes unidades del digito doblado y lo sumas

        isSecond = !isSecond; //valida cuando estamos en cada segundo digito
    }
        return (nSum % 10 == 0); //si el residuo de la suma total entre 10 es 0 entonces es vàlido

  },

  maskify:function(creditCardNumber){
  
    let count=0; 
    let creditCardNumberHide="";

    for (let i = 0; i <creditCardNumber.length; i++)
    {
      let d=creditCardNumber[creditCardNumber.length - 1-i];
          
      if (count<4)//visibles los 4 últimos digitos
      creditCardNumberHide=d+creditCardNumberHide; 
      else
      creditCardNumberHide="#"+creditCardNumberHide; //el resto ocultos con #

      count++;

    }

      return creditCardNumberHide;
 
  }

};

export default validator;
