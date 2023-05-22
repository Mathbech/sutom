var currentRowIndex = 0;
window.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        verif();
    }
}, true);

function verif() {
    var mot = localStorage.getItem("variable");
    var cells = document.getElementsByTagName("td");
    var ligneText = "";

    for (var k = 0; k < cells.length; k++) {
        if (cells[k].innerHTML != "." && cells[k].parentNode.rowIndex == currentRowIndex) {
            ligneText += cells[k].innerHTML;
        }
        console.log(ligneText);
    }
    console.log(mot);

    if (ligneText === mot) {
        console.log("Bravo, vous avez réussi !");
    } else {
        console.log("Dommage, ce n'est pas le bon mot.");
        currentRowIndex++;
        var newLineCells = document.getElementsByTagName("td");
        for (var i = 0; i < newLineCells.length; i++) {
            if (newLineCells[i].parentNode.rowIndex == currentRowIndex) {
                newLineCells[i].contentEditable = true; // Autoriser l'édition de la cellule
            }
        }
    }
}