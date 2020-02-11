alert('Welkom op onze site, bedankt voor uw bezoek');


var naam = prompt('Vul hier uw naam in:');
document.write('Uw naam is: ' + naam);

var getal = parseInt(prompt('Voer een getal in:'));
var getal2 = parseInt(prompt('Voer nog een getal in:'));
var som = getal+ getal2;
document.write('<br>' + 'De som van uw gekozen getallen is: ' + som +'<br>');
if (getal>getal2){
    document.write('getal 1 is het grootste getal' + '<br>');
}else if (getal<getal2){
    document.write('Getal 2 is het grootste getal'+ '<br>');
}else{
    document.write('beide getallen zijn even groot' + '<br>');
}
var n = naam.length;
switch (true){
    case  (n < 4):
        document.write('Uw naam is veel te kort');
        break;
    case (n < 10):
    document.write('Uw naam heeft een normale lengte');
    break;
    case (n<25):
    document.write('U heeft wel een lange naam');
    break;
    case (n>25):
        document.write('Uw naam is veel te lang');
        break;
}
