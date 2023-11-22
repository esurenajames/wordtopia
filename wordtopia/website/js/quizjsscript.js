const questions = [
    {
        question: "This are pairs of words that sound the same, but have distinctly different meanings and different spellings.",
        optionA: "Homophones",
        optionB: "Homonyms",
        optionC: "Homograph",
        optionD: "Homosapiens",
        correctOption: "optionA"
    },

    {
        question: "Each of two or more words having the same spelling or pronunciation but different meanings and origins.",
        optionA: "Homophones",
        optionB: "Homonyms",
        optionC: "Homograph",
        optionD: "Homosapiens",
        correctOption: "optionB"
    },

    {
        question: "Are two or more words that are spelled the same but have different meanings and origins.",
        optionA: "Homophones",
        optionB: "Homonyms",
        optionC: "Homograph",
        optionD: "Homosapiens",
        correctOption: "optionC"
    },

    {
        question: "I can see my house from ______.",
        optionA: "here",
        optionB: "here",
        optionC: "hire",
        optionD: "heir",
        correctOption: "optionA"
    },

    {
        question: "When I was younger, I ______ all of the Harry Potter books.",
        optionA: "read",
        optionB: "red",
        optionC: "ride",
        optionD: "reed",
        correctOption: "optionA"
    },

    {
        question: "Let's go shopping! There's a big ______ at my favourite shoe shop.",
        optionA: "sail",
        optionB: "seal",
        optionC: "sale",
        optionD: "sell",
        correctOption: "optionC"
    },

    {
        question: "Look ______ the window - there's a rainbow!",
        optionA: "threw",
        optionB: "through",
        optionC: "true",
        optionD: "though",
        correctOption: "optionB"
    },

    {
        question: "I saw your notebook over ______.",
        optionA: "the",
        optionB: "their",
        optionC: "they",
        optionD: "there",
        correctOption: "optionD"
    },

    {
        question: "I have ______ dogs and one bird at home.",
        optionA: "faux",
        optionB: "four",
        optionC: "for",
        optionD: "foo",
        correctOption: "optionB"
    },

    {
        question: "Our teacher said we should ______ every day to improve our skills.",
        optionA: "write",
        optionB: "wire",
        optionC: "right",
        optionD: "rite",
        correctOption: "optionA"
    },

    {
        question: "Who ______ this ball at the window?",
        optionA: "threw",
        optionB: "through",
        optionC: "true",
        optionD: "though",
        correctOption: "optionA"
    },

    {
        question: "The longest river in the United Kingdom is ?",
        optionA: "River Severn",
        optionB: "River Mersey",
        optionC: "River Trent",
        optionD: "River Tweed",
        correctOption: "optionA"
    },


    {
        question: "The ship set ______ from the port in Valletta, Malta.",
        optionA: "sell",
        optionB: "seal",
        optionC: "sale",
        optionD: "sail",
        correctOption: "optionD"
    },

    {
        question: "That's the Mona Lisa - it was painted ______ Leonardo Da Vinci!",
        optionA: "bye",
        optionB: "buy",
        optionC: "by",
        optionD: "boy",
        correctOption: "optionC"
    },

    {
        question: "Your perfume has a wonderful ___.",
        optionA: "scent",
        optionB: "sent",
        optionC: "cent",
        optionD: "sense",
        correctOption: "optionA"
    },

    {
        question: "I banged my ___ on the leg of the table.",
        optionA: "tow",
        optionB: "toe",
        optionC: "to",
        optionD: "too",
        correctOption: "optionB"
    },

    {
        question: "What ___ do you take to work?",
        optionA: "route",
        optionB: "root",
        optionC: "rawr",
        optionD: "roof",
        correctOption: "optionA"
    },

    {
        question: "The wind ___ the door closed.",
        optionA: "blue",
        optionB: "bloom",
        optionC: "blew",
        optionD: "block",
        correctOption: "optionC"
    },

    {
        question: "She returned to the ___ of the accident.",
        optionA: "seen",
        optionB: "sin",
        optionC: "skin",
        optionD: "scene",
        correctOption: "optionD"
    },

    {
        question: "I had an apple and a ___ for lunch.",
        optionA: "pear",
        optionB: "pair",
        optionC: "peer",
        optionD: "per",
        correctOption: "optionA"
    },

    {
        question: "We walked home ___ the park.",
        optionA: "threw",
        optionB: "though",
        optionC: "true",
        optionD: "through",
        correctOption: "optionD"
    },

    {
        question: "I can play a few ___ on the guitar.",
        optionA: "cords",
        optionB: "chords",
        optionC: "codes",
        optionD: "crowds",
        correctOption: "optionB"
    },

    {
        question: "Don't touch the cat's ___.",
        optionA: "tale",
        optionB: "tail",
        optionC: "tall",
        optionD: "tell",
        correctOption: "optionB"
    },

    {
        question: "I can't eat this ___ pizza.",
        optionA: "hole",
        optionB: "wool",
        optionC: "whole",
        optionD: "woof",
        correctOption: "optionC"
    },

    {
        question: "I wonder if they will change ___ plans?",
        optionA: "there",
        optionB: "they're",
        optionC: "their",
        optionD: "them",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question
let timer;

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    clearInterval(timer)
    timer = setInterval(() => {
        checkForAnswer()
        unCheckRadioButtons()
        indexNumber++
        setTimeout(() => {
            questionNumber++
        }, 1000)
        handleNextQuestion()
    }, 10000)
}


function checkForAnswer() {
    clearInterval(timer)
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "#ff4444"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "#ff893b"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "lightgreen"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}