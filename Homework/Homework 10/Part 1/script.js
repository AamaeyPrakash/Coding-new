function AccessControl(){
    var num= parseInt(document.getElementById("num").value);
    if (num>0) {
        console.log("Number is Positive");
    }
    else if (num < 0) {
        console.log("Number is Negative");
    }
    else {
        console.log("Number is Zero");
    }
}