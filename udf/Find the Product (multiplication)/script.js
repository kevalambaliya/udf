function getint(id){
    return parseInt(document.getElementById(id).value);
}

function sum(n1,n2,n3,n4,n5){
    return n1+n2+n3+n4+n5;
}

function product(){
    let num1 = getint("num1");
    let num2 = getint("num2");
    let num3 = getint("num3");
    let num4 = getint("num4");
    let num5 = getint("num5");
    let msg =  sum(num1,num2,num3,num4,num5);
    
    document.getElementById("res").innerHTML = msg;
}