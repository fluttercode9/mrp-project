
var przewidywany_popyt;
var produkcja;
var dostepne;
var czasRealizacjiGHP;
var naStanieGHP;

var BOM = {'przednie nogi':2}


function fillTable() {
    //console.log(przewidywany_popyt);
    // GHPtable = document.getElementById("GHPtable");
    // rows = GHPtable.rows;
    czasRealizacjiGHP = document.getElementById('czasRealizacjiGHP').value;
    przewidywany_popyt = document.getElementsByClassName('popyt');
    produkcja = document.getElementsByClassName('produkcja');
    dostepne = document.getElementsByClassName('dostepne');
    for (var popyt_arr= [], i = przewidywany_popyt.length; i;) popyt_arr[--i] = przewidywany_popyt[i].value;
    for (var produkcja_arr= [], i = produkcja.length; i;) produkcja_arr[--i] = produkcja[i].value;
    for (var dostepne_arr= [], i = dostepne.length; i;) dostepne_arr[--i] = dostepne[i].value;
    czasRealizacjiGHP = document.getElementById('czasRealizacjiGHP').value;
    naStanieGHP = document.getElementById('naStanieGHP').value;


    console.log("popyt: ",popyt_arr, "\nprodukcja: ", produkcja_arr, "\ndostępne: ", dostepne_arr, czasRealizacjiGHP, naStanieGHP)

    fillCalkowiteZapotrzebowanie('naStaniePN','czasRealizacjiPN','wielkoscPartiiPN', 'przednie nogi','.calkowiteZapotrzebowaniePN', produkcja_arr, czasRealizacjiGHP);
}

var czasRealizacjiPN;
var naStaniePN;
var wielkoscPartiiPN;

// mysle ze o to chodzi w calkowitym zapotrzebowaniu ale nie wiem xD 
function fillCalkowiteZapotrzebowanie(naStanieClassName, czasRealizacjiClassName, wielkoscPartiiClassName,BOMpart, MRProwClassName, produkcja_arr, czasRealizacjiGHP){

    naStaniePN = document.getElementById(naStanieClassName).value;
    czasRealizacjiPN= document.getElementById(czasRealizacjiClassName).value;
    wielkoscPartiiPN = document.getElementById(wielkoscPartiiClassName).value;
    console.log('na stanie PN: ', naStaniePN, czasRealizacjiPN, wielkoscPartiiPN)
    var zapotrzebowaniePN = [];
    for(var i = 0;i<produkcja_arr.length;i++){
        zapotrzebowaniePN[i] = produkcja_arr[i]*BOM[BOMpart];
    }
    rowCalkowitegoZapotrzebowania = document.querySelectorAll(MRProwClassName);
    console.log(rowCalkowitegoZapotrzebowania);

    for(var i=0; i<rowCalkowitegoZapotrzebowania.length;i++){
        console.log(rowCalkowitegoZapotrzebowania[1].innerHTML);
        if (zapotrzebowaniePN[i] != 0){
            if(i<czasRealizacjiGHP){alert('brak funkcjonalności, przypadek wystartowania produkcji przed rozpoczeciem wszystkiego')}
            rowCalkowitegoZapotrzebowania[i].innerHTML = 0;
            rowCalkowitegoZapotrzebowania[i - czasRealizacjiGHP].innerHTML=zapotrzebowaniePN[i];

        }
        else{
            rowCalkowitegoZapotrzebowania[i].innerHTML=zapotrzebowaniePN[i];

        }
    }


}

function createCalculatedTable(nazwa, tytul) {
    let container = document.getElementById("tables-container");
    container.innerHTML += `</table>
    <h1>${tytul}</h1>
    <table style="border: 1px solid black; padding:30px">
        <tr>
            <th>Dane/Okres</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>

         </tr>
        <tr>
            <td>Całkowite zapotrzebowanie
            </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa}'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa}'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa}'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa}'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa}'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa}'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa}'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa}'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa}'> </td>
            <td class = 'calkowiteZapotrzebowanie${nazwa}'> </td>
            
        </tr>
        <tr>
            <td>Przewidywane na stanie</td>
            <td> </td> 
            <td> </td>
            <td> </td> 
            <td> </td>
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
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            
        </tr>

    </table>
    
    `

}







