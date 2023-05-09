window.addEventListener("keydown", ajouterLettre);

function ajouterLettre(event) {
    var table = document.getElementById("grille");
    var lettre = event.key;
    if (lettre != "Enter") {
        table.innerHTML += lettre;
    }
}