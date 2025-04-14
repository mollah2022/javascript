const Plus = document.getElementById("plus");
const Minus = document.getElementById("minus");
const Value = document.getElementById("value");

let value = 0;


function Increase(){
    value++;
    if( value >= 11 ){
        value = 10;
        Plus.style.cursor ="alias";
        Value.innerText = value;
    }
    else{
        Value.innerText = value;
    }
}
function Decrease(){
    value--;
    if( value < 0 ){
        value = 0;
        Minus.style.cursor ="alias";
        Value.innerText = value;
    }
    else {
        Value.innerText = value;
    }
}