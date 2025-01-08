//pedir para o usuaário digitar um número de 1 a 3.
let numero = parseInt(prompt('Digite um número'));

//mostrar na tela um mensagem diferente para cada número

switch (numero) {
    case 1: 
        alert('Que legal!');
        break;
        case 2: 
        alert('Muito bem!');
        break;
        case 3:
        alert('top!')
        break;
        default:
            alert('Escolha um número de 1 a 3');
        break;
}