import { ReduxState } from '../store/reduxState';
import { Genre } from '../model';

export const selectGenres = (state: ReduxState): Genre[] => state.genres;
