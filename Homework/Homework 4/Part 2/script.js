

for(let i=1; i<101; i++){
    if(i%2 == 0 || i%5 ==0){
        let h1 = document.createElement("h1");
        h1.innerHTML = i;
        document.body.appendChild(h1);
    }
}