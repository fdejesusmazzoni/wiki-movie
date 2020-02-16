import React from 'react';
import { Movie, Genre } from '../../../../../model';
import { useStyles } from './GenresViewStyles';
import { Chip } from '@material-ui/core';
import { MAX_NUMBERS_GENRES } from '../movie-card/constants';

interface Props {
  movie: Movie;
  genres: Genre[];
}

export const GenresView = (props: Props) => {

  const classes = useStyles();
  const { movie, genres } = props;

  const movieGenres = genres.filter( g => movie.genre_ids.findIndex(i => g.id === i) >= 0);

  return ( 
    <div className={classes.chips}>
    {
      movieGenres
        .slice(0, MAX_NUMBERS_GENRES)
        .map((g, index) => 
          <Chip key={index} label={g.name} />
        )
    } 
    </div>
   );
};