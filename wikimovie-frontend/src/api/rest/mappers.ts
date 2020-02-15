import * as api from '../model';
import * as model from '../../model';

export const mapReturnLoadGenresToModel = (returnLoadGenres: api.ReturnLoadGenres): model.Genre[] => ([
  ...returnLoadGenres.genres,
]);

export const mapMovieToModel = (movies: api.MoviesPaginator): model.MoviesPaginator => ({
  page: movies.page,
  results: [...movies.results],
  total_pages: movies.total_pages,
  total_results: movies.total_results,
});