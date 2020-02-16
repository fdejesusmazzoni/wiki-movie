import React from 'react';
import { Movie } from '../../../../../api/model';
import { CardActionArea, CardMedia, Card, CardContent, Typography } from '@material-ui/core';
import { MAX_LENGTH_OVERVIEW, MAX_LENGTH_TITLE, MAX_NUMBERS_GENRES } from './constants';
import { limitLength } from '../../../../../common/util/stringUtils';
import { Genre } from '../../../../../model';
import { getBackdropUrlImage } from '../../../../common/utils/imageMovie';
import { GenresView } from '../../../../common/genres-view/GenresView';
import { VotesView } from '../../../../common/votes-view/VotesView';

interface Props {
  movie: Movie;
  className?: string;
  genres: Genre[];
  onClicCard(movieId: number): void;
}

export const MovieCard = (props: Props) => {
  const { movie, className, genres, onClicCard } = props;

  const handlerClickCard = () => {
    onClicCard(movie.id);
  };

  const movieGenres = genres
    .filter( g => movie.genre_ids.findIndex(i => g.id === i) >= 0)
    .slice(0, MAX_NUMBERS_GENRES);

  return (
    <Card className={`${className}`}  onClick={handlerClickCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={ movie.title }
          height="140"
          image={ getBackdropUrlImage(movie) }
          title={ movie.title }
        />
        <CardContent>
          <GenresView genres={ movieGenres } />
          <Typography gutterBottom variant="h5" component="h2">
            {  limitLength(movie.title, MAX_LENGTH_TITLE) }
          </Typography>
          <VotesView average={movie.vote_average} count={movie.vote_count} />
          <Typography variant="body2" color="textSecondary" component="p">
            { limitLength(movie.overview, MAX_LENGTH_OVERVIEW) }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};