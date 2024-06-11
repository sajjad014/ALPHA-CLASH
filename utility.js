function hideElement(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElement(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-500')
}

function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500')
}

function getCurrentScore() {
    const currentScoreElement = document.getElementById('current-score')
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText)
    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore;
}
// function getRandomAlphabet() {
//     const alphabetSting = 'abcdefghijklmnopqrstuvwxyz'
//     const alphabets = alphabetSting.split('');
//     // console.log(alphabets)
//     // get a random between 0-25 number
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
//     const alphabet = alphabets[index]
//     return alphabet;
// }

function getRandomAlphabet() {
    const alphabetSting = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetSting.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index]
    return alphabet;
    console.log(alphabet)
}