function person (){
      this.firstName = "Sajib";
      this.lastName = "Ahmed";
      this.Age = 25;
      this.nationality = "Bangladeshi";

      this.display = () => {
          console.log("Hello");
      }
}

let ob1 = new person();
console.log(ob1);