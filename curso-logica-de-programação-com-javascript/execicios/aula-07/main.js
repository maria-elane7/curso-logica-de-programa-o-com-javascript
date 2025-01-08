//fazer jogador 01 digitar um número
let jogador01 = parseInt(prompt('Jogador 01, digite um número'));
//fazer jogador 02 digitar outro número
let jogador02 = parseInt(prompt('Jogador 02, digite um número'));
//se forem iguais, mostrar mensagem 'empate'
if(jogador01 == jogador02){
    alert('Deu empate');
}else{
    //sortear um número entre 0 e 1
let numeroSorteado = parseInt(Math.random()*2);
//se o número sorteado for 0, ganha quem escolher o número menor
if(jogador01 < jogador02){
    alert('Jogador 01, você venceu!')
}else{
    //se o número sorteado for 1, ganha quem escolher o número maior
    if(jogador01 > jogador02){
        alert('Jogador 02, você venceu!')
    }

}


}

