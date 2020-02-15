import React, { useEffect } from 'react';
import { Genre, MoviesPaginator } from '../../../model';

interface Props {
  genres: Genre[];
  movies: MoviesPaginator;
  loadGenres(): void;
  loadPopularMovies(): void;
}

export const MoviesList = (props: Props) => {
  
  const { genres, movies, loadGenres, loadPopularMovies } = props;

  useEffect(
    () => {
      if (genres.length === 0)  {
        loadGenres();    
      } else {
        loadPopularMovies();
      }         

    },
    [genres, loadGenres, loadPopularMovies]
  );

  return (
    <>
      { 
        movies.results.map(g => <h3>{g.title}</h3>) 
      }
    </>
  );
};