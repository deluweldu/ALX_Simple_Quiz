function checkAnswer () {
    // The correct answer
    const correctAnswer = "4";


// Get user's selceted answer
const userAnswer = document.querySelector('input[name="quiz"]:checked');

// Get the feedback element 
const feedback = document.getElementById('feedback');


// Check if an answer was selected
if (userAnswer) {
    // Compare user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well Done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}
}

// Submit button
document.getElementById('submit-answer').addEventListener('click',checkAnswer);