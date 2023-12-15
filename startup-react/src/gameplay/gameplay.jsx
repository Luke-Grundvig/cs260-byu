import React, { useState, useEffect } from 'react';

import './gameplay.css';

export function Gameplay() {

    const [score, setScore] = useState(0);
    const [duration] = useState(5);
    const [startTime, setStartTime] = useState(0);
    const [ended, setEnded] = useState(true);
  
    const GameEndEvent = 'gameEnd';
    const GameStartEvent = 'gameStart';
  
    useEffect(() => {
      configureWebSocket();
      setTimeout(() => {
        document.querySelector(".popup").style.display = "block";
      }, 1000);
    }, []);
  
    const addScore = () => {
      if (ended) {
        // make some remark about shooting out of turn
      }
      if (!ended) {
        setScore(score + 1);
      }
    };
  
    const closePopup = () => {
      document.querySelector('.popup').remove();
      setTimeout(() => {
        startGame();
      }, Math.floor(2000 + (Math.random() * 3000)));
    };
  
    const startGame = () => {
      document.querySelector('.popup2').remove();
      setScore(0);
      setEnded(false);
  
      broadcastEvent(getPlayerName(), GameStartEvent, {});
  
      setStartTime(new Date().getTime());
      const timerId = setInterval(() => {
        const total = (new Date().getTime() - startTime) / 1000;
        if (total >= duration) {
          setEnded(true);
          clearInterval(timerId);
          endGame();
        }
      }, 1);
    };
  
    const endGame = () => {
      saveScore(score);
      setTimeout(() => {
        window.location.reload();
        alert('You shot ' + score + ' time(s)');
      }, 20);
    };
  
    const saveScore = async (score) => {
      const userName = getPlayerName();
      const date = new Date().toLocaleDateString();
      const newScore = { name: userName, score: score, date: date };
  
      try {
        const response = await fetch('/api/score', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newScore),
        });
  
        broadcastEvent(userName, GameEndEvent, newScore);
  
        const scores = await response.json();
        localStorage.setItem('scores', JSON.stringify(scores));
      } catch {
        updateScoresLocal(newScore);
      }
    };
  
    const getPlayerName = () => {
      return localStorage.getItem('userName') ?? 'Mystery player';
    };
  
    const updateScoresLocal = (newScore) => {
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
    };
  
    const configureWebSocket = () => {
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
      socket.onopen = (event) => {
        displayMsg('system', 'game', 'connected');
      };
      socket.onclose = (event) => {
        displayMsg('system', 'game', 'disconnected');
      };
      socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        if (msg.type === GameEndEvent) {
          displayMsg('player', msg.from, `scored ${msg.value.score}`);
        } else if (msg.type === GameStartEvent) {
          displayMsg('player', msg.from, `started a new game`);
        }
      };
    };
  
    const displayMsg = (cls, from, msg) => {
      const chatText = document.querySelector('#player-messages');
      chatText.innerHTML =
        `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
    };
  
    const broadcastEvent = (from, type, value) => {
      const event = {
        from: from,
        type: type,
        value: value,
      };
      socket.send(JSON.stringify(event));
    };

  return (
    <main className>

    <div className="outlaw">
        <img className = "image" alt="Outlaw" src="https://img.freepik.com/premium-photo/silhouette-man-cowboy-hat-standing-hill-generative-ai_900370-38005.jpg"/>
    </div>

    <div className="clickBox" onClick={() => addScore()}></div>
    <div id="player-messages"></div>
    <div className="popup"> 
        <h2>How to play</h2>
        <div className="banner">
            <p1>In this town it's not about who shoots the fastest .   .   .<span className="blinkcursor1">|</span></p1>
            <p2>it's who shoots the most. Fire on 'Draw'.<span className="blinkcursor2">|</span></p2>
        </div>
        <button onClick={() => closePopup()}>&times;</button>
    </div>

    <h1 className="popup2">Steady</h1>
</main>
  );
}