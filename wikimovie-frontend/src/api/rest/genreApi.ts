import { requestConfig, getApiURL } from '../helpers';
import { apiRoutes, apiGenreErrorMessages } from './constants';
import { mapReturnLoadGenresToModel } from './mappers';
import { Genre, ReturnLoadGenres } from '../model';
import { apikey } from './apikey';

const getGenres = (): Promise<Genre[]> => {
  const request: RequestInit = {
    ...requestConfig,
  };

  const apiUrl = getApiURL(apiRoutes.genres.get)
    .replace('{apikey}', apikey);

  return fetch(apiUrl, request)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(apiGenreErrorMessages.errorLoading);
    })
    .then((returnLoadGenres: ReturnLoadGenres) => mapReturnLoadGenresToModel(returnLoadGenres));
};

export const genreAPI = {
  getGenres,
};