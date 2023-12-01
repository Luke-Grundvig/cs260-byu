var score;
var duration = 5;
var startTime;
var ended = true;
const GameEndEvent = 'gameEnd';
const GameStartEvent = 'gameStart';

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

    this.broadcastEvent(this.getPlayerName(), GameStartEvent, {});

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

async function saveScore(score) {
  const userName = this.getPlayerName();
  const date = new Date().toLocaleDateString();
  const newScore = {name: userName, score: score, date: date};

  try {
    const response = await fetch('/api/score', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newScore),
    });
    this.broadcastEvent(userName, GameEndEvent, newScore);

    const scores = await response.json();
    localStorage.setItem('scores', JSON.stringify(scores));
  } catch {
    this.updateScoresLocal(newScore);
  }
}

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

function updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore > prevScore.score) {
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

    localStorage.setItem('scores', JSON.stringify(scores));
}

function configureWebSocket() {
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  this.socket.onopen = (event) => {
    this.displayMsg('system', 'game', 'connected');
  };
  this.socket.onclose = (event) => {
    this.displayMsg('system', 'game', 'disconnected');
  };
  this.socket.onmessage = async (event) => {
    const msg = JSON.parse(await event.data.text());
    if (msg.type === GameEndEvent) {
      this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
    } else if (msg.type === GameStartEvent) {
      this.displayMsg('player', msg.from, `started a new game`);
    }
  };
}

function displayMsg(cls, from, msg) {
  const chatText = document.querySelector('#player-messages');
  chatText.innerHTML =
    `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
}

function broadcastEvent(from, type, value) {
  const event = {
    from: from,
    type: type,
    value: value,
  };
  this.socket.send(JSON.stringify(event));
}