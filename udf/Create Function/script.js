function getint(id){
    return parseInt(document.getElementById(id).value);
}
function display(a,b,c){
    return  a+b+c;
}
function sum(){
    let n1 = getint("num1"), 
        n2 = getint("num2"), 
        n3 = getint("num3");

    document.getElementById("res").innerHTML = display(n1,n2,n3);
}