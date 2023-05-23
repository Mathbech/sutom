import { WORDS } from "./word.js";

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)];
console.log(rightGuessString);

function initBoard() {
    let board = document.getElementById("game-board");
    let wordLength = rightGuessString.length;

    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        let row = document.createElement("div");
        row.className = "letter-row";

        for (let j = 0; j < wordLength; j++) {
            let box = document.createElement("div");
            box.className = "letter-box";
            row.appendChild(box);
        }

        board.appendChild(row);
    }

    // Affichage de la première lettre dans la première case
    let firstRow = document.querySelector(".letter-row");
    let firstBox = firstRow.querySelector(".letter-box");
    firstBox.textContent = rightGuessString[0];
}


initBoard();

document.addEventListener("keyup", (e) => {
    if (guessesRemaining === 0) {
        return;
    }

    let pressedKey = String(e.key);

    if (pressedKey === "Backspace" && nextLetter !== 0 || pressedKey === "Supp") {
        deleteLetter();
        return;
    }

    if (pressedKey === "Entrer" || pressedKey === "Enter") {
        checkGuess();
        return;
    }

    let found = pressedKey.match(/[a-z]/gi);
    if (!found || found.length > 1) {
        return;
    } else {
        insertLetter(pressedKey);
    }
});

function insertLetter(pressedKey) {
    if (nextLetter === rightGuessString.length) {
        return;
    }
    pressedKey = pressedKey.toLowerCase();

    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
    let box = row.children[nextLetter];
    // Vérification si la touche est une lettre de l'alphabet
    if (/^[a-zA-Z]$/.test(pressedKey)) {
        box.textContent = pressedKey;
        box.classList.add("filled-box");
        currentGuess.push(pressedKey);
        nextLetter += 1;
    }
}

function deleteLetter() {
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
    let box = row.children[nextLetter - 1];
    box.textContent = "";
    box.classList.remove("filled-box");
    currentGuess.pop();
    nextLetter -= 1;
}

function shadeKeyboard(letter, color) {
    for (const elem of document.getElementsByClassName("keyboard-button")) {
        if (elem.textContent === letter) {
            let oldColor = elem.style.backgroundColor;
            if (oldColor === "green") {
                return;
            }

            if (oldColor === "yellow" && color !== "green") {
                return;
            }

            elem.style.backgroundColor = color;
            break;
        }
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter" || event.key === "Delete") {
        event.preventDefault();
        checkGuess();
    }
}

document.addEventListener("keydown", handleKeyPress);

function checkGuess() {
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
    let guessString = "";
    let rightGuess = Array.from(rightGuessString);

    for (const val of currentGuess) {
        guessString += val;
    }
    // if (guessString.length < rightGuessString.length) {
    //     toastr.error("Pas assez de lettres !");
    //     return;
    // }

    // Vérifier si le mot ne contient que des lettres de l'alphabet
    if (!/^[a-zA-Z]+$/.test(guessString)) {        
        toastr.error("Utilisez uniquement des lettres de l'alphabet pour former des mots !");
        return;
    }

    for (let i = 0; i < rightGuessString.length; i++) {
        let letterColor = "";
        let box = row.children[i];
        let letter = currentGuess[i];

        let letterPosition = rightGuess.indexOf(currentGuess[i]);

        // Si la lettre n'est pas dans le bon mot
        if (letterPosition === -1) {
            letterColor = "grey";
        } else {
            // Maintenant, la lettre est certainement dans le mot
            // Si l'index de la lettre et l'index correct sont identiques
            // The letter is the right position
            if (currentGuess[i] === rightGuess[i]) {
                letterColor = "#2CFF41";
            } else {
                letterColor = "yellow";
            }

            rightGuess[letterPosition] = "#";
        }

        let delay = 250 * i;
        setTimeout(() => {
            // Colorer la case
            box.style.backgroundColor = letterColor;
            shadeKeyboard(letter, letterColor);
        }, delay);
    }

    if (guessString === rightGuessString) {
        toastr.success("Bien joué, tu as trouvé le mot !");
        guessesRemaining = 0;
        return;
    } else {
        guessesRemaining -= 1;
        currentGuess = [];
        nextLetter = 0;

        if (guessesRemaining === 0) {
            toastr.error("Tu as utilisé toutes tes chances ! C'est fini !");
            toastr.info(`Le mot correct était : "${rightGuessString}"`);
        }
    }
}



document.getElementById("keyboard-cont").addEventListener("click", (e) => {
    const target = e.target;

    if (!target.classList.contains("keyboard-button")) {
        return;
    }
    let key = target.textContent;

    if (key === "Del") {
        key = "Backspace";
    }

    document.dispatchEvent(new KeyboardEvent("keyup", { key: key }));
});

function handleKeyClick(key) {
    if (key === "Supp") {
        if (currentGuess.length > 0) {
            currentGuess.pop();
            nextLetter--;
            updateGuessDisplay();
        }
    } else if (key === "Entrer") {
        checkGuess();
    } else {
        if (nextLetter < 5) {
            currentGuess.push(key);
            nextLetter++;
            updateGuessDisplay();
        }
    }
}

function updateGuessDisplay() {
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
    let boxes = row.querySelectorAll(".letter-box");

    for (let i = 0; i < 5; i++) {
        let box = boxes[i];

        if (i < currentGuess.length) {
            box.textContent = currentGuess[i];
            box.classList.add("filled-box");
        } else {
            box.textContent = "";
            box.classList.remove("filled-box");
        }
    }
}
