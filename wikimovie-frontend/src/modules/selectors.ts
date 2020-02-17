import { ReduxState } from '../store/reduxState';
import { Genre, MoviesPaginator, MovieDetails } from '../model';

export const selectGenres = (state: ReduxState): Genre[] => state.genres;

export const selectMovies = (state: ReduxState): MoviesPaginator => state.movies;

export const selectMovieDetails = (state: ReduxState): MovieDetails => state.movieDetails;