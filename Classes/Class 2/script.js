function addition() {
    var n1= document.getElementById("num1").value;
    var n2= document.getElementById("num2").value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    var heading= document.getElementById("heading");
    heading.innerHTML=n1 + n2;
}