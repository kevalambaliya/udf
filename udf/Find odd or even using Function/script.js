function getint(id){
    return parseInt(document.getElementById(id).value)
}
function display(msg){
    return  msg % 2 == 0 ? "it's an even number" 
                         : "it's an odd number";
}
function oddoreven(){
    let val = getint("num");
    document.getElementById("res").innerHTML = display(val);
}