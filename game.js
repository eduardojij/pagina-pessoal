(() => {

    const style = document.createElement("style");

    style.textContent = `
        #jogo {
            max-width: 600px;
            margin: 20px auto;
            font: 18px sans-serif;
            text-align: center;
        }

        #campo {
            position: relative;
            height: 350px;
            overflow: hidden;
            background: #172554;
            border: 3px solid #60a5fa;
            border-radius: 12px;
        }

        #alvo {
            position: absolute;
            width: 42px;
            height: 42px;
            border: 0;
            border-radius: 50%;
            background: #facc15;
            cursor: pointer;
        }

        #iniciar {
            padding: 8px 16px;
            cursor: pointer;
        }
    `;

    document.head.appendChild(style);


    const jogo = document.querySelector("#jogo");

    jogo.innerHTML = `
        <h1>Acertar o Alvo</h1>

        <p>
            Pontos:
            <strong id="pontos">0</strong>
            |
            Tempo:
            <strong id="tempo">30</strong>s
        </p>

        <button id="iniciar">
            Iniciar jogo
        </button>

        <div id="campo" aria-label="Campo do jogo"></div>
    `;

    const campo = document.querySelector("#campo");

    const alvo = document.createElement("button");

    alvo.id = "alvo";
    alvo.setAttribute("aria-label", "Alvo");

    campo.appendChild(alvo);

    const pontos = document.querySelector("#pontos");
    const tempo = document.querySelector("#tempo");
    const iniciar = document.querySelector("#iniciar");

    let score = 0;
    let segundos = 30;
    let relogio;
    let jogando = false;

    function moverAlvo() {

        const x = Math.random() * (campo.clientWidth - 42);
        const y = Math.random() * (campo.clientHeight - 42);

        alvo.style.left = `${x}px`;
        alvo.style.top = `${y}px`;
    }

    function iniciarJogo() {

        clearInterval(relogio);

        score = 0;
        segundos = 30;
        jogando = true;

        pontos.textContent = score;
        tempo.textContent = segundos;

        iniciar.textContent = "Reiniciar";

        alvo.style.display = "block";

        moverAlvo();

        relogio = setInterval(() => {

            segundos--;

            tempo.textContent = segundos;


            if (segundos <= 0) {

                clearInterval(relogio);

                jogando = false;

                alvo.style.display = "none";

                alert(
                    `Fim de jogo! Você fez ${score} ponto${score === 1 ? "" : "s"}.`
                );
            }

        }, 1000);
    }

    alvo.addEventListener("click", () => {

        if (!jogando) {
            return;
        }

        score++;

        pontos.textContent = score;

        moverAlvo();
    });

    iniciar.addEventListener("click", iniciarJogo);


    // O alvo começa escondido
    alvo.style.display = "none";

})();