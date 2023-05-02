window.addEventListener('load', create_table);


function create_table() {
    var table = document.getElementById("grille");

    var tb1 = document.createElement("table");
    var tb1boby = document.createElement("tbody");

    for (var i = 0; i < 6; i++) {
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < 6; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            var cellText = document.createTextNode(".");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tb1boby.appendChild(row);
    }

    // put the <tbody> in the <table>
    tb1.appendChild(tb1boby);
    // appends <table> into <body>
    table.appendChild(tb1);
    // sets the border attribute of tbl to 2;
    tb1.setAttribute("border", "2");
}
