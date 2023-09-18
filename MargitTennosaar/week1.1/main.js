/* 1. user enters question in the UI (use input) 
    2. random number will be given
    3. create at least 5 answers and use switch
    4. make a new project and return it to github*/
let userName = "";
function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}
function answerMachine() {
let oneOfTen = randomNum(1, 11);
oneOfTen = Math.round(oneOfTen);
switch (oneOfTen) {
    case 1:
        console.log("The answer will come to you by dawn. You don't need my answer");
        break;
        case 2:
        console.log("You should wait for a sign. You can't rush things.");
        break;
        case 3:
        console.log("You have multiple paths to take. Go with the one that feels right");
        break;
        case 4:
        console.log("DON'T DO IT! SOMETHING TERRIBLE WILL HAPPEN! Ask me again in a fortnight.");
        break;
        case 5:
        console.log("This question is irrelevant. Please make up your own mind.");
        break;
        case 6:
        console.log("Never. Nothing good will come out of it");
        break;
        case 7:
        console.log("I wouldn't do that yet. Wait for a while");
        break;
        case 8:
        console.log("If the weather is sunny and it's not raining then a strong YES.");
        break;
        case 9:
        console.log("If it's raining or you stepped out of bed with the wrong foot then NO.");
        break;
        case 10:
        console.log("YES! You absolutely must do it! This is your moment!");
        break;
        default: console.log("The possibilities are endless in this matter. Seek advice from the nearest customer service person or a true friend.")
}
}
userName = prompt("I know everything except your name.. hint, hint...");
if (userName.length === 0) {
console.log("Hello.");

} else {
    console.log("Hello, " , userName, ".");
}
let userQuery = prompt("Ask me anything. I have all the answers you need");
console.log (userName, "asks the following question: ", userQuery);

answerMachine();
