window.addEventListener('load', create_table);

function create_table() {
  // Define table of words
  const mots = ['CHAT', 'CHIEN', 'OISEAU', 'POISSON', 'LAPIN', 'TARTUFF', 'TARTIFLETTE'];

  // Générer un index aléatoire pour sélectionner un mot du tableau
  const indexAleatoire = Math.floor(Math.random() * mots.length);

  // Récupérer le mot correspondant à l'index aléatoire
  const motChoisi = mots[indexAleatoire];

  // Print word in console.log
  console.log(`Le mot choisi est : ${motChoisi}`);

  // Créer une grille de mots
  var table = document.getElementById("grille");
  var tb1 = document.createElement("table");
  var tb1boby = document.createElement("tbody");

  for (var i = 0; i < 6; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < motChoisi.length; j++) {
      var cell = document.createElement("td");
      var letter;
      if (j == 0) {
        letter = document.createTextNode(motChoisi[0]);
      } else {
        letter = document.createTextNode(".");
      }
      cell.appendChild(letter);
      row.appendChild(cell);
    }

    tb1boby.appendChild(row);
  }

  tb1.appendChild(tb1boby);
  table.appendChild(tb1);
  tb1.setAttribute("border", "2");

  // Créer un clavier
  var keyboard = document.createElement("div");
  keyboard.setAttribute("id", "clavier");

  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var rows = 3;
  var lettersPerRow = Math.ceil(letters.length / rows);
  var index = 0;

  for (var i = 0; i < rows; i++) {
    var row = document.createElement("div");
    for (var j = 0; j < lettersPerRow; j++) {
      if (index < letters.length) {
        var button = document.createElement("button");
        button.innerHTML = letters[index];
        button.onclick = function() {
          var lettre = this.innerHTML;
          var cells = document.getElementsByTagName("td");
          for (var k = 0; k < cells.length; k++) {
            if (cells[k].innerHTML == "." && cells[k].parentNode.rowIndex == i+1) {
              cells[k].innerHTML = lettre;
              break;
            }
          }
        };
        row.appendChild(button);
        index++;
      }
    }
    keyboard.appendChild(row);
  }

  // Afficher le clavier sur plusieurs lignes
  var keyboardRows = keyboard.getElementsByTagName("div");
  for (var i = 0; i < keyboardRows.length; i++) {
    keyboardRows[i].style.display = "inline-block";
    keyboardRows[i].style.marginBottom = "10px";
  }

  table.after(keyboard);
}