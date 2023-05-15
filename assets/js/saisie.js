window.addEventListener("keydown", ajouterLettre);

function ajouterLettre(event) {
    var lettre = event.key;
    if (lettre != "Enter") {
        var table = document.getElementById("grille");
        table.innerHTML += lettre;
        let newRow = table.insertRow(-1);
        let cell = newRow.insertCell(0);
        cell.innerHTML = lettre;        
    }
}