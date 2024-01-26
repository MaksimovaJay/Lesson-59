import React, {useState} from 'react';
import {Movie} from "../../types";

interface Props {
  onSubmit: (movie: Movie) => void;
}

const AddMovie: React.FC<Props> = ({onSubmit}) => {

  const [movie, setMovie] = useState<Movie>({
    id: '',
    name: ''
  });

  const changeMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovie(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const onMovieSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(movie);
    setMovie({
      id: Math.random().toString(),
      name: ''
    });
  };


  return (
    <form onSubmit={onMovieSubmit}
    >
      <div className="mb-3  input-group">
        <input
          placeholder="Введите фильм"
          className="form-control"
          type="text"
          name="name"
          id="name"
          value={movie.name}
          onChange={changeMovie}
        />
        <button
          type="submit"
          id="button-addon2"
          className="btn btn-outline-secondary ms-5"
        >
          Добавить
        </button>

      </div>
    </form>
  );
};

export default AddMovie;