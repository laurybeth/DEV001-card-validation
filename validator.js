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
        nSum += parseInt(d/10, 10); //obtienes las DECENAS del digito doblado y lo sumas
        nSum += d%10; //obtienes UNIDADES del digito doblado y lo sumas

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
 
  },
  
  creditCardType:function(creditCardNumber){


    if (creditCardNumber.startsWith('1800')||creditCardNumber.startsWith('2131'))
        return "JCB";
        else if (creditCardNumber.startsWith('2014')||creditCardNumber.startsWith('2149')||creditCardNumber.startsWith('300')||creditCardNumber.startsWith('301')||creditCardNumber.startsWith('302')||creditCardNumber.startsWith('303')||creditCardNumber.startsWith('304')||creditCardNumber.startsWith('305')||creditCardNumber.startsWith('36')||creditCardNumber.startsWith('38'))
                 return "Diner's Club";
             else if (creditCardNumber.startsWith('34')||creditCardNumber.startsWith('37'))
                      return "American Express";
                 else if (creditCardNumber.startsWith('4'))
                          return "Visa";
                      else if (creditCardNumber.startsWith('51')||creditCardNumber.startsWith('52')||creditCardNumber.startsWith('53')||creditCardNumber.startsWith('54')||creditCardNumber.startsWith('55'))
                               return "Mastercard";
                            else if (creditCardNumber.startsWith('6011'))
                                    return "Discover";
                                  else if(creditCardNumber.startsWith('3'))
                                          return "JCB";
                                        else return "";
  }


};

export default validator;
