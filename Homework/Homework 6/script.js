fetch('http://universities.hipolabs.com/search?country=India', {
  method: 'GET',
  headers: {
    'Accept': 'applications/json'
  }
})
  .then(response => response.json())
  .then(response => console.log(JSON.stringify(response)))

function getData(){
  var name = document.getElementById("txt").value;
}