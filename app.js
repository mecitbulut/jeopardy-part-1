const scoreDisplay = document.getElementById("score-display")
const questionDisplay = documnet.getElementById("question-display")

const question = [
    {
        quiz: ["value", "estimate", "evaluate"],
        options: ["jury", "assess"],
        correct: 2

    },
    {
        quiz: ["close", "near", "next"],
        options: ["forecast", "sustainable"],
        correct: 1
    },
    {
        quiz: ["foreing", "national", "ethnic"],
        options: ["mad", "exotic"],
        correct: 2
    }
    {
        quiz: ["assume", "insight", "weather"]
        options: ["forecast", "sustainable"],
        correct: 1
    },
    {
        quiz: ["fast", "quick", "promt"],
        options: ["charity", "rapid"]
        correct: 2
    },
   
]

let score = 0
scoreDisplay.textContent = score


function populateQuestion() {
    question.forEach(question => {
        const questionBox = documnet.createElement("div")
        questionBox.classList.add("question-box")
        
        const logoDisplay = documnet.createElement("h1")
        logoDisplay.textContent = "-"
        questionBox.append(logoDisplay)

        question.quiz.forEach(tip =>) {
            const tipText = document.createElement("p")
            tipText.textContent = tip
            questionBox.append(tipText)

        }
    })


    const questionButtons = document.createElement("div")
    questionButtons.classList.add("question-buttons")
    questionBox.append(questionButtons)


    question.options.forEach(option => {
       const questionButton =  document.createElement("buttons")
       questionButton>classList.add("question-button")
       questionButton.textContent = option

       questionButton.append(questionButton)
    })



    questionDisplay.append(questionBox)
}

populateQuestion()