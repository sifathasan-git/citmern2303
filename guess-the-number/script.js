let enterButton = document.getElementById('enterButton');
let againButton = document.getElementById('againButton');
let output = document.getElementById('outputText');

let randomNumber = Math.ceil(Math.random()*10);

function checkNumber(){
    let input = document.getElementById('userInput').value;
    
    if(input == randomNumber){
        output.innerHTML="You guessed right"+","+"it was"+randomNumber;
        output.style.color="green";
    }
    else if(input>randomNumber && input<10){
        output.innerHTML="you guessed too high";
    }
    else if(input<randomNumber && input>1){
        output.innerHTML="You guessed too low";
    }
    else if(input<1){
        output.innerHTML="Higher, it has to be between 1 and 10";

    }
    else if(isNaN(input)){
        output.innerHTML="That's not a Number!";
    }
    else{
        output.innerHTML="Lower, it has to be between 1 and 10";
    }
}

enterButton.addEventListener('click',checkNumber);
againButton.addEventListener('click',function(){
   location.reload(); 
})