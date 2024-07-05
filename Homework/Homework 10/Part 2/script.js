function quoteSelection() {
    var quote= document.getElementById("quote").value;
    var paragraph= document.getElementById("paragraph");
    paragraph.innerHTML=quote;
    console.log(quote);
}