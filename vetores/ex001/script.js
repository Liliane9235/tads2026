function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var amigos = ["Thais", "Layssa", "Hadassa", "Liliane", "Elisa"];
    mostrarResultado(`Convidados:\n${amigos.join("\n")}`);
}
