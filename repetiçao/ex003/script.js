function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var n = Number(prompt("Digite um inteiro positivo N:"));
    var soma = 0;
    for (var i = 1; i <= n; i++) soma += i;
    mostrarResultado(`A soma de 1 ate ${n} e ${soma}.`);
}
