//pedir para  o usuário digitar um número e mostrar a tabuada desse númro de 1 a 1000

let numero = parseFloat(prompt('Digite um número'));

let contador = 1;

while(contador <= 1000){
    document.write(numero + 'x' + contador + '=' + (numero * contador) + '<br>');

    contador = contador + 1;
}

document.write('saiu do loop')