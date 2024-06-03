function getint(id){
    return parseInt(document.getElementById(id).value);
}
function squaresum(number){
    return number * number;
}
function square(){
    let i = getint("num");
    let msg =squaresum(i);
    document.getElementById("res").innerHTML = msg;
}