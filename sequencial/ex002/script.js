function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var numero = Number(prompt("Digite um numero inteiro:"));
    var antecessor = numero - 1;
    var sucessor = numero + 1;
    mostrarResultado(`Você digitou ${numero}. O antecessor é ${antecessor} e o sucessor é ${sucessor}.`);
}
