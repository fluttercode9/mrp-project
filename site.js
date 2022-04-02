// To nie jest BOM, ale ok
var BOM = {
    'przednie nogi': 2,
    'siedzenie'    : 1,
    'tylne nogi'   : 2,
    'oparcie'      : 1
}

function fillTable() {
    czasRealizacjiGHP = document.getElementById('czasRealizacjiGHPinput').value;
    przewidywany_popyt = document.getElementsByClassName('popytInput');
    produkcja = document.getElementsByClassName('produkcjaInput');
    dostepne = document.getElementsByClassName('dostepneInput');
    for (var popyt_arr = [], i = przewidywany_popyt.length; i;) popyt_arr[--i] = przewidywany_popyt[i].value;
    for (var produkcja_arr = [], i = produkcja.length; i;) produkcja_arr[--i] = produkcja[i].value;
    for (var dostepne_arr = [], i = dostepne.length; i;) dostepne_arr[--i] = dostepne[i].value;
    naStanieGHP = document.getElementById('naStanieGHPinput').value;

    fillGHPtable();
    fillCalkowiteZapotrzebowanie('naStaniePN', 'czasRealizacjiPN',        'wielkoscPartiiPN',        'przednie nogi', '.calkowiteZapotrzebowaniePN', produkcja_arr, czasRealizacjiGHP);
    fillCalkowiteZapotrzebowanie('naStaniePN', 'czasRealizacjiSiedzenie', 'wielkoscPartiiSiedzenie', 'siedzenie',     '.calkowiteZapotrzebowanieSiedzenie', produkcja_arr, czasRealizacjiGHP);
    fillCalkowiteZapotrzebowanie('naStaniePN', 'czasRealizacjiTN',        'wielkoscPartiiTN',        'tylne nogi',     '.calkowiteZapotrzebowanieTylneNogi', produkcja_arr, czasRealizacjiGHP);
    fillCalkowiteZapotrzebowanie('naStaniePN', 'czasRealizacjiOparcie',   'wielkoscPartiiOparcie',   'oparcie',     '.calkowiteZapotrzebowanieOparcie', produkcja_arr, czasRealizacjiGHP);
    fillNaStanie(
        'naStaniePN', 
        'wielkoscPartiiPN',
        '.calkowiteZapotrzebowaniePN',
        '.planowanePrzyjeciaPN' ,
        '.przewidywaneNaStaniePN', 
        '.zapotrzebowanieNettoPN',
        '.planowaneZamówieniaPN',
        '.planowanePrzyjecieZamowienPN',
        'czasRealizacjiPN')
}

// mysle ze o to chodzi w calkowitym zapotrzebowaniu ale nie wiem xD 
function fillCalkowiteZapotrzebowanie(naStanieID, czasRealizacjiID, wielkoscPartiiID, BOMpart, MRProwClassName, produkcja_arr, czasRealizacjiGHP) {

    naStanie       = document.getElementById(naStanieID).value;
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

function fillNaStanie(
    naStanieID,
    wielkoscPartiiID,
    MRProwClassName, 
    planowanePrzyjecieClassName,
    przewidywaneNaStanieClassName, 
    ZapotrzebowanieNettoClassName,
    PlanowanieZamowieniaClassName,
    PlanowanePrzyjecieZamowienClassName,
    czasRealizacjiID
) {
    naStanie                      = document.getElementById(naStanieID);
    czasRealizacji = document.getElementById(czasRealizacjiID).value;
    wielkoscPartii = document.getElementById(wielkoscPartiiID).value;

    rowCalkowitegoZapotrzebowania = document.querySelectorAll(MRProwClassName);
    rowPlanowanePrzyjecie         = document.querySelectorAll(planowanePrzyjecieClassName);
    rowPrzewidywaneNaStanie       = document.querySelectorAll(przewidywaneNaStanieClassName);
    rowZapotrzebowanieNetto       = document.querySelectorAll(ZapotrzebowanieNettoClassName);
    rowPlanowanieZamowienia       = document.querySelectorAll(PlanowanieZamowieniaClassName);
    rowPlanowanePrzyjecieZamowien = document.querySelectorAll(PlanowanePrzyjecieZamowienClassName);
    
    first_run = 0
    for (var i = 0; i < rowPrzewidywaneNaStanie.length; i++) {
        //Pierwszy tydzien
        if (first_run == 0) {
            rowPlanowanePrzyjecie[i].innerHTML = 0;
            rowPrzewidywaneNaStanie[i].innerHTML = naStanie.value;
            //Zapotrzebowanie netto                 
            if (Number(rowPrzewidywaneNaStanie[i].innerHTML) < Number(rowCalkowitegoZapotrzebowania[i].innerHTML)) {
                rowZapotrzebowanieNetto[i].innerHTML = Math.abs(rowCalkowitegoZapotrzebowania[i].innerHTML - rowPrzewidywaneNaStanie[i].innerHTML);
            } else (
                rowZapotrzebowanieNetto[i].innerHTML = 0
            )
            
            first_run = 1;
            continue
        } //Nastpene tygodnie
        else {
            rowPlanowanePrzyjecie[i].innerHTML = 0;
            //Sprawdzić:            
            rowPrzewidywaneNaStanie[i].innerHTML = rowPrzewidywaneNaStanie[i-1].innerHTML - rowCalkowitegoZapotrzebowania[i-1].innerHTML //+ rowPlanowanePrzyjecie[i].innerHTML + rowZapotrzebowanieNetto[i-1].innerHTML;
            console.log(`iteracja: ${i}`)
            console.log(`current_stan: ${rowPrzewidywaneNaStanie[i].innerHTML}`)
        }
        if (rowPrzewidywaneNaStanie[i].innerHTML < 0) {
            if (i >= czasRealizacji) {
                ilosc_potrzebnych_partii = Math.ceil((rowPrzewidywaneNaStanie[i].innerHTML * -1)/wielkoscPartii);
                console.log(`ilosc partii: ${ilosc_potrzebnych_partii}`);
                rowPlanowanieZamowienia[i-1].innerHTML     = ilosc_potrzebnych_partii * wielkoscPartii;
                rowPlanowanePrzyjecieZamowien[i].innerHTML = ilosc_potrzebnych_partii * wielkoscPartii;
                // console.log(rowPlanowanePrzyjecieZamowien[i].innerHTML);
                //rowPrzewidywaneNaStanie[i].innerHTML = rowPlanowanePrzyjecieZamowien[i-1].innerHTML;
            }

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


// Uzupełnianie pól 'jedynkami'
function fillExampleData() {
    let all_inputs = document.querySelectorAll('input[type=number]');
    all_inputs.forEach(function(input) {
        if (!input.matches('#GHPtable > tbody > tr:nth-child(3) > td:nth-child(3) > input')){
            input.value = 1;
        }
        
    })
}

window.onload = fillExampleData()