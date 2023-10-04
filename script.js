// Função para alternar entre os estilos
function toggleStyles() {
    if (currentStyle === "bugado") {
        loadCSS("bugado.css"); // Carrega o arquivo CSS bugado.css
        loadScript("bugado.js"); // Carrega o script bugado.js
        currentStyle = "bugado";

    } else if (currentStyle === "escorregadio") {
        loadCSS("escorregadio.css"); // Carrega o arquivo CSS escorregadio.css
        loadScript("escorrega.js"); // Carrega o script escorrega.js
        currentStyle = "escorregadio";

    }
}

// Função para carregar um script dinamicamente
function loadScript(scriptName) {
    const script = document.createElement('script');
    script.src = scriptName;
    document.head.appendChild(script);
}

// Função para mostrar bugado
function showMouseCursorJamming() {
    document.getElementById("mouseCursorJamming").style.display = "block";
    currentStyle = "bugado";
    document.getElementById("slipperyMouseCursor").style.display = "none";
    document.getElementById("meuBotao").style.display = "block";
    toggleStyles(); // Alterna estilos ao mostrar escorrega
}

// Função para mostrar o modo escorrega
function showSlipperyMouseCursor() {
    document.getElementById("mouseCursorJamming").style.display = "none";
    currentStyle = "escorregadio";
    document.getElementById("slipperyMouseCursor").style.display = "block";
    document.getElementById("meuBotao").style.display = "block";
    toggleStyles(); // Alterna estilos ao mostrar bugado
}

// Adiciona eventos de clique aos botões
document.getElementById("showMouseCursorJammingButton").addEventListener("click", showMouseCursorJamming);
document.getElementById("showSlipperyMouseCursorButton").addEventListener("click", showSlipperyMouseCursor);

// Adiciona o evento de clique ao botão com o id "meuBotao"
document.getElementById('meuBotao').addEventListener('click', function() {
    // Exibe um alerta
    alert("Né que conseguiu mesmo?!");
});
