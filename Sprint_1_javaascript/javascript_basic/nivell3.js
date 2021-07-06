document.querySelector('#calcula').addEventListener('click' ,() =>{
    const num1 = parseInt(document.querySelector('#num1').value);
    const num2 = parseInt(document.querySelector('#num2').value);
    const operacio = document.querySelector('#operacio').value;
    let resultat ;
    if(operacio == '+'){
        resultat = num1 + num2;
    }else if( operacio == '-'){
        resultat = num1 - num2;
    }else if(operacio == '*'){
        resultat = num1 * num2;
    }else if(operacio == '/'){
        resultat = num1 / num2;
    }
    document.querySelector('#resultat').innerHTML = resultat;


   
}) 