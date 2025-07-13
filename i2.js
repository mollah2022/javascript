let value = function (num1 = 0, num2 = 0, operation = '+') {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return num1 / num2;
        default:
            throw new Error("Invalid operation. Supported operations: +, -, *, /");
    }

}

 let x = value(10, 5, '+'); // 15
 let y = value(10, 5, '-'); // 5     
 let z = value(10, 5, '*'); // 50
 let w =  value(10, 5, '/'); // 2

console.log(x," ", y, " ", z, " ", w); // Outputs: 15 5 50 2