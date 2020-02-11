function euro_dollarkoers(){
    return (1.36);
}
function dollar_eurokoers(){
    return (0.74);
}
function euro_rublekoers(){
    return (48.40)
}
function ruble_eurokoers(){
    return (0.02)
}
function dollar_naar_euro(inputdollars) {
    return ( inputdollars * dollar_eurokoers())
}
function euro_naar_dollar(inputeuros){
    return ( inputeuros * euro_dollarkoers())
}
function ruble_naar_euro(inputrubles){
    return( inputruble * ruble_eurokoers())
}
function euro_naar_ruble(inputeuros) {
    return( inputeuros * euro_rublekoers())
}
function wissel(bedrag, valuta) {
    if (valuta =='euro_dollar'){
        return (bedrag * euro_dollarkoers());
    } else if (valuta == 'dollar_euro') {
        return (bedrag * dollar_eurokoers());
    } else if (valuta =='euro_ruble') {
        return (bedrag * euro_rublekoers());
    } else if (valuta == 'ruble_euro') {
        return (bedrag * ruble_eurokoers())
    }
}