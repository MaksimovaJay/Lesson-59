import React from 'react';
import {Movie} from "../../types";
import MovieItem from "../MovieItem/MovieItem";

interface Props {
  movies: Movie[];
  changeName: (id: string, newName: string) => void;
  removeMovie: (id: string) => void;


}

const ListMovie: React.FC<Props> = ({movies, changeName, removeMovie}) => {
  return (
    <>
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
          changeName={changeName}
          removeMovie={removeMovie}

        />
        ))}
    </>
  );
};

export default ListMovie;