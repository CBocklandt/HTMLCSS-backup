function begroeten() {


    var vandaag = new Date();
    var uur = vandaag.getHours();

    if (uur <= 11) {
        alert("Goedemorgen!!!")

    } else if (uur <= 17) {
        alert("Goedemiddag!!!")
    } else {
        alert("Goedenavond")
    }
}