function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var anoNascimento = Number(prompt("Digite seu ano de nascimento:"));
    var anoAtual = Number(prompt("Digite o ano atual:"));
    var idade = anoAtual - anoNascimento;
    if (idade >= 18) {
        mostrarResultado(`Você tem ${idade} anos. Já pode tirar CNH.`);
    } else {
        mostrarResultado(`Você tem ${idade} anos. Ainda não pode tirar CNH.`);
    }
}
