function fillTable() {
    GHPtable = document.getElementById("GHPtable");
    rows = GHPtable.rows;
    przewidywany_popyt = document.getElementsByClassName('popyt');
    for (var a = [], i = przewidywany_popyt.length; i;) a[--i] = przewidywany_popyt[i].value;

    console.log(przewidywany_popyt, a)
}

function createInputsTable() {
    var kontener = document.getElementById('tablearea');
    kontener.innerHTML += `
    <table id="GHPtable" style="border: 1px solid black; padding:30px">
                                    <tr>
                                        <th>tydzień</th>
                                        <script>for (var i = 0; i < 11; i++) { document.write("<th>" + i + "</th>") }</script>
                                    </tr>
                                    <tr>
                                        <td>Przewidywany popyt</td>
                                        <script>for (var i = 0; i < 11; i++) { document.write("<td>" + "<input value =0 class='popyt'></input>" + "</td>") }</script>

                                    </tr>
                                    <tr>
                                        <td>Produkcja</td>
                                        <script>for (var i = 0; i < 11; i++) { document.write("<td>" + "<input value=0></input>" + "</td>") }</script>

                                    </tr>
                                    <tr>
                                        <td>Dostępne</td>
                                        <script>for (var i = 0; i < 11; i++) { document.write("<td>" + "<input value =0></input>" + "</td>") }</script>

                                    </tr>
                                </table>
    `
}

function createCalculatedTable(title) {
    let container = document.getElementById("tables-container");
    container.innerHTML += `</table>
    <h1>${title}</h1>
    <table style="border: 1px solid black; padding:30px">
        <tr>
            <th>Dane/Okres</th>
            <td> 1</td>
            <td>2 </td>
            <td>3 </td>
            <td> 4</td>
            <td>5 </td>
            <td>6 </td>
         </tr>
        <tr>
            <td>Całkowite zapotrzebowanie
            </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
        </tr>
        <tr>
            <td>Przewidywane na stanie</td>
            <td> </td> 
            <td> </td>
            <td> </td> 
            <td> </td>
            <td> </td> 
            <td> </td>

        </tr>
        <tr>
            <td>Planowane przyjęcia</td>           
            <td> </td> 
            <td> </td>
            <td> </td> 
            <td> </td>
            <td> </td> 
            <td> </td>
        </tr>
        <tr>
            <td>Zapotrzebowanie netto</td>
            <td> </td> 
            <td> </td>
            <td> </td> 
            <td> </td>
            <td> </td> 
            <td> </td>
        </tr>
        <tr>
            <td>Planowane zamówienia</td>
            <td> </td>
            <td> </td>
            <td> </td> 
            <td> </td>
            <td> </td> 
            <td> </td>
        </tr>
        <tr>
            <td>Planowane przyjęcie zamówień</td>
            <td> </td> 
            <td> </td>
            <td> </td> 
            <td> </td>
            <td> </td> 
            <td> </td>
        </tr>

    </table>
    
    `

}







