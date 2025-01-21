// let random = function(){
//     console.log("Hello Bangladesh");
// }
// random();

// let is_Value = () => {
//     console.log("Hello Austrolia")
// }

// is_Value();

// const myObject = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   console.log(myObject.fullName());

// const myObject = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this;
//     }
//   }
  
// console.log(  myObject.fullName());

const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  person.fullName.apply(person1, ["Oslo", "Norway"]);

  console.log(person.fullName());