function guessingGame() {
    const randomNum = Math.floor(Math.random() * 100);
    let guesses = 0;
    let finished = false;
    return (num) => {
        if (finished){
            return "The game is over, you already won!";
        }
        guesses++;
        if (num > randomNum){
            return `${num} is too high!`;
        }
        else if (num < randomNum){
            return `${num} is too low!`;
        }
        else {
            finished = true;
            return `You win! You found ${num} in ${guesses} guesses.`;
        }
    };
}

module.exports = { guessingGame };
