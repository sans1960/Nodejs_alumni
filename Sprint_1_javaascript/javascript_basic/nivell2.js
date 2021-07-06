function calculadora(oper,value1,value2){
    let result;
    if (oper == "suma"){
        result = value1+value2;
        return result
    }else if (oper == "resta"){
        result = value1-value2;
        return result
    }else if (oper == "producto"){
        result = value1*value2;
        return result
    }else if (oper == "division"){

         if (value2==0){
             console.log("no se puede dividir por 0");
         }else{
             result = value1/value2;
             return result;
         }
       

    }else{
        console.log("operacion no valida");
    }

}
console.log(calculadora("division",7,0));