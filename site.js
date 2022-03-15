function fillTable() {
    GHPtable = document.getElementById("GHPtable");
    rows = GHPtable.rows;
    przewidywany_popyt = document.getElementsByClassName('popyt');
    produkcja = document.getElementsByClassName('produkcja');
    dostepne = document.getElementsByClassName('dostepne');
    for (var popyt_arr= [], i = przewidywany_popyt.length; i;) popyt_arr[--i] = przewidywany_popyt[i].value;
    for (var produkcja_arr= [], i = przewidywany_popyt.length; i;) produkcja_arr[--i] = przewidywany_popyt[i].value;
    for (var dostepne_arr= [], i = przewidywany_popyt.length; i;) dostepne_arr[--i] = przewidywany_popyt[i].value;
    


    console.log(popyt_arr, produkcja_arr, dostepne_arr)
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







