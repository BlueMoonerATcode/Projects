let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {   //Function to generate the no. between 0 to 2 ( For 1,2,3)

    const options = ["Rock", "Paper", "Scissor"];

    //Math.floor = Removes the decimal value

    //Math.random = 
    //Generates a random number and if multiplied by n then gives the number in random of 0 to n-1

    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};


const drawGame = () => {  //Draw Function
    console.log("Game was Draw!!")
    msg.innerText = "Game was Draw! Play Again.";
    msg.style.backgroundColor = "grey";
};



const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win!! Your ${userChoice} Beats Computer ${compChoice} !!`;
        msg.style.backgroundColor = "green";
    }

    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Loose!")
        msg.innerText = `You Loose!! Computer ${compChoice} Beats Your ${userChoice} !!`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {    //Main Function in which Game will be Played
    console.log("User Choice = ", userChoice);

    //Generate Computer Choice:
    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice)

    if (userChoice === compChoice) {    //Draw Condition
        drawGame();
    }

    else {
        let userWin = true;

        if (userChoice === "Rock") {
            //For Rock
            userWin = compChoice === "Paper" ? false : true;
        }

        else if (userChoice === "Paper") {
            //For Paper
            userWin = compChoice === "Scissor" ? false : true;
        }
        else {
            //For Scissors
            userWin = compChoice === "Rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);

    }
};


choices.forEach((choice) => {    //Choosing an Option  
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was Clicked!", userChoice);
        playGame(userChoice);
    });
});