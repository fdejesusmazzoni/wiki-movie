import noimage from '../../../content/no-image.png';
import { Movie, MovieDetails, ProductionCompany } from '../../../model';
import { IMAGE_SMALL_SIZE, BASE_IMAGE_URL, IMAGE_MEDIUM_SIZE } from './constants';

export const getBackdropUrlImage = (movie: Movie | MovieDetails) => {
  return (movie.backdrop_path) ?
    `${BASE_IMAGE_URL}${IMAGE_MEDIUM_SIZE}/${movie.backdrop_path}` :
    noimage;
};

export const getPosterUrlImage = (movie: Movie | MovieDetails) => {
  return (movie.poster_path) ?
    `${BASE_IMAGE_URL}${IMAGE_MEDIUM_SIZE}/${movie.poster_path}` :
    noimage;
};

export const getCompanyUrlImage = (company: ProductionCompany) => {
  return (company.logo_path) ?
    `${BASE_IMAGE_URL}${IMAGE_SMALL_SIZE}/${company.logo_path}` :
    noimage;
};