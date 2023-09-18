/* Ask user input 1 number. Program will find out if it's
positive and if it's dividable by 2. If number is positive
message and if its negative message
if number is negative-> message enter positive number and enter 
new promp
make the program loop until the user gives zero as input. */

 /* let entNum;
do {
    entNum = parseInt(prompt("Please enter a positive number."));
    if (entNum < 0) {
        console.log("Please enter a positive number");
    }
    else if (entNum != 0) 
    if (entNum % 2 == 0) {
        console.log("Number " + entNum + " is even.")
    } else
    console.log("Number " + entNum + " is odd")
    }
 while (entNum != 0);  */

 /*  let num;
 for (let num; num !=0;)  <- two parameters given last one is empty ; after the
 semicolon. usually you add or substract something.
 num  */

/* let num = 0;
let num2 = 0;
 for (num = 2, num2 = 98 ; num < 100, num2 > 0 ; num += 2, num2 -= 2) {
    console.log(num);
    console.log(num2);
 } */
//Make a string where you add num and num2 in every loop 

 /*    for (num2 = 98 ; num2 > 0 ; num2 -= 2)
console.log(num, num2)  */


/* 3let distance;
let time;
let speed;
do {
    distance = prompt("How many kilometers do you have to travel?");
    if (distance != 0) {
    time = prompt("how many hours does it take?");
    speed = distance / time;
    console.log(speed);
    }
   } while (distance != 0); */


   /* let query = 0;

function 


do {
    let query = prompt("Enter a number?")



   } 4th assignment */
  /*  let query = 0;
   let usrInpt;
   let evenNumbers = 0;
for (query = 1 ; query <=20 ; query++) {
      usrInpt = prompt("Enter a number.");
    if (query % 2 == 0) {
        evenNumbers = evenNumbers + 1;
    }

}
console.log("You entered " + evenNumbers + " even numbers"); 

6 tehtävä*/

/* let query;
   let usrInpt;;
   let average = 0;
   let average2;
for (query = 1 ; query <=25 ; query++) {
      usrInpt = parseInt(prompt("Enter a number."));
      average = average + usrInpt;
    
}
average = average / 25;
console.log("Average of the entered numbers is " + average); */

/* 
5 tehtävä 
let query;
   let usrInpt;
   let average = 0;
for (query = 0; ; query++) {
      usrInpt = parseInt(prompt("Enter a number."));
      if (usrInpt == 0) {
          break;
        }
      average = average + usrInpt;
          
        
    }
    average = average / query;
    console.log("Average of the entered numbers is " + average); */

    /* tehtävä 7
     let query;
    let usrInpt;
    let usrInpt2;
    let average = 0;
    
    for (query = 1; ; query++) {
    usrInpt = parseInt(prompt("Enter a number."));
    average = average + usrInpt;
       usrInpt2 = prompt("Do you wish to enter another number? y / n");
      
       if (usrInpt2 === "n") {
        query = query--
           break;
         }
           
         
     }
     average = average / query;
     console.log("Average of the entered numbers is " + average); */

     // 8.  Make a program that asks first how many numbers user wants to give to
//     the program. After that program asks those numbers. In the end program
//     prints out the smallest number that user gave.
    
    /* let usrInpt;
    let average = Math.min();

    let query = parseInt(prompt("How many numbers do you want to enter?"));
    for (query ; query > 0 ; query--) {
    
       usrInpt = parseInt(prompt("Enter number."));
       if (usrInpt <= average) {
       average = usrInpt;
       }
 
     }
     
     console.log("Smallest of the entered numbers is " + average); */

     // 9.  Make a program that asks ten numbers and in the end prints out two
//     biggest numbers.

/* let usrInpt;
let eightTimes;
let twoTimes;
    let twoBig = Math.max();
    let oneBig = Math.max();
    let biggerOfTwo;
    let smallerOfTwo;
//First i want to get two values from the user and figure out wich one is bigger
    for (twoTimes = 2 ; twoTimes > 0 ; twoTimes--) {
        usrInpt = parseInt(prompt("Enter number."));
        if (oneBig > twoBig) {
            twoBig = usrInpt;
         } else {
            oneBig = usrInpt;
         }
    }
    if (oneBig > twoBig) {
        biggerOfTwo = oneBig;
        smallerOfTwo = twoBig;
    } else {
        biggerOfTwo = twoBig;
        smallerOfTwo = oneBig;
    }
//Now we need to compare the next 8 values with the first two ones
    for (eightTimes = 8 ; eightTimes > 0 ; eightTimes--) {
       usrInpt = parseInt(prompt("Enter number."));
       if(usrInpt > biggerOfTwo) {
        smallerOfTwo = biggerOfTwo;
        biggerOfTwo = usrInpt;
        continue;
        // in this case usrInpt being the largest value becomes biggerOfTwo and the
        old value goes to smallerOfTwo

       } else if (usrInpt > smallerOfTwo && usrInpt < biggerOfTwo) {
            smallerOfTwo = usrInpt;
       }
       // else if catches the usrInpt if its bigger than smallerOfTwo
       
    }
console.log("Largest numbers are " + biggerOfTwo + " and " + smallerOfTwo + "."); */
    
    

// 10. Make a program that asks ten numbers. Program calculates and prints out
//     sum and average, also prints out the smallest and biggest number.


let usrInpt;
let eightTimes;
let twoTimes;
    let twoBig = Math.max();
    let oneBig = Math.max();
    //first two numbers from the user
    let biggerOfTwo;
    let smallerOfTwo;
    //two variables above give us the biggest and smallest number
    let sum = 0;
    let average = 0;
/* First i want to get two values from the user and figure out wich one is bigger */
    for (twoTimes = 2 ; twoTimes > 0 ; twoTimes--) {
        usrInpt = parseInt(prompt("Enter number."));
        //oneBig == twoBig in the beginning because math.max gets the value -infinity
        //oneBig catches the first usrInpt almost always
        if (oneBig > twoBig) {
            twoBig = usrInpt;
         } else {
            oneBig = usrInpt;
         }
    }
    //wich one is bigger
    if (oneBig > twoBig) {
        biggerOfTwo = oneBig;
        smallerOfTwo = twoBig;
    } else {
        biggerOfTwo = twoBig;
        smallerOfTwo = oneBig;
    }
    //let's get the first two numbers involved in average here
sum = biggerOfTwo + smallerOfTwo;
/* Now we need to compare the next 8 values with the first two ones */
    for (eightTimes = 8 ; eightTimes > 0 ; eightTimes--) {
       usrInpt = parseInt(prompt("Enter number."));
       //let's catch the usrInpt for the sum
       sum = sum + usrInpt;
       if(usrInpt > biggerOfTwo) {
        biggerOfTwo = usrInpt;
        //largest number caught
         } else if (usrInpt < smallerOfTwo) {
            smallerOfTwo = usrInpt;
      //smallest number caught
        }

       
    }
    average = sum / 10;
console.log("Sum of the numbers is " + sum + " and the average is " + average + ". Largest number is " + biggerOfTwo + " and smallest " + smallerOfTwo + ".");




 

