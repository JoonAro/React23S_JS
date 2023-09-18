const form = document.querySelector('form');
// all inputs
const customer = document.querySelector('#name').value;
const size = document.querySelectorAll('[name="size"]');
const toppings = document.querySelectorAll('input[type="checkbox"]');
const delivery = document.querySelector('#delivery')
const order_price = document.querySelector('price')

const pizzaOrder = () => {
    let customerName = customer.value;
    let sizeResult = '';
    let toppingsResult = [];
    let price = 0;
    let deliveryResult = delivery.options[delivery.selectedIndex].value;
    //          delivery element    How to get object value from select
    //toppingsResult will be an array
    console.log('customer', customerName);
    console.log('size', size);
    console.log('toppings', toppings);
    console.log('dellivery'), delivery;

    size.forEach(item => {
        if(item.checked) {
            sizeResult = item.value; //item.id etc
        }
    })
//Get the prices from javascript rather than html
    switch (sizeResult) {
        case 'size2':
            price += 7.5;
            break;
        case 'size4':
            price += 10.5;
            break;
        case 'size6':
            price += 12.5;
            break;
        case 'size8':
            price += 15.5;
            break;
    }
    
    toppings.forEach(item => {
        if(item.checked) {
            toppingsResult.push(item.value);
        }
    })
    if(toppingsResult.length > 4) {
        price += (toppingsResult.length - 4 * 0.5)
    }
    
    if(deliveryResult === "home") {
        price += 5
    }
    order_price.textContent = price;
}







form.addEventListener('change', pizzaOrder);