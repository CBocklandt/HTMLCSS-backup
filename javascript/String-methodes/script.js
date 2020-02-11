//indexOf (plaats waar het teken voorkomt in de string)
var naam= 'Christophe';
var x = naam.indexOf('e');
naam = naam.toLowerCase();
document.write(x + '<br>');

//substring ( deel van de string tonen)
var tekst = 'JavaScript';
var deeltekst = tekst.substring(4,10);
document.write('<br>Tekst: ' + ' <br> ' + deeltekst + ' <br> ');

var deel2 = tekst.substr(0,4);
document.write(deel2);

//trim (spaties voor en na in de string verwijderen)
var tekst2 = ' " het is bijna middag " ';
var voorbeeld = tekst2.trim();
document.write('<br>' + tekst2 + '<br>' + voorbeeld);


