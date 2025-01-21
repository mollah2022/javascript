let n = 10;
for( let i = 0; i < n; i++ ){
      console.log(i);
}

let x = 10;
let y = x++;
console.log(y)
console.log(x)

let z = ++x;

console.log(z);
console.log(x)

function add( n,  m){
    console.log("Hello Bangladesh");
    return n*m;
}

let result = add(10,20);
console.log(result)

let Car = {
    Brand : "BMW",
    Model : 2024,
    Colour : "Red",
    Price : "2M",
};

console.log(Car);
let store = Car.Brand;
console.log(store)

let output = Car["Model"];

console.log(output)


let Name = `This is sajib Ahmed.
My father Name is samsul haque
 and 
my mother name is howa begum`;
console.log(Name)
let text = "HELLO WORLD";
let char = text.charAt(0);

let text = "HELLO WORLD";
let char = text.charCodeAt(0);
console.log(char);

function add(a,b){
    return a+b;
}
function min(a,b){
    return a-b;
}
function mal(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

console.log(add(20,10));
console.log(min(20,10));
console.log(mal(20,10));
console.log(div(20,10));

let arrow = function(){
    console.log("Hello World");
}
arrow();

let arrow = function(num1,num2){
    return num1*num2;
}

console.log(arrow(20,10))

const sajib = ()=>{
    console.log("Hello Bangladesh");
}

sajib();

const result = (num1,num2)=>{
    return num1*num2;
}
console.log(result(20,5));