function bestelAuto(merk,klasse,kleur) {
    if (typeof arguments[0] ==='undefined'){
        //gebruik default waarde
        merk= 'Audi';
    }
    if (typeof arguments[1] ==='undefined'){
        //gebruik default waarde
        klasse= 'Klasse C';
    }
    if (typeof arguments[2] ==='undefined'){
        //gebruik default waarde
        kleur= 'Rood';
    }
    document.write('<br>Bestelde: een ' + merk+ ' ' + klasse + ' in ' + kleur)

}