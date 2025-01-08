let n1 = parseFloat(prompt('Digite sua  nota'));

let n2 = parseFloat(prompt('Digite sua nota'));

let media = n1 + n2;

if(n1 === 0 || n2 === 0 || media <= 5){
    alert('Descupe! Não foi dessa vez');
}else{
    alert('Parabéns! Você foi aprovado')
}

