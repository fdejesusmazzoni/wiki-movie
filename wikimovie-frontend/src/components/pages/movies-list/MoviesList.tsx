import React, { useEffect, useState } from 'react';
import { Genre, MoviesPaginator, Movie } from '../../../model';
import { MovieCard } from './components/movie-card/MovieCard';
import { Paper } from '@material-ui/core';
import { useStyles } from './MoviesListStyles';
import Pagination from 'material-ui-flat-pagination';
import { MOVIES_BY_PAGE } from './constants';
import { SearchBox } from '../../common/search-box/SearchBox';
import { useTranslation } from 'react-i18next';

interface Props {
  genres: Genre[];
  movies: MoviesPaginator;
  loadGenres(): void;
  loadPopularMovies(page: number): void;
  searchMovies(page: number, searchTitle: string): void;
}

export const MoviesList = (props: Props) => {
  const { t } = useTranslation();
  const [offset, setOffset] = useState<number>(0);
  const [searchboxText, setSearchboxText] = useState<string>('');

  const classes = useStyles();
  const { genres, movies, loadGenres, loadPopularMovies, searchMovies } = props;

  useEffect(
    () => {
      if (genres.length === 0)  {
        loadGenres();    
      } else {
        loadPopularMovies(1);
      }         

    },
    [genres, loadGenres, loadPopularMovies]
  );

  const handleChangePage = (_event: React.MouseEvent<HTMLElement>, newOffset: number, page: number) => {
    setOffset(newOffset);
    getMovies(page, searchboxText);
  };

  const handleSearchboxChange = (text: string) => {
    setSearchboxText(text);
    getMovies(1, text);
  };

  const handleClearSearchbox = () => {
    setSearchboxText('');
    getMovies(1, '');
  };

  const getMovies = (page: number, filterTitle: string) => {
    if (filterTitle === '') {
      loadPopularMovies(page);
    } else {
      searchMovies(page, filterTitle);
    }
  };

  return (
    <>
      <SearchBox
        placeholder={t('titleFilter')}
        initialValue={''}
        onChange={handleSearchboxChange}
        onClear={handleClearSearchbox}
      />
      <Paper elevation={2} className={classes.root}>
        { 
          movies.results.map((m: Movie, index: number ) => 
            <MovieCard 
              genres={genres}
              movie={m} 
              key={index} 
              className={classes.movieCard} />
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