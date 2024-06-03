function getint(id){
    return parseInt(document.getElementById(id).value);
}
function getname(id){
    return document.getElementById(id).value
}
function nameage(){
    let name = getname("name");
    let number = getint("num");
    document.getElementById("res").innerHTML = name + "<br>" + number;
}