import { 
  Genre, MoviesPaginator, MovieDetails, 
  createDefaultGenres, createDefaultMoviesPaginator, createDefaultMovieDetials,
 } from '../model';

export interface ReduxState {
  genres: Genre[];
  movies: MoviesPaginator;
  movieDetails: MovieDetails;
}

export const createDefaultReduxState = (): ReduxState => ({
  genres: createDefaultGenres(),
  movies: createDefaultMoviesPaginator(),
  movieDetails: createDefaultMovieDetials(),
});