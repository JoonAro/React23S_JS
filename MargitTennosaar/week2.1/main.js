let salary = parseInt(prompt('How much do you make per hour?'))
let hours = parseInt(prompt('How many hours did you work today?'))
//Asking user input for the wanted variables
function upToSeven(x, y) {
   return x * y;
 }
 //The above function works when the hours variable is under 8
  function upToNine(x, y) {
      return x * y + x * 0.5 * (y-7)
}
 //this one calculates pay when hours are 8 or 9
 //at first i calculate the pay without a raise and then 
 //add the raise.
 function upToInfinity(x, y) {
    // return 2 * x * (y-9)
    return x * y + x + x * 1 * (y-9)
 }
 //This does the same for hours 10 onward. notice that i add
 // x once to represent the pay from hours 8-9
 
let result1 = upToSeven(salary, hours);
let result2 = upToNine(salary, hours);
let result3 = upToInfinity(salary, hours);
//Declared three variables to store the results of the functions

    if (hours >=1 && hours <= 7){
        console.log(result1);
    } else if (hours >= 8 && hours <=9) {
        console.log(result2);
    } else if (hours > 9) {
        console.log(result3);
    } else {
        console.log("Problem with input. Try again with positive numbers only");
    }
//if else statement for all the possibilites i can think of 


