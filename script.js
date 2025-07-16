function myDisplay(value) {
     document.getElementById("pera").innerHTML = "The sum is: " + value;
}

function Myfunction(num1 = 0,num2 = 0){
    let sum = num1 + num2 ;
    myDisplay(sum);
}

Myfunction(10,20);
