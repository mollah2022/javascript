function fetchData (){
    fetch("random.json")
    .then( res => res.json ())
    .then( data => {
        data.random.forEach( item => {
            let li = document.createElement("li");
            li.innerHTML = `${item.id} - ${item.name}`;
            let value = document.getElementById("list");
            value.appendChild(li);
        })
    })
}