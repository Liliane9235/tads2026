function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var idade = Number(prompt("Digite sua idade (anos completos):"));
    var diasVividos = idade * 365;
    mostrarResultado(`Com ${idade} anos, você já viveu aproximadamente ${diasVividos} dias.`);
}
