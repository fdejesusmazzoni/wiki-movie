import React from 'react';
import { Movie } from '../../../../../api/model';
import { CardActionArea, CardMedia, Card, CardContent, Typography, Grid } from '@material-ui/core';
import { BASE_IMAGE_URL, IMAGE_SMALL_SIZE, MAX_LENGTH_OVERVIEW, MAX_LENGTH_TITLE } from './constants';
import { limitLength } from '../../../../../common/util/stringUtils';
import Rating from '@material-ui/lab/Rating';
import { useStyles } from './MovieCardStyles';
import { useTranslation } from 'react-i18next';
import noimage from '../../../../../content/no-image.png';
import { Genre } from '../../../../../model';
import { GenresView } from '../genres-view/GenresView';

interface Props {
  movie: Movie;
  className?: string;
  genres: Genre[];
}

export const MovieCard = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const { movie, className, genres } = props;

  const getUrlImage = (movieData: Movie) => {

    if (movieData.backdrop_path) {
      return `${BASE_IMAGE_URL}${IMAGE_SMALL_SIZE}/${movieData.backdrop_path}`;
    } else if (movieData.poster_path) {
      return `${BASE_IMAGE_URL}${IMAGE_SMALL_SIZE}/${movieData.poster_path}`;
    } else {
      return noimage;
    }
  };

  const getColorVote = (movieData: Movie) => {
    switch (true) {
      case movieData.vote_average > 7.5: return classes.votePositive; 
      case movieData.vote_average < 5: return classes.voteNegative; 
      default: return classes.voteNeutral;
    }
  };

  return (
    <Card className={`${className}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={ movie.title }
          height="140"
          image={ getUrlImage(movie) }
          title={ movie.title }
        />
        <CardContent>
          <GenresView movie={movie} genres={genres} />
          <Typography gutterBottom variant="h5" component="h2">
            {  limitLength(movie.title, MAX_LENGTH_TITLE) }
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Rating name="read-only" value={movie.vote_average / 2} readOnly />
            </Grid>
            <Grid className={classes.voteGrid}>
              <Typography component="p" className={classes.vote}>
                <span className={getColorVote(movie)}>{movie.vote_average}</span> ({movie.vote_count} {t('votes')})
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" component="p">
            { limitLength(movie.overview, MAX_LENGTH_OVERVIEW) }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};