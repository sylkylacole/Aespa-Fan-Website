// import html elements to js

const scoreDiv = document.getElementById("score-div");
const submitButton = document.getElementById("submit-button");

let score = 0;

console.log(score);

// create the function for what occurs when you click the button

function submitQuiz() {
    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;
    const q3 = document.getElementById("q3").value;
    const q4 = document.getElementById("q4").value;

    if (q1 === "c") {
        score += 1;
    }
    if (q2 === "d") {
        score += 1;
    }
    if (q3 === "d") {
        score += 1;
    }
    if (q4 === "a") {
        score += 1;
    }

    scoreDiv.innerHTML = `Your score is ${score}/4`;

    console.log(score);
}


// create the feature where the submit button scrolls to the top when pressed so that you can see the score

var rootElement = document.documentElement;

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    submitQuiz();
});

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

submitButton.addEventListener("click", scrollToTop);



