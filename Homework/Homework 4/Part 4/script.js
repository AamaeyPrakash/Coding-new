function AccessControl(){
    var num1= parseInt(document.getElementById("num1").value);
    var num2= parseInt(document.getElementById("num2").value);
    var num3= parseInt(document.getElementById("num3").value);

    if(num1>num2 && num1>num3){
        document.write(num1);
    }
    else if(num2>num1 && num2>num3){
        document.write(num2);
    }
    else{
        document.write(num3);
    }
}