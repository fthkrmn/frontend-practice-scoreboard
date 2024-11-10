
let homeScore = 0
let awayScore = 0

let homeScoreBoard = document.getElementById("home-points-text")
let awayScoreBoard = document.getElementById("away-points-text")

function homeScoresOne() {
    homeScore = homeScore + 1
    homeScoreBoard.textContent = homeScore
    console.log("homeScore: " + homeScoreBoard.textContent)
}

function homeScoresTwo() {
    homeScore = homeScore + 2
    homeScoreBoard.textContent = homeScore
    console.log("homeScore: " + homeScoreBoard.textContent)
}

function homeScoresThree() {
    homeScore = homeScore + 3
    homeScoreBoard.textContent = homeScore
    console.log("homeScore: " + homeScoreBoard.textContent)
}

function homeScoreReset() {
    homeScore = 0
    homeScoreBoard.textContent = homeScore
    console.log("homeScore: " + homeScoreBoard.textContent)
}

function awayScoresOne() {
    awayScore = awayScore + 1
    awayScoreBoard.textContent = awayScore
    console.log("awayScore: " + awayScoreBoard.textContent)
}

function awayScoresTwo() {
    awayScore = awayScore + 2
    awayScoreBoard.textContent = awayScore
    console.log("awayScore: " + awayScoreBoard.textContent)
}

function awayScoresThree() {
    awayScore = awayScore + 3
    awayScoreBoard.textContent = awayScore
    console.log("awayScore: " + awayScoreBoard.textContent)
}

function awayScoreReset() {
    awayScore = 0
    awayScoreBoard.textContent = awayScore
    console.log("awayScore: " + awayScoreBoard.textContent)
}