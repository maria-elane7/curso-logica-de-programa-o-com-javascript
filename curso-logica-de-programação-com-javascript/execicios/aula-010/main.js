//fazer jogador01 digitar um número

let n1 = parseFloat(prompt('Digite um número'));

//fazer jogador02 digitar outro número

let n2 = parseFloat(prompt('Digite outro número'));

//se forem iguais, mostra mensagem de empate
if(n1 === n2){
    alert('Vocês empataram!')
}

//sortar um numero entre 0 e 1

let numeroSorteado = parseInt(Math.random()*2);
alert('Número Sorteado: ' + numeroSorteado);

//se o numero sorteado for 0, ganha quem tirar o número menor
if((numeroSorteado === 0 && n1 < n2) || (numeroSorteado === 1 && n2 > n1)){
   alert('Parabéns! Jogador 1, você ganhou!');

  //se o número sorteado for 1, ganha quem tirar o número maior
}else{
    alert('Parabéns! Jogador 2, você ganhou! ');
}

