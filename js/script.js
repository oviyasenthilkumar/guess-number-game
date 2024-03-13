const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const easy_mode_container = document.getElementById("easy-mode-container");
const medium_mode_container = document.getElementById("medium-mode-container");
const hard_mode_container = document.getElementById("hard-mode-container");
const container = document.getElementById("container");
const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const icon3 = document.getElementById("icon3");

function easyLvl(){
    easy_mode_container.style.display = "block";
    container.style.display = "none";
}
function mediumLvl(){
    medium_mode_container.style.display = "block";
    container.style.display = "none";
}
function hardLvl(){
    hard_mode_container.style.display = "block";
    container.style.display = "none";
}
function iconSwitch(){
    container.style.display = "block";
    easy_mode_container.style.display = "none";
    medium_mode_container.style.display ="none";
    hard_mode_container.style.display ="none";
}

easy.addEventListener("click",easyLvl);
medium.addEventListener("click",mediumLvl);
hard.addEventListener("click",hardLvl);
icon1.addEventListener("click",iconSwitch);
icon2.addEventListener("click",iconSwitch);
icon3.addEventListener("click",iconSwitch);

let yourGuessEasy = document.getElementById("yourGuessEasy");
let yourGuessMedium = document.getElementById("yourGuessMedium");
let yourGuessHard = document.getElementById("yourGuessHard");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let range_esy = document.getElementById("range-esy");
let range_mdm = document.getElementById("range-mdm");
let range_hrd = document.getElementById("range-hrd");
let no_of_guess_mdm = document.getElementById("no_of_guess-mdm");
let no_of_guess_esy = document.getElementById("no_of_guess-esy");
let no_of_guess_hrd = document.getElementById("no_of_guess-hrd");
let guessedNum_mdm = document.getElementById("guessedNum-mdm");
let guessedNum_hrd = document.getElementById("guessedNum-hrd");
let guessedNum_esy = document.getElementById("guessedNum-esy");
let startIcon2 = document.getElementById("startIcon2");
let startIcon1 = document.getElementById("startIcon1");
let startIcon3 = document.getElementById("startIcon3");


let num = Math.floor(Math.random()*100 + 1);
console.log(num);
let no_of_guesses = 0;
let guessedNumbers = [];
function guessNumberEasy(){
    var guess = yourGuessEasy.value;
    console.log(guess);
    if(yourGuessEasy.value <= 100 && yourGuessEasy.value > 0){
        no_of_guesses += 1 ;
        guessedNumbers.push(guess);
    if(guess < num){
        range_esy.innerText = "Your guess is too low";
        no_of_guess_esy.innerText = `No. of guesses: ${no_of_guesses}`;
        guessedNum_esy.innerText = `Guessed numbers are : ${guessedNumbers}`
    }else if(guess > num){
        range_esy.innerText = "Your guess is too High";
        no_of_guess_esy.innerText = `No. of guesses: ${no_of_guesses}`;
        guessedNum_esy.innerText = `Guessed numbers are : ${guessedNumbers}`
    }else if(guess == num){
        range_esy.innerText = "Yippie you win !!";
        no_of_guess_esy.innerText = `The number was :  ${num}`;
        guessedNum_esy.innerText = `You guessed it in ${no_of_guesses}`;
    }
    yourGuessEasy.value="";
    }else{
        yourGuessEasy.value="";
        return alert("please Enter the value between 1 - 100");
    }  
}
btn1.addEventListener("click",guessNumberEasy);
startIcon1.addEventListener("click",function(){
    guessedNumbers = [];
    no_of_guesses = 0; 
    range_esy.innerText = "";
    no_of_guess_esy.innerText = "";
    guessedNum_esy.innerText = "";
    yourGuessEasy.value="";
    num = Math.floor(Math.random()*100 + 1);
})
let num1 = Math.floor(Math.random()*300 + 1);
function guessNumberMdm(){
    var guess = yourGuessMedium.value;
    console.log(guess);
    totalNumberOfGuess = 10;
    if(yourGuessMedium.value < 300 && yourGuessMedium.value > 0){
        no_of_guesses += 1 ;
        guessedNumbers.push(guess);
        if(totalNumberOfGuess != no_of_guesses){
            if(guess < num1){
                range_mdm.innerText = "Your guess is too low";
                no_of_guess_mdm.innerText = `No. of guesses: ${no_of_guesses}`;
                guessedNum_mdm.innerText = `Guessed numbers are : ${guessedNumbers}`
            }else if(guess > num1){
                range_mdm.innerText = "Your guess is too High";
                no_of_guess_mdm.innerText = `No. of guesses: ${no_of_guesses}`;
                guessedNum_mdm.innerText = `Guessed numbers are : ${guessedNumbers}`
            }else if(guess == num1){
                range_mdm.innerText = "Yippie you win !!";
                no_of_guess_mdm.innerText = `The number was :  ${num1}`;
                guessedNum_mdm.innerText = `You guessed it in ${no_of_guesses}`;
            }
            yourGuessMedium.value="";
        }else{
            yourGuessMedium.setAttribute("disabled","disabled");
            return alert(" you lost the game ! ");
        }
    }else{
        return alert("please enter value between 1 - 300");
    }    
}
btn2.addEventListener("click",guessNumberMdm);
startIcon2.addEventListener("click",function(){
    guessedNumbers = [];
    no_of_guesses = 0; 
    range_mdm.innerText = "";
    no_of_guess_mdm.innerText = "";
    guessedNum_mdm.innerText = "";
    yourGuessMedium.value="";
    yourGuessMedium.removeAttribute("disabled","disabled");
    num1 = Math.floor(Math.random()*300 + 1);
});
let num2 = Math.floor(Math.random()*100 + 1);
function guessNumberHrd(){
    var guess = yourGuessHard.value;
    console.log(guess);
    totalNumberOfGuess = 7;
    if(yourGuessHard.value < 400 && yourGuessHard.value > 0){
        no_of_guesses += 1 ;
        guessedNumbers.push(guess);
        if(totalNumberOfGuess != no_of_guesses){
            if(guess < num2){
                range_hrd.innerText = "Your guess is too low";
                no_of_guess_hrd.innerText = `No. of guesses: ${no_of_guesses}`;
                guessedNum_hrd.innerText = `Guessed numbers are : ${guessedNumbers}`
            }else if(guess > num2){
                range_hrd.innerText = "Your guess is too High";
                no_of_guess_hrd.innerText = `No. of guesses: ${no_of_guesses}`;
                guessedNum_hrd.innerText = `Guessed numbers are : ${guessedNumbers}`
            }else if(guess == num2){
                range_hrd.innerText = "Yippie you win !!";
                no_of_guess_hrd.innerText = `The number was :  ${num2}`;
                guessedNum_hrd.innerText = `You guessed it in ${no_of_guesses}`;
            }
            yourGuessHard.value="";
        }else{
            yourGuessHard.setAttribute("disabled","disabled");
            return alert(" you lost the game ! ");
        }
    }else{
        return alert("please enter value between 1 - 400");
    } 
}
btn3.addEventListener("click",guessNumberHrd);
startIcon3.addEventListener("click",function(){
    guessedNumbers = [];
    no_of_guesses = 0; 
    range_hrd.innerText = "";
    no_of_guess_hrd.innerText = "";
    guessedNum_hrd.innerText = "";
    yourGuessHard.value="";
    yourGuessHard.removeAttribute("disabled","disabled");
    num2 = Math.floor(Math.random()*400 + 1);
})
