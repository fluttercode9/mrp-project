
var BOM = {
    'przednie nogi': 2,
    'siedzenie': 1
}

function fillTable() {
    //console.log(przewidywany_popyt);
    // GHPtable = document.getElementById("GHPtable");
    // rows = GHPtable.rows;

    czasRealizacjiGHP = document.getElementById('czasRealizacjiGHPinput').value;
    przewidywany_popyt = document.getElementsByClassName('popytInput');
    produkcja = document.getElementsByClassName('produkcjaInput');
    dostepne = document.getElementsByClassName('dostepneInput');
    for (var popyt_arr = [], i = przewidywany_popyt.length; i;) popyt_arr[--i] = przewidywany_popyt[i].value;
    for (var produkcja_arr = [], i = produkcja.length; i;) produkcja_arr[--i] = produkcja[i].value;
    for (var dostepne_arr = [], i = dostepne.length; i;) dostepne_arr[--i] = dostepne[i].value;
    naStanieGHP = document.getElementById('naStanieGHPinput').value;


    fillGHPtable();
    fillCalkowiteZapotrzebowanie('naStaniePN', 'czasRealizacjiPN', 'wielkoscPartiiPN', 'przednie nogi', '.calkowiteZapotrzebowaniePN', produkcja_arr, czasRealizacjiGHP);
    fillCalkowiteZapotrzebowanie('naStaniePN', 'czasRealizacjiSiedzenie', 'wielkoscPartiiSiedzenie', 'siedzenie', '.calkowiteZapotrzebowanieSiedzenie', produkcja_arr, czasRealizacjiGHP);

}

// mysle ze o to chodzi w calkowitym zapotrzebowaniu ale nie wiem xD 
function fillCalkowiteZapotrzebowanie(naStanieID, czasRealizacjiID, wielkoscPartiiID, BOMpart, MRProwClassName, produkcja_arr, czasRealizacjiGHP) {

    naStanie = document.getElementById(naStanieID).value;
    czasRealizacji = document.getElementById(czasRealizacjiID).value;
    wielkoscPartii = document.getElementById(wielkoscPartiiID).value;
    var zapotrzebowanie = [];
    for (var i = 0; i < produkcja_arr.length; i++) {
        zapotrzebowanie[i] = produkcja_arr[i] * BOM[BOMpart];
    }
    rowCalkowitegoZapotrzebowania = document.querySelectorAll(MRProwClassName);

    for (var i = 0; i < rowCalkowitegoZapotrzebowania.length; i++) {
        if (zapotrzebowanie[i] != 0) {
            if (i < czasRealizacjiGHP) { alert('brak funkcjonalności, przypadek wystartowania produkcji przed rozpoczeciem wszystkiego') }
            rowCalkowitegoZapotrzebowania[i].innerHTML = 0;
            rowCalkowitegoZapotrzebowania[i - czasRealizacjiGHP].innerHTML = zapotrzebowanie[i];

        }
        else {
            rowCalkowitegoZapotrzebowania[i].innerHTML = zapotrzebowanie[i];

        }
    }
}

function fillGHPtable() {
    var przewidywany_popytGHPinputs = document.querySelectorAll('.popytInput');
    var GHPtablePopyt = document.querySelectorAll('.przewidywanyPopyt');
    var produkcjaGHPinputs = document.querySelectorAll('.produkcjaInput');
    var GHPtableProdukcja = document.querySelectorAll('.produkcja');

    for (var i = 0; i < przewidywany_popytGHPinputs.length; i++) {
        GHPtablePopyt[i].innerHTML = przewidywany_popytGHPinputs[i].value;
        GHPtableProdukcja[i].innerHTML = produkcjaGHPinputs[i].value;

    }
    let naStanieInputVal = document.getElementById('naStanieGHPinput').value;
    var naStanie = document.getElementById('naStanieGHPinput').value;
    console.log(naStanie);
    // naStanie.innerHTML = naStanieInputVal;
    // let czasRealizacjiInputVal = document.getElementById('czasRealizacjiGHPinput').value;
    // var czasRealizacji = document.getElementById('czasRealizacjiGHP');
    // naStanie.innerHTML = naStanieInputVal;
    // czasRealizacji.innerHTML = czasRealizacjiInputVal;

    //Dostepne

    var dostepneRow = document.querySelectorAll('.dostepne');
    for (var i = 0; i < dostepneRow.length; i++) {
        if (i == 0) {
            var counter = 0
            dostepneRow[i].innerHTML = parseInt(naStanie) - parseInt(GHPtablePopyt[i].innerHTML) + parseInt(GHPtableProdukcja[i].innerHTML);
        } else {

            dostepneRow[i].innerHTML = parseInt(dostepneRow[i - 1].innerHTML) - parseInt(GHPtablePopyt[i].innerHTML) + parseInt(GHPtableProdukcja[i].innerHTML);
        }
    }

}