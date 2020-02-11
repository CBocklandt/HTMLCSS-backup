var istjust = confirm('Wilt u de titel veranderen');
if (istjust){
    document.getElementById('eerste').innerHTML = 'We proberen de titel te veranderen';
}else {
    document.getElementById('eerste').innerHTML = 'Eerste subtitel';
}

var length = document.getElementsByClassName('paragraaf').length;
for (x=0;x<length;x++){
    document.getElementsByClassName('paragraaf').item(x).innerHTML = 'Test' + x ;
}
document.querySelector('h1').innerHTML = 'Nieuwe titel';

var element = document.querySelector('body');
element.classList.add('rood');

var element2 = document.querySelector('footer');
element2.classList.add('paars');

function kleur(){
    var element3 = document.querySelector('header');
    element3.classList.toggle('paars');
}
function toonNaam() {{
    var vnaam = document.getElementById('Voornaam').value;
    var fnaam = document.getElementById('Familienaam').value;
    document.getElementById('naam').innerHTML = vnaam + '<br>' + fnaam;
}

}

