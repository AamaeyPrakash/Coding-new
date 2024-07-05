function displayData(data){
  let table = document.getElementById('tble');
  for(let i = 0; i < data.length; i++){
    const row = table.insertRow();
    row.insertCell().textContent =data[i]["name"];
    row.insertCell().textContent =data[i]["state-province"];
 
    let webdomain = data[i]["web_pages"];
    let webDomainCell = row.insertCell();
    for(let j = 0; j < webdomain.length; j++){
      if(j>0){
      webDomainCell.appendChild(document.createElement("br"));

      }
      let link = document.createElement("a");
      link.href = webdomain[j];
      link.textContent = webdomain[j];
      webDomainCell.appendChild(link);

    }
  }
}

function displayData2(data){
  let table = document.getElementById('tble');
  for(let i = 0; i < data.length; i++){
    var stateProvince = document.getElementById("state").value;
    if(data[i]["state-province"] == stateProvince) {

    const row = table.insertRow();
    row.insertCell().textContent =data[i]["name"];
    row.insertCell().textContent =data[i]["state-province"];
 
    let webdomain = data[i]["web_pages"];
    let webDomainCell = row.insertCell();
    for(let j = 0; j < webdomain.length; j++){
      if(j>0){
      webDomainCell.appendChild(document.createElement("br"));

      }
      let link = document.createElement("a");
      link.href = webdomain[j];
      link.textContent = webdomain[j];
      webDomainCell.appendChild(link);

    }
  }
}}
function getData(){
  var country = document.getElementById("country").value;
  url = "http://universities.hipolabs.com/search?country="+country;
  fetch(url)
  .then(response => {
    if(!response.ok){
      console.log("Error fetching activity");
    }
    else {
      return response.json();
    }
  }).then(data => {
    console.log(data);
    displayData(data);

  })
}
function getData2(){
  var country = document.getElementById("country").value;
  url = "http://universities.hipolabs.com/search?country="+country;
  fetch(url)
  .then(response => {
    if(!response.ok){
      console.log("Error fetching activity");
    }
    else {
      return response.json();
    }
  }).then(data => {
    console.log(data);
    displayData2(data);

  })
}