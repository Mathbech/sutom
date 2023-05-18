window.addEventListener("load", create_table);

function create_table() {
    fetch("./assets/dictionnaire/dico.json")
        .then((response) => response.json())
        .then((data) => {
            const words = data.words;
            const mot = words[Math.floor(Math.random() * words.length)];
            localStorage.setItem("variable", mot);

            console.log(`Le mot choisi est : ${mot}`);

            var table = document.getElementById("grille");
            var tb1 = document.createElement("table");
            var tb1body = document.createElement("tbody");

            var previousLineComplete = true; // Indicate if the previous line is complete

            for (var i = 0; i < 6; i++) {
                var row = document.createElement("tr");
                row.classList.add("ligne" + i);

                var currentLineComplete = false; // Indicate if the current line is complete

                for (var j = 0; j < mot.length; j++) {
                    var cell = document.createElement("td");
                    var letter;

                    if (previousLineComplete) {
                        // Display the first letter of the word on the new line
                        if (j === 0) {
                            letter = document.createTextNode(mot[0]);
                            currentLineComplete = false;
                        } else {
                            letter = document.createTextNode(".");
                        }
                    } else {
                        letter = document.createTextNode(".");
                    }

                    cell.appendChild(letter);
                    row.appendChild(cell);
                }

                previousLineComplete = currentLineComplete;

                tb1body.appendChild(row);
            }

            tb1.appendChild(tb1body);
            table.appendChild(tb1);
            tb1.setAttribute("border", "2");


        })
        .catch((error) => {
            console.error("Une erreur s'est produite :", error);
        });
}


