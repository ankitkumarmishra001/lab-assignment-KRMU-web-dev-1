
const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "Who is the father of Computer?", answer: "charles babbage" },
    { question: "HTML stands for?", answer: "hyper text markup language" },
    { question: "Which is the largest ocean on Earth?", answer: "pacific ocean" }
];

function runQuiz() {
    let score = 0; 

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAns = prompt(quizQuestions[i].question);

        if (userAns) {
            userAns = userAns.toLowerCase().trim();
        }

        if (userAns === quizQuestions[i].answer) {
            alert("Correct Answer!");
            score++;
        } else {
            alert("Wrong Answer! Correct is: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz Completed!\nYour Final Score: " + score + "/" + quizQuestions.length);
}

runQuiz();
