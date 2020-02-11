function dollarkoers() {
    return (1.36);

}
function eurokoers() {
    return (0.74);

}
function dollar_naar_euro(inputdollars) {
    return (inputdollars*eurokoers());

}
function euro_naar_dollar(inputeuro) {
    return (inputeuro*dollarkoers());

}
function wissel(bedrag, valuta) {
    if (valuta=="euro"){
        return (bedrag*dollarkoers());
    }
    else if (valuta=="dollar"){
        return (bedrag*eurokoers());
    }

}