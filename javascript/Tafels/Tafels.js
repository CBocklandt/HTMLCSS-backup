function toonTafel() {
    var getal = document.getElementById('tafel').value;
    var tekst = '';
    var res = 0;
    for (x = 1; x <= 10; x++) {
        res = getal * x;
        tekst = tekst + x + 'x' + getal + '=' + res + '<br>';
    }


    document.getElementById('tafelvan').innerHTML = tekst;
}
