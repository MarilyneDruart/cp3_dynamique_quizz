let goodAnswer = 0;
let badAnswer = 0;

function askQuestion(index) {

    const question = questions[index];
    let userResponse = prompt(question);
    console.log(typeof userResponse);

    userResponse = Number(userResponse);
    return userResponse;
}

function checkResponse(index, userResponse) {

    if (userResponse === responses[index]) {
        goodAnswer++;
        return true;
    } else {
        badAnswer++;
        return false;
    }
}

function addResponseToDom(index, isResponseCorrect) {

    const question = questions[index];

    let list = null;

    if (isResponseCorrect === true) {
        list = document.querySelector("#right .responses");
    } else {
        list = document.querySelector("#wrong .responses");
    }

    const newListItem = document.createElement('li');
    newListItem.textContent = question;
    list.append(newListItem);

}

function playQuizz() {

    for (const questionNumber in questions) {

        const response = askQuestion(questionNumber);

        const isCorrect = checkResponse(questionNumber, response);
        addResponseToDom(questionNumber, isCorrect);

    }

}

playQuizz();