import { BaseAction } from '../../common/actions/baseAction';
import { createDefaultMovies, Movie } from '../../model';

export const moviesReducer = (
  state = createDefaultMovies(),
  action: BaseAction
): Movie[] => {
  return [];
};