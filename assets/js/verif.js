window.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        verif();
    }
}, true);


function verif() {
    var mot = localStorage.getItem("variable");
    var ligneElements = document.querySelectorAll(".ligne5 td");
    var ligneText = Array.from(ligneElements).map(function (element) {
        return element.textContent;
    }).join("");
    console.log(ligneText);
    if (ligneText === mot) {
        console.log("Bravo, vous avez réussi !");
    } else {
        console.log("Dommage, ce n'est pas le bon mot.");
    }
}