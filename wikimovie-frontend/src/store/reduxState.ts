import { 
  Genre, Movie, createDefaultGenres, createDefaultMovies,
 } from '../model';

export interface ReduxState {
  genres: Genre[];
  movies: Movie[];
}

export const createDefaultReduxState = (): ReduxState => ({
  genres: createDefaultGenres(),
  movies: createDefaultMovies(),
});