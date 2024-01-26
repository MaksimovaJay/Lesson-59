import './App.css';
import AddMovie from "./components/AddMovie/AddMovie";
import ListMovie from "./components/ListMovie/ListMovie";
import {useState} from "react";
import {Movie} from "./types";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (movie: Movie) => {
    setMovies(prevState => [...prevState, movie]);
  };

  ///
  const editMovie = (id: string, newName: string) => {
    setMovies(prevState =>
      prevState.map(movie =>
        movie.id === id ? { ...movie, name: newName } : movie
      )
    );
  };

  const deleteMovie = (id: string) => {
    setMovies(prevState => prevState.filter(movie => movie.id !== id));
  };
  return (
    <>
      <AddMovie onSubmit={addMovie} />
      <p>To watch list:</p>
      <ListMovie movies={movies} changeName={editMovie} removeMovie={deleteMovie}/>
    </>
  )
}

export default App;
