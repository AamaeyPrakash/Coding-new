function digit(x){
    document.getElementById('txt').value += x;
  }
  function answer(){
    var expression = document.getElementById('txt').value;
    document.getElementById('txt').value = eval(expression);
  }

  function clearInput(){
    document.getElementById('txt').value = "";
  }
  function eraseNum(){
    var expression = document.getElementById('txt').value;
    document.getElementById('txt').value = expression.substring(0, expression.length - 1);
  }