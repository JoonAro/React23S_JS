const extraToppingPrice = 50;
const freeToppings = 4;
class pizza {
    constructor(name, topping, price, size) {
    this.name = name;
    this.topping = topping;
    this.price = price;
    this.size = size;
    }
    getPrice() {
        let extraToppings = this.toppings.length - freeToppings;
        if (extraToppings < 0) {
            extraToppings = 0;
        }
        return this.price + extraToppings;
    }

    }

//joonas
/* class Pizza2 {
    name;
    toppings = [];
    basePrice = 0; //in cents(don't use floating point numbers. When you want to display it on a page then divide by /100
    size = 2;

    getPrice() {
        
    }
    const americano = pizza
    americano.name = "Americano";
    americano.toppings = ["ham", "tomato", "cheese"]
} */
//price decimals
/* const americano = new pizza("Americano", ["ham", "tomato", "cheese"], 1250,); */

//task2
/* Write code which models an order to a pizza place as a class. The order has a customer name, delivery type, and there can be several pizzas in one order. Order can be updated by adding pizzas to it with a method of the order class. */

const deliveryPrice = 500;
class pizzaOrder {
    customerName = '';
    deliveryType = 'EAT_IN'; //other values TAKE_OUT, DELIVERY
    pizzas = [];

    addPizza() {
        this.pizzas.push(pizza);
    }

    getPrice() {
        let totalPrice = 0;
        
        for (let counter = 0; pizzas.length > 0; counter++)
        /* 1 check delivery type
        2 loop over the pizzas and their prices */

    if (this.deliveryType = "delivery") {
        return totalPrice + deliveryPrice;
    }

}
}