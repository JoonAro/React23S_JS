function gasFund() {
    const money = document.querySelector('#money').value
    const price = document.querySelector('#price').value
    const answer = document.querySelector('#answer')
    const fuelToGo = Math.floor(money / price);
    //.toFixed(2);
  /* if (fuelToGo < 10) {
       answer.textContent = "Whoopsie, You aren't going anywhere with that."; 
    } else {
        answer.textContent = "Good, you can escape now.";
    } */
 let text;
fuelToGo >= 10 ? answer.textContent = `You could get about ${fuelToGo} litres. Good, you can escape now`: answer.textContent = `You could get about ${fuelToGo} litres. Whoops, You aren\'t going anywhere with that`
console.log(fuelToGo);
}
