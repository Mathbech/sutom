window.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verif();
    }
}, true);

function verif() {
    // console.log("vérification...");
    let arguments = document.getElementById("ligne")

    for (var i = 0; i < arguments.length; i++) {
        if(arguments === mot){
            console.log("Bravo vous avez réussi");
        }else{
            console.log("Dommage, ce n'est pas le bon mot");
        }
    }
}