// Declara uma variável para salvar um valor aleatório
var rand;

// Obtém um elemento do DOM com o id 'move' e armazena na variável 'div'
var div = document.getElementById('move');

// Adiciona um listener para o movimento do mouse
document.addEventListener('mousemove', function(e) {
    // Gera um valor aleatório entre -150 e 150 e armazena em 'rand'
    rand = Math.floor((Math.random() * 300) - 150);
    // Define as posições horizontal e vertical baseada na posição do mouse e no valor aleatório
    div.style.left = (e.pageX + rand) + "px";
    div.style.top = (e.pageY + rand) + "px";
});

// Função que move 'mouse falso' passado como argumento com base no movimento do mouse real, mas é a mesma, só são elementos independentes
function moveme(element) {
    rand = Math.floor((Math.random() * 300) - 150); 
    element.style.left = (event.pageX + rand) + "px";
    element.style.top = (event.pageY + rand) + "px";
}
