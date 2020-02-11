var getal = parseFloat(prompt('Geef een getal in:'));
//absolute waarde
var abs = Math.abs(getal);
document.write('De absolute waarde ' + getal + 'abs' + abs);

//afronden naar boven
var boven = Math.ceil(getal);
document.write('<br>De afronding naar boven van het getal: ' + getal + ' is ' + boven);

//afronden naar beneden
var beneden = Math.floor(getal);
document.write('<br>De afronding naar beneden van het getal: ' + getal + ' is ' + beneden);

//afronden
var afronden = Math.round(getal);
document.write('<br>De afronding van het getal is: ' + getal + ' is ' + afronden);

//tofixed
var tofixed = getal.toFixed(2);
document.write('<br>De afronding van het getal ' + getal + ' is ' + tofixed);

//hoogste getal
var max = Math.max(9,5,8,6,3,7,4);
document.write('<br>Het hoogste getal is ' + max );

//laagste getal
var min = Math.min(getal, 8,6,9,5,2,7);
document.write('<br>Heta laagste getal van de rij is ' + min);

//willekeurig(= kiest zelf een getal)
var wil = Math.random();
document.write('<br>' + wil);

//random tussen 0 en 20
var getal2 = parseInt(wil*20);
document.write('<br>' + getal2);

//random getal tussen 0 en 100
var getal3 = wil*100;
var getal3 = getal3.toFixed(0);
document.write('<br>' + getal3);