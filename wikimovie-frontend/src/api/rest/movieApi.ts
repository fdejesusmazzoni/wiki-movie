import { requestConfig, getApiURL } from '../helpers';
import { apiRoutes, apiMovieErrorMessages, apikey } from './constants';
import { mapMovieToModel } from './mappers';
import { MoviesPaginator, FilterMovie } from '../../model';

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

export const movieAPI = {
  getPopularMovies,
  getSearchMovies,
};