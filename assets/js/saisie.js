window.addEventListener('load', ajouterClavier);

function ajouterClavier() {
  var table = document.getElementById('grille');
  var keyboard = document.createElement('div');
  keyboard.setAttribute('id', 'clavier');

  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var rows = 1;
  var lettersPerRow = Math.ceil(letters.length / rows);
  var index = 0;

  for (var i = 0; i < rows; i++) {
    var row = document.createElement('div');
    row.classList.add('keyboard-row');

    for (var j = 0; j < lettersPerRow; j++) {
      if (index < letters.length) {
        var button = document.createElement('button');
        button.classList.add('keyboard-button');
        button.innerHTML = letters[index];
        button.onclick = function () {
          var lettre = this.innerHTML;
          var cells = document.getElementsByTagName('td');
          for (var k = 0; k < cells.length; k++) {
            if (cells[k].innerHTML == '.' && cells[k].parentNode.rowIndex == i + 1) {
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

  table.after(keyboard);
}
