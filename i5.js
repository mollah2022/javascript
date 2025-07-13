try{
    let num = 10;
    let num1 = 30;
    let sum = (num+num1).toUpperCase();
    console.log(sum);
} catch(e){
    console.log("Error : " + e.message);
}

function divided(num1 = 0,num2 = 0){
    if( num2 === 0){
        throw new Error("Division by zero is not allowed.");
    }
}
try{
    let result = divided(10,0);
    console.log(result);
}catch(e){
    console.log("Error : " + e.message);
}

try {
  let x = 10;
  let y = x.toLowerCase(); 
  console.log(y);
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("This part always runs.");
}
