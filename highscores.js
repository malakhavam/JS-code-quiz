// Variables
var highScore = document.querySelector("#highScores");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");


// Clear all scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});


// Retrieve scores from local storage
var highScores = localStorage.getItem("highScores");
highScores = JSON.parse(highScores);


if (highScores !== null) {

    for (var i = 0; i < highScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = highScores[i].score + " " + highScores[i].name;
        highScore.appendChild(createLi);

    }
}
// Event listener to move to index.html 
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});