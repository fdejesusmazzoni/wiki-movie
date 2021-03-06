import { requestConfig, getApiURL } from '../helpers';
import { apiRoutes, apiMovieErrorMessages } from './constants';
import { mapMovieToModel, mapMovieDetialsToModel } from './mappers';
import { MoviesPaginator, FilterMovie, MovieDetails } from '../../model';
import { apikey } from './apikey';

const getPopularMovies = (page: number): Promise<MoviesPaginator> => {
  const request: RequestInit = {
    ...requestConfig,
  };

  const apiUrl = getApiURL(apiRoutes.movies.get)
    .replace('{apikey}', apikey)
    .replace('{page}', page.toString());

  return fetch(apiUrl, request)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(apiMovieErrorMessages.errorLoading);
    })
    .then((movies: MoviesPaginator) => mapMovieToModel(movies));
};

const getSearchMovies = (filter: FilterMovie): Promise<MoviesPaginator> => {
  const request: RequestInit = {
    ...requestConfig,
  };

  const apiUrl = getApiURL(apiRoutes.movies.search)
    .replace('{apikey}', apikey)
    .replace('{page}', filter.page.toString())
    .replace('{searchTitle}', filter.searchTitle.toString());

  return fetch(apiUrl, request)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(apiMovieErrorMessages.errorLoading);
    })
    .then((movies: MoviesPaginator) => mapMovieToModel(movies));
};

const getMovieDetails = (movieId: number): Promise<MovieDetails> => {
  const request: RequestInit = {
    ...requestConfig,
  };

  const apiUrl = getApiURL(apiRoutes.movies.details)
    .replace('{apikey}', apikey)
    .replace('{movieId}', movieId.toString());

  return fetch(apiUrl, request)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(apiMovieErrorMessages.errorDetailLoading);
    })
    .then((movieDetails: MovieDetails) => mapMovieDetialsToModel(movieDetails));
};

export const movieAPI = {
  getPopularMovies,
  getSearchMovies,
  getMovieDetails,
};