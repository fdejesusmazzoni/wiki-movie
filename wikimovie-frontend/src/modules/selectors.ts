import { ReduxState } from '../store/reduxState';
import { Genre, MoviesPaginator } from '../model';

export const selectGenres = (state: ReduxState): Genre[] => state.genres;

export const selectMovies = (state: ReduxState): MoviesPaginator => state.movies;