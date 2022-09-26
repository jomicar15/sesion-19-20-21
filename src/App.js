import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/home/homePage';
import StartGame from './pages/game/startGame';
import React,{useState} from 'react';
import chuckNorrisLogo from './img/chucknorris.png';

function App() {
  const imgPath = "./img/chucknorris.png";

  // src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
  return (
    <div className="App">
      <Router>
          <h1>Chuck Norris Jokes</h1>
          <img  src={chuckNorrisLogo} alt="ChuckNorrisJoke" height="180px" width="200px"/> 
          
          <Routes>
              <Route exact path='/' element={<HomePage/>}/>
              <Route exact path='/start-game' element={<StartGame/>}/>
          </Routes>
      </Router> 
    </div>

  );
}

export default App;


