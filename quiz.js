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
    if (userAnswer.value === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again";
    }
} else {
    feedback.textContent = "please select an answer.";
}

}

// Submit button
document.getElementById('submit-answer').addEventListener('click',checkAnswer);