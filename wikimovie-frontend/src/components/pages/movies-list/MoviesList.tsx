import React, { useEffect, useState } from 'react';
import { Genre, MoviesPaginator, Movie } from '../../../model';
import { MovieCard } from './components/movie-card/MovieCard';
import { Paper } from '@material-ui/core';
import { useStyles } from './MoviesListStyles';
import Pagination from 'material-ui-flat-pagination';
import { MOVIES_BY_PAGE } from './constants';

interface Props {
  genres: Genre[];
  movies: MoviesPaginator;
  loadGenres(): void;
  loadPopularMovies(): void;
}

export const MoviesList = (props: Props) => {
  
  const [offset, setOffset] = useState<number>(0);
  const classes = useStyles();
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

  const handleChangePage = (_event: React.MouseEvent<HTMLElement>, newOffset: number, page: number) => {
    setOffset(newOffset);
  };

  return (
    <>
      <Paper elevation={2} className={classes.root}>
        { 
          movies.results.map((m: Movie, index: number ) => 
            <MovieCard movie={m} key={index} className={classes.movieCard} />
          ) 
        }
      </Paper>
      <div className={classes.paginationDiv}>
        <Pagination
            className={classes.pagination}
            limit={MOVIES_BY_PAGE}
            offset={offset}
            total={movies.total_results}
            onClick={handleChangePage}
            currentPageColor={'default'}
          />
      </div>
    </>
  );
};