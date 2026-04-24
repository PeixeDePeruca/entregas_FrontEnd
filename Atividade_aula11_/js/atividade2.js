const titulo = document.getElementById('background');
const botao = document.getElementById('botao_pag2');
const botaoTexto_pag2 = document.getElementById('botaoTexto_pag2');

function getRandomRGB() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}



botao.addEventListener('click', function() {
    let cor = getRandomRGB()
   
    document.body.style.backgroundColor = cor;

}
);



botaoTexto_pag2.addEventListener('click', function() {

    let corTexto = getRandomRGB()
    titulo.style.color = corTexto;

}
);









