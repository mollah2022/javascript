let x = 10;
let y = 20;

let sum = (x + y);
console.log(sum);

let array = [1,2,3,4,5,6,7,8,9,10];

for( let i = 0; i < array.length; i++){
    console.log(array[i]);
}

array.forEach((el) => {
    console.log(el);
})
;

array.map( item => {
    console.log(item);
})
