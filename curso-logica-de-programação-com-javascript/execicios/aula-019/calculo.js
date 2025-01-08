const tela = document.querySelector('.tela');

const valor01 = parseFloat(prompt('Digite um número'));

escrever(valor01)

function escrever(valor){
    tela.innerHTML = valor; 
}

function iniciarCalculo(operador){
    const valor1 = parseFloat(document.querySelector('.tela').textContent);

    const valor2 = parseFloat(prompt('Digite outro número'));

    const total = somaValor(operador,valor1,valor2);

    escrever(total);
}



function somaValor(operador,val1,val2){
    var calculo = null;
    switch (operador) {
        case '+':
            calculo = val1 + val2;
            break;
        case '-':
            calculo = val1 - val2;
            break;
        case '*':
            calculo = val1 * val2;
            break;
        case '/':
            calculo = val1 / val2; 
    
        default:
            break;
    }
    return calculo;
}