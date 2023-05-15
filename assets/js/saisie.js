window.addEventListener("keydown", ajouterLettre());

function ajouterLettre() {
    let tableau = document.getElementById("grille");
    let lettreInput = document.getElementById("lettreInput");
    let lettre = lettreInput.value;
    let newRow = tableau.insertRow(-1);
    let cell = newRow.insertCell(0);
    cell.innerHTML = lettre;
}