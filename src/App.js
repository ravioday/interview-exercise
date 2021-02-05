import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [characters, setCharacters] = useState([]);
  let [films, setFilms] = useState([]);

  function handleClick() {
    fetch('https://www.swapi.tech/api/people').then(res =>
      res.json().then((result, error) => {
        setCharacters(result.results);
      })
    );
  }

  function handleCharacterClick() {
    fetch('https://www.swapi.tech/api/films/').then(res =>
      res.json().then((result, error) => {
        // do some parsing for the person that was clicked on
        //setFilms();
        // update films for correct person
      })
    );
  }

  return (
    <div className='App'>
      <button onClick={handleClick}>Get Characters</button>
      <div id='charList'>
        <ul>
          {characters.map((character, i) => (
            <li key={i}>
              <button onClick={handleCharacterClick}>{character.name}</button>
              <div className='films'></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
