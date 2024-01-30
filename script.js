let wins = 0;
let losses = 0;
let ties = 0;
let difficultyLevel = 1;
let lastPlayerChoice = null;

function updateScoreboard() {
    document.getElementById('wins').innerText = wins;
    document.getElementById('losses').innerText = losses;
    document.getElementById('ties').innerText = ties;
}

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = getComputerChoice();

    const result = determineWinner(playerChoice, computerChoice);

    displayResult(playerChoice, computerChoice, result);

    if (result === "You lose!" && difficultyLevel < 3) {
        increaseDifficulty();
        console.log(`Difficulty increased to level ${difficultyLevel}`);
    }

    if (result === 'You win!') {
        wins++;
    } else if (result === 'You lose!') {
        losses++;
    } else {
        ties++;
    }

   
    updateScoreboard();
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];

    if (difficultyLevel === 1) {
        return choices[Math.floor(Math.random() * choices.length)];
    } else if (difficultyLevel === 2) {
        const winningChoices = {
            "rock": "scissors",
            "paper": "rock",
            "scissors": "paper",
            "lizard": "spock",
            "spock": "scissors"
        };
        return winningChoices[choices[Math.floor(Math.random() * choices.length)]];
    } else if (difficultyLevel === 3) {
        
        return lastPlayerChoice || choices[Math.floor(Math.random() * choices.length)];
    }
}

function increaseDifficulty() {
    difficultyLevel++;
}

function changeLevel(selectedLevel) {
    difficultyLevel = parseInt(selectedLevel);
    console.log(`Difficulty level changed to ${difficultyLevel}`);
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }

    const winningMoves = {
        "rock": ["scissors", "lizard"],
        "paper": ["rock", "spock"],
        "scissors": ["paper", "lizard"],
        "lizard": ["spock", "paper"],
        "spock": ["scissors", "rock"]
    };

    if (winningMoves[player].includes(computer)) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function displayResult(player, computer, result) {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `You chose ${player}. Computer chose ${computer}. Result: ${result}`;
}
