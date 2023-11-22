const questions = [
    {
        question: "What do you do when you ____ a cold?",
        optionA: "beat",
        optionB: "bet",
        optionC: "beet",
        optionD: "bit",
        correctOption: "optionA"
    },

    {
        question: "She always ____ her best in class.",
        optionA: "doses",
        optionB: "dose",
        optionC: "does",
        optionD: "doze",
        correctOption: "optionc"

    },

    {
        question: "Have you heard the _____ of Snow White?",
        optionA: "tale",
        optionB: "tail",
        optionC: "tael",
        optionD: "teil",
        correctOption: "optionA"
    },

    {
        question: "He was wearing a ____ shirt.",
        optionA: "wight",
        optionB: "white",
        optionC: "wright",
        optionD: "write",
        correctOption: "optionB"
    },

    {
        question: "The children went ______  the store.",
        optionA: "to",
        optionB: "two",
        optionC: "too",
        optionD: "tue",
        correctOption: "optionA"
    },

    {
        question: "The puppy had mud all over its ___.",
        optionA: "pores",
        optionB: "pause",
        optionC: "poos",
        optionD: "paws",
        correctOption: "optionD"
    },

    {
        question: "Can you ____ this letter for me?",
        optionA: "right",
        optionB: "write",
        optionC: "rite",
        optionD: "wright",
        correctOption: "optionA"
    },

    {
        question: "I have never ___ such a messy room!",
        optionA: "sin",
        optionB: "scene",
        optionC: "seen",
        optionD: "sing",
        correctOption: "optionC"
    },

    {
        question: "A rabbit looks very much like a ___.",
        optionA: "hare",
        optionB: "hair",
        optionC: "heir",
        optionD: "hear",
        correctOption: "optionA"
    },

    {
        question: "The bride walked slowly down the ___.",
        optionA: "isle",
        optionB: "aisle",
        optionC: "I'll",
        optionD: "ill",
        correctOption: "optionB"
    },

    {
        question: "Please ___ for me outside the cinema.",
        optionA: "wait",
        optionB: "weight",
        optionC: "waite",
        optionD: "weight",
        correctOption: "optionA"
    },

    {
        question: "The If the traffic is jammed, why don't you take another ___.",
        optionA: "rood",
        optionB: "route",
        optionC: "roof",
        optionD: "root",
        correctOption: "optionD"
    },


    {
        question: "He ___ constantly about the expense of those dinners.",
        optionA: "whined",
        optionB: "wind",
        optionC: "wined",
        optionD: "wine",
        correctOption: "optionA"        
    },

    {
        question: "Only ___ can make my life complete.",
        optionA: "ewe",
        optionB: "you",
        optionC: "yew",
        optionD: "hue",
        correctOption: "optionB"
    },

    {
        question: "He lost his ____ on the way to the station.",
        optionA: "tran",
        optionB: "trane",
        optionC: "trains",
        optionD: "train",
        correctOption: "optionD"
    },

    {
        question: "The wrestler ___ his challenger in the stomach.",
        optionA: "kneed",
        optionB: "knead",
        optionC: "need",
        optionD: "nid",
        correctOption: "optionA"
    },

    {
        question: "There ___ a way to fix this",
        optionA: "may three",
        optionB: "maybe",
        optionC: "may be",
        optionD: "may bee",
        correctOption: "optionC"
    },

    {
        question: "Animal rights activists despise ___ coats.",
        optionA: "fur",
        optionB: "fir",
        optionC: "four",
        optionD: "pour",
        correctOption: "optionA"
    },

    {
        question: "They were planning to ____ a party for the weekend.",
        optionA: "haves",
        optionB: "have",
        optionC: "half",
        optionD: "haf",
        correctOption: "optionB"        
    },

    {
        question: "The dog chased the ____ around the park.",
        optionA: "duck",
        optionB: "dock",
        optionC: "dack",
        optionD: "dux",
        correctOption: "optionA"
    },

    {
        question: "She ____ her hair for the wedding.",
        optionA: "crawled",
        optionB: "curl",
        optionC: "called",
        optionD: "curled",
        correctOption: "optionD"
    },

    {
        question: "I hope you ___ drop in to see us soon.",
        optionA: "do",
        optionB: "dew",
        optionC: "due",
        optionD: "dough",
        correctOption: "optionA"
    },

    {
        question: "The ____ was closed for repairs.",
        optionA: "rode",
        optionB: "road",
        optionC: "roof",
        optionD: "raod",
        correctOption: "optionB"
    },

    {
        question: "His ___ of the book was critical but fair.",
        optionA: "review",
        optionB: "revue",
        optionC: "rave",
        optionD: "redo",
        correctOption: "optionA"
    },

    {
        question: "Will that be ___ or credit card?",
        optionA: "sash",
        optionB: "cache",
        optionC: "cash",
        optionD: "slash",
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