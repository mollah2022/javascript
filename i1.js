function myFunction(){
    console.log("Hello Crcket");
}
myFunction();

function addition(number1,number2){
    return number1 + number2;
}
let value = addition(5,10);
console.log((value));

function Calculater(number1,number2,operator){
    switch(operator){
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;       
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        default:
            return "Invalid operator";
    }
}

let result = Calculater(10, 5, '+');
console.log(result);
let result2 = Calculater(10, 5, '-');
console.log(result2);
