let contadorTotal = 0;
let contadorMultas = 0;

function adicionar() {
    // 1. Pega os valores dos campos
    let nome = document.getElementById("livro").value;
    let dias = Number(document.getElementById("atraso").value);
    let lista = document.getElementById("lista");

    // 2. Cria o conteúdo do novo item
    let classeCor = "";
    let textoAtraso = "";

    if (dias > 0) {
        classeCor = "alerta"; // Aplica o vermelho
        textoAtraso = " - **ATRASADO**";
        contadorMultas++;
    }

    // 3. Adiciona o item na lista (usando template strings ``)
    lista.innerHTML += `
        <li class="${classeCor}">
            ${nome} ${textoAtraso} 
            <button onclick="remover(this, ${dias > 0})">Arquivar</button>
        </li>
    `;

    // 4. Atualiza os números no topo
    contadorTotal++;
    atualizarTela();
}

function remover(botao, tinhaMulta) {
    // Remove o item da lista
    botao.parentElement.remove();

    // Diminui os contadores
    contadorTotal--;
    if (tinhaMulta) {
        contadorMultas--;
    }
    atualizarTela();
}

function atualizarTela() {
    document.getElementById("total").innerText = contadorTotal;
    document.getElementById("multas").innerText = contadorMultas;
}