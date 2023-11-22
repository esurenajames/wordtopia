const questions = [
    {
        question: "__________ can make everyone laugh!",
        optionA: "eye",
        optionB: "I",
        optionC: "aye",
        optionD: "aigh",
        correctOption: "optionB"
    },

    {
        question: "I can see the __________ from my window!",
        optionA: "moons",
        optionB: "moan",
        optionC: "moat",
        optionD: "moon",
        correctOption: "optionD"
    },

    {
        question: "I need to __________ my hair before the party!",
        optionA: "bush",
        optionB: "brash",
        optionC: "brush",
        optionD: "brusque",
        correctOption: "optionC"
    },

    {
        question: "The __________ of the mountain is magnificent!",
        optionA: "view",
        optionB: "vein",
        optionC: "vain",
        optionD: "vane",
        correctOption: "optionA"
    },

    {
        question: "She cut the __________ into small pieces!",
        optionA: "meat",
        optionB: "meet",
        optionC: "meek",
        optionD: "meal",
        correctOption: "optionA"
    },

    {
        question: "The __________ of the flowers is so soothing!",
        optionA: "sent",
        optionB: "scent",
        optionC: "cent",
        optionD: "cent's",
        correctOption: "optionB"
    },

    {
        question: "Can you __________ me the pen, please?",
        optionA: "lend",
        optionB: "lean",
        optionC: "leant",
        optionD: "leap",
        correctOption: "optionA"
    },

    {
        question: "The dolphin splashed back into the __________.",
        optionA: "see",
        optionB: "sea",
        optionC: "sip",
        optionD: "sei",
        correctOption: "optionB"
    },

    {
        question: "He told the driver to turn __________ onto his street.",
        optionA: "wright",
        optionB: "write",
        optionC: "raight",
        optionD: "right",
        correctOption: "optionD"
    },

    {
        question: "__________ wanted to go to the store with my brother.",
        optionA: "I",
        optionB: "eye",
        optionC: "aye",
        optionD: "aigh",
        correctOption: "optionA"        
    },

    {
        question: "The __________ of the bird was beautiful!",
        optionA: "song",
        optionB: "sawn",
        optionC: "son",
        optionD: "sons",
        correctOption: "optionA"
    },

    {
        question: "Let's __________ at 2pm outside the library.",
        optionA: "meat",
        optionB: "meal",
        optionC: "meek",
        optionD: "meet",
        correctOption: "optionD"
    },


    {
        question: "I'll __________ the rest of the work tomorrow!",
        optionA: "doo",
        optionB: "due",
        optionC: "dew",
        optionD: "do",
        correctOption: "optionD"  
    },

    {
        question: "The __________ is blowing in the wind!",
        optionA: "leaves",
        optionB: "leave",
        optionC: "leaf",
        optionD: "leaved",
        correctOption: "optionC"
    },

    {
        question: "The __________ was so intense that I couldn't stand it!",
        optionA: "heath",
        optionB: "heat",
        optionC: "hit",
        optionD: "heats",
        correctOption: "optionB"
    },

    {
        question: "The __________ of the river is beautiful!",
        optionA: "sow",
        optionB: "sounds",
        optionC: "sound",
        optionD: "sown",
        correctOption: "optionC"
    },

    {
        question: "He is __________ the ground with a hammer!",
        optionA: "hitting",
        optionB: "hit",
        optionC: "heating",
        optionD: "heet",
        correctOption: "optionA"
    },

    {
        question: "I'm __________ the dishes right now!",
        optionA: "wash",
        optionB: "washing",
        optionC: "washed",
        optionD: "washes",
        correctOption: "optionB"
    },

    {
        question: "Can you __________ me a favor, please?",
        optionA: "do",
        optionB: "dew",
        optionC: "doo",
        optionD: "due",
        correctOption: "optionA"
    },

    {
        question: "The __________ of the story was very touching!",
        optionA: "ends",
        optionB: "end",
        optionC: "and",
        optionD: "ended",
        correctOption: "optionB"
    },

    {
        question: "The __________ of the wind was so strong that it broke the windows!",
        optionA: "force",
        optionB: "horse",
        optionC: "forces",
        optionD: "forced",
        correctOption: "optionA"
    },

    {
        question: "The __________ of the flowers was amazing!",
        optionA: "coloured",
        optionB: "colors",
        optionC: "colour",
        optionD: "color",
        correctOption: "optionD"
    },

    {
        question: "The __________ of the cake was delicious!",
        optionA: "taste",
        optionB: "tastes",
        optionC: "test",
        optionD: "tests",
        correctOption: "optionA"
    },

    {
        question: "I need to __________ my shoes before I go outside!",
        optionA: "tied",
        optionB: "tie",
        optionC: "ty",
        optionD: "tie's",
        correctOption: "optionB"
    },

    {
        question: "The __________ of the fruit was sweet and juicy!",
        optionA: "flavor",
        optionB: "flavors",
        optionC: "flavoured",
        optionD: "flavour",
        correctOption: "optionA"        
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

}


function checkForAnswer() {
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
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) { hayNako();
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
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
            
            clearInterval(timerInterval); // Clear the interval to stop the timer
            startTimer(9);
            NextQuestion(indexNumber);
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
    clearInterval(timerInterval);
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
    startTimer(9);
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}