var score;
var duration = 5;
var startTime;
var ended = true;

function addScore(){
    if (ended) {
        //make some remark about shooting out of turn
    }
    if (!ended) {
        score++;
    }
};

window.addEventListener("load", function() {
    this.setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        }, 
        1000
    )
});

function closePopup() {
    document.querySelector('.popup').remove();
    setTimeout(() => {
        startGame();
    }, Math.floor(2000 + (Math.random() * 3000)));
}

function startGame() {
    document.querySelector('.popup2').remove();
    score = 0;
    ended = false;

    startTime = new Date().getTime();
    var timerId = setInterval(function() {
        var total = (new Date().getTime() - startTime) / 1000;
        if (total >= duration) {
        ended = true;
        clearInterval(timerId);
        endGame();
    }
    }, 1);
}

function endGame() {
    saveScore(score);
    setTimeout(function() {
        window.location.reload();
        alert('You shot ' + score + ' time(s)');
    }, 20);
}

function saveScore(score) {

    const userName = this.getPlayerName();
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
    scores = this.updateScores(userName, score, scores);

    localStorage.setItem('scores', JSON.stringify(scores));
}

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

function updateScores(userName, score, scores) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    return scores;
  }

  function showOtherUserScore() {
    // add websocket for other user scores to display during play
  }