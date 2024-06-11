// function Play() {
//     const homeSection = document.getElementById('home-screen')
//     console.log(homeSection.classList)
//     homeSection.classList.add('hidden')
//         // playground
//     const playground = document.getElementById('play-ground')
//     console.log(playground.classList)
//     playground.classList.remove('hidden')
// }
function handleKeyboardKeyupEvent(event) {
    const playerPassed = event.key;
    // key is expected to player
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const CurrentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = CurrentAlphabet.toLowerCase();

    if (playerPassed === expectedAlphabet) {

        // Select the current score element
        const currentScoreElement = document.getElementById('current-score');

        // Get the current score text and convert it to an integer
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        // Log the current score to the console
        console.log(currentScore);

        // Calculate the new score
        const newScore = currentScore + 1;

        // Update the score element's text with the new score
        currentScoreElement.innerText = newScore;

        removeBackgroundColor(expectedAlphabet)
        continueGame()
    } else {
        console.log("Wrong Pressed,Please Try a CorrectWord  ")
            // get the id
        const currentLifeElement = document.getElementById('current-life')
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText)
        console.log(currentLife)
        if (currentLife === 0) {
            alert("Game Over");
        } else {
            // Calculate the reduced life
            const reduceLife = currentLife - 1;

            // Update the life element's text with the reduced life
            currentLifeElement.innerText = reduceLife;
        }
    }

}
document.addEventListener('keyup', handleKeyboardKeyupEvent)

function continueGame() {
    const alphabet = getRandomAlphabet()
    console.log("Your random alphabet is", alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet)

}

function Play() {
    hideElement('home-screen')
    showElement('play-ground')
    continueGame()
}