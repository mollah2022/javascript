const Myself = {
    firstName : 'Sajib',
    lastName: 'Hossain',
    email: 'sajibahmed12032022@gmail.com',
    phone: '01712345678',
    age: 25,
    address: {
        street: '123 Main St',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
}

console.log(Myself);
console.log(Myself.firstName);
console.log(Myself.address.city);

Myself.wifeName = 'fatema';
Myself.address.zipcode = 1216;
console.log(Myself);