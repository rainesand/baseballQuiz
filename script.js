var score = 0;
var qList = 0;
var questions = [
    {
        title: "What is inside a baseball?",
        choices: {
            a:"rubber, sponge, and grease",
            b:"sugar, spice, and everything nice",
            c:"cork, wool, and yarn",
            d:"glass, leather, and wood"
        },
        answer: "cork, wool, and yarn"
    },
    {
        title: "Which of these is not a position in baseball?",
        choices: {
            a:"pitcher",
            b:"center",
            c:"shortstop",
            d:"center fielder"
    },
        answer: "center"
    },
    {
        title: "What is the fastest ball ever pitched in the MLB?",
        choices: {
            a:"100 mph",
            b:"105 mph",
            c:"90 mph",
            d:"87mph"
    },
        answer: "105 mph"
    },
    {
        title: "How many teams are in the MLB?",
        choices: {
            a:"15",
            b:"25",
            c:"156",
            d:"30"
    },
        answer: "30"
    },
    {
        title: "Which MLB team has the most World Series wins?",
        choices: {
            a:"Cardinals",
            b:"Yankees",
            c:"Dodgers",
            d:"Red Sox"
        },
        answer: "Yankees"
    },
    {
        title: "Which country other than the USA is baseball extremely popular in?",
        choices: {
            a:"Japan",
            b:"Russia",
            c:"Uganda",
            d:"Peru"
        },
        answer: "Japan"
    },
    {
        title: "Which baseball player has hit the most homeruns?",
        choices: {
            a:"Johnny Damon",
            b:"Babe Ruth",
            c:"Hank Arron",
            d:"Barry Bonds"
        },
        answer: "Barry Bonds"
    }
];

var baseballQuiz = function(index) { 

    $("#question").text(questions[index].title);
    $(".opA").text(questions[index].choices.a);
    $(".opB").text(questions[index].choices.b);
    $(".opC").text(questions[index].choices.c);
    $(".opD").text(questions[index].choices.d);
    $(".option").on("click", function() {
        console.log(questions[1].answer);
        console.log(this);
        if (this.textContent == questions[index].answer) {
            console.log("CORRECT")
            $(this).removeClass("btn-dark");
            $(this).addClass("btn-success");
            $(".Display").addClass("borderCorrect");
            
        } else {
            console.log("INCORRECT");
            $(this).removeClass("btn-dark");
            $(this).addClass("btn-danger");
            $(".Display").addClass("borderIncorrect");
        }
    });   
}
baseballQuiz(1);
function baseballQuiz(qList) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[qList].title;
        var userChoices = questions[qList].choices;
        questionsDiv.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (element.textContent == questions[qList].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[qList].answer;
        } else {
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }
    }
qList++;
if (qList >= questions.length) {
    allDone();
    createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
} else {
    render(questionIndex);
}
questionsDiv.appendChild(createDiv);}
