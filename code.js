// let Car = {
//     Brand:"BMW",
//     Model:"B2030",
//     Colour:"Black",
//     Price:"10M$",

//    display: function(){
//         console.log("Hello Bangladesh")
//     }
// }
// console.log(Car.Model);
// Car.display();

// console.log(Car);


// function sumAll() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// x = sumAll(1, 123, 500, 115, 44, 88);

// console.log(x);


// function sumValue(...args){
//   for( arg of args){
//       console.log(arg);
//   }
// }
// sumValue(10,20,30,40);


function MaxValue(){
      max = -Infinity;
     for( let i = 0; i < arguments.length; i++ ){
            if( arguments[i] > max ){
                max = arguments[i];
            }
     }
     return max;
}

let findValue = MaxValue(10,2,3,4,5,6,7,8100);

console.log(findValue);