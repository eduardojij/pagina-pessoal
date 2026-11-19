window.addEventListener("load", function () {

    console.log("CHUVA INICIADA!");

    // Criar gotas
    for (let i = 0; i < 100; i++) {

        const gota = document.createElement("div");

        gota.innerHTML = "🍖";

        gota.style.position = "fixed";
        gota.style.left = Math.random() * 100 + "vw";
        gota.style.top = "-50px";
        gota.style.fontSize = "20px";
        gota.style.pointerEvents = "none";
        gota.style.zIndex = "99999";

        gota.style.animation =
            `cair ${2 + Math.random() * 3}s linear ${Math.random() * 5}s infinite`;

        document.body.appendChild(gota);
    }

    // Criar animação
    const css = document.createElement("style");

    css.innerHTML = `
        @keyframes cair {
            0% {
                transform: translateY(0);
            }

            100% {
                transform: translateY(110vh);
            }
        }
    `;

    document.head.appendChild(css);

});
