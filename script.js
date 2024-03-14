let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document .querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

const drawGame = () => {
    console.log("DRAW");
    msg.innerText = "DRAW! Play Again"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin, userchoice, compChoice) => {
    if(userwin){
        userscore ++;
        user_score.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats Your ${compChoice}`;
        msg.style.backgroundColor = "green";


    }
    else{
        compscore ++;
        comp_score.innerText = compscore;
        msg.innerText = (`You Lose! ${compChoice} beats ${userchoice}`)
        msg.style.backgroundColor = "red";

    }
}

const getcomputerChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
}

const playgame = (userchoice) => {
    console.log("choice was clicked",userchoice);
    //Generate Computer Choice
    const compChoice = getcomputerChoice();

    if (userchoice === compChoice){
        drawGame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
           userwin = compChoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        }
        else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner (userwin , userchoice, compChoice); 
    }
   
}

choices.forEach((choice) => {
   choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
        playgame(userchoice)
    })
})
