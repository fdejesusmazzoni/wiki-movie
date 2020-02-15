import { requestConfig, getApiURL } from '../helpers';
import { apiRoutes, apiMovieErrorMessages, apikey } from './constants';
import { mapMovieToModel } from './mappers';
import { MoviesPaginator } from '../../model';

const getPopularMovies = (): Promise<MoviesPaginator> => {
  const request: RequestInit = {
    ...requestConfig,
  };

  const apiUrl = getApiURL(apiRoutes.movies.get)
    .replace('{apikey}', apikey);

  return fetch(apiUrl, request)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(apiMovieErrorMessages.errorLoading);
    })
    .then((movies: MoviesPaginator) => mapMovieToModel(movies));
};

export const movieAPI = {
  getPopularMovies,
};