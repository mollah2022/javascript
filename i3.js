const takeOrder = (customer,callback) => {

    console.log(`Take Order for ${customer}`);
    callback(customer);

}

const processOrder = (customer,callback) => {
    
    console.log(`Processing Order for ${customer}`);

    setTimeout( () => {

        console.log(`Cooking Done`);
        console.log(`Order Process for ${customer}`);
        callback(customer);

    },3000);
}

const completeOrder = (customer) => {

    console.log(`Order Process for ${customer}`);

}

takeOrder(`Customer 1`, (customer) => {

    processOrder(customer, (customer) => {

        completeOrder(customer);

    });

});