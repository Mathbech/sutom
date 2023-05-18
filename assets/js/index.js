window.addEventListener('load', create_table);

function create_table() {
    // Define table of words
    //   const mots = ['CHAT', 'CHIEN', 'OISEAU', 'POISSON', 'LAPIN', 'TARTUFF', 'TARTIFLETTE'];

    fetch('./assets/dico/dico.json')
        .then(response => response.json())
        .then(data => {
            const words = data.words;
            const mots = words[Math.floor(Math.random() * words.length)];

            // Print word in console.log
            console.log(`Le mot choisi est : ${mots}`);

            // Créer une grille de mots
            var table = document.getElementById("grille");
            var tb1 = document.createElement("table");
            var tb1boby = document.createElement("tbody");

            for (var i = 0; i < 6; i++) {
                // creates a table row
                var row = document.createElement("tr");
                row.className = "ligne" + i;

                for (var j = 0; j < mots.length; j++) {
                    var cell = document.createElement("td");
                    var letter;
                    if (j == 0) {
                        letter = document.createTextNode(mots[0]);
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

        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });
}