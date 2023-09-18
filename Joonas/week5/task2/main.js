class pizza {
    constructor(name, topping, price, size, priceCalc) {
    this.name = name;
    this.topping = topping;
    this.price = price;
    this.size = size;
    //const priceCalc 
    }
}
//joonas
class Pizza {
    name;
    toppings = [];
    basePrice = 0; //in cents(don't use floating point numbers. When you want to display it on a page then divide by /100
    size = 2;

    getPrice() {
    
    }
}
const americano = new pizza();
americano.name = "Americano";