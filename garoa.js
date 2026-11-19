
// Mensagem da página de contato
function mostrarMensagem() {
    document.getElementById("mensagem").innerHTML =
    "Obrigado por visitar meu site! 😁";
}

// Criar chuva de fundo
for (let i = 0; i < 30; i++) {
    let gota = document.createElement("div");

    gota.innerHTML = "💧";
    gota.style.position = "fixed";
    gota.style.left = Math.random() * 100 + "vw";
    gota.style.top = "-30px";
    gota.style.pointerEvents = "none";
    gota.style.animation =
        "cair " + (2 + Math.random() * 4) + "s linear infinite";

    document.body.appendChild(gota);
}

// Animação da chuva
let estilo = document.createElement("style");

estilo.innerHTML = `
@keyframes cair {
    to {
        transform: translateY(110vh);
    }
}`;

document.head.appendChild(estilo);
