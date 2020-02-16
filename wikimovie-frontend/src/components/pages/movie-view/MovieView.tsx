import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { routePaths } from '../../../common/routes';
import { ButtonWithIcon } from '../../common/buttons/ButtonWithIcon';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { MovieDetails } from '../../../api/model';
import { useStyles } from './MovieViewStyles';
import { Paper, Typography, Grid } from '@material-ui/core';
import { getPosterUrlImage, getCompanyUrlImage } from '../../common/utils/imageMovie';
import { GenresView } from '../../common/genres-view/GenresView';
import { VotesView } from '../../common/votes-view/VotesView';
import Link from '@material-ui/core/Link';
import { FieldMovieData } from './components/fieldMovieData/FieldMovieData';
import { formatDate } from '../../../common/util/stringUtils';

interface Props {
  movieDetails: MovieDetails;
  loadMovieDetails(movieId: number): void;
}

export const MovieView = (props: Props) => {
  
  const { movieId } = useParams();
  const history = useHistory();
  const { t } = useTranslation();
  const classes = useStyles();

  const { movieDetails, loadMovieDetails } = props;

  useEffect( 
    () => {
      const id = parseInt(movieId ? movieId : '', 0);
      if (id) {
        loadMovieDetails(id);
      }
    },
    [movieId, loadMovieDetails]
  );

  const handleGoBack = () => {
    history.push(routePaths.list);
  };

  return (
    <>
      <ButtonWithIcon
        text={ t('Go back') }
        startIcon={ <ArrowBackIcon /> }
        onClick={ handleGoBack }
      />
      <Paper className={classes.paper}>
        <Grid container>
          <Grid xs={9} item>
            <div className={classes.movieData}>
              <Typography variant="h4">{movieDetails.title}</Typography> 
              <Typography variant="h5">{movieDetails.tagline}</Typography>
              <GenresView genres={ movieDetails.genres } />              
              <Typography>
                <Link href="{movieDetails.homepage}">
                  {movieDetails.homepage}
                </Link>
              </Typography>
              <Typography component="p" className={classes.overview}>{movieDetails.overview}</Typography>
              <div className={classes.productionCompany}>
              { 
                movieDetails.production_companies
                  .filter(c => c.logo_path !== null)
                  .map((c, index) =>
                    <img src={getCompanyUrlImage(c)} key={index} alt={c.name}></img>
                  )
              }
              </div>
            </div> 
          </Grid>
          <Grid xs={3} item>
            <div className={classes.movieImage}>  
              <h2 className={classes.informationTitle}>{t('Information')}</h2>
              <div className={classes.information}>
                <FieldMovieData text={t('Popularity')} value={movieDetails.popularity.toString()} />  
                <FieldMovieData text={t('Budget')} value={movieDetails.budget.toString()} />
                <FieldMovieData text={t('Original Language')} value={movieDetails.original_language} />
                <FieldMovieData text={t('Release Date')} value={formatDate(movieDetails.release_date)} /> 
                <FieldMovieData text={t('Revenue')} value={`${movieDetails.revenue.toString()} €`} /> 
                <FieldMovieData text={t('Duration')} value={`${movieDetails.runtime.toString()} min.`} /> 
              </div>    
              <img src={getPosterUrlImage(movieDetails)} alt={movieDetails.title}></img>
              <VotesView average={movieDetails.vote_average} count={movieDetails.vote_count} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};