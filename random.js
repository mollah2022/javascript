const model = {
    brand:"Iphone",
    colour:"Black",
    camera:"50MP 30MP 20MP",
    ram:"16GB",
    price:125000,

    display: function(){
        return (`hello ${this.brand} hello ${this.colour}`);
    }
}

console.log(model.display());