

// Mensagem da página de contato
function mostrarMensagem() {
    document.getElementById("mensagem").innerHTML =
        "Obrigado por visitar meu site! 😁";
}

// Criar chuva de fundo
const quantidadeGotas = 60;

for (let i = 0; i < quantidadeGotas; i++) {
    let gota = document.createElement("div");

    gota.className = "gota-chuva";
    gota.innerHTML = "💧";

    gota.style.left = Math.random() * 100 + "vw";
    gota.style.animationDuration = (2 + Math.random() * 4) + "s";
    gota.style.animationDelay = Math.random() * 5 + "s";
    gota.style.fontSize = (10 + Math.random() * 15) + "px";
    gota.style.opacity = 0.2 + Math.random() * 0.5;

    document.body.appendChild(gota);
}

// Estilo e animação da chuva
let estilo = document.createElement("style");

estilo.innerHTML = `
.gota-chuva {
    position: fixed;
    top: -40px;
    pointer-events: none;
    user-select: none;
    z-index: 0;
    animation: cair linear infinite;
}

@keyframes cair {
    0% {
        transform: translateY(-10vh);
    }

    100% {
        transform: translateY(110vh);
    }
}

/* Conteúdo do site acima da chuva */
body > *:not(.gota-chuva) {
    position: relative;
    z-index: 1;
}

/* Evita animações para quem prefere movimento reduzido */
@media (prefers-reduced-motion: reduce) {
    .gota-chuva {
        animation: none;
        display: none;
    }
}
`;

document.head.appendChild(estilo);
