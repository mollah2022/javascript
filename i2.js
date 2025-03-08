console.log(`Take Order for Customer 1`);

const processOrder = () => {
    console.log(`Processing Order for Customer 1`);

    setTimeout( () => {
        console.log(`Cooking Done`);
    },3000);

    console.log(`Order Process for Customer 1`);
}

processOrder();

console.log(`Order Complete for Customer 1`);