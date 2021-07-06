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
    }else{
        console.log("operacion no valida");

    }

}
console.log(calculadora("suma",7,9));