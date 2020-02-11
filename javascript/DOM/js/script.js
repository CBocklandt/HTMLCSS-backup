document.getElementById('titel').innerHTML = 'Hallo het is vrijdag';
document.getElementById('tekst').innerHTML = 'Wat een mooie blauwe lucht vandaag!';
document.getElementById('foto').src = 'img/oog.jpg';
document.getElementById('foto').alt = 'mooie blauwe lucht';

document.querySelector('.foot').innerHTML = 'test';


function showdate() {
var vandaag = new Date()
  //  alert(vandaag);
  //  setTimeout('showdate()',5000);

}

//je hebt op ptag geklikt

document.getElementById('click').addEventListener('dblclick', function () {
    if (document.getElementById('click').innerHTML ==
    'klikken!!!'){
        document.getElementById('click').innerHTML = 'Je hebt geklikt!';
    }else{
        document.getElementById('click').innerHTML = 'klikken!!!';
    }


});


