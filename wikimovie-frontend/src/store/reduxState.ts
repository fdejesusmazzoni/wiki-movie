import { 
  Genre, MoviesPaginator, createDefaultGenres, createDefaultMoviesPaginator,
 } from '../model';

export interface ReduxState {
  genres: Genre[];
  movies: MoviesPaginator;
}

export const createDefaultReduxState = (): ReduxState => ({
  genres: createDefaultGenres(),
  movies: createDefaultMoviesPaginator(),
});