const words = ["javascript", "programming", "frontend", "developer", "browser"];
const maxAttempts = 5; 


const word = words[Math.floor(Math.random() * words.length)];
const wordLetters = word.split("");
let attemptsLeft = maxAttempts;
let guessedLetters = []; 
let wrongLetters = [];

const displayWord = () => {
    return wordLetters
        .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
        .join(" ");
};

const startHangmanGame = () => {
    let hasWon = false;
    let userInput;

   
    while (attemptsLeft > 0 && !hasWon) {
        console.log(`Word: ${displayWord()}`);
        console.log(`Wrong guesses: ${wrongLetters.join(", ")}`);
        console.log(`Attempts left: ${attemptsLeft}`);

        userInput = prompt("Guess a letter, or press Cancel to quit:");
        
        if (userInput === null) {
            alert("Game cancelled. Thanks for playing!");
            return;
        }

        if (userInput.length !== 1 || !/^[a-zA-Z]$/.test(userInput)) {
            alert("Invalid input! Please enter a single letter.");
            continue;
        }

        userInput = userInput.toLowerCase();

        if (guessedLetters.includes(userInput) || wrongLetters.includes(userInput)) {
            alert("You've already guessed that letter! Try a different one.");
            continue;
        }

        if (wordLetters.includes(userInput)) {
            guessedLetters.push(userInput);
        } else {
            wrongLetters.push(userInput);
            attemptsLeft--;
        }

        hasWon = wordLetters.every(letter => guessedLetters.includes(letter));
    }

    if (hasWon) {
        console.log(`Congratulations! You've won! The word was "${word}".`);
        alert(`Congratulations! You've won! The word was "${word}".`);
    } else {
        console.log(`Sorry, you've lost! The word was "${word}".`);
        alert(`Sorry, you've lost! The word was "${word}".`);
    }
};


startHangmanGame();
