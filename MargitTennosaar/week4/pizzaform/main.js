

function priceCalc() {
    const size = document.getElementById('#size')
    const calculator = document.getElementById('#calculator')
    let buttonsChecked = 0;
    let small = 7.50;
    let medium = 10.50;
    let large = 12.50;
    let XL = 15.50;
    let pizzaPrice = 0;
    //pizza size and price values added to variables
    //if radiobutton is checked the pizzaPrice will take that value.
    //find size values inside table. see if it's checked
    if (document.getElementById('#serving2').checked) {
        pizzaPrice += small;
        console.log(pizzaPrice);
    }
    else if (document.getElementById('#serving4').checked = true) {
        pizzaPrice = medium;
        console.log(pizzaPrice);
    }
    else if (document.getElementById('#serving6').checked = true) {
        pizzaPrice = large;
        console.log(pizzaPrice);
    }
    else if (document.getElementById('#serving8').checked = true) {
        pizzaPrice = XL;
        console.log(pizzaPrice);
    }
    console.log(pizzaPrice);
    //if topping value > 4... maximum number of toppings is 12
    //getting all inputs from html with inputTotal
    function toppingsChecked() {
    pizzaPrice = pizzaPrice + (buttonsChecked - 4) * extraTopping;
}
    let inputTotal = 0;
    
    //buttonsChecked will take only the ammount of toppings or checkboxes checked
    //for while statement takes every input from html and gets the number of checkboxes checked
    inputTotal = document.getElementsByTagName(input).value
    for (let everyInput = 0; everyInput < inputTotal; everyInput++) {
        if (inputTotal[everyInput].type === "checkbox" && inputTotal[everyInput].checked) {
    buttonsChecked++;
}
/* if (buttonsChecked > 4) {
        let extraTopping = 0.5;
        function toppingsChecked()


} */


    
}
    /*if homeDelivery -> pizzaPrice =pizzaPrice + 5; */
}
/* if (serving2.value = "checked") {
    pizzaPrice = small;
} else if (servi=4) {
    pizzaPrice = medium;
} else if (id=6) {
    pizzaPrice = large;
} else if (id=8) {
    pizzaPrice = XL;
} */
