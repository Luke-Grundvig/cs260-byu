var score;
var duration = 5;
var startTime;
var ended = true;

function addScore(){
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
    setTimeout(function() {
        alert('You shot ' + score + ' time(s)');
    }, 10);
}