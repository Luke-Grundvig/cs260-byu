import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Gameplay } from './gameplay/gameplay';
import { Highscore } from './highscore/highscore';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
      <header>
        <title>Western-Showdown.click</title>
        <link rel="stylesheet" href="highscore.css" />
        <script src="highscore.js"></script>

        <ul class="navbar">
            <li>
              <NavLink to='login'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='highscore'>
                High Scores
              </NavLink>
            </li>
            <li>
              <NavLink to='gameplay'>
                Gameplay
              </NavLink>
            </li>
        </ul>

      </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/gameplay' element={<Gameplay userName={userName} />} />
          <Route path='/highscores' element={<Highscore />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
            <span>By Luke Grundvig</span>
            <span>GITHUB LINK: </span>
            <a href="https://github.com/Luke-Grundvig/cs260-byu">GitHub</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
