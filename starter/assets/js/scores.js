// Sample high scores data structure
let highScores = [
    { name: 'John', score: 50 },
    { name: 'Alice', score: 45 },
    { name: 'Bob', score: 40 },
    { name: 'Eve', score: 35 },
    { name: 'Charlie', score: 30 }
];

// Function to retrieve high scores from localStorage
function getHighScores() {
    const highScoresFromStorage = localStorage.getItem('highScores');
    return highScoresFromStorage ? JSON.parse(highScoresFromStorage) : [];
}

// Function to save high scores to localStorage
function saveHighScore(name, score) {
    const scores = getHighScores();
    scores.push({ name, score });
    scores.sort((a, b) => b.score - a.score);
    localStorage.setItem('highScores', JSON.stringify(scores));
}

// Function to display high scores
function displayHighScores() {
    const highScoresList = document.getElementById('highScoresList');
    highScoresList.innerHTML = '';

    const scores = getHighScores();
    scores.forEach(score => {
        const li = document.createElement('li');
        li.innerText = `${score.name} - ${score.score}`;
        highScoresList.appendChild(li);
    });
}

// Call this function to display high scores on the page
displayHighScores();