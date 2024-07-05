function displayData(data){
    for(let i = 0; i < data["country"].length; i++){
      data["country"][i]
    //   let webpages = data[i]["web_pages"];
    //   for(let j = 0; j < webpages.length; j++){
    //     console.log(webpages[j]);
    //   }
    // }
    console.log(data)
    console.log(data["country"][i])
  }
}
  
  function getData(){
    var name = document.getElementById("name").value;
    url = "https://api.nationalize.io/?name="+name;
    fetch(url)
    .then(response => {
      if(!response.ok){
        console.log("Error fetching activity");
      }
      else {
        return response.json();
      }
    }).then(data => {
      // console.log(data);
      displayData(data);
  
    })
  }
  
  // getData()