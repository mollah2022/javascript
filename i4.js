const random = (num1 = 0,num2 = 0,operation = '+') => {
          switch (operation) {
            case '+':
                console.log(num1 + num2);
                break;
            case '-':
                console.log(num1 - num2);   
                break;
            case '*':
                console.log(num1 * num2);
                break;
            case '/':
                if (num2 === 0) {
                    throw new Error("Division by zero is not allowed.");
                }
                console.log(num1 / num2);
                break;
            default:
                throw new Error("Invalid operation. Supported operations: +, -, *, /"); 
          }
}
random(10, 5, '+'); // Outputs: 15
random(10, 5, '-'); // Outputs: 5   
random(10, 5, '*'); // Outputs: 50
random(10, 5, '/'); // Outputs: 2