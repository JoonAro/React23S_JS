// let whoIsThis = prompt("What is your name?");
// if (whoIsThis === "Joona") {
//     alert("It's you");
// } else {
//     alert("Get out!");
// }
// let season = prompt('What is your favourite season?').toLowerCase()
// console.log(season);
// switch (season) {
//     case 'spring':
//         console.log("It's nice to see nature coming alive")
//          break;
//     case 'summer':
//         console.log("Vacation time!") 
//         break;
//     case 'fall':
//         console.log("I like it too") 
//         break;
//      case 'winter':
//         console.log("It's too dark!")
//          break;
//          default:
//             console.log("Try again!")
    
// }


// let howRu = prompt("How is it going?");

// switch (howRu) {
//     case 'fine': alert("good to hear")
//     break;
//     case 'ok': alert("not bad") 
//     break;
//     case 'bad': alert("how sad")
//     break;
//     case 'good': alert("nice")
//     break;
//     default: alert("that is something")
// }
// //let feelBad = "How Can i help?"



// let weaTher = parseInt(prompt("How warm is it outside"));

// if (weaTher >= 15) {
//     alert("nice");
// } else {
//     alert("You should really wear a jacket!");
// }

let oNe = parseInt(prompt("Enter number"));
let tWo = parseInt(prompt("Enter another number"));
let tHree = parseInt(prompt("Enter a third number"));
/*Ask three numbers from user
Print out the sum of the numbers if any number is positive.
If all the numbers are positive also print out multiplication.
If all numbers are negative the text “only negatives” is printed.
Zero is positive in this assignment. 

First i made three variables to hold the user input*/



function aDdition(x, y, z) {
    return x + y + z
}
function multiply(x, y, z) {
    return x * y * z
}
function disPlay(x, y, z) {
    console.log("Numbers used " + x + " " + y + " " + z + ".")
}
//Then i made the functions needed
let addRes = aDdition(oNe, tWo, tHree);
let multRes = multiply(oNe, tWo, tHree)
let display = disPlay(oNe, tWo, tHree)
//Here is two more variables to hold the results of the functions
if (oNe >=0 && tWo >=0 && tHree >=0) {
    console.log("Addition= " , addRes , "." , "Multiplication= " , multRes , ".");
    //This will run if there are positive values only
} else if (oNe < 0 && tWo < 0 && tHree <0) {
    console.log("Only negatives");
    //This will run if all numbers are negative
} else if (oNe < 0 || tWo < 0 || tHree < 0) {
    console.log(`Addition = ${addRes}`)
    console.log(display)
    //This will run if one or two values are negative.
}else {
    console.log("Try again.")
}

// `text ${variable} comment what is under here if it doesnt work
// const randomNumbers = () => {

//     const num1 = Number(prompt('please give a number'));
//     const num2 = Number(prompt('please give another number'));
//     const num3 = Number(prompt('please give one more number'));
// //Number 
// const mult = num1 * num2 * num3;
 /* const sum = num1 + num2 + num3; */
 //option shift a

// let inputNum = prompt("Enter a number");

// function diVideRemainer(x) {
//     return x % 2
// }
// let divRemainer = diVideRemainer(inputNum)
// //is it positive , is it divisible by 2 
// //Message number is even or message number is odd.
// //divide it with % 2 to get what gets left and if you get
// //0 it's divisible and if you get 1 it's not
// if (inputNum < 0) {
//     console.log("Enter a positive number")
// } else if (divRemainer === 1) {
//     console.log(`Number `, inputNum, ` is odd.`)
// } else {
//     console.log(`Number `, inputNum, `is even.`)
// }

/*generate random number 1-10 and store that in randomNumber
*/


