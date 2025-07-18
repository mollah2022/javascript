function Dataup (){
    fetch("random.txt")
    .then( res => res.text())
    .then( data => {
        document.getElementById("demo").innerHTML = data;
    })
}