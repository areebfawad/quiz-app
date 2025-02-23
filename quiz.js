"use strict";
const allQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
        answer: "Jupiter"
    },
    {
        question: "What is the tallest mammal?",
        options: ["Elephant", "Giraffe", "Hippopotamus", "Rhinoceros"],
        answer: "Giraffe"
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "G", "Go"],
        answer: "Au"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Mercury", "Venus", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Brain", "Heart", "Liver", "Skin"],
        answer: "Skin"
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Nikola Tesla"],
        answer: "Albert Einstein"
    },
    {
        question: "Which is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
        answer: "Mount Everest"
    },
    {
        question: "Which planet is known for its beautiful rings?",
        options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
        answer: "Saturn"
    },
    {
        question: "What is the largest species of shark?",
        options: ["Great White Shark", "Tiger Shark", "Whale Shark", "Hammerhead Shark"],
        answer: "Whale Shark"
    },
    {
        question: "What is the world's longest river?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: "Nile River"
    },
    {
        question: "Which country is home to the kangaroo?",
        options: ["Australia", "New Zealand", "South Africa", "Argentina"],
        answer: "Australia"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "George Orwell", "Jane Austen", "Charles Dickens"],
        answer: "William Shakespeare"
    },
    {
        question: "Which instrument is often called the 'king of instruments'?",
        options: ["Piano", "Guitar", "Violin", "Organ"],
        answer: "Organ"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Gobi Desert", "Atacama Desert", "Antarctic Desert"],
        answer: "Sahara Desert"
    },
    {
        question: "Who is known as the 'Father of the Computer'?",
        options: ["Alan Turing", "Steve Jobs", "Bill Gates", "Charles Babbage"],
        answer: "Charles Babbage"
    },
    {
        question: "What is the chemical symbol for oxygen?",
        options: ["O", "Ox", "Om", "Og"],
        answer: "O"
    },
    {
        question: "Which city is famous for its canals and gondolas?",
        options: ["Venice", "Amsterdam", "Bruges", "Copenhagen"],
        answer: "Venice"
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
        answer: "Michelangelo"
    },
    {
        question: "What is the largest species of penguin?",
        options: ["Emperor Penguin", "King Penguin", "Gentoo Penguin", "Adelie Penguin"],
        answer: "Emperor Penguin"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Yen", "Rupee", "Dollar"],
        answer: "Yen"
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Lion", "Tiger", "Leopard", "Cheetah"],
        answer: "Lion"
    },
    {
        question: "Which city is the capital of Canada?",
        options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "Who wrote the novel 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
        answer: "Harper Lee"
    },
    {
        question: "What is the world's largest land animal?",
        options: ["Elephant", "Hippopotamus", "Giraffe", "Rhinoceros"],
        answer: "Elephant"
    },
    {
        question: "Which country is famous for its tulips?",
        options: ["Netherlands", "Germany", "France", "Belgium"],
        answer: "Netherlands"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Isaac Newton"],
        answer: "Alexander Fleming"
    },
    {
        question: "What is the chemical symbol for carbon?",
        options: ["C", "Ca", "Co", "Cr"],
        answer: "C"
    },
    {
        question: "Which famous scientist proposed the theory of evolution?",
        options: ["Charles Darwin", "Gregor Mendel", "Marie Curie", "Galileo Galilei"],
        answer: "Charles Darwin"
    },
    {
        question: "Which city hosted the 2016 Summer Olympics?",
        options: ["Rio de Janeiro", "London", "Tokyo", "Beijing"],
        answer: "Rio de Janeiro"
    },
    {
        question: "What is the largest continent?",
        options: ["Asia", "Africa", "North America", "South America"],
        answer: "Asia"
    },
    {
        question: "Who is the author of 'Pride and Prejudice'?",
        options: ["Jane Austen", "Charlotte Bronte", "Emily Dickinson", "Virginia Woolf"],
        answer: "Jane Austen"
    },
    {
        question: "What is the tallest waterfall in the world?",
        options: ["Angel Falls", "Niagara Falls", "Victoria Falls", "Iguazu Falls"],
        answer: "Angel Falls"
    },
    {
        question: "Which country is known as the 'Land Down Under'?",
        options: ["Australia", "New Zealand", "South Africa", "Brazil"],
        answer: "Australia"
    },
    {
        question: "Who painted the famous artwork 'The Starry Night'?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Salvador Dalí"],
        answer: "Vincent van Gogh"
    },
    {
        question: "What is the largest species of bear?",
        options: ["Polar Bear", "Grizzly Bear", "Black Bear", "Koala Bear"],
        answer: "Polar Bear"
    },
    {
        question: "What is the currency of Brazil?",
        options: ["Real", "Peso", "Dollar", "Euro"],
        answer: "Real"
    },
    {
        question: "Which animal is known for its long neck?",
        options: ["Elephant", "Giraffe", "Hippopotamus", "Kangaroo"],
        answer: "Giraffe"
    },
    {
        question: "Which city is the capital of Italy?",
        options: ["Rome", "Milan", "Florence", "Venice"],
        answer: "Rome"
    },
    {
        question: "Who wrote the novel '1984'?",
        options: ["George Orwell", "J.R.R. Tolkien", "Ray Bradbury", "Aldous Huxley"],
        answer: "George Orwell"
    },
    {
        question: "What is the world's largest bird?",
        options: ["Ostrich", "Eagle", "Emu", "Albatross"],
        answer: "Ostrich"
    },
    {
        question: "Which country is famous for the Eiffel Tower?",
        options: ["France", "Italy", "Spain", "Germany"],
        answer: "France"
    },
    {
        question: "Who developed the theory of general relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Nikola Tesla"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: ["S", "Sa", "So", "Na"],
        answer: "Na"
    },
    {
        question: "Which city is known as the 'City of Love'?",
        options: ["Paris", "Venice", "Rome", "Barcelona"],
        answer: "Paris"
    },
    {
        question: "Who wrote the novel 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "J.D. Salinger"],
        answer: "F. Scott Fitzgerald"
    },
    {
        question: "What is the largest species of snake?",
        options: ["Anaconda", "Cobra", "Python", "Rattlesnake"],
        answer: "Anaconda"
    },
    {
        question: "What is the currency of the United Kingdom?",
        options: ["Pound", "Euro", "Dollar", "Yen"],
        answer: "Pound"
    },
    {
        question: "Which animal is known for its black and white stripes?",
        options: ["Zebra", "Giraffe", "Tiger", "Cheetah"],
        answer: "Zebra"
    }
];

let currentQuestion = 0;
let score = 0;
let answerSelected = false;
let questionElement = document.getElementById("question");
let optionsElements = document.getElementsByClassName("option");
let scoreElement = document.getElementById("score");
let nextButton = document.getElementById("next-button");
let restartButton = document.getElementById("restart-button");

function getRandomQuestions() {
    let questionsCopy = [...allQuestions];
    let randomQuestions = [];
    for (let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * questionsCopy.length);
        randomQuestions.push(questionsCopy[index]);
        questionsCopy.splice(index, 1);
    }
    return randomQuestions;
}

let questions = getRandomQuestions();

function showQuestion() {
    let question = questions[currentQuestion];
    if (questionElement)
        questionElement.textContent = `Question ${currentQuestion + 1}: ${question.question}`;
    for (let i = 0; i < optionsElements.length; i++) {
        let optionsElement = optionsElements[i];
        optionsElement.textContent = question.options[i];
        optionsElement.classList.remove("selected");
        optionsElement.style.display = "block";
    }
    answerSelected = false;
}

function checkAnswer(selectedOption) {
    if (!answerSelected) {
        selectedOption.classList.add("selected");
        let question = questions[currentQuestion];
        if (selectedOption.textContent === question.answer) {
            score++;
            if (scoreElement)
                scoreElement.textContent = score.toString();
        }
        answerSelected = true;
    }
}

function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    if (questionElement)
        questionElement.textContent = "Quiz complete!";
    for (let i = 0; i < optionsElements.length; i++) {
        let optionsElement = optionsElements[i];
        optionsElement.style.display = "none";
    }
    if (nextButton)
        nextButton.style.display = "none";
    if (restartButton)
        restartButton.style.display = "block";
}

function restartQuiz() {
    score = 0;
    if (scoreElement)
        scoreElement.textContent = score.toString();
    currentQuestion = 0;
    if (nextButton)
        nextButton.style.display = "block";
    if (restartButton)
        restartButton.style.display = "none";
    questions = getRandomQuestions();
    showQuestion();
}

restartQuiz();

for (let i = 0; i < optionsElements.length; i++) {
    let optionsElement = optionsElements[i];
    optionsElement.addEventListener("click", function () {
        checkAnswer(this);
    });
}

nextButton.addEventListener("click", showNextQuestion);
restartButton.addEventListener("click", restartQuiz);

document.addEventListener('DOMContentLoaded', function () {
    let themeSelector = document.getElementById('theme-selector');
    themeSelector.addEventListener('change', function () {
        let buttons = document.getElementsByTagName('button');
        let quizContainers = document.getElementsByClassName('quiz-container');
        document.body.classList.remove('theme-default', 'theme-dark');
        for (let i = 0; i < quizContainers.length; i++) {
            quizContainers[i].classList.remove('theme-default', 'theme-dark');
        }
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('theme-default', 'theme-dark');
        }
        document.body.classList.add(this.value);
        for (let i = 0; i < quizContainers.length; i++) {
            quizContainers[i].classList.add(this.value);
        }
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add(this.value);
        }
        localStorage.setItem('selectedTheme', this.value);
    });
    let savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        themeSelector.value = savedTheme;
        var themeChangeEvent = new Event('change');
        themeSelector.dispatchEvent(themeChangeEvent);
    }
});