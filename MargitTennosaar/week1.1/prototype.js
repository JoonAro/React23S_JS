const answers = [];
answers[0]="never happens"
answers[1]="The answer will come to you by dawn. You don't need my answer";
answers[2]="You should wait for a sign. You can't rush things.";
answers[3]="You have multiple paths to take. Go with the one that feels right";
answers[4]="DON'T DO IT! SOMETHING TERRIBLE WILL HAPPEN! Ask me again in a fortnight.";
answers[5]="This question is irrelevant. Please make up your own mind.";
answers[6]="Never. Nothing good will come out of it";
answers[7]="I wouldn't do that yet. Wait for a while";
answers[8]="If the weather is sunny and it's not raining then a strong YES.";
answers[9]="If it's raining or you stepped out of bed with the wrong foot then NO.";
answers[10]="YES! You absolutely must do it! This is your moment!";
answers[11]="The possibilities are endless in this matter. Seek advice from the nearest customer service person or a true friend.";

function randomNum(min, max) {
    return Math.random() * (max - min) + min;}
let oneOfTen = randomNum(1, 11);
oneOfTen = Math.round(oneOfTen);
function answerMachine2(){
    answers[oneOfTen];

}
answerMachine2();

/* Who dares to disturb the slumbering one? Welcome username!Only a spare few have been lucky enough to stumble upon this site. There are many who blindly stroll through life always pondering what could've been. What could've been if one chose a different path to take... You find yourself in a crossroad. Ask me anything, but hear my warning: Don't waste my time with silliness! For there is nothing you will regret more than plundering our brief moment together. I wait for your input...*/

/*text appears from the darkness little by little, maybe strolls up like starwars or similarly as i'm writing it now. Input boxes could also be dark. If it's possible to just see the blinking thingy. could the text disappear from the top.

Text shows up in the middle and disappears when it reaches a certain point. Autoscroll?

round the variable question value with to maybe 4-5. and if it's equal to a variable that contains string what, when, how make the group of answers relating that value. first characters

To get the first N characters of a string in JavaScript, call the slice() method on the string, passing 0 as the first argument and N as the second. For example, str. slice(0, 2) returns a new string containing the first 2 characters of str .
*/
