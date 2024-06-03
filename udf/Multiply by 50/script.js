function getint(id){
    return parseInt(document.getElementById(id).value);
}
function sum(num){
    return num * 50;
}
function multi(){
    let number = getint("num");
     let msg= sum(number);
     document.getElementById("res").innerHTML = msg;
}