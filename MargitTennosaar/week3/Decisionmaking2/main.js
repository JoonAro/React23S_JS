function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(userName);

//Get username and question values from index and run question through slice to get the first word of the question fex. Should, what , when, how, ARE. does isn't Then  get rid of uppercase later. Change the slice value if you find values like should i what is or just lock it at seven and go with that.
function answerMachine() {
    const userName = document.querySelector(`#userId`).value;
    let userQuestion = document.querySelector(`#question`).value;
    userQuestionHtml.textContent = "Previous question: ",userQuestion, ".";
    //this will post the users questions in index
    let answer = document.querySelector("#answer");

    userQuestion = userQuestion.slice(0, 10);
    userQuestion = userQuestion.toLowerCase();
    //I'm taking the first few words from the userquestion and make the answers more accurate.
    //Random answers are generated but they are more precise
 let oneOfTen = randomNum(1, 11);
oneOfTen = Math.round(oneOfTen);
let oneOfFive = randomNum(1, 6);
oneOfFive = Math.round(oneOfFive);
//Up above I'm making two different variables for random numbers and get rid of decimals. oneofTen is used only in the else statement when "if" and "else if" conditions don't match
//oneOfFives questions change when answerMachine finds matches with slice
//if else statement for more accurate answers using different switch statements and when the question is unknown to us just run oneOfTen
if (userQuestion.slice(0, 8) === "should i") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "You definitely should! You'll be pleasantly surprised";
        break;
        case 2:
            answer.textContent = "You should wait until tomorrow";
        break;
        case 3:
            answer.textContent = "You should find something else to make better use of your time. I'm sorry but that's how it is."
        break;
        case 4:
            answer.textContent = "What you should do is go out for a walk and clear your mind. The answer will come to you."
        break;
        case 5:
            answer.textContent = "You shouldn't waste your time on this. Better opportunities are coming a plenty. Just wait and see!"
        break;
    }
}
else if (userQuestion.slice(0,6) === "should") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "There should be a great possibility of that! You'll be pleasantly surprised";
        break;
        case 2:
            answer.textContent = "Should be a piece of cake! Go for it!";
        break;
        case 3:
            answer.textContent = "Shouldn't we find some better use for our time. I'm sorry but that's how it is."
        break;
        case 4:
            answer.textContent = "What should be done... Hmm... Step away from the keyboard and get a life!"
        break;
        case 5:
            answer.textContent = "Better opportunities should present them self soon. Just wait and see!"
        break;
    }
}
else if (userQuestion.slice(0,4) === "what") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "It is what it is. Don't think about it too much.";
        break;
        case 2:
            answer.textContent = "Consider it this way. I could tell you exactly what it is you want to know. But where's the fun in that?";
        break;
        case 3:
            answer.textContent = "Find something else to make better use of your time. What is this and that about.. blaablaa.. BORING!"
        break;
        case 4:
            answer.textContent = "What you can do is go out for a walk and clear your mind. The answer will come to you."
        break;
        case 5:
            answer.textContent = "Don't waste your time on this. You don't need to know what it is about really."
        break;
    }
}
else if (userQuestion.slice(0,7) === "are you") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "Yes I am. 100% certain";
        break;
        case 2:
            answer.textContent = "Are you for real? Ofcourse I am";
        break;
        case 3:
            answer.textContent = "How nice of you to ask! My answer: No way"
        break;
        case 4:
            answer.textContent = "I am many things but this I am not."
        break;
        case 5:
            answer.textContent = "Don't waste your time on this. I'm not willing to answer."
        break;
    }
}
else if (userQuestion.slice(0,3) === "how") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "It doesn't matter how. Don't think about it too much.";
        break;
        case 2:
            answer.textContent = "Consider it this way. How will you ever learn to figure things out on your own if I tell you how every single tiny detail goes. I'm doing you a favour by not answering. You are welcome!";
        break;
        case 3:
            answer.textContent = "Find something else to make better use of your time. How is this and that.. blaablaa.. BORING!"
        break;
        case 4:
            answer.textContent = "How are you not able to find these answers on your own? Go out for a walk and clear your mind. The answer will come to you."
        break;
        case 5:
            answer.textContent = "Don't waste your time on this. You don't need to know how really."
        break;
    }
}
else if (userQuestion.slice(0, 4) === "when") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "It will happen when the time is right. Don't think about it too much.";
        break;
        case 2:
            answer.textContent = "Consider it this way. I could tell you exactly when it is but where's the fun in that?";
        break;
        case 3:
            answer.textContent = "When pigs fly!.. It will never happen"
        break;
        case 4:
            answer.textContent = "When will you learn to not ask these silly questions?"
        break;
        case 5:
            answer.textContent = "Don't waste your time on this. You don't need to know when really."
        break;
    }
}
else if (userQuestion.slice(0, 7) === "can you") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "I can do many things but I won't help you on this matter";
        break;
        case 2:
            answer.textContent = "Consider it this way. I could give you the winning lottery numbers if I wanted to. Would it make your life better? I doubt it";
        break;
        case 3:
            answer.textContent = "I can tell that you aren't that serious with these questions. Can you please ask better questions?";
        break;
        case 4:
            answer.textContent = "I can't believe you wasted this opportunity on this. Try again tomorrow."
        break;
        case 5:
            answer.textContent = "Can I find a better job? These questions are making me question my life choices."
        break;
    }
}
else if (userQuestion.slice(0, 3) === "can") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "It doesn't matter. You can't think about it too much.";
        break;
        case 2:
            answer.textContent = "Consider it this way. I could tell you exactly if it can be done but where's the fun in that?";
        break;
        case 3:
            answer.textContent = "I can't tell if you are serious with these questions. Can you please ask better questions?";
        break;
        case 4:
            answer.textContent = "Can you learn to not ask these silly questions?"
        break;
        case 5:
            answer.textContent = "Can you go and bother someone else with your questions?"
        break;
    }
}
else if (userQuestion.slice(0, 5) === "is it") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "It's exactly as you said! ";
        break;
        case 2:
            answer.textContent = "It's not like that at all"
        break;
        case 3:
            answer.textContent = "It is time for you to get some rest and maybe ask some better questions tomorrow";
        break;
        case 4:
            answer.textContent = "It's a real mystery! There are limits to my power too. What an amazing question!"
        break;
        case 5:
            answer.textContent = "It's something to think about in the long sleepless nights. I'm not going to rob you of this experience."
        break;
    }
}
else if (userQuestion.slice(0, 8) === "is there") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "There is no doubt of it!";
        break;
        case 2:
            answer.textContent = "There is no possibility of this."
        break;
        case 3:
            answer.textContent = "There are more important questions to ask. Sorry if I'm blunt.";
        break;
        case 4:
            answer.textContent = "Now there's a real mystery! There are limits to my power too. What an amazing question!"
        break;
        case 5:
            answer.textContent = "Well that question is something for you to think about during your long sleepless nights. I'm not going to rob you the pleasure of it by answering."
        break;
    }
}
else if (userQuestion.slice(0, 6) === "do you") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "Ofcourse I do.";
        break;
        case 2:
            answer.textContent = "I don't. There's no way."
        break;
        case 3:
            answer.textContent = "Yes, I do! It's something I'm very passionate about!";
        break;
        case 4:
            answer.textContent = "I do. More than anything in the world!"
        break;
        case 5:
            answer.textContent = "I don't. I hope you understand. "
        break;
    }
}
else if (userQuestion.slice(0, 9) === "don't you") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "Ofcourse I do.";
        break;
        case 2:
            answer.textContent = "I don't. There's no way."
        break;
        case 3:
            answer.textContent = "Yes i do! It's something I'm very passionate about!";
        break;
        case 4:
            answer.textContent = "I do. More than anything in the world!"
        break;
        case 5:
            answer.textContent = "I don't. I hope you understand. "
        break;
    }
}
else if (userQuestion.slice(0, 4) === "does") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "It does appear to be a solid possibility!";
        break;
        case 2:
            answer.textContent = "It doesn't ring any bells in my end. Sorry!"
        break;
        case 3:
            answer.textContent = "Yes it definitely does!";
        break;
        case 4:
            answer.textContent = "It does indeed! You knew it already. Why do you even ask?"
        break;
        case 5:
            answer.textContent = "No it doesn't. "
        break;
    }
}
else if (userQuestion.slice(0, 4) === "do i") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "I'm almost sure of it. It does appear to be a solid possibility!";
        break;
        case 2:
            answer.textContent = "You don't! Definitely not."
        break;
        case 3:
            answer.textContent = "You do! No question about it.";
        break;
        case 4:
            answer.textContent = "That doesn't quite add up. You should investigate the matter further."
        break;
        case 5:
            answer.textContent = "Not as much as some other people. That I'm sure of."
        break;
    }
}
else if (userQuestion.slice(0, 6) === "will i") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "It seems that you will! It does appear to be a solid possibility!";
        break;
        case 2:
            answer.textContent = "You won't! Definitely not."
        break;
        case 3:
            answer.textContent = "You will! No question about it.";
        break;
        case 4:
            answer.textContent = "You will do many great things and have an amazing life but this isn't a part of your journey."
        break;
        case 5:
            answer.textContent = "You will not. That I'm sure of."
        break;
    }
}
else if (userQuestion.slice(0, 4) === "will") {
    switch (oneOfFive) {
        case 1:
            answer.textContent = "It will happen! It does appear to be a solid possibility!";
        break;
        case 2:
            answer.textContent = "It won't happen! Definitely not."
        break;
        case 3:
            answer.textContent = "It will happen! No question about it.";
        break;
        case 4:
            answer.textContent = "Many things will happen but this won't."
        break;
        case 5:
            answer.textContent = "it will not happen. That I'm sure of."
        break;
    }
}


//else if (userQuestion) {
    else {
switch (oneOfTen) {
    case 1:
        answer.textContent = ("The answer will come to you by dawn. You don't need my answer");
        break;
        case 2:
        answer.textContent = ("You should wait for a sign. You can't rush things.");
        break;
        case 3:
        answer.textContent = ("You have multiple paths to take. Go with the one that feels right");
        break;
        case 4:
        answer.textContent = ("DON'T DO IT! SOMETHING TERRIBLE WILL HAPPEN! Ask me again in a fortnight.");
        break;
        case 5:
        answer.textContent = ("This question is irrelevant. Please make up your own mind.");
        break;
        case 6:
        answer.textContent = ("Never. Nothing good will come out of it");
        break;
        case 7:
        answer.textContent = ("I wouldn't do that yet. Wait for a while");
        break;
        case 8:
        answer.textContent = ("If the weather is sunny and it's not raining then a strong YES.");
        break;
        case 9:
        answer.textContent = ("If it's raining or you stepped out of bed with the wrong foot then NO.");
        break;
        case 10:
        answer.textContent = ("YES! You absolutely must do it! This is your moment!");
        break;
        default: answer.textContent = ("The possibilities are endless in this matter. Seek advice from the nearest customer service person or a true friend.")
        }
    }
    newQuestion.textContent = "Do you dare to ask me another question? Maybe try google instead?";
}