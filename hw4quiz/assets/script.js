(function() {
  const myQuestions = [
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      answers: {
        a: "Quotes",
        b: "Curly brackets",
        c: "Parentheses",
        d: "Square brackets",
      },
      correctAnswer: "c"
    },
    {
      question: "Arrays in javascript can be used to store:",
      answers: {
        a: "Numbers",
        b: "Strings", 
        c: "Booleans",
        d: "All of the above",
      },
      correctAnswer: "c"
    },
    {
      question: "Commonly used data types do not include:",
      answers: {
        a: "Booleans",
        b: "Strings",
        c: "Arrays",
        d: "Special Characters",
      },
      correctAnswer: "d"
    }
  ];

  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;

        answerContainers[questionNumber].style.color = "lightgreen";
      } else {

        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
window.onclick= function(){
  onTimer()
  }
  i = 60;
  
  function onTimer() {
    document.getElementById('mycounter').innerHTML = i;
    i--;
    if (i < 0) {
      alert('You lose!');
    } else {
      setTimeout(onTimer, 1000);
    }
  }
  const start = document.getElementById("start");
  start.addEventListener("click",startQuiz);
  function startQuiz(){
    start.style.display = "none";
    quiz.style.display = "block";
  }
  function myFunction() {
    var x = document.getElementById("quiz");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }