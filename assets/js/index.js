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
}