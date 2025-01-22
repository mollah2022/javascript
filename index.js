let person = {
      FirstName : "Sajib",
      LastName : "Ahmed",
      Age : 25,
      Relagion : "Islam",
      Nationality : "Bangladeshi",
      Display: () => {
          console.log(`My full name is ${person.FirstName} ${person.LastName}`);
      }
}

console.log(person)
person.Display();

let Car = {
    Brand : "BMW",
    Model : "B-2025",
    Colour:"Black",
    Price:"$-10M",
    display: function (){
        return Car.Price;
    }
}

console.log(Car);
console.log(Car.display());


let Persion = new Object();

Persion.firstName = "Sajib";
Persion.lastName = "Ahmed";
Persion.age = 26;
Persion.relagion = "Islam";
Persion.nationality = "bangladeshi";

Persion.getValue = () => {
     console.log("I Love My Parents");
}

console.log(Persion);
Persion.getValue();
