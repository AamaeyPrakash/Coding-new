 

function displayImage(image){
    let table = document.getElementById('tble');
    const row = table.insertRow();
    row.insertCell().textContent =image["message"]; 
    let imglink = image["message"];
    let imgCell = row.insertCell();
    let img = document.createElement("img");
    imgCell.appendChild(img);
    img.src = imglink;
}

  

function getImage(){
    url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
    .then(response => {
    if(!response.ok){
        console.log("Error fetching activity");
    }
    else {
        return response.json();
    }
    }).then(image => {
    console.log(image);
    displayImage(image);

    })
}