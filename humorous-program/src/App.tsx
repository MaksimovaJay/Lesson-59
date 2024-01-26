import React, {useState, useEffect} from 'react';
import JokeCallButton from './components/JokeCallButton/JokeCallButton';


function App() {
  const urlJoke = 'https://api.chucknorris.io/jokes/random';
  const urlProg = 'https://v2.jokeapi.dev/joke/Programming';

  const [jokes, setJokes] = useState({
    chuckNorris: '',
    programmer: ''
  });

  const fetchJoke = async (url:string, key:string) => {
    const response = await fetch(url);
    if (response.ok) {
      const jokeData = await response.json();
      setJokes((prevJokes) => ({...prevJokes, [key]: jokeData.value || jokeData.joke}));
    }

  };

  useEffect(() => {
    void fetchJoke(urlJoke, 'chuckNorris');
    void fetchJoke(urlProg, 'programmer');
  }, []);

  return (
    <>
      <div>
        <h1>Chuck Norris Jokes</h1>
        <p>{jokes.chuckNorris}</p>
      </div>
      <div>
        <h1>Programmer joke</h1>
        <p>{jokes.programmer}</p>
        <JokeCallButton onClick={() => fetchJoke(urlProg, 'programmer')}/>
      </div>
    </>
  );
}

export default App;
