// Cria uma nova variavel pra receber a imagem
var cur = new Image();
cur.src = "Assets/cursor.png";

// Cria outra variavel pra receber outra imagem
var caution = new Image();
caution.src = 'Assets/cuidado.png';

// Obtém do elemento DOM onde a função vai funcionar
var canvas = document.getElementById('canvas');
// Obtém os valores x e y do canvas
var ctx = canvas.getContext('2d');

// Inicializa variáveis para controlar o estado do cursor
var act = false;
var stgw = window.innerWidth - 20;
var stgh = window.innerHeight - 20;
canvas.width = stgw;
canvas.height = stgh;

var mxpos = 0;
var mypos = 0;
var mx = 0;
var my = 0;

var tx = 0;
var ty = 0;

// Função de animação principal
function animate() {
    ctx.clearRect(0, 0, stgw, stgh);

    // Coloca a imagem 'piso molhado' no meio do elemento canvas
    ctx.drawImage(caution, stgw / 2 - caution.width / 2, stgh / 2 - caution.height / 2);

    // Se 'act' for verdadeiro, move o cursor bem mais devagar, na direção que recebe
    if (act) {
        if (Math.floor(Math.random() * 7) == 1) {
            tx = mxpos;
            ty = mypos;
        }
        mx += (tx - mx) / 10;
        my += (ty - my) / 10;
        ctx.drawImage(cur, Math.floor(mx), Math.floor(my));
    }

    // Solicita ao navegador que chame novamente esta função de animação
    window.requestAnimationFrame(animate);
}

// Inicia a animação
animate();

// Função para lidar com o movimento do mouse e mudar a act como true
function motchmove(e) {
    mxpos = e.pageX;
    mypos = e.pageY;
    if (!act) {
        mx = mxpos;
        my = mypos;
        tx = mx;
        ty = my;
    }
    act = true;
}

// Adiciona um listener para o movimento do mouse
window.addEventListener('mousemove', function (e) {
    motchmove(e);
}, false);

// Adiciona um listener para o touch
window.addEventListener('touchmove', function (e) {
    e.preventDefault();
    motchmove(e.touches[0]);
}, false);
