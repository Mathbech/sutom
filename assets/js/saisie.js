window.addEventListener('load', ajouterLettre);

var currentRowIndex = 6;
var rows = 1;
function ajouterLettre() {
    // Créer un clavier
    var table = document.getElementById('grille');
    var keyboard = document.createElement("div");
    keyboard.setAttribute("id", "clavier");

    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lettersPerRow = Math.ceil(letters.length / rows);
    var index = 0;

    for (var i = 0; i < rows; i++) {
        var row = document.createElement("div");
        // row.style.display = "flex";

        for (var j = 0; j < lettersPerRow; j++) {
            if (index < letters.length) {
                var button = document.createElement("button");
                button.innerHTML = letters[index];
                button.onclick = function () {
                    ajouterLettreDansGrille(this.innerHTML);
                };
                row.appendChild(button);
                index++;
            }
        }
        keyboard.appendChild(row);
    }

    table.after(keyboard);

    // Capturer les entrées du clavier physique
    document.addEventListener("keydown", function (event) {
        var lettre = event.key.toUpperCase();
        if (/^[A-Z]$/.test(lettre)) {
            ajouterLettreDansGrille(lettre);
        }
    });
}

function ajouterLettreDansGrille(lettre) {
    var cells = document.getElementsByTagName("td");
    for (var k = 1; k < cells.length; k++) {
        // console.log(cells[k]);
        if (cells[k].innerHTML == "." && cells[k].parentNode.rowIndex == currentRowIndex) {
            cells[k].innerHTML = lettre;
            // console.log(cells[k]);
            break;
        }
    }
    currentRowIndex = (currentRowIndex + 1) % rows;
}
