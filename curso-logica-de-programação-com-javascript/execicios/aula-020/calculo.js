const tela = document.querySelector('.tela');

const valor1 = parseFloat(prompt('Digite um número'));

printNaTela(valor1);

function printNaTela(valor){
    tela.innerHTML =valor;
}

function iniciarCalculo(operadores){
    const valor1 = parseFloat(document.querySelector('.tela').textContent);

    const valor2 = parseFloat(prompt('Digite outro número'));

   

    try {
         const somaTotal = calcular(operadores,valor1,valor2);printNaTela(somaTotal);
    } catch (e) {
       alert(e) 
       return
    }

    
}

function calcular(operadores, valor1,valor2){

    if(isNaN(valor1) || isNaN(valor2)){
        throw new Error('So é permitido números')
    }

    var soma = null;
    switch (operadores) {
        case '+':
        soma = valor1 + valor2;
            break;
        case '-':
            soma = valor1 - valor2;
            break;
        case '*':
            soma = valor1 * valor2;
            break;
        case '/':
            soma = valor1 / valor2;
        default:
            break;
    }

    return soma;
}