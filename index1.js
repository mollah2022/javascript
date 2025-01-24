function CreateFunction(Name,Age){
      return {
          Name,
          Age,
          display(){
            console.log("Hello Bangladesh");
          },
      };
}

let person1 = CreateFunction("Sajib",22);
let person2 = CreateFunction("Shakib",32);
let person3 = CreateFunction("Tamim",36);

console.log(person1);
