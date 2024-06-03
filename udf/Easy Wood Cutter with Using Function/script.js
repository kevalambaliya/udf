function getint(id){
    return parseInt(document.getElementById(id).value);
}
function easy(i,msg){
    if( i % 3 == 0){
        msg = "YES";
    }
    else{
        msg = "NO";
    }
    return i,msg;
}

function easywood(){
    let b = getint("num");
    let msg = easy(b);
    document.getElementById("res").innerHTML = msg;
}