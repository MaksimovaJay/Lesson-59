import {Movie} from "../../types";
import React from "react";

interface Props {
  movie: Movie;
  changeName: (id: string, newName: string) => void;
  removeMovie: (id: string) => void;
}

const MovieItem: React.FC<Props> = React.memo(({movie, changeName, removeMovie}) => {
  const ChangeNameItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeName(movie.id, e.target.value);
  };

  const removeMovieList =  () => {
    removeMovie(movie.id);
  };

  return (
    <div className="mb-3  input-group">
      <input
        type="text"
        id="name"
        value={movie.name}
        className="form-control "
        onChange={ChangeNameItem}
      />
      <button
        type="submit"
        id="button-addon2"
        className="btn btn-outline-secondary ms-5"
        onClick={removeMovieList}
      >
        Удалить фильм
      </button>
    </div>
  );
},(prevProps, nextProps) => prevProps.movie.id === nextProps.movie.id);

export default MovieItem;