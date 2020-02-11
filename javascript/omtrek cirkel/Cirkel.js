var straal = parseInt(prompt('wat is de straal van de cirkel?'));
 var pi = 3.14;
 var diameter = 2 * straal;
 function omtrek (a,b){
 return   a*b;
 }

document.write('De omtrek van de cirkel is: ' + omtrek(pi,diameter));